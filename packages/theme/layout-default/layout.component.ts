import { DOCUMENT } from '@angular/common';
import {
  Component,
  ContentChildren,
  ElementRef,
  Inject,
  Input,
  OnInit,
  QueryList,
  Renderer2,
  TemplateRef
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
  Event
} from '@angular/router';
import { filter } from 'rxjs';

import { SettingsService } from '@yelon/theme';
import { BooleanInput, InputBoolean } from '@yelon/util';
import { updateHostClass } from '@yelon/util/browser';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';

import { LayoutDisplayService } from './layout-display.service';
import { LayoutDefaultHeaderItemComponent } from './layout-header-item.component';
import { LayoutDefaultService } from './layout.service';
import { LayoutDefaultOptions } from './types';

@Component({
  selector: 'layout-default',
  exportAs: 'layoutDefault',
  template: `
    <div class="yunzai-default__progress-bar" *ngIf="showFetching"></div>
    <layout-default-header *ngIf="!opt.hideHeader && displayNav" [items]="headerItems" />
    <ng-container *ngIf="displayAside">
      <div *ngIf="!opt.hideAside" class="yunzai-default__aside" [ngStyle]="asideStyle">
        <div class="yunzai-default__aside-wrap">
          <div class="yunzai-default__aside-inner">
            <ng-container *ngTemplateOutlet="asideUser" />
            <ng-container *ngTemplateOutlet="nav" />
            <layout-default-nav *ngIf="!nav" />
          </div>
          <div *ngIf="opt.showSiderCollapse" class="yunzai-default__aside-link">
            <ng-container *ngIf="asideBottom === null; else asideBottom">
              <div class="yunzai-default__aside-link-collapsed" (click)="toggleCollapsed()">
                <span nz-icon [nzType]="collapsedIcon"></span>
              </div>
            </ng-container>
          </div>
        </div>
      </div>
    </ng-container>
    <section class="yunzai-default__content" [ngStyle]="contentStyle">
      <ng-container *ngTemplateOutlet="content" />
      <ng-content></ng-content>
    </section>
  `
})
export class LayoutDefaultComponent implements OnInit {
  static ngAcceptInputType_fetchingStrictly: BooleanInput;
  static ngAcceptInputType_fetching: BooleanInput;

  @ContentChildren(LayoutDefaultHeaderItemComponent, { descendants: false })
  headerItems!: QueryList<LayoutDefaultHeaderItemComponent>;

  get opt(): LayoutDefaultOptions {
    return this.srv.options;
  }

  @Input()
  set options(value: LayoutDefaultOptions | null | undefined) {
    this.srv.setOptions(value);
  }

  @Input() asideUser: TemplateRef<void> | null = null;
  @Input() asideBottom: TemplateRef<NzSafeAny> | null = null;
  @Input() nav: TemplateRef<void> | null = null;
  @Input() content: TemplateRef<void> | null = null;
  @Input() customError?: string | null;
  @Input() @InputBoolean() fetchingStrictly = false;
  @Input() @InputBoolean() fetching = false;
  displayNav = true;
  displayAside = true;

  private isFetching = false;

  get showFetching(): boolean {
    if (this.fetchingStrictly) return this.fetching;
    return this.isFetching;
  }

  get contentStyle(): any {
    return {
      'margin-top': !this.displayNav ? '0px' : '',
      'margin-left': !this.displayAside ? '0px' : ''
    };
  }

  get asideStyle(): any {
    return {
      'margin-top': !this.displayNav ? '0px' : ''
    };
  }

  get collapsed(): boolean {
    return this.settings.layout.collapsed;
  }

  get collapsedIcon(): string {
    return this.srv.collapsedIcon;
  }

  toggleCollapsed(): void {
    this.srv.toggleCollapsed();
  }

  constructor(
    router: Router,
    private msgSrv: NzMessageService,
    private settings: SettingsService,
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private doc: NzSafeAny,
    private srv: LayoutDefaultService,
    private layoutDisplayService: LayoutDisplayService
  ) {
    router.events
      .pipe(
        takeUntilDestroyed(),
        filter(() => !this.fetchingStrictly)
      )
      .subscribe(ev => this.processEv(ev));
    this.srv.options$.pipe(takeUntilDestroyed()).subscribe(() => this.setClass());
    this.settings.notify.pipe(takeUntilDestroyed()).subscribe(() => this.setClass());
  }

  ngOnInit(): void {
    this.layoutDisplayService.listen('nav', display => {
      this.displayNav = display;
    });
    this.layoutDisplayService.listen('aside', display => {
      this.displayAside = display;
    });
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
      [`yunzai-default__hide-aside`]: this.opt.hideAside,
      [`yunzai-default__hide-header`]: this.opt.hideHeader
    });

    doc.body.classList[layout.colorWeak ? 'add' : 'remove']('color-weak');
  }
}
