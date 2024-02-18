import type { SFWidgetProvideConfig } from '@yelon/form';

import { MentionWidget } from './widget';

export * from './widget';
export * from './schema';
export * from './module';

export function withMentionWidget(): SFWidgetProvideConfig {
  return { KEY: MentionWidget.KEY, type: MentionWidget };
}
