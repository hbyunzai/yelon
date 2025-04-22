import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';

import { I18nPipe } from '@yelon/theme';
import screenfull from 'screenfull';

import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'yunzai-header-fullscreen',
  template: `
    <nz-icon [nzType]="status ? 'fullscreen-exit' : 'fullscreen'" nzTheme="outline"></nz-icon>
    {{ (status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | i18n }}
  `,
  host: {
    '[class.flex-1]': 'true'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NzIconModule, I18nPipe]
})
export class YunzaiHeaderFullScreenComponent {
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
