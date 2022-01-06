import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';

import screenfull from 'screenfull';

@Component({
  selector: 'yz-header-fullscreen',
  template: `
    <i nz-icon [nzType]="status ? 'fullscreen-exit' : 'fullscreen'"></i>
    {{ (status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | i18n }}
  `,
  host: {
    '[class.d-block]': 'true'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YzHeaderFullScreenComponent {
  status = false;

  @HostListener('window:resize')
  _resize(): void {
    this.status = screenfull.isFullscreen;
  }

  @HostListener('click')
  _click(): void {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  }
}
