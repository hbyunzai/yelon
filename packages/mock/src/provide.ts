import { EnvironmentProviders, InjectionToken, makeEnvironmentProviders } from '@angular/core';

import { MockOptions } from './interface';

export const YELON_MOCK_CONFIG = new InjectionToken<MockOptions>('yunzai-mock-config');

export function provideMockConfig(config?: MockOptions): EnvironmentProviders {
  return makeEnvironmentProviders([{ provide: YELON_MOCK_CONFIG, useValue: config }]);
}
