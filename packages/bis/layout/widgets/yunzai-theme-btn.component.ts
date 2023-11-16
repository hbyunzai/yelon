import { Direction, Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  Inject,
  Optional
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { ThemeBtnType, YUNZAI_THEME_BTN_KEYS } from '@yelon/theme/theme-btn';
import { YunzaiConfigService } from '@yelon/util/config';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface YunzaiThemeBtnType extends ThemeBtnType {
  color?: string;
}

@Component({
  selector: 'yunzai-theme-btn',
  template: `
    <div
      data-event-id="_nav_theme"
      class="yunzai-default__nav-item"
      nz-dropdown
      [nzDropdownMenu]="iconMenu"
      nzTrigger="click"
      nzPlacement="bottomRight"
    >
      <svg nz-tooltip class="anticon" role="img" width="21" height="21" viewBox="0 0 21 21" fill="currentColor">
        <g fill-rule="evenodd">
          <g fill-rule="nonzero">
            <path
              d="M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z"
            />
          </g>
        </g>
      </svg>
    </div>
    <nz-dropdown-menu #iconMenu="nzDropdownMenu">
      <ul nz-menu>
        <li
          nz-menu-item
          data-event-id="_nav_theme"
          [attr.data-text]="theme.text | i18n"
          *ngFor="let theme of types"
          (click)="onThemeChange(theme.key)"
          [style]="{ color: theme.color }"
        >
          <i nz-icon nzType="bg-colors"></i>
          {{ theme.text | i18n }}
        </li>
      </ul>
      <!--      <div nz-menu class="wd-xl animated jello">-->
      <!--        <div nz-row [nzJustify]="'space-between'" [nzAlign]="'middle'" class="app-icons">-->
      <!--          <div nz-col [nzSpan]="4" *ngFor="let theme of types" (click)="onThemeChange(theme.key)">-->
      <!--            <i nz-icon nzType="bg-colors" class="text-white" [style]="{ backgroundColor: theme.color }"></i>-->
      <!--            <span [ngStyle]="{ color: theme.color }">{{ theme.text | i18n }}</span>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
    </nz-dropdown-menu>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YunzaiThemBtnComponent implements OnInit, OnDestroy {
  private theme = 'default';
  @Input() types: YunzaiThemeBtnType[] = [
    { key: 'default', text: 'theme.default', color: '#2163ff' },
    { key: 'compact', text: 'theme.compact', color: '#2163ff' },
    { key: 'dark', text: 'theme.dark', color: '#020202' },
    { key: 'yuhong', text: 'theme.yuhong', color: '#C04851' },
    { key: 'danjuhuang', text: 'theme.danjuhuang', color: '#FBA414' },
    { key: 'xinghuang', text: 'theme.xinghuang', color: '#F28E16' },
    { key: 'shilv', text: 'theme.shilv', color: '#57C3C2' },
    { key: 'zhulv', text: 'theme.zhulv', color: '#1BA784' },
    { key: 'youlan', text: 'theme.youlan', color: '#1781B5' },
    { key: 'dianqing', text: 'theme.dianqing', color: '#1661AB' },
    { key: 'shangengzi', text: 'theme.shangengzi', color: '#61649F' },
    { key: 'shuiniuhui', text: 'theme.shuiniuhui', color: '#2F2F35' }
  ];
  @Input() devTips = `When the dark.css file can't be found, you need to run it once: npm run theme`;
  @Input() deployUrl = '';
  dir: Direction = 'ltr';
  private $destroy = new Subject();

  constructor(
    private renderer: Renderer2,
    private configSrv: YunzaiConfigService,
    private platform: Platform,
    @Inject(DOCUMENT) private doc: NzSafeAny,
    @Optional() private directionality: Directionality,
    @Inject(YUNZAI_THEME_BTN_KEYS) private KEYS: string
  ) {}

  ngOnInit(): void {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.$destroy)).subscribe((direction: Direction) => {
      this.dir = direction;
    });
    this.initTheme();
  }

  private initTheme(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    this.theme = localStorage.getItem(this.KEYS) || 'default';
    this.updateChartTheme();
    this.onThemeChange(this.theme);
  }

  private updateChartTheme(): void {
    this.configSrv.set('chart', { theme: this.theme === 'dark' ? 'dark' : '' });
  }

  onThemeChange(theme: string): void {
    if (!this.platform.isBrowser) {
      return;
    }
    this.theme = theme;
    this.renderer.setAttribute(this.doc.body, 'data-theme', theme);
    const dom = this.doc.getElementById(this.KEYS);
    if (dom) {
      dom.remove();
    }
    localStorage.removeItem(this.KEYS);
    if (theme !== 'default') {
      const el = this.doc.createElement('link');
      el.type = 'text/css';
      el.rel = 'stylesheet';
      el.id = this.KEYS;
      el.href = `${this.deployUrl}assets/style.${theme}.css`;

      localStorage.setItem(this.KEYS, theme);
      this.doc.body.append(el);
    }
    this.updateChartTheme();
  }

  ngOnDestroy(): void {
    this.$destroy.complete();
    const el = this.doc.getElementById(this.KEYS);
    if (el != null) {
      this.doc.body.removeChild(el);
    }
  }
}
