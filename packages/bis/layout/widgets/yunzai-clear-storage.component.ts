import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'yunzai-clearstorage',
  template: `
    <i nz-icon nzType="tool"></i>
    {{ 'storage.clear' | i18n }}
  `,
  host: {
    '[class.d-block]': 'true'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YunzaiClearStorageComponent {
  constructor(
    private modalSrv: NzModalService,
    private messageSrv: NzMessageService
  ) {}

  @HostListener('click')
  _click(): void {
    this.modalSrv.confirm({
      nzTitle: 'Make sure clear all local storage?',
      nzOnOk: () => {
        localStorage.clear();
        this.messageSrv.success('Clear Finished!');
      }
    });
  }
}
