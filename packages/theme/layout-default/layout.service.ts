import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  header: BehaviorSubject<NzSafeAny> = new BehaviorSubject(true);
  sidebar: BehaviorSubject<NzSafeAny> = new BehaviorSubject(true);

  constructor() {}

  hideSidebar() {
    this.sidebar.next(false);
  }
  hideHeader() {
    this.header.next(false);
  }

  showSidebar() {
    this.sidebar.next(true);
  }

  showHeader() {
    this.header.next(true);
  }
}
