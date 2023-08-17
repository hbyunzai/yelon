import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { YunzaiSharedYelonModule } from '@yelon/bcs/yunzai-shared-yelon';
import { YunzaiSharedZorroModule } from '@yelon/bcs/yunzai-shared-zorro';

import { YunzaiDeptTreeComponent } from './yunzai-dept-tree.component';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    YunzaiSharedZorroModule,
    YunzaiSharedYelonModule
  ],
  declarations: [YunzaiDeptTreeComponent],
  exports: [YunzaiDeptTreeComponent]
})
export class YunzaiDeptTreeModule {}
