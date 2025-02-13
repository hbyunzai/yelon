import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn } from '@angular/router';
import { Observable, of } from 'rxjs';

import { YunzaiConfigService } from '@yelon/util/config';

import { YUNZAI_I18N_TOKEN } from './i18n';

@Injectable({ providedIn: 'root' })
export class YunzaiI18NGuardService {
  private readonly i18nSrv = inject(YUNZAI_I18N_TOKEN, { optional: true });
  private readonly cogSrv = inject(YunzaiConfigService);

  process(route: ActivatedRouteSnapshot): Observable<boolean> {
    const lang = route.params && route.params[this.cogSrv.get('themeI18n')?.paramNameOfUrlGuard ?? 'i18n'];
    if (lang != null) {
      this.i18nSrv?.use(lang);
    }
    return of(true);
  }
}

/**
 * Internationalization guard, automatically recognizes the language in Url and triggers the `YUNZAI_I18N_TOKEN.use` method
 *
 * 国际化守卫，自动识别Url中的语言，并触发 `YUNZAI_I18N_TOKEN.use` 方法
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivate: [ yunzaiI18nCanActivate ]
 * }
 * ```
 */
export const yunzaiI18nCanActivate: CanActivateFn = childRoute => inject(YunzaiI18NGuardService).process(childRoute);

/**
 * Internationalization guard, automatically recognizes the language in Url and triggers the `YUNZAI_I18N_TOKEN.use` method
 *
 * 国际化守卫，自动识别Url中的语言，并触发 `YUNZAI_I18N_TOKEN.use` 方法
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivateChild: [ yunzaiI18nCanActivateChild ]
 * }
 * ```
 */
export const yunzaiI18nCanActivateChild: CanActivateChildFn = route => inject(YunzaiI18NGuardService).process(route);
