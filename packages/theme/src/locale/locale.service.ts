import { inject, Injectable, Optional, Provider, Signal, SkipSelf } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, map, Observable } from 'rxjs';

import zhCN from './languages/zh-CN';
import { YELON_LOCALE } from './locale.tokens';
import type { FullLocaleData } from './locale.types';

@Injectable()
export class YelonLocaleService {
  private defLocale = inject(YELON_LOCALE, { optional: true });
  private _locale: FullLocaleData = zhCN;
  private change$ = new BehaviorSubject<FullLocaleData>(this._locale);

  constructor() {
    this.setLocale(this.defLocale || zhCN);
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

  valueSignal<K extends keyof FullLocaleData>(key: K): Signal<FullLocaleData[K]> {
    const ret = toSignal(this.change.pipe(map(() => this.getData(key))), {
      initialValue: this._locale[key]
    });
    return ret;
  }

  get locale(): FullLocaleData {
    return this._locale;
  }

  getData<K extends keyof FullLocaleData>(key: K): FullLocaleData[K] {
    return (this._locale[key] || {}) as FullLocaleData[K];
  }
}

export function YELON_LOCALE_SERVICE_PROVIDER_FACTORY(exist: YelonLocaleService): YelonLocaleService {
  return exist || new YelonLocaleService();
}

export const YELON_LOCALE_SERVICE_PROVIDER: Provider = {
  provide: YelonLocaleService,
  useFactory: YELON_LOCALE_SERVICE_PROVIDER_FACTORY,
  deps: [[new Optional(), new SkipSelf(), YelonLocaleService]]
};
