import { Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
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
    '[class.theme-btn-rtl]': `dir() === 'rtl'`
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
  dir = inject(Directionality).valueSignal;
  private key = inject(YUNZAI_THEME_BTN_KEYS, { optional: true }) ?? 'site-theme';

  ngOnInit(): void {
    this.initTheme();
  }

  private initTheme(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    this.theme = localStorage.getItem(this.key) || 'default';
    this.updateChartTheme();
    this.onThemeChange({ key: 'default', text: 'theme.default', color: '#2163ff' });
  }

  private updateChartTheme(): void {
    this.configSrv.set('chart', { theme: this.theme === 'dark' ? 'dark' : '' });
  }

  onThemeChange(theme: any): void {
    if (!this.platform.isBrowser) {
      return;
    }
    this.theme = theme.key;
    this.themeChange.emit(theme.key);
    this.renderer.setAttribute(this.doc.body, 'data-theme', theme.key);
    const dom = this.doc.getElementById(this.key);
    if (dom) {
      dom.remove();
    }
    localStorage.removeItem(this.key);
    if (theme.key !== 'default') {
      const el = this.doc.createElement('link');
      el.type = 'text/css';
      el.rel = 'stylesheet';
      el.id = this.key;
      el.href = `${this.deployUrl}assets/style.${theme.key}.css`;

      localStorage.setItem(this.key, theme.key);
      this.doc.body.append(el);
    }

    document.documentElement.style.setProperty('--primary-color', theme.color);
    document.documentElement.style.setProperty('--fade10-primary-color', this.fadeColorRgba(theme.color, 0.1));
    document.documentElement.style.setProperty('--fade25-primary-color', this.fadeColorRgba(theme.color, 0.25));
    this.updateChartTheme();
  }

  /**
   * 十六进制颜色值减淡
   * @param value 颜色值
   * @param transparency 透明度<=1
   */
  fadeColorRgba(value: string, transparency: number) {
    // 16进制颜色值的正则
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    // 把颜色值变成小写
    let color = value.toLowerCase();
    if (reg.test(color)) {
      // 如果只有三位的值，需变成六位，如：#fff => #ffffff
      if (color.length === 4) {
        let colorNew = "#";
        for (let i = 1; i < 4; i += 1) {
          colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
        }
        color = colorNew;
      }
      // 处理六位的颜色值，转为RGB
      const colorChange = [];
      for (let i = 1; i < 7; i += 2) {
        colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
      }
      return "rgba(" + colorChange.join(",") + "," + transparency + ")";
    } else {
      return color;
    }
  }

  ngOnDestroy(): void {
    const el = this.doc.getElementById(this.key);
    if (el != null) {
      this.doc.body.removeChild(el);
    }
  }
}
