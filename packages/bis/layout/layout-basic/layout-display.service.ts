import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject, tap } from 'rxjs';

import { getUrlParam, resizeWindow } from '@yelon/util';

@Injectable({
  providedIn: 'root'
})
export class LayoutDisplayService implements OnDestroy {
  private displayNav: BehaviorSubject<boolean> = new BehaviorSubject(true);
  private displayAside: BehaviorSubject<boolean> = new BehaviorSubject(true);
  private displayReuseTab: BehaviorSubject<boolean> = new BehaviorSubject(true);
  private destroy$: Subject<boolean> = new Subject();

  constructor() {
    if (getUrlParam(window.location.href, 'displayNav') !== null) {
      this.hide('nav');
    } else {
      this.display('nav');
    }

    if (getUrlParam(window.location.href, 'displayAside') !== null) {
      this.hide('aside');
    } else {
      this.display('aside');
    }

    if (getUrlParam(window.location.href, 'displayReuseTab') !== null) {
      this.hide('reuseTab');
    } else {
      this.display('reuseTab');
    }
  }

  display(component: 'nav' | 'aside' | 'reuseTab'): void {
    switch (component) {
      case 'nav':
        this.displayNav.next(true);
        break;
      case 'aside':
        this.displayAside.next(true);
        break;
      case 'reuseTab':
        this.displayReuseTab.next(true);
        break;
    }
    resizeWindow();
  }

  hide(component: 'nav' | 'aside' | 'reuseTab'): void {
    switch (component) {
      case 'nav':
        this.displayNav.next(false);
        break;
      case 'aside':
        this.displayAside.next(false);
        break;
      case 'reuseTab':
        this.displayReuseTab.next(false);
        break;
    }
    resizeWindow();
  }

  listen(component: 'nav' | 'aside' | 'reuseTab', callback: (display: boolean) => void): void {
    this.displayNav.pipe(tap(this.destroy$)).subscribe(display => {
      if (component === 'nav') {
        callback(display);
      }
    });
    this.displayAside.pipe(tap(this.destroy$)).subscribe(display => {
      if (component === 'aside') {
        callback(display);
      }
    });
    this.displayReuseTab.pipe(tap(this.destroy$)).subscribe(display => {
      if (component === 'reuseTab') {
        callback(display);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
  }
}
