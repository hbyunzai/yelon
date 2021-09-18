import { DOCUMENT } from '@angular/common';
import { Injector, isDevMode } from '@angular/core';

import { log, YunzaiConfigService, YunzaiStompConfig } from '@yelon/util';

export const STOMP_DEFAULT_CONFIG: YunzaiStompConfig = {
  connectHeaders: {
    login: 'guest',
    passcode: 'guest'
  },
  brokerURL: '/websocket/ws/',
  heartbeatIncoming: 1000 * 60,
  heartbeatOutgoing: 1000 * 60,
  reconnectDelay: 30000000,
  debug: msg => {
    log(msg);
  }
};

export function mergeStompConfig(srv: YunzaiConfigService, injector: Injector): YunzaiStompConfig {
  if (isDevMode()) {
    return srv.merge('stomp', STOMP_DEFAULT_CONFIG)!;
  }
  let stompConfig = STOMP_DEFAULT_CONFIG;
  const { location } = injector.get(DOCUMENT);
  const { protocol, host } = location;
  if (protocol === 'https') {
    stompConfig.brokerURL = `wss://${host}${stompConfig.brokerURL}`;
  }
  if (protocol === 'http') {
    stompConfig.brokerURL = `ws://${host}${stompConfig.brokerURL}`;
  }
  return srv.merge('stomp', stompConfig)!;
}
