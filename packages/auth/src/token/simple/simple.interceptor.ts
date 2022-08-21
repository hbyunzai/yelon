/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { YunzaiAuthConfig } from '@yelon/util/config';

import { BaseInterceptor } from '../base.interceptor';
import { CheckSimple } from '../helper';
import { YA_SERVICE_TOKEN } from '../interface';
import { SimpleTokenModel } from './simple.model';

/**
 * Simple 拦截器
 *
 * ```
 * // app.module.ts
 * { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true}
 * ```
 */
@Injectable()
export class SimpleInterceptor extends BaseInterceptor {
  isAuth(_options: YunzaiAuthConfig): boolean {
    this.model = this.injector.get(YA_SERVICE_TOKEN).get() as SimpleTokenModel;
    return CheckSimple(this.model as SimpleTokenModel);
  }

  setReq(req: HttpRequest<any>, options: YunzaiAuthConfig): HttpRequest<any> {
    const { token_send_template, token_send_key } = options;
    const token = token_send_template!.replace(/\$\{([\w]+)\}/g, (_: string, g) => this.model[g]);
    switch (options.token_send_place) {
      case 'header':
        const obj: any = {};
        obj[token_send_key!] = token;
        req = req.clone({
          setHeaders: obj
        });
        break;
      case 'body':
        const body = req.body || {};
        body[token_send_key!] = token;
        req = req.clone({
          body
        });
        break;
      case 'url':
        req = req.clone({
          params: req.params.append(token_send_key!, token)
        });
        break;
    }
    return req;
  }
}
