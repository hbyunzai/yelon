import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { YunzaiIframePageComponent } from './yunzai-iframe-page.component';

const COMPONENTS = [YunzaiIframePageComponent];

@NgModule({
  imports: [CommonModule, ...COMPONENTS],
  exports: COMPONENTS
})
export class YunzaiIframePageModule {}
