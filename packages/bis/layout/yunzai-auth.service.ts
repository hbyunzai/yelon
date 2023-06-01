import { Injectable, Injector } from '@angular/core';
import { forkJoin, map, mergeAll, mergeMap, Observable, of } from 'rxjs';

import { ITokenModel, ITokenService, YA_SERVICE_TOKEN } from '@yelon/auth';
import { CacheService } from '@yelon/cache';
import { _HttpClient } from '@yelon/theme';
import { log, WINDOW, YunzaiBusinessConfig, YunzaiConfigService } from '@yelon/util';

import { mergeBisConfig } from './bis.config';

@Injectable({ providedIn: 'root' })
class YunzaiAuthService {
  private config: YunzaiBusinessConfig;

  constructor(private injector: Injector) {
    this.config = mergeBisConfig(this.configService);
  }

  private get configService(): YunzaiConfigService {
    return this.injector.get(YunzaiConfigService);
  }

  private get tokenService(): ITokenService {
    return this.injector.get(YA_SERVICE_TOKEN);
  }

  private get httpClient(): _HttpClient {
    return this.injector.get(_HttpClient);
  }

  private get cacheService(): CacheService {
    return this.injector.get(CacheService);
  }

  askToken(): Observable<ITokenModel> {
    log('yz.auth.service: ', 'askToken');
    if (this.config.loginForm) {
      return this.fetchTokenByUP();
    } else {
      return this.fetchTokenByCas();
    }
  }

  fetchTokenByUP(): Observable<ITokenModel> {
    log('yz.auth.service: ', 'fetchTokenByUP');
    return this.httpClient.post(`/auth/oauth/token?_allow_anonymous=true`, this.config.loginForm).pipe(
      map((response: any) => {
        const { access_token, expires_in, refresh_token, scope, token_type } = response;
        return {
          token: access_token,
          expired: expires_in,
          refreshToken: refresh_token,
          tokenType: token_type,
          scope
        };
      })
    );
  }

  fetchTokenByCas(): Observable<ITokenModel> {
    log('yz.auth.service: ', 'fetchTokenByCas');
    const uri = encodeURIComponent(this.injector.get(WINDOW).location.href);
    return this.httpClient
      .get(`/cas-proxy/app/validate_full?callback=${uri}&_allow_anonymous=true&timestamp=${new Date().getTime()}`)
      .pipe(
        map((response: any) => {
          switch (response.errcode) {
            case 2000:
              const { access_token, expires_in, refresh_token, scope, token_type } = response.data;
              // 如果token不一致，清除缓存
              const token = this.tokenService.get()?.token;
              if (token && access_token && token !== access_token) {
                this.cacheService.clear();
              }
              return {
                token: access_token,
                expired: expires_in,
                refreshToken: refresh_token,
                tokenType: token_type,
                scope
              } as ITokenModel;
            case 2001:
              this.injector.get(WINDOW).location.href = response.msg;
              throw Error("Cookie Error: Can't find Cas Cookie,So jump to login!");
            default:
              if (response.data) {
                console.error(response.data);
                throw Error(response.data);
              } else if (response.msg) {
                console.error(response.msg);
                throw Error(response.msg);
              } else {
                console.error('cas unknown error');
                throw Error('Unknown Error: Cas auth exception!');
              }
          }
        })
      );
  }

  login(): Observable<void> {
    log('yz.auth.service: ', 'login white login form->', this.config.loginForm);
    return this.askToken().pipe(
      mergeMap(token => {
        log('yz.auth.service: get token->', token);
        this.configService.set('auth', {
          token_send_key: 'Authorization',
          token_send_template: `${token.tokenType} \${token}`,
          token_send_place: 'header'
        });
        log('yz.auth.service: ', 'set token');
        this.tokenService.set(token);
        return this.cacheInit();
      }),
      mergeAll()
    );
  }

  cacheInit(): Observable<void[]> {
    log('yz.auth.service: ', 'cacheInit');
    const tenant = this.cacheService.get('_yz_tenant', { mode: 'none' });
    const user = this.cacheService.get('_yz_user', { mode: 'none' });
    const header = this.cacheService.get('_yz_header', { mode: 'none' });
    const project = this.cacheService.get('_yz_project_info', { mode: 'none' });
    return forkJoin(of(user), of(header), of(project)).pipe(
      mergeMap(([u, h, p]) => {
        let list = [];
        // user cache
        if (!u || !tenant) {
          log('yz.auth.service: ', 'fetch user cache');
          list.push(
            this.httpClient.get(`/auth/user`).pipe(
              map((user: any) => {
                this.cacheService.set('_yz_tenant', user.tenantId);
                this.cacheService.set('_yz_user', user.principal);
              })
            )
          );
        } else {
          log('yz.auth.service: ', 'user recache');
          list.push(of<any>(() => {}));
        }
        // header cache
        if (!h) {
          log('yz.auth.service: ', 'fetch header cache');
          list.push(
            this.httpClient.get(`/auth/allheader/v2`).pipe(
              map((header: any) => {
                this.cacheService.set('_yz_header', header.data);
              })
            )
          );
        } else {
          log('yz.auth.service: ', 'header recache');
          list.push(of<any>(() => {}));
        }
        // project cache
        if (!p) {
          log('yz.auth.service: ', 'fetch project cache');
          list.push(
            this.httpClient.get(`/app-manager/project/info`).pipe(
              map((info: any) => {
                this.cacheService.set('_yz_project_info', info.data);
              })
            )
          );
        } else {
          log('yz.auth.service: ', 'project recache');
          list.push(of<any>(() => {}));
        }
        return forkJoin(list);
      })
    );
  }
}

export { YunzaiAuthService as YzAuthService, YunzaiAuthService };
