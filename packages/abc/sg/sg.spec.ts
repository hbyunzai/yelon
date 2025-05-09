import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import { createTestContext } from '@yelon/testing';
import { REP_MAX } from '@yelon/theme/src/services/responsive/responsive';

import { SGContainerComponent } from './sg-container.component';
import { SGComponent } from './sg.component';

const prefixCls = `.sg__`;

describe('abc: sg', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;
  let page: PageObject;

  const moduleAction = (): void => {
    TestBed.configureTestingModule({
      providers: [provideNoopAnimations()]
    });
  };

  function genModule(template?: string): void {
    moduleAction();
    if (template) {
      TestBed.overrideTemplate(TestComponent, template);
    }
    fixture = TestBed.createComponent(TestComponent);
    dl = fixture.debugElement;
    context = fixture.componentInstance;
    fixture.detectChanges();
    page = new PageObject();
  }

  describe('', () => {
    beforeEach(() => moduleAction());

    describe('[property]', () => {
      beforeEach(() => {
        ({ fixture, dl, context } = createTestContext(TestComponent));
        fixture.detectChanges();
        page = new PageObject();
      });
      describe('#wrap', () => {
        it('#gutter', () => {
          const gutter = 24;
          const halfGutter = gutter / 2;
          context.parent_gutter = gutter;
          fixture.detectChanges();
          expect(page.getEl('.ant-row').style.marginLeft).toBe(`-${halfGutter}px`);
          expect(page.getEl('.ant-row').style.marginRight).toBe(`-${halfGutter}px`);
          const itemCls = `${prefixCls}item`;
          expect(page.getEl(itemCls).style.paddingLeft).toBe(`${halfGutter}px`);
          expect(page.getEl(itemCls).style.paddingRight).toBe(`${halfGutter}px`);
        });
        it('should be ingroed less than 0', () => {
          context.parent_col = 0;
          fixture.detectChanges();
          page.expect('.ant-col-xs-24');
          page.expect('.ant-col-sm-12');
        });
      });
      describe('#item', () => {
        describe('#col', () => {
          it('should working', () => {
            context.col = 1;
            fixture.detectChanges();
            page.expect('.ant-col-xs-24');
            page.expect('.ant-col-sm-12', 0);
            context.col = REP_MAX;
            fixture.detectChanges();
            page.expect('.ant-col-xs-24');
            page.expect('.ant-col-sm-12');
          });
          it('should be inherit parent col value', () => {
            context.parent_colInCon = null;
            context.parent_col = 2;
            context.col = null;
            fixture.detectChanges();
            page.expect('.ant-col-xs-24');
            page.expect('.ant-col-sm-12');
            page.expect('.ant-col-md-8', 0);
          });
          it('should be inherit parent col value via container', () => {
            context.parent_colInCon = 4;
            context.parent_col = null;
            context.col = null;
            fixture.detectChanges();
            page.expect('.ant-col-xs-24');
            page.expect('.ant-col-sm-12');
            page.expect('.ant-col-md-8');
            page.expect('.ant-col-lg-6');
          });
        });
      });
    });
  });

  describe('[logic]', () => {
    it(`should be must include 'sg-container' component in sg`, () => {
      expect(() => {
        genModule(`
        <sg></sg>
        `);
      }).toThrowError();
    });
  });

  class PageObject {
    getEl(cls: string): HTMLElement {
      return dl.query(By.css(cls)).nativeElement;
    }
    getEls(cls: string): DebugElement[] {
      return dl.queryAll(By.css(cls));
    }
    expect(cls: string, count: number = 1): this {
      expect(this.getEls(cls).length).toBe(count);
      return this;
    }
  }
});

@Component({
  template: `
    <div [sg-container]="parent_colInCon" #sgComp="sgContainer" [col]="parent_col" [gutter]="parent_gutter">
      <sg #viewComp [col]="col" />
    </div>
  `,
  imports: [SGContainerComponent, SGComponent]
})
class TestComponent {
  @ViewChild('sgComp', { static: true })
  sgComp!: SGContainerComponent;
  @ViewChild('viewComp', { static: true })
  viewComp!: SGComponent;

  parent_gutter: number | null = 32;
  parent_colInCon!: number | null;
  parent_col: number | null = 3;

  col!: number | null;
}
