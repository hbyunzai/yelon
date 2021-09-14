---
order: 4
title: 云在拦截器
type: Documents
---

- 1.初始化完毕后，需要搭配拦截器实现将`token`混入每个`request header`的功能
- 2.拦截器实现了对请求错误的统一处理
- 3.使用`YzStartupService`后必须配对使用`YzDefaultInterceptor`

## 如何使用

```ts
const INTERCEPTOR_PROVIDES = [
  { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: YzDefaultInterceptor, multi: true }
];
```

`app.module.ts`中拦截器统一配置于`INTERCEPTOR_PROVIDES`中，将`DefaultInterceptor`替换成`YzDefaultInterceptor`即可

## BaseInterceptor

`BaseInterceptor`为`SimpleInterceptor`的父类

```ts
class HttpAuthInterceptorHandler implements HttpHandler {
  constructor(private next: HttpHandler, private interceptor: HttpInterceptor) {}

  handle(req: HttpRequest<NzSafeAny>): Observable<HttpEvent<NzSafeAny>> {
    return this.interceptor.intercept(req, this.next);
  }
}

// 抽象class，继承抽象类必须实现其抽象function
@Injectable()
export abstract class BaseInterceptor implements HttpInterceptor {
  constructor(@Optional() protected injector: Injector) {}

  protected model: ITokenModel;

  // 是否认证过了
  abstract isAuth(options: YunzaiAuthConfig): boolean;

  // 设置请求
  abstract setReq(req: HttpRequest<NzSafeAny>, options: YunzaiAuthConfig): HttpRequest<NzSafeAny>;

  intercept(req: HttpRequest<NzSafeAny>, next: HttpHandler): Observable<HttpEvent<NzSafeAny>> {
    // 获取全局的auth配置  
    const options = mergeConfig(this.injector.get(YunzaiConfigService));
    // 忽略列表,不需要混入Token就可以请求的
    if (Array.isArray(options.ignores)) {
      for (const item of options.ignores) {
        if (item.test(req.url)) return next.handle(req);
      }
    }

    // 除了忽略列表,还提供了请求路径加入allow_anonymous_key参数的方式
    // url中含有allow_anonymous_key的,不需要混入Token
    const ignoreKey = options.allow_anonymous_key!;
    let ignored = false;
    let params = req.params;
    let url = req.url;
    if (req.params.has(ignoreKey)) {
      params = req.params.delete(ignoreKey);
      ignored = true;
    }
    const urlArr = req.url.split('?');
    if (urlArr.length > 1) {
      const queryStringParams = new HttpParams({ fromString: urlArr[1] });
      if (queryStringParams.has(ignoreKey)) {
        const queryString = queryStringParams.delete(ignoreKey).toString();
        url = queryString.length > 0 ? `${urlArr[0]}?${queryString}` : urlArr[0];
        ignored = true;
      }
    }
    if (ignored) {
      return next.handle(req.clone({ params, url }));
    }
    // 剩下的请求就为常规请求，需要做认证，添加Token
    if (this.isAuth(options)) {
      // 通过认证，进入子class 使用其提供的setReq function 设置请求
      req = this.setReq(req, options);
    } else {
      // 没有通过认证的,跳入login,是否跳页面在ToLogin内部含有判断
      ToLogin(options, this.injector);
      // 如果没有跳那么构建一个error response
      const err$ = new Observable((observer: Observer<HttpEvent<NzSafeAny>>) => {
        const res = new HttpErrorResponse({
          url: req.url,
          headers: req.headers,
          status: 401,
          statusText: `来自 @yelon/auth 的拦截，所请求URL未授权，若是登录API可加入 [url?_allow_anonymous=true] 来表示忽略校验，更多方法请参考： https://ng.yunzainfo.com/auth/getting-started#YunzaiAuthConfig\nThe interception from @yelon/auth, the requested URL is not authorized. If the login API can add [url?_allow_anonymous=true] to ignore the check, please refer to: https://ng.yunzainfo.com/auth/getting-started#YunzaiAuthConfig`
        });
        observer.error(res);
      });
      // 是否过一下其他的拦截器
      if (options.executeOtherInterceptors) {
        // 注入拦截器集合
        const interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
        // 找到本拦截器位置，然后提取没有调过的拦截器集合
        const lastInterceptors = interceptors.slice(interceptors.indexOf(this) + 1);
        if (lastInterceptors.length > 0) {
          // 后向前调用拦截器
          const chain = lastInterceptors.reduceRight(
            (_next, _interceptor) => new HttpAuthInterceptorHandler(_next, _interceptor),
            {
              handle: (_: HttpRequest<NzSafeAny>) => err$
            }
          );
          //  
          return chain.handle(req);
        }
      }
      return err$;
    }
    return next.handle(req);
  }
}
```



## SimpleInterceptor

`SimpleInterceptor`继承自`BaseInterceptor`实现了`setReq`,`isAuth`两个函数,是一个常规的`Token`处理拦截器,主要功能是混入`token`

```ts
@Injectable()
export class SimpleInterceptor extends BaseInterceptor {
    
