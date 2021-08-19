import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { YelonLocaleModule } from '@yelon/theme';

import { ReuseTabContextMenuComponent } from './reuse-tab-context-menu.component';
import { ReuseTabContextComponent } from './reuse-tab-context.component';
import { ReuseTabContextDirective } from './reuse-tab-context.directive';
import { ReuseTabComponent } from './reuse-tab.component';

const COMPONENTS = [ReuseTabComponent];
const NOEXPORTS = [ReuseTabContextMenuComponent, ReuseTabContextComponent, ReuseTabContextDirective];

@NgModule({
  imports: [CommonModule, RouterModule, YelonLocaleModule, NzMenuModule, NzTabsModule, NzIconModule, OverlayModule],
  declarations: [...COMPONENTS, ...NOEXPORTS],
  exports: COMPONENTS
})
export class ReuseTabModule {}