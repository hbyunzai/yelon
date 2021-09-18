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

export function mergeStompConfig(srv: YunzaiConfigService): YunzaiStompConfig {
  return srv.merge('stomp', STOMP_DEFAULT_CONFIG)!;
}
