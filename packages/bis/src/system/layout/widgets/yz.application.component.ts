import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'yz-header-application',
  template: `
    <div
      class="yunzai-default__nav-item"
      nz-dropdown
      [nzDropdownMenu]="applicationMenu"
      nzTrigger="click"
      nzPlacement="bottomRight"
    >
      应用与服务
    </div>
    <nz-dropdown-menu #applicationMenu="nzDropdownMenu">
      <div nz-menu class="wd-xl animated jello">1111 </div>
    </nz-dropdown-menu>
  `,
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YzHeaderApplicationComponent {}
