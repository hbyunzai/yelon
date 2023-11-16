import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  Input,
  QueryList,
  TemplateRef
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { App, SettingsService } from '@yelon/theme';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { LayoutDefaultHeaderItemComponent } from './layout-header-item.component';
import { LayoutDefaultService } from './layout.service';
import { LayoutDefaultHeaderItemDirection, LayoutDefaultHeaderItemHidden, LayoutDefaultOptions } from './types';

interface LayoutDefaultHeaderItem {
  host: TemplateRef<NzSafeAny>;
  hidden?: LayoutDefaultHeaderItemHidden;
  direction?: LayoutDefaultHeaderItemDirection;
}

@Component({
  selector: 'layout-default-header',
  template: `
    <ng-template #render let-ls>
      <li *ngFor="let i of ls" [class.hidden-mobile]="i.hidden === 'mobile'" [class.hidden-pc]="i.hidden === 'pc'">
        <ng-container *ngTemplateOutlet="i.host" />
      </li>
    </ng-template>
    <div class="yunzai-default__header-logo" [style.width.px]="opt.logoFixWidth">
      <ng-container *ngIf="!opt.logo; else opt.logo!">
        <a data-event-id="_nav_logo" [routerLink]="opt.logoLink" class="yunzai-default__header-logo-link">
          <img class="yunzai-default__header-logo-expanded" [attr.src]="opt.logoExpanded" [attr.alt]="app.name" />
          <img class="yunzai-default__header-logo-collapsed" [attr.src]="opt.logoCollapsed" [attr.alt]="app.name" />
        </a>
      </ng-container>
    </div>
    <div class="yunzai-default__nav-wrap">
      <ul class="yunzai-default__nav">
        <li *ngIf="!opt.hideAside && opt.showHeaderCollapse">
          <div
            data-event-id="_nav_toggle"
            class="yunzai-default__nav-item yunzai-default__nav-item--collapse"
            (click)="toggleCollapsed()"
          >
            <span nz-icon [nzType]="collapsedIcon"></span>
          </div>
        </li>
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: left }"></ng-template>
      </ul>
      <div *ngIf="middle.length > 0" class="yunzai-default__nav yunzai-default__nav-middle">
        <ng-container *ngTemplateOutlet="middle[0].host" />
      </div>
      <ul class="yunzai-default__nav">
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: right }"></ng-template>
      </ul>
    </div>
  `,
  host: {
    '[class.yunzai-default__header]': `true`
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutDefaultHeaderComponent implements AfterViewInit {
  private destroy$ = inject(DestroyRef);

  @Input() items!: QueryList<LayoutDefaultHeaderItemComponent>;

  left: LayoutDefaultHeaderItem[] = [];
  middle: LayoutDefaultHeaderItem[] = [];
  right: LayoutDefaultHeaderItem[] = [];

  get opt(): LayoutDefaultOptions {
    return this.srv.options;
  }

  get app(): App {
    return this.settings.app;
  }

  get collapsed(): boolean {
    return this.settings.layout.collapsed;
  }

  get collapsedIcon(): string {
    return this.srv.collapsedIcon;
  }

  constructor(
    private srv: LayoutDefaultService,
    private settings: SettingsService,
    private cdr: ChangeDetectorRef
  ) {}

  private refresh(): void {
    const arr = this.items.toArray();
    this.left = arr.filter(i => i.direction === 'left');
    this.middle = arr.filter(i => i.direction === 'middle');
    this.right = arr.filter(i => i.direction === 'right');
    this.cdr.detectChanges();
  }

  ngAfterViewInit(): void {
    this.items.changes.pipe(takeUntilDestroyed(this.destroy$)).subscribe(() => this.refresh());
    this.srv.options$.pipe(takeUntilDestroyed(this.destroy$)).subscribe(() => this.cdr.detectChanges());
    this.refresh();
  }

  toggleCollapsed(): void {
    this.srv.toggleCollapsed();
  }
}
