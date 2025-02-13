import { EnvironmentProviders, inject, makeEnvironmentProviders, provideEnvironmentInitializer } from '@angular/core';

import { CellService } from './cell.service';

export interface CellWidgetProvideConfig {
  KEY: string;
  type: any;
}

/**
 * Just only using Standalone widgets
 */
export function provideCellWidgets(...widgets: CellWidgetProvideConfig[]): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideEnvironmentInitializer(() => {
      const srv = inject(CellService);
      widgets.forEach(widget => srv.registerWidget(widget.KEY, widget.type));
    })
  ]);
}
