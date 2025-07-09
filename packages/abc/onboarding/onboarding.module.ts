import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { YelonLocaleModule } from '@yelon/theme';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

import { OnboardingComponent } from './onboarding.component';

const COMPONENTS = [OnboardingComponent];

@NgModule({
  imports: [
    CommonModule,
    YelonLocaleModule,
    NzPopoverModule,
    NzOutletModule,
    NzButtonModule,
    NzNoAnimationModule,
    COMPONENTS
  ],
  exports: COMPONENTS
})
export class OnboardingModule {}
