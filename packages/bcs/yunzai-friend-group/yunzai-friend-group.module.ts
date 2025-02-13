import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { YelonFormModule } from '@yelon/form';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { YunzaiFriendGroupComponent } from './yunzai-friend-group.component';

const COMPONENTS = [YunzaiFriendGroupComponent];

@NgModule({
  imports: [NzSpinModule, NzCardModule, CommonModule, NzEmptyModule, YelonFormModule, NzListModule, ...COMPONENTS],
  exports: COMPONENTS
})
export class YunzaiFriendGroupModule {}
