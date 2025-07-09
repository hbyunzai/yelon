import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { YelonFormModule, WidgetRegistry } from '@yelon/form';
import { NzTransferModule } from 'ng-zorro-antd/transfer';

import { TransferWidget } from './widget';

export * from './widget';
export * from './schema';

@NgModule({
  imports: [FormsModule, YelonFormModule, NzTransferModule, TransferWidget]
})
export class TransferWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(TransferWidget.KEY, TransferWidget);
  }
}
