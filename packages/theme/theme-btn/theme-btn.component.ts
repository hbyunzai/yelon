import { Direction, Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  EventEmitter,
  inject,
  InjectionToken,
  Input,
  isDevMode,
  OnDestroy,
  OnInit,
  Output,
  Renderer2
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { I18nPipe } from '@yelon/theme';
import { YunzaiConfigService } from '@yelon/util/config';
import { NzDropDownDirective, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuDirective, NzMenuItemComponent } from 'ng-zorro-antd/menu';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';

export interface ThemeBtnType {
  key: string;
  text: string;
  color: string;
}

export const YUNZAI_THEME_BTN_KEYS = new InjectionToken<string>('YUNZAI_THEME_BTN_KEYS');

@Component({
  selector: 'theme-btn',
  templateUrl: './theme-btn.component.html',
  host: {
    '[class.theme-btn]': `true`,
    '[class.theme-btn-rtl]': `dir === 'rtl'`
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NzDropDownDirective,
    NzDropdownMenuComponent,
    NzMenuDirective,
    NzMenuItemComponent,
    NzTooltipDirective,
    NzIconModule,
    I18nPipe
  ]
})
export class ThemeBtnComponent implements OnInit, OnDestroy {
  private readonly doc = inject(DOCUMENT);
  private readonly platform = inject(Platform);
  private readonly renderer = inject(Renderer2);
  private readonly configSrv = inject(YunzaiConfigService);
  private readonly directionality = inject(Directionality);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly destroy$ = inject(DestroyRef);

  private theme = 'default';
  isDev = isDevMode();
  @Input() types: ThemeBtnType[] = [
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
  @Output() readonly themeChange = new EventEmitter<string>();
  dir?: Direction = 'ltr';
  private key = inject(YUNZAI_THEME_BTN_KEYS, { optional: true }) ?? 'site-theme';

  ngOnInit(): void {
    this.dir = this.directionality.value;
    this.directionality.change.pipe(takeUntilDestroyed(this.destroy$)).subscribe((direction: Direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.initTheme();
  }

  private initTheme(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    this.theme = localStorage.getItem(this.key) || 'default';
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
    this.themeChange.emit(theme);
    this.renderer.setAttribute(this.doc.body, 'data-theme', theme);
    const dom = this.doc.getElementById(this.key);
    if (dom) {
      dom.remove();
    }
    localStorage.removeItem(this.key);
    if (theme !== 'default') {
      const el = this.doc.createElement('link');
      el.type = 'text/css';
      el.rel = 'stylesheet';
      el.id = this.key;
      el.href = `${this.deployUrl}assets/style.${theme}.css`;

      localStorage.setItem(this.key, theme);
      this.doc.body.append(el);
    }
    this.updateChartTheme();
  }

  ngOnDestroy(): void {
    const el = this.doc.getElementById(this.key);
    if (el != null) {
      this.doc.body.removeChild(el);
    }
  }
}
