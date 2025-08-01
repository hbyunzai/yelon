import { TestBed } from '@angular/core/testing';
import { filter } from 'rxjs';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import enUS from './languages/en-US';
import zhCN from './languages/zh-CN';
import { YelonLocaleService } from './locale.service';
import { provideYunzai } from '../provide';
import { YELON_LOCALE } from './locale.tokens';

describe('theme: locale', () => {
  let locale: YelonLocaleService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: YELON_LOCALE, useValue: zhCN }, provideYunzai({})]
    });
    locale = TestBed.inject(YelonLocaleService);
  });

  describe('#setLocale', () => {
    it('should working', () => {
      locale.setLocale(enUS);
      expect(locale.locale.abbr).toBe(enUS.abbr);
    });
    it('should be ingore change when new and old are the same', () => {
      expect(locale.locale.abbr).toBe(zhCN.abbr);
      locale.setLocale(zhCN);
      expect(locale.locale.abbr).toBe(zhCN.abbr);
    });
  });

  it('#getData', () => {
    expect(locale.getData('exception').backToHome).toBe(zhCN.exception.backToHome);
    expect(Object.keys(locale.getData('invalid-key' as NzSafeAny)).length).toBe(0);
  });

  it('#change', done => {
    locale.change.pipe(filter(l => l.abbr === enUS.abbr)).subscribe(() => {
      expect(true).toBe(true);
      done();
    });
    locale.setLocale(enUS);
  });
});
