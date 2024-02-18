import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NoticeIconModule } from '@yelon/abc/notice-icon';
import { ReuseTabModule } from '@yelon/abc/reuse-tab';
import { YunzaiThemeModule } from '@yelon/theme';
import { LayoutDefaultModule } from '@yelon/theme/layout-default';
import { YUNZAI_THEME_BTN_KEYS } from '@yelon/theme/theme-btn';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { YunzaiLayoutBasicComponent } from './layout-basic';
import { LayoutNavApplicationComponent, LayoutNavGroupComponent, LayoutNavTileComponent } from './layout-nav';
import {
  YunzaiClearStorageComponent,
  YunzaiFullScreenComponent,
  YunzaiI18NComponent,
  YunzaiNotifyComponent,
  YunzaiThemeBtnComponent,
  YunzaiUserComponent
} from './widgets';

const COMPONENTS = [
  YunzaiClearStorageComponent,
  YunzaiFullScreenComponent,
  YunzaiI18NComponent,
  YunzaiNotifyComponent,
  YunzaiThemeBtnComponent,
  YunzaiUserComponent,
  YunzaiLayoutBasicComponent,
  LayoutNavApplicationComponent,
  LayoutNavGroupComponent,
  LayoutNavTileComponent
];

@NgModule({
  imports: [
    RouterModule,
    ReuseTabModule,
    LayoutDefaultModule,
    CommonModule,
    NzTabsModule,
    NgOptimizedImage,
    NzToolTipModule,
    NzDropDownModule,
    NzAvatarModule,
    NoticeIconModule,
    FormsModule,
    NzGridModule,
    YunzaiThemeModule,
    NzInputModule,
    NzIconModule
  ],
  declarations: COMPONENTS,
  providers: [
    {
      provide: YUNZAI_THEME_BTN_KEYS,
      useValue: 'site-theme'
    }
  ],
  exports: COMPONENTS
})
export class YunzaiLayoutModule {}
