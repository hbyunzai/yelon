import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Type } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { YelonACLModule } from '@yelon/acl';
import { YelonFormModule } from '@yelon/form';

import { SHARED_YELON_MODULES } from './shared-yelon.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';
const THIRDMODULES: Array<Type<void>> = [];
const COMPONENTS: Array<Type<void>> = [];
const DIRECTIVES: Array<Type<void>> = [];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    YelonACLModule,
    YelonFormModule,
    ...SHARED_YELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    ...THIRDMODULES
  ],
  declarations: [...COMPONENTS, ...DIRECTIVES],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    YelonACLModule,
    YelonFormModule,
    ...SHARED_YELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    ...THIRDMODULES,
    ...COMPONENTS,
    ...DIRECTIVES
  ]
})
export class SharedModule {}
