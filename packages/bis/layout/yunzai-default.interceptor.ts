import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
  HttpResponseBase
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, of, throwError, catchError, filter, mergeMap, switchMap, take, Observable } from 'rxjs';

import { YA_SERVICE_TOKEN, ITokenService, ALLOW_ANONYMOUS } from '@yelon/auth';
import { YUNZAI_I18N_TOKEN, _HttpClient } from '@yelon/theme';
import { WINDOW } from '@yelon/util';
import { YunzaiBusinessConfig, YunzaiConfigService } from '@yelon/util/config';
import { log } from '@yelon/util/other';
import { NzNotificationService } from 'ng-zorro-antd/notification';

import { mergeBisConfig } from './bis.config';

const CODEMESSAGE: { [key: number]: string } = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
};

@Injectable()
class YunzaiDefaultInterceptor implements HttpInterceptor {
  private jump = false;
  private refreshToking = false;
  private refreshToken$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  private get notification(): NzNotificationService {
    return this.injector.get(NzNotificationService);
  }

  private get tokenSrv(): ITokenService {
    return this.injector.get(YA_SERVICE_TOKEN);
  }

  private get http(): _HttpClient {
    return this.injector.get(_HttpClient);
  }

  private get config(): YunzaiBusinessConfig {
    return mergeBisConfig(this.injector.get(YunzaiConfigService));
  }

  private goTo(url: string): void {
    setTimeout(() => this.injector.get(Router).navigateByUrl(url));
  }

  constructor(private injector: Injector) {
    if (this.config.refreshTokenType === 'auth-refresh') {
      console.error("can't use auth-refresh, please change yz.default.interceptor to default.interceptor!");
    }
  }

  private checkStatus(ev: HttpResponseBase): void {
    if ((ev.status >= 200 && ev.status < 300) || ev.status === 401) {
      return;
    }

    if (ev instanceof HttpErrorResponse && (ev.error.message || ev.error.errorMessage)) {
      if (ev.error.errorMessage) {
        this.notification.error(`发生了一些错误 `, ev.error.errorMessage);
      } else {
        this.notification.error(`发生了一些错误 `, ev.error.message);
      }
      return;
    }

    if (ev instanceof HttpResponse && ev.body.errorMessage) {
      this.notification.error(`发生了一些错误 `, ev.body.errorMessage);
      return;
    }
    const errortext = CODEMESSAGE[ev.status] || ev.statusText;
    this.notification.error(`请求错误 ${ev.status}: ${ev.url}`, errortext);
  }

  private ToLogin(): void {
    this.notification.error(`未登录或登录状态已过期，5秒后将跳转到登录页面。`, ``);
    setTimeout(() => {
      localStorage.clear();
      this.injector.get(WINDOW).location.href = `${this.config.baseUrl}/cas-proxy/app/logout`;
    }, 5000);
  }

  private reAttachToken(req: HttpRequest<any>): HttpRequest<any> {
    const token = this.tokenSrv.get()?.access_token;
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  private refreshTokenRequest(): Observable<any> {
    const model = this.tokenSrv.get();
    const form = new FormData();
    form.set('refresh_token', model?.refresh_token!);
    form.set('grant_type', 'refresh_token');
    form.set('scope', 'webapp');
    log('yz.default.interceptor: use the refresh token to request a new token', model?.refresh_token);
    return this.http.post(`/auth/oauth/getOrCreateToken/webapp`, form);
  }

  private tryRefreshToken(ev: HttpResponseBase, req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    // 连刷新Token的请求都错了，那就是真错了
    if (['/auth/oauth/getOrCreateToken/webapp'].some(url => req.url.includes(url))) {
      this.ToLogin();
      return throwError(() => ev);
    }

    // 正在刷新token，所有其他请求排队
    if (this.refreshToking) {
      return this.refreshToken$.pipe(
        filter(v => !!v),
        take(1),
        switchMap(() => next.handle(this.reAttachToken(req)))
      );
    }

    //尝试调用刷新 Token
    this.refreshToking = true;
    this.refreshToken$.next(null);

    // 处理Token
    return this.refreshTokenRequest().pipe(
      switchMap(res => {
        log('yz.default.interceptor: refresh token accessed -> ', res);
        // 重新保存新 token
        this.tokenSrv.set(res);
        // 通知后续请求继续执行
        this.refreshToking = false;
        this.refreshToken$.next(res);
        // 重新发起请求
        return next.handle(this.reAttachToken(req));
      }),
      catchError(err => {
        this.refreshToking = false;
        this.ToLogin();
        return throwError(() => err);
      })
    );
  }

  private getAdditionalHeaders(headers?: HttpHeaders): { [name: string]: string } {
    const res: { [name: string]: string } = {};
    const lang = this.injector.get(YUNZAI_I18N_TOKEN).currentLang;
    if (!headers?.has('Accept-Language') && lang) {
      res['Accept-Language'] = lang;
    }
    return res;
  }

  private handleData(ev: HttpResponseBase, req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    this.checkStatus(ev);
    switch (ev.status) {
      case 200:
        return of(ev);
      case 401:
        log('http401: ', req.url);
        if (this.config.refreshTokenEnabled && this.config.refreshTokenType === 're-request') {
          const unAuthorizationReq = req.clone();
          unAuthorizationReq.headers.delete('Authorization');
          return this.tryRefreshToken(ev, unAuthorizationReq, next);
        }
        this.ToLogin();
        break;
      case 403:
      case 404:
      case 500:
        if (this.jump) {
          this.goTo(`/exception/${ev.status}`);
        }
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
    } else {
      return of(ev);
    }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.context.get(ALLOW_ANONYMOUS)) return next.handle(req);
    log('yz.default.interceptor.ts: ', 'request ', req);
    // 统一加前缀
    let url = req.url;
    if (!url.startsWith('https://') && !url.startsWith('http://')) {
      url = this.config.baseUrl + url;
    }
    if (url.includes('.json') && url.includes('assets')) {
      url = req.url;
    }
    // if (url.includes('i18n')) return next.handle(req);
    // 加入语言头
    const newReq = req.clone({ url, setHeaders: this.getAdditionalHeaders(req.headers) });
    return next.handle(newReq).pipe(
      mergeMap(ev => {
        // 允许统一对请求错误处理
        if (ev instanceof HttpResponseBase) {
          return this.handleData(ev, newReq, next);
        }
        // 若一切都正常，则后续操作
        return of(ev);
      }),
      catchError((err: HttpErrorResponse) => this.handleData(err, newReq, next))
    );
  }
}

export { YunzaiDefaultInterceptor as YzDefaultInterceptor, YunzaiDefaultInterceptor };
