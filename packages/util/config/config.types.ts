import { EnvironmentProviders, InjectionToken, makeEnvironmentProviders } from '@angular/core';

import {
  YunzaiCellConfig,
  YunzaiDateRangePickerConfig,
  YunzaiErrorCollectConfig,
  YunzaiExceptionType,
  YunzaiImageConfig,
  YunzaiLoadingConfig,
  YunzaiLodopConfig,
  YunzaiMediaConfig,
  YunzaiOnboardingConfig,
  YunzaiPageHeaderConfig,
  YunzaiPdfConfig,
  YunzaiQRConfig,
  YunzaiSEConfig,
  YunzaiSGConfig,
  YunzaiSTConfig,
  YunzaiSVConfig,
  YunzaiXlsxConfig,
  YunzaiZipConfig
} from './abc/index';
import { YunzaiACLConfig } from './acl/acl.type';
import { YunzaiAuthConfig } from './auth/auth.type';
import { YunzaiBusinessConfig } from './bis/bis.type';
import { YunzaiCacheConfig } from './cache/cache.type';
import { YunzaiChartConfig } from './chart/chart.type';
import { YunzaiMockConfig } from './mock/mock.type';
import { YunzaiSFConfig } from './sf/sf.type';
import { YunzaiSocketConfig } from './socket/socket.type';
import { YunzaiThemeHttpClientConfig, YunzaiThemeResponsiveConfig, YunzaiThemeI18nConfig } from './theme/index';
import { YunzaiThemePipeConfig } from './theme/pipe.type';
import { YunzaiUtilArrayConfig } from './util/array.type';
import { YunzaiUtilCurrencyConfig } from './util/currency.type';

export interface YunzaiConfig {
  bis?: YunzaiBusinessConfig;
  socket?: YunzaiSocketConfig;
  dataRange?: YunzaiDateRangePickerConfig;
  exception?: YunzaiExceptionType;
  errorCollect?: YunzaiErrorCollectConfig;
  image?: YunzaiImageConfig;
  loading?: YunzaiLoadingConfig;
  onboarding?: YunzaiOnboardingConfig;
  lodop?: YunzaiLodopConfig;
  pageHeader?: YunzaiPageHeaderConfig;
  qr?: YunzaiQRConfig;
  se?: YunzaiSEConfig;
  sg?: YunzaiSGConfig;
  sv?: YunzaiSVConfig;
  st?: YunzaiSTConfig;
  sf?: YunzaiSFConfig;
  cell?: YunzaiCellConfig;
  xlsx?: YunzaiXlsxConfig;
  zip?: YunzaiZipConfig;
  pdf?: YunzaiPdfConfig;
  media?: YunzaiMediaConfig;
  acl?: YunzaiACLConfig;
  auth?: YunzaiAuthConfig;
  cache?: YunzaiCacheConfig;
  chart?: YunzaiChartConfig;
  mock?: YunzaiMockConfig;
  utilArray?: YunzaiUtilArrayConfig;
  utilCurrency?: YunzaiUtilCurrencyConfig;
  themeHttp?: YunzaiThemeHttpClientConfig;
  themeResponsive?: YunzaiThemeResponsiveConfig;
  themeI18n?: YunzaiThemeI18nConfig;
  themePipe?: YunzaiThemePipeConfig;
}

export type YunzaiConfigKey = keyof YunzaiConfig;

export const YUNZAI_CONFIG = new InjectionToken<YunzaiConfig>('yunzai-config', {
  providedIn: 'root',
  factory: YUNZAI_CONFIG_FACTORY
});

export function YUNZAI_CONFIG_FACTORY(): YunzaiConfig {
  return {};
}

export function provideYunzaiConfig(config: YunzaiConfig): EnvironmentProviders {
  return makeEnvironmentProviders([{ provide: YUNZAI_CONFIG, useValue: config }]);
}
