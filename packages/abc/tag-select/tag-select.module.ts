import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';

import { YelonLocaleModule } from '@yelon/theme';

import { TagSelectComponent } from './tag-select.component';

const COMPONENTS = [TagSelectComponent];

@NgModule({
  imports: [CommonModule, NzIconModule, YelonLocaleModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class TagSelectModule {}
