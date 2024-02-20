import { NgModule } from '@angular/core';

import { YunzaiLayoutModule } from '@yelon/bis/layout';
import { YunzaiWidgetsModule } from '@yelon/bis/yunzai-widgets';
@NgModule({
  imports: [YunzaiLayoutModule, YunzaiWidgetsModule],
  exports: [YunzaiLayoutModule, YunzaiWidgetsModule]
})
export class BisModule {}
