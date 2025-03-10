import { APP_BASE_HREF } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter, Router } from '@angular/router';

import { WINDOW } from '@yelon/util/token';

import { GlobalFooterItemComponent } from './global-footer-item.component';
import { GlobalFooterComponent } from './global-footer.component';
import { GlobalFooterLink } from './global-footer.types';

class MockWindow {
  location = new MockLocation();
  open(): void {}
}
class MockLocation {
  private url!: string;
  get href(): string {
    return this.url;
  }
  set href(url: string) {
    this.url = url;
  }
}

describe('abc: global-footer', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;
  let page: PageObject;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideRouter([]),
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: WINDOW, useFactory: () => new MockWindow() }
      ]
    });
  });

  function createComp(): void {
    fixture = TestBed.createComponent(TestComponent);
    dl = fixture.debugElement;
    context = fixture.componentInstance;
    fixture.detectChanges();
    page = new PageObject();
  }

  it('should be create', () => {
    createComp();
    context.links = [
      {
        title: '帮助',
        href: ''
      },
      {
        title: '隐私',
        href: ''
      },
      {
        title: '条款',
        href: ''
      }
    ];
    fixture.detectChanges();
    expect(dl.queryAll(By.css('.global-footer__links-item')).length).toBe(context.links.length);
  });

  it('should be custom copyright template', () => {
    createComp();
    expect(dl.queryAll(By.css('#copyright')).length).toBe(1);
  });

  it('should be open new window when blankTarget is true', () => {
    createComp();
    const win = TestBed.inject(WINDOW);
    spyOn(win, 'open');
    context.links = [
      {
        title: '',
        href: 'https://www.youtube.com',
        blankTarget: true
      }
    ];
    fixture.detectChanges();
    page.getFirst().click();
    expect(win.open).toHaveBeenCalled();
  });

  it('should be open extral link', () => {
    createComp();
    const win = TestBed.inject(WINDOW);
    context.links = [
      {
        title: '',
        href: 'https://www.youtube.com'
      }
    ];
    fixture.detectChanges();
    page.getFirst().click();
    expect(win.location.href).toBe(context.links[0].href);
  });

  it('should be navigate router', () => {
    createComp();
    const router = TestBed.inject<Router>(Router);
    spyOn(router, 'navigateByUrl');
    context.links = [
      {
        title: '',
        href: '/'
      }
    ];
    fixture.detectChanges();
    page.getFirst().click();
    expect(router.navigateByUrl).toHaveBeenCalled();
  });

  it('should be ignore navigate when href is empty', () => {
    createComp();
    const router = TestBed.inject<Router>(Router);
    spyOn(router, 'navigateByUrl');
    context.links = [
      {
        title: '',
        href: ''
      }
    ];
    fixture.detectChanges();
    page.getFirst().click();
    expect(router.navigateByUrl).not.toHaveBeenCalled();
  });

  it('should be custom item template', () => {
    TestBed.overrideTemplate(
      TestComponent,
      `
    <global-footer>
      <global-footer-item href="https://ng.yunzainfo.com/" blankTarget>
        <i class="icon-github"></i>
        <i class="icon-github"></i>
      </global-footer-item>
    </global-footer>
    `
    );
    createComp();
    expect(dl.queryAll(By.css('.global-footer__links-item')).length).toBe(1);
    expect(dl.queryAll(By.css('.icon-github')).length).toBe(2);
  });

  class PageObject {
    getFirst(): HTMLAnchorElement {
      return dl.query(By.css('.global-footer__links-item')).nativeElement as HTMLAnchorElement;
    }
  }
});

@Component({
  template: `
    <global-footer [links]="links">
      <div id="copyright">copyright</div>
    </global-footer>
  `,
  imports: [GlobalFooterComponent, GlobalFooterItemComponent]
})
class TestComponent {
  links: GlobalFooterLink[] = [];
}
