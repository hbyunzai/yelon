import { EnvironmentProviders, NgZone, Provider, inject, makeEnvironmentProviders, provideEnvironmentInitializer } from '@angular/core';

import { YunzaiConfigService } from '@yelon/util/config';

import { AjvSchemaValidatorFactory, SchemaValidatorFactory } from './validator.factory';
import { WidgetRegistry } from './widget.factory';
import { NzWidgetRegistry } from './widgets/nz-widget.registry';

export interface SFWidgetProvideConfig {
  KEY: string;
  type: any;
}

/**
 * Just only using Standalone widgets
 */
export function provideSFConfig(options?: { widgets?: SFWidgetProvideConfig[] }): EnvironmentProviders {
  const provides: Array<Provider | EnvironmentProviders> = [
    {
      provide: SchemaValidatorFactory,
      useClass: AjvSchemaValidatorFactory,
      deps: [YunzaiConfigService, NgZone]
    },
    { provide: WidgetRegistry, useClass: NzWidgetRegistry }
  ];
  if (options?.widgets) {
    provides.push(
      provideEnvironmentInitializer(() => {
        const srv = inject(WidgetRegistry);
        options?.widgets?.forEach(widget => srv.register(widget.KEY, widget.type));
      })
    );
  }
  return makeEnvironmentProviders(provides);
}
