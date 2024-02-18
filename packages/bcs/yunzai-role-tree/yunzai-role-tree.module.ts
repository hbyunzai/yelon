import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { YelonFormModule } from '@yelon/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTreeModule } from 'ng-zorro-antd/tree';

import { YunzaiRoleTreeComponent } from './yunzai-role-tree.component';

const COMPONENTS = [YunzaiRoleTreeComponent];
@NgModule({
  imports: [
    CommonModule,
    NzSpinModule,
    YelonFormModule,
    NzIconModule,
    NzEmptyModule,
    NzTreeModule,
    NzCardModule,
    ...COMPONENTS
  ],
  exports: COMPONENTS
})
export class YunzaiRoleTreeModule {}
