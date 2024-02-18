import type { SFWidgetProvideConfig } from '@yelon/form';

import { AutoCompleteWidget } from './widget';

export * from './widget';
export * from './schema';
export * from './module';

export function withAutoCompleteWidget(): SFWidgetProvideConfig {
  return { KEY: AutoCompleteWidget.KEY, type: AutoCompleteWidget };
}
