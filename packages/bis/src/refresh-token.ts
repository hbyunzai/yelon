import { HttpClient, HttpHandlerFn, HttpRequest, HttpResponseBase } from '@angular/common/http';
import { APP_INITIALIZER, Injector, Provider } from '@angular/core';
import { BehaviorSubject, catchError, filter, Observable, switchMap, take, throwError } from 'rxjs';

import { YA_SERVICE_TOKEN } from '@yelon/auth';
import { log } from '@yelon/util';

import { toLogin } from './helper';

let refreshToking = false;
let refreshToken$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

export const tryRefreshToken = (injector: Injector, ev: HttpResponseBase, req: HttpRequest<any>, next: HttpHandlerFn): Observable<any> => {
  // 连刷新Token的请求都错了，那就是真错了
  if (['/auth/oauth/getOrCreateToken/webapp'].some(url => req.url.includes(url))) {
    toLogin(injector);
    return throwError(() => ev);
  }
  // 2、如果 `refreshToking` 为 `true` 表示已经在请求刷新 Token 中，后续所有请求转入等待状态，直至结果返回后再重新发起请求
  if (refreshToking) {
    return refreshToken$.pipe(
      filter(v => !!v),
      take(1),
      switchMap(() => next(reAttachToken(injector, req)))
    );
  }
  // 3、尝试调用刷新 Token
  refreshToking = true;
  refreshToken$.next(null);

  return refreshTokenRequest(injector).pipe(
    switchMap(res => {
      // 通知后续请求继续执行
      refreshToking = false;
      refreshToken$.next(res);
      // 重新保存新 token
      injector.get(YA_SERVICE_TOKEN).set(res);
      // 重新发起请求
      return next(reAttachToken(injector, req));
    }),
    catchError(err => {
      refreshToking = false;
      toLogin(injector);
      return throwError(() => err);
    })
  );
};

function reAttachToken(injector: Injector, req: HttpRequest<any>): HttpRequest<any> {
  const token = injector.get(YA_SERVICE_TOKEN).get()?.access_token;
  return req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
}

function refreshTokenRequest(injector: Injector): Observable<any> {
  const model = injector.get(YA_SERVICE_TOKEN).get();
  const form = new FormData();
  if (model?.refresh_token) {
    form.set('refresh_token', model.refresh_token);
  }
  form.set('grant_type', 'refresh_token');
  form.set('scope', 'webapp');
  return injector.get(HttpClient).post(`/auth/oauth/getOrCreateToken/webapp`, form);
}

function buildAuthRefresh(injector: Injector): void {
  const tokenSrv = injector.get(YA_SERVICE_TOKEN);
  tokenSrv.refresh
    .pipe(
      filter(() => !refreshToking),
      switchMap(res => {
        log(res);
        refreshToking = true;
        return refreshTokenRequest(injector);
      })
    )
    .subscribe({
      next: res => {
        res.expired = +new Date() + 1000 * 60 * 5;
        refreshToking = false;
        tokenSrv.set(res);
      },
      error: () => toLogin(injector)
    });
}

export function provideYunzaiBindAuthRefresh(): Provider[] {
  return [
    {
      provide: APP_INITIALIZER,
      useFactory: (injector: Injector) => () => buildAuthRefresh(injector),
      deps: [Injector],
      multi: true
    }
  ];
}
