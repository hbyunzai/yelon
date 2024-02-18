import type { SFWidgetProvideConfig } from '@yelon/form';

import { TreeSelectWidget } from './widget';

export * from './widget';
export * from './schema';
export * from './module';

export function withTreeSelectWidget(): SFWidgetProvideConfig {
  return { KEY: TreeSelectWidget.KEY, type: TreeSelectWidget };
}
