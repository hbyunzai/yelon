import { Inject, Injectable, Injector } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanMatch,
  Route,
  RouterStateSnapshot
} from '@angular/router';

import { YunzaiAuthConfig } from '@yelon/util/config';

import { SimpleTokenModel } from './simple.model';
import { CheckSimple, ToLogin } from '../helper';
import { YA_SERVICE_TOKEN, ITokenService } from '../interface';

/**
 * Simple 路由守卫, [ACL Document](https://ng.yunzainfo.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivate: [ SimpleGuard ]
 * },
 * {
 *   path: 'my',
 *   canActivateChild: [SimpleGuard],
 *   children: [
 *     { path: 'profile', component: MockComponent }
 *   ],
 * },
 * ```
 */
@Injectable({ providedIn: 'root' })
export class SimpleGuard implements CanActivate, CanActivateChild, CanMatch {
  private url?: string;

  private get cog(): YunzaiAuthConfig {
    return this.srv.options;
  }

  constructor(
    @Inject(YA_SERVICE_TOKEN) private srv: ITokenService,
    private injector: Injector
  ) {}

  private process(): boolean {
    const res = CheckSimple(this.srv.get() as SimpleTokenModel);
    if (!res) {
      ToLogin(this.cog, this.injector, this.url);
    }
    return res;
  }

  // lazy loading
  canMatch(route: Route): boolean {
    this.url = route.path;
    return this.process();
  }
  // all children route
  canActivateChild(_childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.url = state.url;
    return this.process();
  }
  // route
  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.url = state.url;
    return this.process();
  }
}
