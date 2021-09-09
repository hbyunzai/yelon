import { NgModule, Type } from '@angular/core';

import { YZ_SHARED_YELON_MODULES } from './shared-yelon.module';
import { YZ_SHARED_ZORRO_MODULES } from './shared-zorro.module';
const THIRDMODULES: Array<Type<void>> = [];
const COMPONENTS: Array<Type<void>> = [];
const DIRECTIVES: Array<Type<void>> = [];

@NgModule({
  imports: [...YZ_SHARED_YELON_MODULES, ...YZ_SHARED_ZORRO_MODULES, ...THIRDMODULES],
  declarations: [...COMPONENTS, ...DIRECTIVES],
  exports: [...YZ_SHARED_YELON_MODULES, ...YZ_SHARED_ZORRO_MODULES, ...THIRDMODULES, ...COMPONENTS, ...DIRECTIVES]
})
export class YzSharedModule {}
