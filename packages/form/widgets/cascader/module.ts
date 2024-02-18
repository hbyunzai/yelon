import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { YelonFormModule, WidgetRegistry } from '@yelon/form';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';

import { CascaderWidget } from './widget';

@NgModule({
  imports: [FormsModule, YelonFormModule, NzCascaderModule, CascaderWidget]
})
export class CascaderWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(CascaderWidget.KEY, CascaderWidget);
  }
}
