import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { YunzaiConfig, YUNZAI_CONFIG } from '@yelon/util/config';

import { YunzaiI18NService, YUNZAI_I18N_TOKEN } from './i18n';
import { yunzaiI18nCanActivate, yunzaiI18nCanActivateChild } from './i18n-url.guard';
import { YunzaiThemeModule } from '../../theme.module';

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
      srv.use('en');
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

  describe('Change i18n via url', () => {
    it('should be working', fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          YunzaiThemeModule.forRoot(),
          RouterTestingModule.withRoutes([
            {
              path: ':i18n',
              component: TestComponent,
              canActivate: [yunzaiI18nCanActivate],
              canActivateChild: [yunzaiI18nCanActivateChild]
            }
          ])
        ],
        declarations: [TestComponent]
      });
      fixture = TestBed.createComponent(TestComponent);
      srv = fixture.debugElement.injector.get(YUNZAI_I18N_TOKEN);
      spyOn(srv, 'use');
      const router = TestBed.inject<Router>(Router) as Router;
      router.navigateByUrl(`/zh`);
      tick();
      expect(srv.use).toHaveBeenCalled();
    }));

    it('should be can not work', fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          YunzaiThemeModule.forRoot(),
          RouterTestingModule.withRoutes([
            { path: ':invalid', component: TestComponent, canActivate: [yunzaiI18nCanActivate] }
          ])
        ],
        declarations: [TestComponent]
      });
      fixture = TestBed.createComponent(TestComponent);
      srv = fixture.debugElement.injector.get(YUNZAI_I18N_TOKEN);
      spyOn(srv, 'use');
      const router = TestBed.inject<Router>(Router) as Router;
      router.navigateByUrl(`/zh`);
      tick();
      expect(srv.use).not.toHaveBeenCalled();
    }));

    it('should be working', fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          YunzaiThemeModule.forRoot(),
          RouterTestingModule.withRoutes([
            { path: ':lang', component: TestComponent, canActivate: [yunzaiI18nCanActivate] }
          ])
        ],
        declarations: [TestComponent],
        providers: [{ provide: YUNZAI_CONFIG, useValue: { themeI18n: { paramNameOfUrlGuard: 'lang' } } as YunzaiConfig }]
      });
      fixture = TestBed.createComponent(TestComponent);
      srv = fixture.debugElement.injector.get(YUNZAI_I18N_TOKEN);
      spyOn(srv, 'use');
      const router = TestBed.inject<Router>(Router) as Router;
      router.navigateByUrl(`/zh`);
      tick();
      expect(srv.use).toHaveBeenCalled();
    }));
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
