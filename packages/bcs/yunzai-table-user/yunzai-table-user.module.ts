import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { STModule } from '@yelon/abc/st';
import { YelonFormModule } from '@yelon/form';
import { I18nPipe } from '@yelon/theme';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { YunzaiTableUserComponent } from './yunzai-table-user.component';
import { YunzaiTableUserService } from './yunzai-table-user.service';

export const COMPONENTS = [YunzaiTableUserComponent];

@NgModule({
  imports: [CommonModule, YelonFormModule, STModule, I18nPipe, NzCheckboxModule, NzDividerModule, NzButtonModule, NzEmptyModule, NzIconModule, NzMenuModule, NzCardModule, ...COMPONENTS],
  providers: [YunzaiTableUserService],
  exports: COMPONENTS
})
export class YunzaiTableUserModule {}
