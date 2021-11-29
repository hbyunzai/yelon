/*
 * @Author: cui <devcui@outlook.com>
 * @Editor: microsoft vscode
 * @Date: 2021-11-27 11:30:50
 * @LastEditTime: 2021-11-27 14:41:18
 * @LastEditors: cui <devcui@outlook.com>
 * @Description: empty description
 * @FilePath: \yelon\packages\bis\shared\shared.module.ts
 * LICENSE HERE
 */
import { NgModule } from '@angular/core';

import { YZ_SHARED_YELON_MODULES } from './shared-yelon.module';
import { YZ_SHARED_ZORRO_MODULES } from './shared-zorro.module';

@NgModule({
  imports: [...YZ_SHARED_YELON_MODULES, ...YZ_SHARED_ZORRO_MODULES],
  exports: [...YZ_SHARED_YELON_MODULES, ...YZ_SHARED_ZORRO_MODULES]
})
export class YzSharedModule {}
