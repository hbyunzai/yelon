import { NgModule } from '@angular/core';

import zhCN from './languages/zh-CN';
import { YELON_LOCALE_SERVICE_PROVIDER } from './locale.service';
import { YELON_LOCALE } from './locale.tokens';

@NgModule({
  providers: [{ provide: YELON_LOCALE, useValue: zhCN }, YELON_LOCALE_SERVICE_PROVIDER]
})
export class YelonLocaleModule {}
