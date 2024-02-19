import { NgModule } from '@angular/core';

import { NzSpinModule } from 'ng-zorro-antd/spin';

import { YunzaiIframePageComponent } from './yunzai-iframe-page.component';

export const COMPONENTS = [YunzaiIframePageComponent];

@NgModule({
  imports: [NzSpinModule, ...COMPONENTS],
  exports: COMPONENTS
})
export class YunzaiIframePageModule {}
