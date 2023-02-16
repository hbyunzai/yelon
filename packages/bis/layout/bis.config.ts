import { YunzaiBusinessConfig, YunzaiConfigService } from '@yelon/util';

export const BUSINESS_DEFAULT_CONFIG: YunzaiBusinessConfig = {
  baseUrl: '/backstage',
  systemCode: 'portal',
  loginForm: null,
  refreshTokenEnabled: true,
  refreshTokenType: 're-request'
};

export function mergeBisConfig(srv: YunzaiConfigService): YunzaiBusinessConfig {
  return srv.merge('bis', BUSINESS_DEFAULT_CONFIG)!;
}
