import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';

import { resizeWindow } from '@yelon/util';

@Injectable({
  providedIn: 'root'
})
export class LayoutDisplayService implements OnDestroy {
  private displayNav: BehaviorSubject<boolean> = new BehaviorSubject(true);
  private displayAside: BehaviorSubject<boolean> = new BehaviorSubject(true);
  private displayReuseTab: BehaviorSubject<boolean> = new BehaviorSubject(true);
  private $destroy = new Subject<void>();

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.pipe(takeUntil(this.$destroy)).subscribe(params => {
      if (params['displayNav']) {
        try {
          const displayNav = params['displayNav'];
          if (/true/i.test(displayNav)) this.display('nav');
          if (/false/i.test(displayNav)) this.hide('nav');
        } catch {
          throw Error('Error: displayNav is not a boolean value.');
        }
      }
      if (params['displayReusetab']) {
        try {
          const displayReusetab = params['displayReusetab'];
          if (/true/i.test(displayReusetab)) this.display('reuseTab');
          if (/false/i.test(displayReusetab)) this.hide('reuseTab');
        } catch {
          throw Error('Error: displayReuseTab is not a boolean value.');
        }
      }
      if (params['displayAside']) {
        try {
          const displayAside = params['displayAside'];
          if (/true/i.test(displayAside)) this.display('aside');
          if (/false/i.test(displayAside)) this.hide('aside');
        } catch {
          throw Error('Error: displayAside is not a boolean value.');
        }
      }
    });
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
  }

  listen(component: 'nav' | 'aside' | 'reuseTab', callback: (display: boolean) => void): void {
    this.displayNav.pipe(takeUntil(this.$destroy)).subscribe(display => {
      if (component === 'nav') {
        callback(display);
        resizeWindow();
      }
    });
    this.displayAside.pipe(takeUntil(this.$destroy)).subscribe(display => {
      if (component === 'aside') {
        callback(display);
        resizeWindow();
      }
    });
    this.displayReuseTab.pipe(takeUntil(this.$destroy)).subscribe(display => {
      if (component === 'reuseTab') {
        callback(display);
        resizeWindow();
      }
    });
  }

  ngOnDestroy(): void {
    this.$destroy.complete();
  }
}
