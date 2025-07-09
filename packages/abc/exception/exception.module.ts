import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { YelonLocaleModule } from '@yelon/theme';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { ExceptionComponent } from './exception.component';

const COMPONENTS = [ExceptionComponent];

@NgModule({
  imports: [CommonModule, ObserversModule, RouterModule, YelonLocaleModule, NzButtonModule, ...COMPONENTS],
  exports: COMPONENTS
})
export class ExceptionModule {}
