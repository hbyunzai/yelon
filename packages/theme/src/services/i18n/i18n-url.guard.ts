import { Inject, Injectable, Optional } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

import { YunzaiConfigService } from '@yelon/util/config';

import { YunzaiI18NService, YUNZAI_I18N_TOKEN } from './i18n';

@Injectable({ providedIn: 'root' })
export class YunzaiI18NGuard implements CanActivate, CanActivateChild {
  constructor(
    @Optional()
    @Inject(YUNZAI_I18N_TOKEN)
    private i18nSrv: YunzaiI18NService,
    private cogSrv: YunzaiConfigService
  ) {}

  private resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    const lang = route.params && route.params[this.cogSrv.get('themeI18n')?.paramNameOfUrlGuard ?? 'i18n'];
    if (lang != null) {
      this.i18nSrv.use(lang);
    }
    return of(true);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    _: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.resolve(childRoute);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    _: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.resolve(route);
  }
}
