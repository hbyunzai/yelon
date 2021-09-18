import { DOCUMENT } from '@angular/common';
import { Injectable, Injector } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { RxStomp } from '@stomp/rx-stomp';
import { IRxStompPublishParams } from '@stomp/rx-stomp/esm6/i-rx-stomp-publish-params';
import { IMessage, StompHeaders } from '@stomp/stompjs';

import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzNotificationService } from 'ng-zorro-antd/notification';

import { CacheService } from '@yelon/cache';
import { log, WINDOW, YunzaiBusinessConfig, YunzaiConfigService, YunzaiStompConfig } from '@yelon/util';

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
  config: YunzaiStompConfig;
  bisConfig: YunzaiBusinessConfig;
  rxStomp: RxStomp;
  user: NzSafeAny;
  subs: Subscription[] = [];

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
      this.config = mergeStompConfig(this.csr);
    }
    if (!this.bisConfig) {
      this.bisConfig = mergeBisConfig(csr);
    }
    if (!this.rxStomp) {
      this.rxStomp = new RxStomp();
      const { location } = this.injector.get(DOCUMENT);
      const { protocol, host } = location;
      console.log(this);
      log('yz.stomp.service: ', `protocol is ${protocol},host is ${host}`);
      if (protocol.includes('https')) {
        this.config.brokerURL = `wss://${host}${this.config.brokerURL}`;
      }
      if (protocol.includes('http')) {
        this.config.brokerURL = `ws://${host}${this.config.brokerURL}`;
      }
      log('yz.stomp.service: ', `config is ${this.config}`);
      this.rxStomp.configure(this.config);
    }
  }

  listen(): void {
    this.subs.push(
      this.rxStomp.watch(`/topic/layout_${this.user.username}`).subscribe(message => {
        this.createNotification(JSON.parse(message.body));
      })
    );
    this.subs.push(
      this.rxStomp.watch(`/topic/layout_xx_${this.user.username}`).subscribe((message: any) => {
        this.logoutNotification(JSON.parse(message.body));
      })
    );
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

  unListen(): void {
    this.subs.forEach(s => s.unsubscribe());
    this.rxStomp.deactivate().then();
  }

  publish(parameters: IRxStompPublishParams): void {
    this.rxStomp.publish(parameters);
  }

  watch(destination: string, headers?: StompHeaders): Observable<IMessage> {
    return this.rxStomp.watch(destination, headers);
  }
}
