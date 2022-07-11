import { DOCUMENT } from '@angular/common';
import {
  Component,
  ContentChildren,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  Renderer2,
  TemplateRef
} from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
  Event
} from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { SettingsService } from '@yelon/theme';
import { updateHostClass } from '@yelon/util/browser';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';

import { LayoutDefaultHeaderItemComponent } from './layout-header-item.component';
import { LayoutService } from './layout.service';
import { LayoutDefaultOptions } from './types';

@Component({
  selector: 'layout-default',
  exportAs: 'layoutDefault',
  template: `
    <div class="yunzai-default__progress-bar" *ngIf="isFetching"></div>
    <layout-default-header *ngIf="showHeader" [options]="options" [items]="headerItems"></layout-default-header>
    <ng-container *ngIf="showSidebar">
      <div
        class="yunzai-default__aside"
        *ngIf="!options.hideAside"
        [ngStyle]="!showHeader ? { 'margin-top': '0px' } : {}"
      >
        <div class="yunzai-default__aside-inner">
          <ng-container *ngTemplateOutlet="asideUser"></ng-container>
          <ng-container *ngTemplateOutlet="nav"></ng-container>
          <layout-default-nav *ngIf="!nav" class="d-block py-lg"></layout-default-nav>
        </div>
      </div>
    </ng-container>
    <section
      class="yunzai-default__content"
      [ngStyle]="{ 'margin-top': !showHeader ? '0px' : '', 'margin-left': !showSidebar ? '0px' : '' }"
    >
      <ng-container *ngTemplateOutlet="content"></ng-container>
      <ng-content></ng-content>
    </section>
  `
})
export class LayoutDefaultComponent implements OnInit, OnDestroy {
  @ContentChildren(LayoutDefaultHeaderItemComponent, { descendants: false })
  headerItems!: QueryList<LayoutDefaultHeaderItemComponent>;

  showHeader: boolean = true;
  showSidebar: boolean = true;

  @Input() options!: LayoutDefaultOptions;
  @Input() asideUser: TemplateRef<void> | null = null;
  @Input() nav: TemplateRef<void> | null = null;
  @Input() content: TemplateRef<void> | null = null;
  @Input() customError?: string | null;

  private destroy$ = new Subject<void>();
  isFetching = false;

  constructor(
    router: Router,
    private layoutService: LayoutService,
    private msgSrv: NzMessageService,
    private settings: SettingsService,
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private doc: NzSafeAny
  ) {
    router.events.pipe(takeUntil(this.destroy$)).subscribe(ev => this.processEv(ev));
  }

  processEv(ev: Event): void {
    if (!this.isFetching && ev instanceof RouteConfigLoadStart) {
      this.isFetching = true;
    }
    if (ev instanceof NavigationError || ev instanceof NavigationCancel) {
      this.isFetching = false;
      const err = this.customError === null ? null : this.customError ?? `Could not load ${ev.url} route`;
      if (err && ev instanceof NavigationError) {
        this.msgSrv.error(err, { nzDuration: 1000 * 3 });
      }
      return;
    }
    if (!(ev instanceof NavigationEnd || ev instanceof RouteConfigLoadEnd)) {
      return;
    }
    if (this.isFetching) {
      setTimeout(() => {
        this.isFetching = false;
      }, 100);
    }
  }

  private setClass(): void {
    const { el, doc, renderer, settings } = this;
    const layout = settings.layout;
    updateHostClass(el.nativeElement, renderer, {
      ['yunzai-default']: true,
      [`yunzai-default__fixed`]: layout.fixed,
      [`yunzai-default__collapsed`]: layout.collapsed,
      [`yunzai-default__hide-aside`]: this.options!.hideAside
    });

    doc.body.classList[layout.colorWeak ? 'add' : 'remove']('color-weak');
  }

  ngOnInit(): void {
    this.options = {
      logoExpanded: `./assets/logo-full.svg`,
      logoCollapsed: `./assets/logo.svg`,
      logoLink: `/`,
      hideAside: false,
      ...this.options
    };
    const { settings, destroy$ } = this;
    settings.notify.pipe(takeUntil(destroy$)).subscribe(() => this.setClass());
    this.setClass();
    this.layoutService.header.subscribe(h => (this.showHeader = h));
    this.layoutService.sidebar.subscribe(s => (this.showSidebar = s));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
