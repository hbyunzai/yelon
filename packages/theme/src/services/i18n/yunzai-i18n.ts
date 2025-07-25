import { Platform } from '@angular/cdk/platform';
import { registerLocaleData } from '@angular/common';
import ngEn from '@angular/common/locales/en';
import { inject, Injectable, OnDestroy } from '@angular/core';
import { Observable, catchError, of, Subject, takeUntil } from 'rxjs';

import { enUS as dfEn } from 'date-fns/locale';
import { map } from 'rxjs/operators';

import { ITokenService, YA_SERVICE_TOKEN } from '@yelon/auth';
import { NzI18nService, en_US as zorroEnUS } from 'ng-zorro-antd/i18n';

import { YunzaiI18nBaseService } from './i18n';
import { YUNZAI_LANGS } from './lang';
import yelonEnUS from '../../locale/languages/en-US';
import { YelonLocaleService } from '../../locale/locale.service';
import { _HttpClient } from '../http/http.client';
import { SettingsService } from '../settings/settings.service';

declare const ngDevMode: boolean;

const DEFAULT = 'zh-CN';

export interface YunzaiI18NType {
  code: string;
  text: string;
  abbr: string;
  icon?: string;
}
@Injectable({ providedIn: 'root' })
export class YunzaiHttpI18NService extends YunzaiI18nBaseService implements OnDestroy {
  protected override _defaultLang = DEFAULT;
  private $destroy = new Subject();
  private http: _HttpClient = inject(_HttpClient);
  private settings: SettingsService = inject(SettingsService);
  private nzI18nService: NzI18nService = inject(NzI18nService);
  private yelonLocaleService: YelonLocaleService = inject(YelonLocaleService);
  private platform: Platform = inject(Platform);
  private tokenService: ITokenService = inject(YA_SERVICE_TOKEN);
  constructor() {
    super();
    if (this.tokenService.get()?.access_token) {
      const defaultLang = this.getDefaultLang();
      this.getLangs()
        .pipe(takeUntil(this.$destroy))
        .subscribe(langs => {
          this._defaultLang = langs.findIndex(w => w.code === defaultLang) === -1 ? DEFAULT : defaultLang;
        });
    }
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

  loadLangData(lang: string): Observable<any> {
    if (ngDevMode) {
      return this.http.get(`./assets/tmp/i18n/${lang}.json`);
    } else {
      return this.http
        .get(`/i18n/api/v2/language/${lang}`)
        .pipe(catchError(() => this.http.get(`./assets/tmp/i18n/${lang}.json`)));
    }
  }

  loadLocaleData(lang: string): Observable<any> {
    return this.http.get(`./assets/tmp/i18n/${lang}.json`);
  }

  use(lang: string, data: Record<string, unknown>): void {
    if (this._currentLang === lang) return;
    this._data = this.flatData(data, []);
    const item = YUNZAI_LANGS[lang];
    if (item) {
      registerLocaleData(item.ng);
      this.nzI18nService.setLocale(item.zorro);
      this.nzI18nService.setDateLocale(item.date);
      this.yelonLocaleService.setLocale(item.yelon);
      this._currentLang = lang;
      this._change$.next(lang);
    } else {
      registerLocaleData(ngEn);
      this.nzI18nService.setLocale(zorroEnUS);
      this.nzI18nService.setDateLocale(dfEn);
      this.yelonLocaleService.setLocale(yelonEnUS);
      this._currentLang = lang;
      this._change$.next(lang);
    }
  }

  getLangs(): Observable<YunzaiI18NType[]> {
    const langs = Object.keys(YUNZAI_LANGS).map(code => {
      const item = YUNZAI_LANGS[code];
      return { code, text: item.text, abbr: item.abbr, image: undefined };
    });
    if (ngDevMode) {
      return of(langs);
    } else {
      return this.http.get(`/i18n/api/v2/language`).pipe(
        map((response: any) => {
          return response.data;
        }),
        catchError(() => of(langs))
      );
    }
  }

  ngOnDestroy(): void {
    this.$destroy.complete();
  }
}
