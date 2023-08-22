import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ACLGuardService } from './acl-guard';
import { ACLIfDirective } from './acl-if.directive';
import { ACLDirective } from './acl.directive';
import { ACLService } from './acl.service';

const COMPONENTS = [ACLDirective, ACLIfDirective];

@NgModule({
  imports: [CommonModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class YelonACLModule {
  static forRoot(): ModuleWithProviders<YelonACLModule> {
    return {
      ngModule: YelonACLModule,
      providers: [ACLService, ACLGuardService]
    };
  }
}
