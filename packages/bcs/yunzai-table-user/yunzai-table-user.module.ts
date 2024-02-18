import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { STModule } from '@yelon/abc/st';
import { YelonFormModule } from '@yelon/form';
import { YunzaiThemeModule } from '@yelon/theme';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { YunzaiTableUserComponent } from './yunzai-table-user.component';

const COMPONENTS = [YunzaiTableUserComponent];

@NgModule({
  imports: [
    CommonModule,
    YelonFormModule,
    NzEmptyModule,
    NzDividerModule,
    NzMenuModule,
    NzIconModule,
    NzButtonModule,
    NzCheckboxModule,
    STModule,
    YunzaiThemeModule,
    NzCardModule,
    ...COMPONENTS
  ],
  exports: COMPONENTS
})
export class YunzaiTableUserModule {}
