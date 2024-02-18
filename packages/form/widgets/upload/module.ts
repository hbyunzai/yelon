import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { YelonFormModule, WidgetRegistry } from '@yelon/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzUploadModule } from 'ng-zorro-antd/upload';

import { UploadWidget } from './widget';

@NgModule({
  imports: [FormsModule, CommonModule, YelonFormModule, NzUploadModule, NzIconModule, NzButtonModule, UploadWidget]
})
export class UploadWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(UploadWidget.KEY, UploadWidget);
  }
}
