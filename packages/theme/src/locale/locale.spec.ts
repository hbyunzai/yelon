import { filter } from 'rxjs';

import enUS from './languages/en-US';
import zhCN from './languages/zh-CN';
import { YelonLocaleService } from './locale.service';

describe('theme: locale', () => {
  let locale: YelonLocaleService;
  beforeEach(() => (locale = new YelonLocaleService(zhCN)));

  describe('#setLocale', () => {
    it('should working', () => {
      locale.setLocale(enUS);
      expect(locale.locale.abbr).toBe(enUS.abbr);
    });
    it('should be default language is zh-cn', () => {
      locale = new YelonLocaleService(null);
      expect(locale.locale.abbr).toBe(zhCN.abbr);
    });
    it('should be ignore change when new and old are the same', () => {
      expect(locale.locale.abbr).toBe(zhCN.abbr);
      locale.setLocale(zhCN);
      expect(locale.locale.abbr).toBe(zhCN.abbr);
    });
  });

  it('#getData', () => {
    expect(locale.getData('exception').backToHome).toBe(zhCN.exception.backToHome);
    expect(Object.keys(locale.getData('invalid-key' as any)).length).toBe(0);
  });

  it('#change', done => {
    locale.change.pipe(filter(l => l.abbr === enUS.abbr)).subscribe(() => {
      expect(true).toBe(true);
      done();
    });
    locale.setLocale(enUS);
  });
});
