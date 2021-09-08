import { Injectable, Injector } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';

import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { ITokenModel, ITokenService, mergeConfig as mergeAuthConfig, YA_SERVICE_TOKEN } from '@yelon/auth';
import { CacheService } from '@yelon/cache';
import { _HttpClient } from '@yelon/theme';
import { WINDOW, YunzaiAuthConfig, YunzaiBusinessConfig } from '@yelon/util';
import { YunzaiConfigService } from '@yelon/util/config';
import { log } from '@yelon/util/other';

import { mergeConfig as mergeBisConfig } from '../bis.config';

@Injectable({ providedIn: 'root' })
export class YzAuthService {
  protected option: YunzaiAuthConfig;
  protected bis: YunzaiBusinessConfig;

  constructor(private injector: Injector) {
    this.option = mergeAuthConfig(this.csr);
    this.bis = mergeBisConfig(this.csr);
  }

  private get csr(): YunzaiConfigService {
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
    if (this.tokenService.get()?.token) {
      return of(this.tokenService.get()!);
    } else {
      if (this.bis.loginForm) {
        return this.fetchTokenByUP();
      } else {
        return this.fetchTokenByCas();
      }
    }
  }

  fetchTokenByUP(): Observable<ITokenModel> {
    log('yz.auth.service: ', 'fetchTokenByUP');
    return this.httpClient.post(`/auth/oauth/token?_allow_anonymous=true`, this.bis.loginForm).pipe(
      map((response: NzSafeAny) => {
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
        map((response: NzSafeAny) => {
          switch (response.errcode) {
            case 2000:
              const { access_token, expires_in, refresh_token, scope, token_type } = response.data;
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
    log('yz.auth.service: ', 'login white login form->', this.bis.loginForm);
    return this.askToken().pipe(
      mergeMap(token => {
        log('yz.auth.service: get token->', token);
        this.csr.set('auth', {
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
    const user = this.cacheService.get('_yz_user', { mode: 'none' });
    const header = this.cacheService.get('_yz_header', { mode: 'none' });
    const project = this.cacheService.get('_yz_project_info', { mode: 'none' });
    return forkJoin(of(user), of(header), of(project)).pipe(
      mergeMap(([u, h, p]) => {
        let list = [];
        // user cache
        if (!u) {
          log('yz.auth.service: ', 'fetch user cache');
          list.push(
            this.httpClient.get(`/auth/user`).pipe(
              map((user: NzSafeAny) => {
                this.cacheService.set('_yz_user', user.principal);
              })
            )
          );
        } else {
          log('yz.auth.service: ', 'user recache');
          list.push(of<NzSafeAny>(() => {}));
        }
        // header cache
        if (!h) {
          log('yz.auth.service: ', 'fetch header cache');
          list.push(
            this.httpClient.get(`/auth/allheader/v2`).pipe(
              map((header: NzSafeAny) => {
                this.cacheService.set('_yz_header', header.data);
              })
            )
          );
        } else {
          log('yz.auth.service: ', 'header recache');
          list.push(of<NzSafeAny>(() => {}));
        }
        // project cache
        if (!p) {
          log('yz.auth.service: ', 'fetch project cache');
          list.push(
            this.httpClient.get(`/app-manager/project/info`).pipe(
              map((info: NzSafeAny) => {
                this.cacheService.set('_yz_project_info', info.data);
              })
            )
          );
        } else {
          log('yz.auth.service: ', 'project recache');
          list.push(of<NzSafeAny>(() => {}));
        }
        return forkJoin(list);
      })
    );
  }
}
