---
order: 4 
title: Yunzai Interceptor
type: Documents
---

- 1. After initialization, you need to use an interceptor to implement the function of mixing `token` into
each `request header`
- 2. The interceptor realizes unified handling of request errors -3. After using `YzStartupService`, you must pair
with `YzDefaultInterceptor`

## How to use

```ts
const INTERCEPTOR_PROVIDES = [
  {provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: YzDefaultInterceptor, multi: true}
];
```

The interceptor in `app.module.ts` is uniformly configured in `INTERCEPTOR_PROVIDES`, replace `DefaultInterceptor`
with `YzDefaultInterceptor`

## BaseInterceptor

`BaseInterceptor` is the parent class of `SimpleInterceptor`

```ts
class HttpAuthInterceptorHandler implements HttpHandler {
  constructor(private next: HttpHandler, private interceptor: HttpInterceptor) {
  }

  handle(req: HttpRequest<NzSafeAny>): Observable<HttpEvent<NzSafeAny>> {
    return this.interceptor.intercept(req, this.next);
  }
}

// Abstract class, inheriting abstract class must implement its abstract function
@Injectable()
export abstract class BaseInterceptor implements HttpInterceptor {
  constructor(@Optional() protected injector: Injector) {
  }

  protected model: ITokenModel;

  // Has it been authenticated?
  abstract isAuth(options: YunzaiAuthConfig): boolean;

  // set request
  abstract setReq(req: HttpRequest<NzSafeAny>, options: YunzaiAuthConfig): HttpRequest<NzSafeAny>;

  intercept(req: HttpRequest<NzSafeAny>, next: HttpHandler): Observable<HttpEvent<NzSafeAny>> {
    // Get the global auth configuration
    const options = mergeConfig(this.injector.get(YunzaiConfigService));
    // Ignore the list, you can request it without mixing in Token
    if (Array.isArray(options.ignores)) {
      for (const item of options.ignores) {
        if (item.test(req.url)) return next.handle(req);
      }
    }

    // In addition to the ignore list, it also provides a way to add the allow_anonymous_key parameter to the request path
    // If the url contains allow_anonymous_key, there is no need to mix in Token
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
      const queryStringParams = new HttpParams({fromString: urlArr[1]});
      if (queryStringParams.has(ignoreKey)) {
        const queryString = queryStringParams.delete(ignoreKey).toString();
        url = queryString.length > 0 ? `${urlArr[0]}?${queryString}` : urlArr[0];
        ignored = true;
      }
    }
    if (ignored) {
      return next.handle(req.clone({params, url}));
    }
    // The remaining requests are regular requests, need to be authenticated, add Token
    if (this.isAuth(options)) {
      // Pass the authentication, enter the subclass and use the setReq function provided by it to set the request
      req = this.setReq(req, options);
    } else {
      // If you have not passed the authentication, jump into the login, whether the jump page contains judgments inside ToLogin
      ToLogin(options, this.injector);
      // If there is no jump then construct an error response
      const err$ = new Observable((observer: Observer<HttpEvent<NzSafeAny>>) => {
        const res = new HttpErrorResponse({
          url: req.url,
          headers: req.headers,
          status: 401,
          statusText: `Interception from @yelon/auth, the requested URL is not authorized. If you log in to the API, you can add [url?_allow_anonymous=true] to indicate that the verification is ignored. For more methods, please refer to: https://ng.yunzainfo.com /auth/getting-started#YunzaiAuthConfig\nThe interception from @yelon/auth, the requested URL is not authorized. If the login API can add [url?_allow_anonymous=true] to ignore the check, please refer to: https:// ng.yunzainfo.com/auth/getting-started#YunzaiAuthConfig`
        });
        observer.error(res);
      });
      // Have you passed other interceptors?
      if (options.executeOtherInterceptors) {
        // Inject the interceptor collection
        const interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
        // Find the location of this interceptor, and then extract the set of interceptors that have not been adjusted
        const lastInterceptors = interceptors.slice(interceptors.indexOf(this) + 1);
        if (lastInterceptors.length > 0) {
          // Call the interceptor backward and forward
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

`SimpleInterceptor` inherits from `BaseInterceptor` and implements two functions of `setReq` and `isAuth`. It is a
conventional `Token` processing interceptor, and its main function is to mix in `token`

```ts
@Injectable()
export class SimpleInterceptor extends BaseInterceptor {

  // Determine whether there is a Token to determine whether the authentication is passed
  isAuth(_options: YunzaiAuthConfig): boolean {
    this.model = this.injector.get(YA_SERVICE_TOKEN).get() as SimpleTokenModel;
    return CheckSimple(this.model as SimpleTokenModel);
  }

  // Determine the three places where the token is mixed into the header/body/url through the global configuration, and what is the key and what is the value template
  setReq(req: HttpRequest<NzSafeAny>, options: YunzaiAuthConfig): HttpRequest<NzSafeAny> {
    const {token_send_template, token_send_key} = options;
    const token = token_send_template!.replace(/\$\{([\w]+)\}/g, (_: string, g) => this.model[g]);
    switch (options.token_send_place) {
      case'header':
        const obj: NzSafeAny = {};
        obj[token_send_key!] = token;
        req = req.clone({
          setHeaders: obj
        });
        break;
      case'body':
        const body = req.body || {};
        body[token_send_key!] = token;
        req = req.clone({
          body
        });
        break;
      case'url':
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
  200: 'The server successfully returned the requested data. ',
  201: 'Create or modify data successfully. ',
  202: 'A request has entered the background queue (asynchronous task). ',
  204: 'Delete data successfully. ',
  400: 'There was an error in the request sent, and the server did not create or modify data. ',
  401: 'The user does not have permission (the token, username, password are wrong). ',
  403: 'The user is authorized, but access is forbidden. ',
  404: 'The request is for a record that does not exist, and the server is not operating. ',
  406: 'The requested format is not available. ',
  410: 'The requested resource has been permanently deleted and will no longer be available. ',
  422: 'When creating an object, a validation error occurred. ',
  500: 'An error occurred in the server, please check the server. ',
  502: 'Gateway error. ',
  503: 'The service is unavailable, the server is temporarily overloaded or maintained. ',
  504: 'The gateway has timed out. '
};

/**
 * The default HTTP interceptor, please refer to `app.module.ts` for registration details
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

  // Error message
  private checkStatus(ev: HttpResponseBase): void {
    if ((ev.status >= 200 && ev.status < 300) || ev.status === 401) {
      return;
    }
    if (ev instanceof HttpResponse && ev.body.errorMessage) {
      this.notification.error(`Some errors have occurred`, ev.body.errorMessage);
      return;
    }
    const errortext = CODEMESSAGE[ev.status] || ev.statusText;
    this.notification.error(`Request error ${ev.status}: ${ev.url}`, errortext);
  }

  // re-register
  private ToLogin() {
    this.notification.error(`Not logged in or the login status has expired, it will jump to the login page after 5 seconds.`, ``);
    setTimeout(() => {
      // Empty the cache
      localStorage.clear();
      // CAS logout
      this.injector.get(WINDOW).location.href = `${this.config.baseUrl}/cas-proxy/app/logout`;
    }, 5000);
  }

  // Re-add Token in the request header
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
    // Even the request to refresh the token is wrong, that is really wrong
    if (['/auth/oauth/token'].some(url => req.url.includes(url))) {
      this.ToLogin();
      return throwError(ev);
    }

    // Token is being refreshed, all other requests are queued
    if (this.refreshToking) {
      return this.refreshToken$.pipe(
        filter(v => !!v),
        take(1),
        switchMap(() => next.handle(this.reAttachToken(req)))
      );
    }

    //Try to call refresh Token
    this.refreshToking = true;
    this.refreshToken$.next(null);

    // Processing Token
    return this.refreshTokenRequest().pipe(
      switchMap(res => {
        log('yz.default.interceptor: refresh token accessed ->', res);
        // Resave the new token
        const {access_token, expires_in, refresh_token, scope, token_type} = res;
        this.tokenSrv.set({
          token: access_token,
          expired: expires_in,
          refreshToken: refresh_token,
          tokenType: token_type,
          scope
        });
        // Notify subsequent requests to continue execution
        this.refreshToking = false;
        this.refreshToken$.next(res);
        // Re-initiate the request
        return next.handle(this.reAttachToken(req));
      }),
      catchError(err => {
        this.refreshToking = false;
        this.ToLogin();
        return throwError(err);
      })
    );
  }

  // Set the language header
  private getAdditionalHeaders(headers?: HttpHeaders): { [name: string]: string } {
    const res: { [name: string]: string } = {};
    const lang = this.injector.get(YUNZAI_I18N_TOKEN).currentLang;
    if (!headers?.has('Accept-Language') && lang) {
      res['Accept-Language'] = lang;
    }
    return res;
  }

  // Process different return value results
  private handleData(ev: HttpResponseBase, req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    this.checkStatus(ev);
    switch (ev.status) {
      case 200:
        return of(ev);
      case 401:
        //401 means the token is invalid
        if (this.config.refreshTokenEnabled && this.config.refreshTokenType === 're-request') {
          // Try to use refreshToken to refresh a Token
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
            'Unknown errors, mostly caused by the backend does not support cross-domain CORS or invalid configuration, please refer to https://ng.yunzainfo.com/docs/server to solve cross-domain issues',
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
    log('yz.default.interceptor.ts:', 'request', req);
    // unified prefix
    let url = req.url;
    if (!url.startsWith('https://') && !url.startsWith('http://')) {
      url = this.config.baseUrl + url;
    }
    // If you request json in assets, then the path needs to be changed
    if (url.includes('.json')) {
      url = req.url;
    }
    // add language header
    const newReq = req.clone({url, setHeaders: this.getAdditionalHeaders(req.headers)});
    return next.handle(newReq).pipe(
      mergeMap(ev => {
        // Allow unified handling of request errors
        if (ev instanceof HttpResponseBase) {
          return this.handleData(ev, newReq, next);
        }
        // If everything is normal, follow up operations
        return of(ev);
      }),
      catchError((err: HttpErrorResponse) => this.handleData(err, newReq, next))
    );
  }
}
```
