import { DOCUMENT } from '@angular/common';
import {
  Component,
  ContentChildren,
  ElementRef,
  Input,
  QueryList,
  Renderer2,
  TemplateRef,
  booleanAttribute,
  OnInit,
  inject
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
import { updateHostClass } from '@yelon/util/browser';
import { NzMessageService } from 'ng-zorro-antd/message';

import { LayoutDisplayService } from './layout-display.service';
import { LayoutDefaultHeaderItemComponent } from './layout-header-item.component';
import { LayoutDefaultService } from './layout.service';
import { LayoutDefaultOptions } from './types';

@Component({
  selector: 'layout-default',
  exportAs: 'layoutDefault',
  template: `
    @if (showFetching) {
      <div class="yunzai-default__progress-bar"></div>
    }
    @if (!opt.hideHeader && displayNav) {
      <layout-default-header [items]="headerItems" />
    }
    @if (!opt.hideAside && displayAside) {
      <div class="yunzai-default__aside" [style]="asideStyle">
        <div class="yunzai-default__aside-wrap">
          <div class="yunzai-default__aside-inner">
            <ng-container *ngTemplateOutlet="asideUser" />
            <ng-container *ngTemplateOutlet="nav" />
            @if (!nav) {
              <layout-default-nav />
            }
          </div>
          @if (opt.showSiderCollapse) {
            <div class="yunzai-default__aside-link">
              @if (asideBottom) {
                <ng-container *ngTemplateOutlet="asideBottom" />
              } @else {
                <div class="yunzai-default__aside-link-collapsed" (click)="toggleCollapsed()">
                  <nz-icon [nzType]="collapsedIcon" />
                </div>
              }
            </div>
          }
        </div>
      </div>
    }
    <section class="yunzai-default__content" [style]="contentStyle">
      <ng-container *ngTemplateOutlet="content" />
      <ng-content />
    </section>
  `,
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class LayoutDefaultComponent implements OnInit {
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
  @Input() asideBottom: TemplateRef<any> | null = null;
  @Input() nav: TemplateRef<void> | null = null;
  @Input() content: TemplateRef<void> | null = null;
  @Input() customError?: string | null;
  @Input({ transform: booleanAttribute }) fetchingStrictly = false;
  @Input({ transform: booleanAttribute }) fetching = false;
  displayNav = true;
  displayAside = true;

  private isFetching = false;

  get showFetching(): boolean {
    if (this.fetchingStrictly) return this.fetching;
    return this.isFetching;
  }

  get collapsed(): boolean {
    return this.settings.layout.collapsed;
  }

  get collapsedIcon(): string {
    return this.srv.collapsedIcon;
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

  toggleCollapsed(): void {
    this.srv.toggleCollapsed();
  }

  private readonly router = inject(Router);
  private readonly msgSrv = inject(NzMessageService);
  private readonly settings = inject(SettingsService);
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);
  private readonly doc = inject(DOCUMENT);
  private readonly srv = inject(LayoutDefaultService);
  private readonly layoutDisplayService = inject(LayoutDisplayService);

  constructor() {
    this.router.events
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
      const err = this.customError === null ? null : (this.customError ?? `Could not load ${ev.url} route`);
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
