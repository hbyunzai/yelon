import { log, YunzaiConfigService, YunzaiSocketConfig } from '@yelon/util';

export const SOCKET_DEFAULT_CONFIG: YunzaiSocketConfig = {
  baseUrl: '/backstage',
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

export function mergeSocketConfig(srv: YunzaiConfigService): YunzaiSocketConfig {
  return srv.merge('socket', SOCKET_DEFAULT_CONFIG)!;
}
