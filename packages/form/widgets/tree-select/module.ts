import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { YelonFormModule, WidgetRegistry } from '@yelon/form';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';

import { TreeSelectWidget } from './widget';

@NgModule({
  imports: [FormsModule, YelonFormModule, NzTreeSelectModule, TreeSelectWidget]
})
export class TreeSelectWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(TreeSelectWidget.KEY, TreeSelectWidget);
  }
}
