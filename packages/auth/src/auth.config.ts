import type { YunzaiAuthConfig, YunzaiConfigService } from '@yelon/util/config';

export const AUTH_DEFAULT_CONFIG: YunzaiAuthConfig = {
  store_key: `_token`,
  token_invalid_redirect: true,
  token_exp_offset: 10,
  token_send_key: `token`,
  token_send_template: '${token}',
  token_send_place: 'header',
  login_url: '/login',
  refreshTime: 3000,
  refreshOffset: 6000
};

export function mergeConfig(srv: YunzaiConfigService): YunzaiAuthConfig {
  return srv.merge('auth', AUTH_DEFAULT_CONFIG)!;
}
