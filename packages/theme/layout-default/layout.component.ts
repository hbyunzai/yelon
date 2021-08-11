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
  Router
} from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';

import { SettingsService } from '@yelon/theme';
import { updateHostClass } from '@yelon/util/browser';

import { LayoutDefaultHeaderItemComponent } from './layout-header-item.component';
import { LayoutDefaultOptions } from './types';

@Component({
  selector: 'layout-default',
  exportAs: 'layoutDefault',
  template: `
    <div class="yunzai-default__progress-bar" *ngIf="isFetching"></div>
    <layout-default-header></layout-default-header>
    <div *ngIf="!options.hideAside" class="yunzai-default__aside">
      <div class="yunzai-default__aside-inner">
        <ng-container *ngTemplateOutlet="asideUser"></ng-container>
        <ng-container *ngTemplateOutlet="nav"></ng-container>
        <layout-default-nav *ngIf="!nav" class="d-block py-lg"></layout-default-nav>
      </div>
    </div>
    <section class="yunzai-default__content">
      <ng-container *ngTemplateOutlet="content"></ng-container>
      <ng-content></ng-content>
    </section>
  `
})
export class LayoutDefaultComponent implements OnInit, OnDestroy {
  @ContentChildren(LayoutDefaultHeaderItemComponent, { descendants: false })
  headerItems!: QueryList<LayoutDefaultHeaderItemComponent>;

  @Input() options: LayoutDefaultOptions;
  @Input() asideUser: TemplateRef<void>;
  @Input() nav: TemplateRef<void>;
  @Input() content: TemplateRef<void>;

  private destroy$ = new Subject<void>();
  isFetching = false;

  constructor(
    router: Router,
    msgSrv: NzMessageService,
    private settings: SettingsService,
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private doc: NzSafeAny
  ) {
    router.events.pipe(takeUntil(this.destroy$)).subscribe(evt => {
      if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
        this.isFetching = true;
      }
      if (evt instanceof NavigationError || evt instanceof NavigationCancel) {
        this.isFetching = false;
        if (evt instanceof NavigationError) {
          msgSrv.error(`Could not load ${evt.url} route`, { nzDuration: 1000 * 3 });
        }
        return;
      }
      if (!(evt instanceof NavigationEnd || evt instanceof RouteConfigLoadEnd)) {
        return;
      }
      if (this.isFetching) {
        setTimeout(() => {
          this.isFetching = false;
        }, 100);
      }
    });
  }

  private setClass(): void {
    const { el, doc, renderer, settings } = this;
    const layout = settings.layout;
    updateHostClass(el.nativeElement, renderer, {
      ['yunzai-default']: true,
      [`yunzai-default__fixed`]: layout.fixed,
      [`yunzai-default__collapsed`]: layout.collapsed,
      [`yunzai-default__hide-aside`]: this.options.hideAside
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
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
