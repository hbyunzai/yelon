import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { YelonFormModule, WidgetRegistry } from '@yelon/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMentionModule } from 'ng-zorro-antd/mention';

import { MentionWidget } from './widget';

@NgModule({
  imports: [FormsModule, YelonFormModule, NzMentionModule, NzInputModule, CommonModule, MentionWidget]
})
export class MentionWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(MentionWidget.KEY, MentionWidget);
  }
}
