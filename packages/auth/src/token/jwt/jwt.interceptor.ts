/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';

import { YunzaiConfigService } from '@yelon/util/config';

import { JWTTokenModel } from './jwt.model';
import { mergeConfig } from '../../auth.config';
import { isAnonymous, throwErr } from '../base.interceptor';
import { CheckJwt } from '../helper';
import { YA_SERVICE_TOKEN } from '../interface';

function newReq(req: HttpRequest<unknown>, model: JWTTokenModel): HttpRequest<unknown> {
  return req.clone({
    setHeaders: {
      Authorization: `Bearer ${model.token}`
    }
  });
}

export const authJWTInterceptor: HttpInterceptorFn = (req, next) => {
  const options = mergeConfig(inject(YunzaiConfigService));

  if (isAnonymous(req, options)) return next(req);

  const model = inject(YA_SERVICE_TOKEN).get<JWTTokenModel>(JWTTokenModel);
  if (CheckJwt(model, options.token_exp_offset!)) return next(newReq(req, model));

  return throwErr(req, options);
};
