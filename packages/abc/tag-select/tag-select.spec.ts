import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { createTestContext } from '@yelon/testing';
import { YelonLocaleModule, YelonLocaleService, en_US, zh_CN } from '@yelon/theme';

import { TagSelectComponent } from './tag-select.component';

describe('abc: tag-select', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [YelonLocaleModule]
    });
    ({ fixture, dl, context } = createTestContext(TestComponent));
    fixture.detectChanges();
  });

  describe('#expandable', () => {
    it('with true', () => {
      context.expandable = true;
      fixture.detectChanges();
      expect(dl.query(By.css('.tag-select__has-expand'))).not.toBeNull();
    });
    it('with false', () => {
      context.expandable = false;
      fixture.detectChanges();
      expect(dl.query(By.css('.tag-select__has-expand'))).toBeNull();
    });
  });
  it('should be switch states via click trigger', () => {
    spyOn(context, 'change');
    const triEl = dl.query(By.css('.tag-select__trigger')).nativeElement as HTMLElement;
    expect(context.change).not.toHaveBeenCalled();
    expect(triEl.innerHTML.trim()).toContain('展开');
    // expect(triEl.querySelector('.anticon-up')).toBeNull();
    // expect(triEl.querySelector('.anticon-down')).not.toBeNull();
    triEl.click();
    fixture.detectChanges();
    expect(triEl.innerHTML.trim()).toContain('收起');
    // expect(triEl.querySelector('.anticon-up')).not.toBeNull();
    // expect(triEl.querySelector('.anticon-down')).toBeNull();
    expect(context.change).toHaveBeenCalled();
  });
  it('#i18n', () => {
    const triEl = dl.query(By.css('.tag-select__trigger')).nativeElement as HTMLElement;
    expect(triEl.innerText.trim()).toContain(zh_CN.tagSelect.expand);
    TestBed.inject<YelonLocaleService>(YelonLocaleService).setLocale(en_US);
    fixture.detectChanges();
    expect(triEl.innerText.trim()).toBe(en_US.tagSelect.expand);
  });
});

@Component({
  template: `
    <tag-select #comp [expandable]="expandable" (change)="change()">
      @for (i of categories; track $index) {
        <li style="width: 30%">{{ i.text }}</li>
      }
    </tag-select>
  `,
  imports: [TagSelectComponent]
})
class TestComponent {
  @ViewChild('comp', { static: true })
  comp!: TagSelectComponent;
  categories = [
    { id: 0, text: '全部', value: false },
    { id: 1, text: '类目一', value: false },
    { id: 2, text: '类目二', value: false },
    { id: 3, text: '类目三', value: false },
    { id: 4, text: '类目四', value: false },
    { id: 5, text: '类目五', value: false },
    { id: 6, text: '类目六', value: false },
    { id: 7, text: '类目七', value: false },
    { id: 8, text: '类目八', value: false },
    { id: 9, text: '类目九', value: false },
    { id: 10, text: '类目十', value: false },
    { id: 11, text: '类目十一', value: false },
    { id: 12, text: '类目十二', value: false }
  ];
  expandable = true;
  change(): void {}
}
