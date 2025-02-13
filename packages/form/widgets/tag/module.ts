import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { YelonFormModule, WidgetRegistry } from '@yelon/form';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';

import { TagWidget } from './widget';

@NgModule({
  imports: [FormsModule, YelonFormModule, NzTagModule, NzIconModule, CommonModule, TagWidget]
})
export class TagWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(TagWidget.KEY, TagWidget);
  }
}
