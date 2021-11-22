import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { YzSharedModule } from '@yelon/bis/shared';
import { YUNZAI_THEME_BTN_KEYS } from '@yelon/theme/theme-btn';

// import { ContactComponent } from './contact/contact.component';
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
  // ContactComponent,
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
  imports: [HttpClientModule, CommonModule, FormsModule, RouterModule, ReactiveFormsModule, YzSharedModule],
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
