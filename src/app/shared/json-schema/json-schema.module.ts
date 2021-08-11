import { NgModule } from '@angular/core';

import { YelonFormModule, WidgetRegistry } from '@yelon/form';

import { TinymceWidget } from '../../../../packages/form/widgets-third/tinymce/tinymce.widget';
import { UeditorWidget } from '../../../../packages/form/widgets-third/ueditor/ueditor.widget';
import { SharedModule } from '../shared.module';

export const SCHEMA_THIRDS_COMPONENTS = [TinymceWidget, UeditorWidget];

@NgModule({
  declarations: SCHEMA_THIRDS_COMPONENTS,
  entryComponents: SCHEMA_THIRDS_COMPONENTS,
  imports: [SharedModule, YelonFormModule.forRoot()],
  exports: [...SCHEMA_THIRDS_COMPONENTS]
})
export class JsonSchemaModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
    widgetRegistry.register(UeditorWidget.KEY, UeditorWidget);
  }
}
