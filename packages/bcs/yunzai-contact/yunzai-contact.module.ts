import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { YunzaiDeptTreeModule } from '@yelon/bcs/yunzai-dept-tree';
import { YunzaiDormitoryTreeModule } from '@yelon/bcs/yunzai-dormitory-tree';
import { YunzaiFriendGroupModule } from '@yelon/bcs/yunzai-friend-group';
import { YunzaiRoleTreeModule } from '@yelon/bcs/yunzai-role-tree';
import { YunzaiTableUserModule } from '@yelon/bcs/yunzai-table-user';
import { YunzaiThemeModule } from '@yelon/theme';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzRadioModule } from 'ng-zorro-antd/radio';

import { YunzaiContactComponent } from './yunzai-contact.component';

const COMPONENTS = [YunzaiContactComponent];

@NgModule({
  imports: [
    YunzaiThemeModule,
    YunzaiDeptTreeModule,
    YunzaiDormitoryTreeModule,
    YunzaiFriendGroupModule,
    YunzaiRoleTreeModule,
    YunzaiTableUserModule,
    CommonModule,
    NzCardModule,
    NzGridModule,
    NzRadioModule,
    FormsModule,
    ...COMPONENTS
  ],
  exports: COMPONENTS
})
export class YunzaiContactModule {}
