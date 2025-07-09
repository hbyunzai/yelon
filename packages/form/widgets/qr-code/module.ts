import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { YelonFormModule, WidgetRegistry } from '@yelon/form';
import { NzQRCodeModule } from 'ng-zorro-antd/qr-code';

import { QrCodeWidget } from './widget';

@NgModule({
  imports: [FormsModule, YelonFormModule, NzQRCodeModule, QrCodeWidget]
})
export class QrCodeWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(QrCodeWidget.KEY, QrCodeWidget);
  }
}
