import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { YunzaiThemeModule } from '@yelon/theme';

import { DownFileDirective } from './down-file.directive';

const DIRECTIVES = [DownFileDirective];

@NgModule({
  imports: [CommonModule, YunzaiThemeModule, ...DIRECTIVES],
  exports: DIRECTIVES
})
export class DownFileModule {}
