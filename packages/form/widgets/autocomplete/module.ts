import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { YelonFormModule, WidgetRegistry } from '@yelon/form';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';

import { AutoCompleteWidget } from './widget';

@NgModule({
  imports: [FormsModule, YelonFormModule, CommonModule, NzInputModule, NzAutocompleteModule, AutoCompleteWidget]
})
export class AutoCompleteWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(AutoCompleteWidget.KEY, AutoCompleteWidget);
  }
}
