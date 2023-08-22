import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { YunzaiAuthConfig } from '@yelon/util/config';

import { JWTTokenModel } from './jwt.model';
import { BaseInterceptor } from '../base.interceptor';
import { CheckJwt } from '../helper';
import { YA_SERVICE_TOKEN } from '../interface';

/**
 * JWT 拦截器
 *
 * ```
 * // app.module.ts
 * { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true}
 * ```
 */
@Injectable()
export class JWTInterceptor extends BaseInterceptor {
  isAuth(options: YunzaiAuthConfig): boolean {
    this.model = this.injector.get(YA_SERVICE_TOKEN).get<JWTTokenModel>(JWTTokenModel);
    return CheckJwt(this.model as JWTTokenModel, options.token_exp_offset!);
  }

  setReq(req: HttpRequest<any>, _options: YunzaiAuthConfig): HttpRequest<any> {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.model.access_token}`
      }
    });
  }
}
