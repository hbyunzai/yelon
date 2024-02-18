import type { SFWidgetProvideConfig } from '@yelon/form';

import { TransferWidget } from './widget';

export * from './widget';
export * from './schema';
export * from './module';

export function withTransferWidget(): SFWidgetProvideConfig {
  return { KEY: TransferWidget.KEY, type: TransferWidget };
}
