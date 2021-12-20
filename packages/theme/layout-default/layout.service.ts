import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { getUrlParam, resizeWindow } from '@yelon/util/other';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  header: BehaviorSubject<NzSafeAny> = new BehaviorSubject(true);
  sidebar: BehaviorSubject<NzSafeAny> = new BehaviorSubject(true);
  reuseTab: BehaviorSubject<NzSafeAny> = new BehaviorSubject(true);

  constructor() {
    if (getUrlParam(window.location.href, 'showResuseTab') !== null) {
      if (getUrlParam(window.location.href, 'showResuseTab') === 'true') {
        this.showReuseTab();
      } else {
        this.hideReuseTab();
      }
    }
    if (getUrlParam(window.location.href, 'showHeader') !== null) {
      if (getUrlParam(window.location.href, 'showHeader') === 'true') {
        this.showHeader();
      } else {
        this.hideHeader();
      }
    }
    if (getUrlParam(window.location.href, 'showSider') !== null) {
      if (getUrlParam(window.location.href, 'showSider') === 'true') {
        this.showSidebar();
      } else {
        this.hideSidebar();
      }
    }
  }

  hideSidebar(): void {
    this.sidebar.next(false);
    resizeWindow();
  }
  hideHeader(): void {
    this.header.next(false);
    resizeWindow();
  }

  showSidebar(): void {
    this.sidebar.next(true);
    resizeWindow();
  }

  showHeader(): void {
    this.header.next(true);
    resizeWindow();
  }

  showReuseTab(): void {
    this.reuseTab.next(true);
    resizeWindow();
  }

  hideReuseTab(): void {
    this.reuseTab.next(false);
    resizeWindow();
  }
}
