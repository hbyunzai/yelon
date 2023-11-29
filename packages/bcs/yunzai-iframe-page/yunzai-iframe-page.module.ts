import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {YunzaiIframePageComponent} from './yunzai-iframe-page.component';
import {YunzaiSharedZorroModule} from "@yelon/bcs/yunzai-shared-zorro";
import {YunzaiSharedYelonModule} from "@yelon/bcs/yunzai-shared-yelon";


@NgModule({
  declarations: [
    YunzaiIframePageComponent
  ],
  imports: [
    CommonModule,
    YunzaiSharedZorroModule,
    YunzaiSharedYelonModule
  ],
  exports: [
    YunzaiIframePageComponent
  ]
})
export class YunzaiIframePageModule {
}
