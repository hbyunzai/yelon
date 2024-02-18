import type { SFWidgetProvideConfig } from '@yelon/form';

import { QrCodeWidget } from './widget';

export * from './widget';
export * from './schema';
export * from './module';

export function withQrCodeWidget(): SFWidgetProvideConfig {
  return { KEY: QrCodeWidget.KEY, type: QrCodeWidget };
}
