import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NzButtonModule } from 'ng-zorro-antd/button';

import { YelonLocaleModule } from '@yelon/theme';

import { ExceptionComponent } from './exception.component';

const COMPONENTS = [ExceptionComponent];

@NgModule({
  imports: [CommonModule, RouterModule, YelonLocaleModule, NzButtonModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ExceptionModule {}
