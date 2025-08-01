import { inject, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, interval, Observable, Subject, Subscription, filter, map, share } from 'rxjs';

import { YunzaiAuthConfig, YunzaiConfigService } from '@yelon/util/config';

import { mergeConfig } from '../auth.config';
import { AuthReferrer, ITokenModel, ITokenService } from './interface';
import { YA_STORE_TOKEN } from '../store/interface';

export function YA_SERVICE_TOKEN_FACTORY(): ITokenService {
  return new TokenService();
}

/**
 * 维护Token信息服务，[在线文档](https://ng.yunzainfo.com/auth)
 */
@Injectable()
export class TokenService implements ITokenService, OnDestroy {
  private readonly store = inject(YA_STORE_TOKEN);
  private refresh$ = new Subject<ITokenModel>();
  private change$ = new BehaviorSubject<ITokenModel | null>(null);
  private interval$?: Subscription;
  private _referrer: AuthReferrer = {};
  private _options: YunzaiAuthConfig;
  private readonly cogSrv = inject(YunzaiConfigService);

  constructor() {
    this._options = mergeConfig(this.cogSrv);
  }

  get refresh(): Observable<ITokenModel> {
    this.builderRefresh();
    return this.refresh$.pipe(share());
  }

  get login_url(): string | undefined {
    return this._options.login_url;
  }

  get referrer(): AuthReferrer {
    return this._referrer;
  }

  get options(): YunzaiAuthConfig {
    return this._options;
  }

  set(data: ITokenModel): boolean {
    const res = this.store.set(this._options.store_key!, data);
    this.change$.next(data);
    return res;
  }

  get(type?: any): any;
  get<T extends ITokenModel>(type?: new () => T): T;
  get<T extends ITokenModel>(type?: new () => T): T {
    const data = this.store.get(this._options.store_key!);
    return type ? (Object.assign(new type(), data) as T) : (data as T);
  }

  clear(options: { onlyToken: boolean } = { onlyToken: false }): void {
    let data: ITokenModel | null = null;
    if (options.onlyToken === true) {
      data = this.get() as ITokenModel;
      data.access_token = ``;
      this.set(data);
    } else {
      this.store.remove(this._options.store_key!);
    }
    this.change$.next(data);
  }

  change(): Observable<ITokenModel | null> {
    return this.change$.pipe(share());
  }

  private builderRefresh(): void {
    const { refreshTime, refreshOffset } = this._options;
    this.cleanRefresh();
    this.interval$ = interval(refreshTime)
      .pipe(
        map(() => {
          const item = this.get() as ITokenModel;
          const expired = item.expires_in || item.exp || 0;
          if (expired <= 0) {
            return null;
          }

          const curTime = new Date().valueOf() + refreshOffset!;
          return expired <= curTime ? item : null;
        }),
        filter(v => v != null)
      )
      .subscribe(res => this.refresh$.next(res!));
  }

  private cleanRefresh(): void {
    if (this.interval$ && !this.interval$.closed) {
      this.interval$.unsubscribe();
    }
  }

  ngOnDestroy(): void {
    this.cleanRefresh();
  }
}
