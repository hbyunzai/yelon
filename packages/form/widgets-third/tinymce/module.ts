import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { YelonFormModule, WidgetRegistry } from '@yelon/form';
import { NgxTinymceModule } from 'ngx-tinymce';

import { TinymceWidget } from './widget';

@NgModule({
  imports: [FormsModule, YelonFormModule, NgxTinymceModule, TinymceWidget]
})
export class TinymceWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
  }
}
