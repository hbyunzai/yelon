import { Inject, Injectable, Optional, Provider, SkipSelf } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import zhCN from './languages/zh-CN';
import { YELON_LOCALE } from './locale.tokens';
import { FullLocaleData, LocaleData } from './locale.types';

@Injectable()
export class YelonLocaleService {
  private _locale: FullLocaleData = zhCN;
  private change$ = new BehaviorSubject<FullLocaleData>(this._locale);

  constructor(@Inject(YELON_LOCALE) locale: FullLocaleData | null) {
    this.setLocale(locale || zhCN);
  }

  get change(): Observable<FullLocaleData> {
    return this.change$.asObservable();
  }

  setLocale(locale: FullLocaleData): void {
    if (this._locale && this._locale.abbr === locale.abbr) {
      return;
    }
    this._locale = locale;
    this.change$.next(locale);
  }

  get locale(): FullLocaleData {
    return this._locale;
  }

  getData(path: keyof FullLocaleData): LocaleData {
    return (this._locale[path] || {}) as LocaleData;
  }
}

export function YELON_LOCALE_SERVICE_PROVIDER_FACTORY(
  exist: YelonLocaleService,
  locale: FullLocaleData
): YelonLocaleService {
  return exist || new YelonLocaleService(locale);
}

export const YELON_LOCALE_SERVICE_PROVIDER: Provider = {
  provide: YelonLocaleService,
  useFactory: YELON_LOCALE_SERVICE_PROVIDER_FACTORY,
  deps: [[new Optional(), new SkipSelf(), YelonLocaleService], YELON_LOCALE]
};
