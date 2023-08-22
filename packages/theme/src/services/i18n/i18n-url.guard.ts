import { Inject, Injectable, Optional, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn } from '@angular/router';
import { Observable, of } from 'rxjs';

import { YunzaiConfigService } from '@yelon/util/config';

import { YunzaiI18NService, YUNZAI_I18N_TOKEN } from './i18n';

@Injectable({ providedIn: 'root' })
export class YunzaiI18NGuardService {
  constructor(
    @Optional()
    @Inject(YUNZAI_I18N_TOKEN)
    private i18nSrv: YunzaiI18NService,
    private cogSrv: YunzaiConfigService
  ) {}

  process(route: ActivatedRouteSnapshot): Observable<boolean> {
    const lang = route.params && route.params[this.cogSrv.get('themeI18n')?.paramNameOfUrlGuard ?? 'i18n'];
    if (lang != null) {
      this.i18nSrv.use(lang);
    }
    return of(true);
  }
}

/**
 * Simple 路由守卫, [ACL Document](https://ng.yunzainfo.com/auth/guard).
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
 * Simple 路由守卫, [ACL Document](https://ng.yunzainfo.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivateChild: [ yunzaiI18nCanActivateChild ]
 * }
 * ```
 */
export const yunzaiI18nCanActivateChild: CanActivateChildFn = route => inject(YunzaiI18NGuardService).process(route);
