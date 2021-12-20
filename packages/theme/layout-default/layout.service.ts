import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  header: BehaviorSubject<NzSafeAny> = new BehaviorSubject(true);
  sidebar: BehaviorSubject<NzSafeAny> = new BehaviorSubject(true);
  reuseTab: BehaviorSubject<NzSafeAny> = new BehaviorSubject(true);

  constructor() {}

  hideSidebar(): void {
    this.sidebar.next(false);
  }
  hideHeader(): void {
    this.header.next(false);
  }

  showSidebar(): void {
    this.sidebar.next(true);
  }

  showHeader(): void {
    this.header.next(true);
  }

  showReuseTab(): void {
    this.reuseTab.next(true);
  }

  hideReuseTab(): void {
    this.reuseTab.next(false);
  }
}
