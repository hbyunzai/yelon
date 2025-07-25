import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, discardPeriodicTasks, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';

import { createTestContext } from '@yelon/testing';
import { LazyService } from '@yelon/util/other';

import { PdfComponent } from './pdf.component';

describe('abc: pdf', () => {
  let fixture: ComponentFixture<TestComponent>;
  let page: PageObject;
  let lazySrv: LazyService;

  beforeEach(() => {
    ({ fixture } = createTestContext(TestComponent));
    page = new PageObject();
    lazySrv = TestBed.inject(LazyService);
    spyOn(lazySrv, 'load').and.returnValue(Promise.resolve([]));
  });

  it('should be throw error when not found pdfjsViewer in window', fakeAsync(() => {
    expect(() => page.cd().end()).toThrow();
  }));

  class PageObject {
    cd(time: number = 0): this {
      fixture.detectChanges();
      tick(time);
      fixture.detectChanges();
      return this;
    }

    end(): void {
      discardPeriodicTasks();
      flush();
    }
  }
});

@Component({
  template: ` <pdf #comp [src]="src" [delay]="delay" (change)="change()" /> `,
  imports: [PdfComponent]
})
class TestComponent {
  @ViewChild('comp') comp!: PdfComponent;
  src = '';
  delay = 0;
  change(): void {}
}
