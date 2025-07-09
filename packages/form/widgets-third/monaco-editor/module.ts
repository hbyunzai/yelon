import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NuMonacoEditorModule } from '@ng-util/monaco-editor';

import { YelonFormModule, WidgetRegistry } from '@yelon/form';

import { MonacoEditorWidget } from './widget';

@NgModule({
  imports: [FormsModule, YelonFormModule, NuMonacoEditorModule, MonacoEditorWidget]
})
export class MonacoEditorWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(MonacoEditorWidget.KEY, MonacoEditorWidget);
  }
}
