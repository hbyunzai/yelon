import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { YunzaiGradeService } from '@yelon/bcs/yunzai-grade';
import { YelonFormModule } from '@yelon/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTreeModule } from 'ng-zorro-antd/tree';

import { YunzaiDeptTreeComponent } from './yunzai-dept-tree.component';
import { YunzaiDeptTreeService } from './yunzai-dept-tree.service';

const COMPONENTS = [YunzaiDeptTreeComponent];
@NgModule({
  imports: [
    NzSpinModule,
    NzCardModule,
    CommonModule,
    YelonFormModule,
    NzIconModule,
    NzEmptyModule,
    NzTreeModule,
    ...COMPONENTS
  ],
  providers: [YunzaiDeptTreeService, YunzaiGradeService],
  exports: COMPONENTS
})
export class YunzaiDeptTreeModule {}
