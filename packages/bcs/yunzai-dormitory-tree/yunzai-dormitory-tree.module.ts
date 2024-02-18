import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { YelonFormModule } from '@yelon/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTreeModule } from 'ng-zorro-antd/tree';

import { YunzaiDormitoryTreeComponent } from './yunzai-dormitory-tree.component';

const COMPONENTS = [YunzaiDormitoryTreeComponent];

@NgModule({
  imports: [
    CommonModule,
    YelonFormModule,
    NzIconModule,
    NzEmptyModule,
    NzTreeModule,
    NzSpinModule,
    NzCardModule,
    ...COMPONENTS
  ],
  exports: COMPONENTS
})
export class YunzaiDormitoryTreeModule {}
