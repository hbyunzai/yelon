import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { YelonFormModule, WidgetRegistry } from '@yelon/form';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

import { SegmentedWidget } from './widget';

@NgModule({
  imports: [FormsModule, YelonFormModule, NzSegmentedModule, SegmentedWidget]
})
export class SegmentedWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(SegmentedWidget.KEY, SegmentedWidget);
  }
}
