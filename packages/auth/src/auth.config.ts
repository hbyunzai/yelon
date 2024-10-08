import type { YunzaiAuthConfig, YunzaiConfigService } from '@yelon/util/config';

export const AUTH_DEFAULT_CONFIG: YunzaiAuthConfig = {
  auto: true,
  store_key: `_yz_token`,
  token_invalid_redirect: true,
  token_exp_offset: 10,
  token_send_key: `Authorization`,
  token_send_template: 'Bearer ${access_token}',
  token_send_place: 'header',
  login_url: '/login',
  ignores: [/\/login/, /\/assets\//, /passport\//, /\/auth\/oauth\/getOrCreateToken\/webapp/, /\/auth\/oauth\/token/],
  allow_anonymous_key: `_allow_anonymous`,
  refreshTime: 3000,
  refreshOffset: 6000
};

export function mergeConfig(srv: YunzaiConfigService): YunzaiAuthConfig {
  return srv.merge('auth', AUTH_DEFAULT_CONFIG)!;
}
