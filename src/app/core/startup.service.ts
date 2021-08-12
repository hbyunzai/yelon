import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Injector } from '@angular/core';

import { TitleService } from '@yelon/theme';
import { LazyService } from '@yelon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzIconService } from 'ng-zorro-antd/icon';

import { ICONS } from '../../style-icons';

@Injectable()
export class StartupService {
  constructor(
    private injector: Injector,
    iconSrv: NzIconService,
    @Inject(DOCUMENT) private doc: NzSafeAny,
    private lazy: LazyService,
    private platform: Platform
  ) {
    iconSrv.addIcon(...ICONS);
  }

  load(): Promise<void> {
    const slowEl = this.doc.querySelector('#_slow');
    return new Promise(resolve => {
      if (slowEl) {
        slowEl.remove();
      }
      this.injector.get(TitleService).suffix = 'Ng Yunzai';
      if (this.platform.isBrowser) {
        setTimeout(() => this.lazyLoad(), 100);
      }
      resolve();
    });
  }

  lazyLoad(): void {
    const win = this.doc.defaultView as NzSafeAny;
    win.hj =
      win.hj ||
      function () {
        (win.hj.q = win.hj.q || []).push(arguments);
      };
    win._hjSettings = {
      hjid: 2549939,
      hjsv: 6
    };
    Promise.all([
      this.lazy.loadScript(`https://www.googletagmanager.com/gtag/js?id=GTM-PH2TJFJ`),
      this.lazy.loadScript(`https://static.hotjar.com/c/hotjar-${win._hjSettings.hjid}.js?sv=${win._hjSettings.hjsv}`)
    ]).then(() => {
      const dataLayer: NzSafeAny[] = win.dataLayer || [];
      dataLayer.push(['js', new Date()]);
      dataLayer.push(['config', 'GTM-PH2TJFJ']);
    });
  }
}