  // 判断是否存在Token来确定是否通过认证了
  isAuth(_options: YunzaiAuthConfig): boolean {
    this.model = this.injector.get(YA_SERVICE_TOKEN).get() as SimpleTokenModel;
    return CheckSimple(this.model as SimpleTokenModel);
  }

  // 通过global的配置确定token混入到header/body/url三种地方,以及key是什么,value模版是什么
  setReq(req: HttpRequest<NzSafeAny>, options: YunzaiAuthConfig): HttpRequest<NzSafeAny> {
    const { token_send_template, token_send_key } = options;
    const token = token_send_template!.replace(/\$\{([\w]+)\}/g, (_: string, g) => this.model[g]);
    switch (options.token_send_place) {
      case 'header':
        const obj: NzSafeAny = {};
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
```

## YzDefaultInterceptor

```ts
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

/**
 * 默认HTTP拦截器，其注册细节见 `app.module.ts`
 */
@Injectable()
export class YzDefaultInterceptor implements HttpInterceptor {
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
    return mergeConfig(this.injector.get(YunzaiConfigService));
  }

  private goTo(url: string): void {
    setTimeout(() => this.injector.get(Router).navigateByUrl(url));
  }

  constructor(private injector: Injector) {
    if (this.config.refreshTokenType === 'auth-refresh') {
      console.error("can't use auth-refresh, please change yz.default.interceptor to default.interceptor!");
    }
  }

  // 错误提示
  private checkStatus(ev: HttpResponseBase): void {
    if ((ev.status >= 200 && ev.status < 300) || ev.status === 401) {
      return;
    }
    if (ev instanceof HttpResponse && ev.body.errorMessage) {
      this.notification.error(`发生了一些错误 `, ev.body.errorMessage);
      return;
    }
    const errortext = CODEMESSAGE[ev.status] || ev.statusText;
    this.notification.error(`请求错误 ${ev.status}: ${ev.url}`, errortext);
  }

  // 重新登录
  private ToLogin() {
    this.notification.error(`未登录或登录状态已过期，5秒后将跳转到登录页面。`, ``);
    setTimeout(() => {
      // 清空缓存
      localStorage.clear();
      // CAS注销
      this.injector.get(WINDOW).location.href = `${this.config.baseUrl}/cas-proxy/app/logout`;
    }, 5000);
  }

  // 重新在请求头里加入Token
  private reAttachToken(req: HttpRequest<any>): HttpRequest<any> {
    const token = this.tokenSrv.get()?.token;
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  private refreshTokenRequest(): Observable<any> {
    const model = this.tokenSrv.get();
    const form = new FormData();
    form.set('refresh_token', model?.refreshToken);
    log('yz.default.interceptor: use the refresh token to request a new token', model?.refreshToken);
    return this.http.post(`/auth/user/token/refresh?_allow_anonymous=true`, form);
  }

  private tryRefreshToken(ev: HttpResponseBase, req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    // 连刷新Token的请求都错了，那就是真错了
    if (['/auth/oauth/token'].some(url => req.url.includes(url))) {
      this.ToLogin();
      return throwError(ev);
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
        const { access_token, expires_in, refresh_token, scope, token_type } = res;
        this.tokenSrv.set({
          token: access_token,
          expired: expires_in,
          refreshToken: refresh_token,
          tokenType: token_type,
          scope
        });
        // 通知后续请求继续执行
        this.refreshToking = false;
        this.refreshToken$.next(res);
        // 重新发起请求
        return next.handle(this.reAttachToken(req));
      }),
      catchError(err => {
        this.refreshToking = false;
        this.ToLogin();
        return throwError(err);
      })
    );
  }

  // 设置语言头
  private getAdditionalHeaders(headers?: HttpHeaders): { [name: string]: string } {
    const res: { [name: string]: string } = {};
    const lang = this.injector.get(YUNZAI_I18N_TOKEN).currentLang;
    if (!headers?.has('Accept-Language') && lang) {
      res['Accept-Language'] = lang;
    }
    return res;
  }

  // 对不同的返回值结果进行处理
  private handleData(ev: HttpResponseBase, req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    this.checkStatus(ev);
    switch (ev.status) {
      case 200:
        return of(ev);
      case 401:
        // 401表示token无效
        if (this.config.refreshTokenEnabled && this.config.refreshTokenType === 're-request') {
          // 尝试使用refreshToken来刷新一个Token
          return this.tryRefreshToken(ev, req, next);
        }
        this.ToLogin();
        break;
      case 403:
      case 404:
      case 500:
        this.goTo(`/exception/${ev.status}`);
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
      return throwError(ev);
    } else {
      return of(ev);
    }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    log('yz.default.interceptor.ts: ', 'request ', req);
    // 统一加前缀
    let url = req.url;
    if (!url.startsWith('https://') && !url.startsWith('http://')) {
      url = this.config.baseUrl + url;
    }
    // 假如请求 assets中的json，那么路径需要更换一下
    if (url.includes('.json')) {
      url = req.url;
    }
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
```

