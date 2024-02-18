import type { SFWidgetProvideConfig } from '@yelon/form';

import { SegmentedWidget } from './widget';

export * from './widget';
export * from './schema';
export * from './module';

export function withSegmentedWidget(): SFWidgetProvideConfig {
  return { KEY: SegmentedWidget.KEY, type: SegmentedWidget };
}
