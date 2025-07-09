import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { YelonFormModule, WidgetRegistry } from '@yelon/form';
import { NzRateModule } from 'ng-zorro-antd/rate';

import { RateWidget } from './widget';

@NgModule({
  imports: [FormsModule, YelonFormModule, NzRateModule, CommonModule, RateWidget]
})
export class RateWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(RateWidget.KEY, RateWidget);
  }
}
