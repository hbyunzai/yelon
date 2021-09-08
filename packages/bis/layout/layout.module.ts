import { NgModule } from '@angular/core';

import { NoticeIconModule } from '@yelon/abc/notice-icon';
import { ReuseTabModule } from '@yelon/abc/reuse-tab';
import { YzSharedModule } from '@yelon/bis/shared';
import { YunzaiThemeModule } from '@yelon/theme';
import { LayoutDefaultModule } from '@yelon/theme/layout-default';
import { YUNZAI_THEME_BTN_KEYS } from '@yelon/theme/theme-btn';

import {
  YzHeaderApplicationComponent,
  YzHeaderNotifyComponent,
  YzHeaderThemBtnComponent,
  YzHeaderUserComponent,
  YzHeaderClearStorageComponent,
  YzHeaderFullScreenComponent,
  YzHeaderI18NComponent
} from './widgets';
import { YzLayoutBasicComponent } from './yz.basic.component';
const COMPONENTS = [
  YzLayoutBasicComponent,
  YzHeaderApplicationComponent,
  YzHeaderNotifyComponent,
  YzHeaderThemBtnComponent,
  YzHeaderUserComponent,
  YzHeaderFullScreenComponent,
  YzHeaderClearStorageComponent,
  YzHeaderI18NComponent
];

@NgModule({
  imports: [YzSharedModule, YunzaiThemeModule, NoticeIconModule, ReuseTabModule, LayoutDefaultModule],
  providers: [
    {
      provide: YUNZAI_THEME_BTN_KEYS,
      useValue: 'site-theme'
    }
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class YunzaiLayoutModule {}