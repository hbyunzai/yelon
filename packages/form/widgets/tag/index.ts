import type { SFWidgetProvideConfig } from '@yelon/form';

import { TagWidget } from './widget';

export * from './widget';
export * from './schema';
export * from './module';

export function withTagWidget(): SFWidgetProvideConfig {
  return { KEY: TagWidget.KEY, type: TagWidget };
}
