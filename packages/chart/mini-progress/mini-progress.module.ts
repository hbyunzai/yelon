import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { YelonLocaleModule } from '@yelon/theme';

import { G2MiniProgressComponent } from './mini-progress.component';

const COMPONENTS = [G2MiniProgressComponent];

@NgModule({
  imports: [CommonModule, YelonLocaleModule, NzToolTipModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class G2MiniProgressModule {}
