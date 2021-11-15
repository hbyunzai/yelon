import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { YunzaiConfig, YUNZAI_CONFIG } from '@yelon/util/config';

import { YunzaiThemeModule } from '../../theme.module';
import { YunzaiI18NService, YUNZAI_I18N_TOKEN } from './i18n';

describe('theme: i18n', () => {
  let fixture: ComponentFixture<TestComponent>;
  let srv: YunzaiI18NService;

  function check(result: string, id: string = 'simple'): void {
    const el = fixture.debugElement.query(By.css(`#${id}`)).nativeElement as HTMLElement;

    expect(el.textContent!.trim()).toBe(result);
  }

  describe('', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [YunzaiThemeModule.forRoot()],
        declarations: [TestComponent]
      });
      fixture = TestBed.createComponent(TestComponent);
      srv = fixture.debugElement.injector.get(YUNZAI_I18N_TOKEN);
      srv.use('en', {
        simple: 'a',
        param: 'a-{{value}}'
      });
      fixture.detectChanges();
    });
    it('should working', () => {
      check('a');
    });

    it('should be param', () => {
      fixture.componentInstance.key = 'param';
      fixture.componentInstance.params = { value: '1' };
      fixture.detectChanges();
      check('a-1', 'param');
    });

    it('should be return path when is invalid', () => {
      fixture.componentInstance.key = 'invalid';
      fixture.detectChanges();
      check('invalid');
    });

    it('#flatData', () => {
      srv.use('en', {
        name: 'Name',
        sys: {
          '': 'System',
          title: 'Title'
        }
      });
      expect(srv.fanyi('name')).toBe(`Name`);
      expect(srv.fanyi('sys')).toBe(`System`);
      expect(srv.fanyi('sys.title')).toBe(`Title`);
    });
  });

  it('#interpolation', () => {
    TestBed.configureTestingModule({
      imports: [YunzaiThemeModule.forRoot()],
      declarations: [TestComponent],
      providers: [{ provide: YUNZAI_CONFIG, useValue: { themeI18n: { interpolation: ['#', '#'] } } as YunzaiConfig }]
    });
    fixture = TestBed.createComponent(TestComponent);
    srv = fixture.debugElement.injector.get(YUNZAI_I18N_TOKEN);
    srv.use('en', {
      simple: 'a',
      param: 'a-#value#'
    });
    fixture.componentInstance.key = 'param';
    fixture.componentInstance.params = { value: '1' };
    fixture.detectChanges();
    check('a-1', 'param');
  });
});

@Component({
  template: `
    <div id="simple">{{ key | i18n }}</div>
    <div id="param">{{ key | i18n: params }}</div>
  `
})
class TestComponent {
  key = 'simple';
  params = {};
}
