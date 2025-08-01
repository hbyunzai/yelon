import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { YelonLocaleModule } from '@yelon/theme';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

import { G2MiniProgressComponent } from './mini-progress.component';

const COMPONENTS = [G2MiniProgressComponent];

@NgModule({
  imports: [CommonModule, YelonLocaleModule, NzTooltipModule, ...COMPONENTS],
  exports: COMPONENTS
})
export class G2MiniProgressModule {}
