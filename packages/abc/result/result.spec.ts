import { Directionality } from '@angular/cdk/bidi';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Component, DebugElement, TemplateRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import { createTestContext } from '@yelon/testing';

import { ResultComponent } from './result.component';

describe('abc: result', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting(), provideNoopAnimations()]
    });
    ({ fixture, dl, context } = createTestContext(TestComponent));
    fixture.detectChanges();
  });

  function isText(cls: string, value: any): void {
    const el = dl.query(By.css(cls)).nativeElement as HTMLElement;
    expect(el ? el.innerText.trim() : '').toBe(value);
  }

  function isExists(cls: string, stauts: boolean = true): void {
    const res = dl.query(By.css(cls));
    if (stauts) {
      expect(res).not.toBeNull();
    } else {
      expect(res).toBeNull();
    }
  }

  function isIcon(value: string): void {
    expect(context.comp._icon).toBe(value);
  }

  describe('#type', () => {
    it('with success', () => {
      context.type = 'success';
      fixture.detectChanges();
      isIcon('check-circle');
    });
    it('with error', () => {
      context.type = 'error';
      fixture.detectChanges();
      isIcon('close-circle');
    });
    it('with check', () => {
      context.type = 'check';
      fixture.detectChanges();
      isIcon('check');
    });
  });

  describe('#title', () => {
    it('with string', () => {
      isText('.result__title', context.title);
    });
    it('with template', () => {
      context.title = context.titleTpl;
      fixture.detectChanges();
      isExists('#titleTpl');
    });
  });

  describe('#description', () => {
    it('with string', () => {
      isText('.result__desc', context.description);
    });
    it('with template', () => {
      context.description = context.descriptionTpl;
      fixture.detectChanges();
      isExists('#descriptionTpl');
    });
  });

  describe('#extra', () => {
    it('with string', () => {
      isText('.result__extra', context.extra);
    });
    it('with template', () => {
      context.extra = context.extraTpl;
      fixture.detectChanges();
      isExists('#extraTpl');
    });
  });

  it('#rtl', () => {
    isExists('.result-rtl', false);
    const srv = TestBed.inject(Directionality);
    srv.change.emit('rtl');
    fixture.detectChanges();
    isExists('.result-rtl', true);
  });
});

@Component({
  template: `
    <result #comp [type]="type" [title]="title" [description]="description" [extra]="extra" />
    <ng-template #titleTpl><p id="titleTpl">titleTpl</p></ng-template>
    <ng-template #descriptionTpl><p id="descriptionTpl">descriptionTpl</p></ng-template>
    <ng-template #extraTpl><p id="extraTpl">extraTpl</p></ng-template>
  `,
  imports: [ResultComponent]
})
class TestComponent {
  @ViewChild('comp', { static: true })
  comp!: ResultComponent;
  type = 'custom';
  @ViewChild('titleTpl', { static: true })
  titleTpl!: TemplateRef<void>;
  @ViewChild('descriptionTpl', { static: true })
  descriptionTpl!: TemplateRef<void>;
  @ViewChild('extraTpl', { static: true })
  extraTpl!: TemplateRef<void>;
  title: string | TemplateRef<void> = 'title';
  description: string | TemplateRef<void> = 'description';
  extra: string | TemplateRef<void> = 'extra';
}
