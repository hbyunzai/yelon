import { EnvironmentProviders, inject, makeEnvironmentProviders, provideEnvironmentInitializer } from '@angular/core';



import { STWidgetRegistry } from './st-widget';

export interface STWidgetProvideConfig {
  KEY: string;
  type: any;
}

/**
 * Just only using Standalone widgets
 */
export function provideSTWidgets(...widgets: STWidgetProvideConfig[]): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideEnvironmentInitializer(() => {
      const srv = inject(STWidgetRegistry);
      widgets.forEach(widget => srv.register(widget.KEY, widget.type));
    })
  ]);
}
