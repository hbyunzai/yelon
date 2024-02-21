import { EnvironmentProviders, importProvidersFrom, makeEnvironmentProviders } from '@angular/core';

import { BisModule } from './bis.module';

export function provideYunzaiBis(): EnvironmentProviders {
  const provides: EnvironmentProviders[] = [];
  provides.push(importProvidersFrom(BisModule));
  return makeEnvironmentProviders(provides);
}
