import { Injectable, Injector } from '@angular/core';
import { combineLatest, map, mergeMap, Observable, of } from 'rxjs';

import { ITokenModel, ITokenService, YA_SERVICE_TOKEN } from '@yelon/auth';
import { _HttpClient } from '@yelon/theme';
import {
  log,
  useLocalStorageHeader,
  useLocalStorageProjectInfo,
  useLocalStorageTenant,
  useLocalStorageUser,
  WINDOW,
  YunzaiBusinessConfig,
  YunzaiConfigService
} from '@yelon/util';

import { mergeBisConfig } from './bis.config';

@Injectable({ providedIn: 'root' })
export class YunzaiAuthService {
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
        return response;
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
              return response.data;
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
          token_send_template: `${token.token_type} \${access_token}`,
          token_send_place: 'header'
        });
        log('yz.auth.service: ', 'set token');
        this.tokenService.set(token);
        return of(null);
      }),
      mergeMap(() => this.cacheInit())
    );
  }

  cacheInit(): Observable<void> {
    log('yz.auth.service: ', 'cacheInit');
    const [setTenant] = useLocalStorageTenant();
    const [setUser] = useLocalStorageUser();
    const [setHeader] = useLocalStorageHeader();
    const [setProject] = useLocalStorageProjectInfo();
    return combineLatest([
      this.httpClient.get(`/auth/user`),
      this.httpClient.get(`/auth/allheader/v2`),
      this.httpClient.get(`/app-manager/project/info`)
    ]).pipe(
      map(([user, header, project]) => {
        log('yz.auth.service: ', 'set user');
        setUser(user.principal);
        log('yz.auth.service: ', 'set tenant');
        setTenant(user.tenantId);
        log('yz.auth.service: ', 'set header');
        setHeader(header.data);
        log('yz.auth.service: ', 'set project');
        setProject(project.data);
        return void 0;
      })
    );
  }
}
