import { DOCUMENT } from '@angular/common';
import { inject, Injectable, isDevMode, OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';

import { RxStomp } from '@stomp/rx-stomp';
import { IRxStompPublishParams } from '@stomp/rx-stomp/esm6/i-rx-stomp-publish-params';
import { IMessage, StompHeaders } from '@stomp/stompjs';

import { YunzaiConfigService, YunzaiSocketConfig, log, WINDOW, useLocalStorageUser, YunzaiUser } from '@yelon/util';

import { NotificationService } from './notification.service';
import { mergeSocketConfig, SOCKET_DEFAULT_CONFIG } from './socket.config';

@Injectable({ providedIn: 'root' })
export class StompService implements OnDestroy {
  config: YunzaiSocketConfig = SOCKET_DEFAULT_CONFIG;
  rxStomp: RxStomp;
  user?: YunzaiUser;
  destroy$ = new Subject<unknown>();

  private configService: YunzaiConfigService = inject(YunzaiConfigService);
  private notifyService: NotificationService = inject(NotificationService);
  private win: any = inject(WINDOW);
  private document: Document = inject(DOCUMENT);

  constructor() {
    const [, getUser] = useLocalStorageUser();
    if (!this.user) {
      this.user = getUser()!;
    }
    this.config = mergeSocketConfig(this.configService);
    this.rxStomp = new RxStomp();
    if (isDevMode()) {
      log('stomp.service: is dev mode');
      log('stomp.service: ', `config is ${JSON.stringify(this.config)}`);
      this.rxStomp.configure(this.config);
      return;
    }
    const { location } = this.document;
    const { protocol, host } = location;
    log('stomp.service: ', `protocol is ${protocol},host is ${host}`);
    if (protocol.includes('http') && !protocol.includes('https')) {
      this.config.brokerURL = `ws://${host}${this.config.brokerURL}`;
    }
    if (protocol.includes('https')) {
      this.config.brokerURL = `wss://${host}${this.config.brokerURL}`;
    }
    log('stomp.service: ', `config is ${this.config}`);
    this.rxStomp.configure(this.config);
  }

  ngOnDestroy(): void {
    this.unListen();
  }

  listen(): void {
    this.userChannel().subscribe((message: IMessage) => {
      const body = JSON.parse(message.body);
      this.notifyService.notifyWithHtml(body);
    });

    this.logoutChannel().subscribe((message: IMessage) => {
      const body = JSON.parse(message.body);
      this.notifyService.notify(body);
      setTimeout(() => {
        localStorage.clear();
        this.win.location.href = `${this.config?.baseUrl}/cas-proxy/app/logout?callback=${encodeURIComponent(this.win.location.href)}`;
      }, 5000);
    });
  }

  logoutChannel(): Observable<IMessage> {
    return this.rxStomp!.watch(`/topic/layout_xx_${this.user?.username}`).pipe(takeUntil(this.destroy$));
  }

  userChannel(): Observable<IMessage> {
    return this.rxStomp!.watch(`/topic/layout_${this.user?.username}`).pipe(takeUntil(this.destroy$));
  }

  unListen(): void {
    this.destroy$.complete();
    this.rxStomp!.deactivate().then();
  }

  publish(parameters: IRxStompPublishParams): void {
    this.rxStomp!.publish(parameters);
  }

  watch(destination: string, headers?: StompHeaders): Observable<IMessage> {
    return this.rxStomp!.watch(destination, headers);
  }
}
