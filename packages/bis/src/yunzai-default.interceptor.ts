import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponseBase
} from '@angular/common/http';
import { Injector, inject } from '@angular/core';
import { Observable, of, throwError, mergeMap, catchError } from 'rxjs';

import { IGNORE_BASE_URL } from '@yelon/theme';
import { YUNZAI_CONFIG } from '@yelon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { checkStatus, getAdditionalHeaders, goTo, ReThrowHttpError, toLogin } from './helper';
import { tryRefreshToken } from './refresh-token';

function handleData(
  injector: Injector,
  ev: HttpResponseBase,
  req: HttpRequest<NzSafeAny>,
  next: HttpHandlerFn
): Observable<NzSafeAny> {
  checkStatus(injector, ev);
  const config = injector.get(YUNZAI_CONFIG).bis!;
  switch (ev.status) {
    case 200:
      return of(ev);
    case 401:
      if (config.refreshTokenEnabled && config.refreshTokenType === 're-request') {
        const unAuthorizationReq = req.clone();
        unAuthorizationReq.headers.delete('Authorization');
        return tryRefreshToken(injector, ev, unAuthorizationReq, next);
      }
      toLogin(injector);
      break;
    case 403:
    case 404:
    case 500:
      goTo(injector, `/exception/${ev.status}?url=${req.urlWithParams}`);
      break;
    default:
      if (ev instanceof HttpErrorResponse) {
        console.warn(
          '未可知错误，大部分是由于后端不支持跨域CORS或无效配置引起，请参考 https://ng.yunzainfo.com/docs/server 解决跨域问题',
          ev
        );
      }
      break;
  }
  if (ev instanceof HttpErrorResponse) {
    return throwError(() => ev);
  } else if ((ev as unknown as ReThrowHttpError)._throw) {
    return throwError(() => (ev as unknown as ReThrowHttpError).body);
  } else {
    return of(ev);
  }
}

export const yunzaiDefaultInterceptor: HttpInterceptorFn = (req, next) => {
  const config = inject(YUNZAI_CONFIG).bis!;
  const { baseUrl } = config;
  let url = req.url;
  if (!req.context.get(IGNORE_BASE_URL) && !url.startsWith('https://') && !url.startsWith('http://')) {
    url = baseUrl + (baseUrl!.endsWith('/') && url.startsWith('/') ? url.substring(1) : url);
  }
  if (url.includes('.json') && url.includes('assets')) {
    url = req.url;
  }
  const newReq = req.clone({ url, setHeaders: getAdditionalHeaders(req.headers) });
  const injector = inject(Injector);
  return next(newReq).pipe(
    mergeMap(ev => {
      if (ev instanceof HttpResponseBase) {
        return handleData(injector, ev, newReq, next);
      }
      return of(ev);
    }),
    catchError((err: HttpErrorResponse) => handleData(injector, err, newReq, next))
  );
};
