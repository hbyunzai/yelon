import { Platform } from '@angular/cdk/platform';
import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { CacheService } from '@yelon/cache';
import { YelonLocaleService, SettingsService, _HttpClient, YunzaiI18nBaseService } from '@yelon/theme';
import { YunzaiBusinessConfig, YunzaiConfigService } from '@yelon/util/config';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzI18nService } from 'ng-zorro-antd/i18n';

import { mergeBisConfig } from './bis.config';
import { YUNZAI_LANGS } from './yunzai-lang';

declare const ngDevMode: boolean;

const DEFAULT = 'zh-CN';

@Injectable({ providedIn: 'root' })
class YunzaiI18NService extends YunzaiI18nBaseService {
  protected override _defaultLang = DEFAULT;
  private bis: YunzaiBusinessConfig;
  private _langs = Object.keys(YUNZAI_LANGS).map(code => {
    const item = YUNZAI_LANGS[code];
    return { code, text: item.text, abbr: item.abbr };
  });

  constructor(
    private http: _HttpClient,
    private settings: SettingsService,
    private nzI18nService: NzI18nService,
    private yelonLocaleService: YelonLocaleService,
    private platform: Platform,
    cogSrv: YunzaiConfigService,
    private cacheService: CacheService
  ) {
    super(cogSrv);
    const defaultLang = this.getDefaultLang();
    this._defaultLang = this._langs.findIndex(w => w.code === defaultLang) === -1 ? DEFAULT : defaultLang;
    this.bis = mergeBisConfig(cogSrv);
  }

  private getDefaultLang(): string {
    if (!this.platform.isBrowser) {
      return DEFAULT;
    }
    if (this.settings.layout.lang) {
      return this.settings.layout.lang;
    }
    let res = (navigator.languages ? navigator.languages[0] : null) || navigator.language;
    const arr = res.split('-');
    return arr.length <= 1 ? res : `${arr[0]}-${arr[1].toUpperCase()}`;
  }

  loadLangData(lang: string): Observable<NzSafeAny> {
    const key = `_yz_lang_${lang}`;
    if (this.cacheService.getNone(key)) {
      return of(this.cacheService.get(key));
    } else {
      if (ngDevMode) {
        return this.http.get(`assets/tmp/i18n/${lang}.json`);
      } else {
        return this.http
          .get(`${this.bis.baseUrl}/i18n/api/v2/${lang}?_allow_anonymous`)
          .pipe(catchError(() => this.http.get(`assets/tmp/i18n/${lang}.json`)));
      }
    }
  }

  use(lang: string, data: Record<string, unknown>): void {
    if (this._currentLang === lang) return;

    const key = `_yz_lang_${lang}`;
    this.cacheService.set(key, data);

    this._data = this.flatData(data, []);

    const item = YUNZAI_LANGS[lang];
    registerLocaleData(item.ng);
    this.nzI18nService.setLocale(item.zorro);
    this.nzI18nService.setDateLocale(item.date);
    this.yelonLocaleService.setLocale(item.yelon);
    this._currentLang = lang;

    this._change$.next(lang);
  }

  getLangs(): Array<{ code: string; text: string; abbr: string }> {
    return this._langs;
  }
}

export { YunzaiI18NService as YzI18NService, YunzaiI18NService };
