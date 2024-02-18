import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { YelonLocaleModule } from '@yelon/theme';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { TagSelectComponent } from './tag-select.component';

const COMPONENTS = [TagSelectComponent];

@NgModule({
  imports: [CommonModule, NzIconModule, YelonLocaleModule, ...COMPONENTS],
  exports: COMPONENTS
})
export class TagSelectModule {}
