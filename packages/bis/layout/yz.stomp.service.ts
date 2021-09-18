import { Injectable, Injector } from '@angular/core';

import { RxStomp } from '@stomp/rx-stomp';

import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzNotificationService } from 'ng-zorro-antd/notification';

import { CacheService } from '@yelon/cache';
import { WINDOW, YunzaiBusinessConfig, YunzaiConfigService, YunzaiStompConfig } from '@yelon/util';

import { mergeBisConfig } from './bis.config';
import { mergeStompConfig } from './stomp.config';

export interface StompMessage {
  title?: string;
  content?: string;
  href?: string;
  type?: string;
}

export interface IconStompMessage extends StompMessage {
  icon?: string;
}

export interface UserStompMessage extends StompMessage {
  useruri?: string;
}

@Injectable({ providedIn: 'root' })
export class YzStompService {
  private readonly config: YunzaiStompConfig;
  private readonly bisConfig: YunzaiBusinessConfig;
  private readonly rxStomp: RxStomp;
  private readonly user: NzSafeAny;

  constructor(
    private csr: YunzaiConfigService,
    private cache: CacheService,
    private injector: Injector,
    private notification: NzNotificationService
  ) {
    if (!this.user) {
      this.user = this.cache.get('_yz_user', { mode: 'none' });
    }
    if (!this.config) {
      this.config = mergeStompConfig(this.csr, this.injector);
    }
    if (!this.bisConfig) {
      this.bisConfig = mergeBisConfig(csr);
    }
    if (!this.rxStomp) {
      this.rxStomp = new RxStomp();
    }
  }

  listen(): void {
    this.rxStomp.configure(this.config);
    this.rxStomp.watch(`/topic/layout_${this.user.username}`).subscribe(message => {
      this.createNotification(JSON.parse(message.body));
    });
    this.rxStomp.watch(`/topic/layout_xx_${this.user.username}`).subscribe((message: any) => {
      this.logoutNotification(JSON.parse(message.body));
    });
    this.rxStomp.activate();
  }

  createNotification(message: StompMessage): void {
    this.notification.create(message.type!, message.title!, `<a href=${message.href}>${message.content}</a>`);
  }

  logoutNotification(message: StompMessage): void {
    this.notification.create(message.type!, message.title!, `${message.content},剩余时间5秒`);
    setTimeout(() => {
      this.cache.clear();
      localStorage.clear();
      this.injector.get(WINDOW).location.href = `${this.bisConfig.baseUrl}/cas-proxy/app/logout`;
    }, 5000);
  }
}
