import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { YunzaiDeptTreeModule } from '@yelon/bcs/yunzai-dept-tree';
import { YunzaiDormitoryTreeModule } from '@yelon/bcs/yunzai-dormitory-tree';
import { YunzaiFriendGroupModule } from '@yelon/bcs/yunzai-friend-group';
import { YunzaiRoleTreeModule } from '@yelon/bcs/yunzai-role-tree';
import { YunzaiSharedYelonModule } from '@yelon/bcs/yunzai-shared-yelon';
import { YunzaiSharedZorroModule } from '@yelon/bcs/yunzai-shared-zorro';
import { YunzaiTableUserModule } from '@yelon/bcs/yunzai-table-user';

import { YunzaiContactComponent } from './yunzai-contact.component';

@NgModule({
  imports: [
    YunzaiDeptTreeModule,
    YunzaiDormitoryTreeModule,
    YunzaiFriendGroupModule,
    YunzaiRoleTreeModule,
    YunzaiTableUserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    YunzaiSharedZorroModule,
    YunzaiSharedYelonModule
  ],
  declarations: [YunzaiContactComponent],
  exports: [YunzaiContactComponent]
})
export class YunzaiContactModule {}
