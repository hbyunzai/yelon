import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { YunzaiSharedYelonModule, YunzaiSharedZorroModule } from '@yelon/bcs';
import { YUNZAI_THEME_BTN_KEYS } from '@yelon/theme/theme-btn';

import { YzLayoutBasicComponent } from './layout-basic/layout-basic.component';
import { LayoutNavApplicationComponent, LayoutNavGroupComponent, LayoutNavTileComponent } from './layout-nav';
import {
  YunzaiClearStorageComponent,
  YunzaiFullScreenComponent,
  YunzaiI18NComponent,
  YunzaiNotifyComponent,
  YunzaiThemBtnComponent,
  YunzaiUserComponent
} from './widgets';

const WIDGETS = [
  YunzaiClearStorageComponent,
  YunzaiFullScreenComponent,
  YunzaiI18NComponent,
  YunzaiNotifyComponent,
  YunzaiThemBtnComponent,
  YunzaiUserComponent
];

const LAYOUT_NAV_COMPONENTS = [LayoutNavApplicationComponent, LayoutNavGroupComponent, LayoutNavTileComponent];

const COMPONENTS = [YzLayoutBasicComponent];

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    YunzaiSharedYelonModule,
    YunzaiSharedZorroModule
  ],
  providers: [
    {
      provide: YUNZAI_THEME_BTN_KEYS,
      useValue: 'site-theme'
    }
  ],
  declarations: [...COMPONENTS, ...WIDGETS, ...LAYOUT_NAV_COMPONENTS],
  exports: [...COMPONENTS, ...WIDGETS, ...LAYOUT_NAV_COMPONENTS]
})
export class YunzaiLayoutModule {}
