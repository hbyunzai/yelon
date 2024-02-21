import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { I18nPipe } from '@yelon/theme';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { YunzaiLayoutBasicComponent } from './layout-basic.component';
import { YunzaiLayoutNavGroupComponent } from './layout-nav-group.component';
import { YunzaiLayoutNavTileComponent } from './layout-nav-tile.component';

const COMPONENTS = [YunzaiLayoutNavTileComponent, YunzaiLayoutNavGroupComponent, YunzaiLayoutBasicComponent];

@NgModule({
  imports: [
    I18nPipe,
    FormsModule,
    NzFormModule,
    NzInputModule,
    CommonModule,
    NzGridModule,
    NzIconModule,
    NzDropDownModule,
    NzTabsModule,
    ...COMPONENTS
  ],
  exports: COMPONENTS
})
export class YunzaiLayoutModule {}
