import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorCollectModule } from '@yelon/abc/error-collect';

import { NzOutletModule } from 'ng-zorro-antd/core/outlet';

import { FooterToolbarComponent } from './footer-toolbar.component';

const COMPONENTS = [FooterToolbarComponent];

@NgModule({
  imports: [CommonModule, ErrorCollectModule, NzOutletModule, ...COMPONENTS],
  exports: COMPONENTS
})
export class FooterToolbarModule {}
