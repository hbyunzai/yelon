import { NgModule } from '@angular/core';

import { YunzaiHeaderClearStorageComponent } from './yunzai-clear-storage.component';
import { YunzaiHeaderFullScreenComponent } from './yunzai-fullscreen.component';

const COMPONENTS = [YunzaiHeaderClearStorageComponent, YunzaiHeaderFullScreenComponent];

@NgModule({
  imports: [...COMPONENTS],
  exports: COMPONENTS
})
export class YunzaiWidgetsModule {}
