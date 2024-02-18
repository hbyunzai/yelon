import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { YelonFormModule } from '@yelon/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTreeModule } from 'ng-zorro-antd/tree';

import { YunzaiDeptTreeComponent } from './yunzai-dept-tree.component';

const COMPONENTS = [YunzaiDeptTreeComponent];

@NgModule({
  imports: [
    CommonModule,
    NzIconModule,
    NzEmptyModule,
    NzSpinModule,
    NzTreeModule,
    NzCardModule,
    YelonFormModule,
    ...COMPONENTS
  ],
  exports: COMPONENTS
})
export class YunzaiDeptTreeModule {}
