import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { YunzaiSharedYelonModule } from '@yelon/bcs/yunzai-shared-yelon';
import { YunzaiSharedZorroModule } from '@yelon/bcs/yunzai-shared-zorro';
import { YunzaiConfigService } from '@yelon/util';

import { YunzaiContactComponent } from './yunzai-contact.component';

const COMPONENTS = [YunzaiContactComponent];

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    YunzaiSharedYelonModule,
    YunzaiSharedZorroModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [YunzaiConfigService]
})
export class YunzaiContactModule {}
