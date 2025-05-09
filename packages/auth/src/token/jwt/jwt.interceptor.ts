import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';

import { YunzaiConfigService } from '@yelon/util/config';

import { mergeConfig } from '../../auth.config';
import { isAnonymous, throwErr } from '../base.interceptor';
import { CheckJwt } from '../helper';
import { YA_SERVICE_TOKEN } from '../interface';
import { JWTTokenModel } from './jwt.model';

function newReq(req: HttpRequest<unknown>, model: JWTTokenModel): HttpRequest<unknown> {
  return req.clone({
    setHeaders: {
      Authorization: `Bearer ${model.access_token}`
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
