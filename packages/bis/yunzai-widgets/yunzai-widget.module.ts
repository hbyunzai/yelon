import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NoticeIconModule } from '@yelon/abc/notice-icon';
import { I18nPipe } from '@yelon/theme';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { YunzaiHeaderClearStorageComponent } from './yunzai-clear-storage.component';
import { YunzaiHeaderFullScreenComponent } from './yunzai-fullscreen.component';
import { YunzaiHeaderI18nComponent } from './yunzai-i18n.component';
import { YunzaiHeaderNotifyComponent } from './yunzai-notify.component';
import { YunzaiHeaderUserComponent } from './yunzai-user.component';

const COMPONENTS = [
  YunzaiHeaderClearStorageComponent,
  YunzaiHeaderFullScreenComponent,
  YunzaiHeaderNotifyComponent,
  YunzaiHeaderI18nComponent,
  YunzaiHeaderUserComponent
];

@NgModule({
  imports: [
    NzAvatarModule,
    RouterModule,
    NoticeIconModule,
    NzDropDownModule,
    CommonModule,
    NzIconModule,
    I18nPipe,
    ...COMPONENTS
  ],
  exports: COMPONENTS
})
export class YunzaiWidgetsModule {}
