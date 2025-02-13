import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { YelonFormModule } from '@yelon/form';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTreeModule } from 'ng-zorro-antd/tree';

import { YunzaiRoleTreeComponent } from './yunzai-role-tree.component';
import { YunzaiRoleTreeService } from './yunzai-role-tree.service';

const COMPONENTS = [YunzaiRoleTreeComponent];

@NgModule({
  imports: [
    NzSpinModule,
    YelonFormModule,
    NzButtonModule,
    NzIconModule,
    NzEmptyModule,
    NzTreeModule,
    CommonModule,
    NzCardModule,
    ...COMPONENTS
  ],
  providers: [YunzaiRoleTreeService],
  exports: COMPONENTS
})
export class YunzaiRoleTreeModule {}
