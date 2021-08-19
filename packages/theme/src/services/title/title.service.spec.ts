import { DOCUMENT } from '@angular/common';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { YunzaiThemeModule } from '../../theme.module';
import { YunzaiI18NService, YunzaiI18NServiceFake, YUNZAI_I18N_TOKEN } from '../i18n/i18n';
import { Menu } from '../menu/interface';
import { MenuService } from '../menu/menu.service';
import { TitleService } from './title.service';

describe('Service: Title', () => {
  let getPathByUrlData: NzSafeAny;
  class TestTitleService {
    setTitle = jasmine.createSpy('reset');
  }

  class TestMenuService {
    getPathByUrl(): Menu[] {
      return getPathByUrlData;
    }
  }

  class TestDocument {
    querySelector(): NzSafeAny {
      return {
        childNodes: [],
        firstChild: {
          textContent: 'a'
        }
      };
    }
  }

  let title: TestTitleService;
  let srv: TitleService;
  let i18n: YunzaiI18NService;
  const yunzai = 'Yunzai';
  const notPageName = 'Not Page Name';

  function genModule(providers: NzSafeAny[] = [], loadI18n: boolean = true): void {
    const i18nProvider: NzSafeAny[] = loadI18n ? [{ provide: YUNZAI_I18N_TOKEN, useClass: YunzaiI18NServiceFake }] : [];
    TestBed.configureTestingModule({
      imports: [YunzaiThemeModule, RouterTestingModule],
      providers: [TitleService, MenuService, { provide: Title, useClass: TestTitleService }, ...i18nProvider].concat(
        providers
      )
    });
    title = TestBed.inject<Title>(Title) as NzSafeAny;
    srv = TestBed.inject<TitleService>(TitleService);
    i18n = TestBed.inject(YUNZAI_I18N_TOKEN);
  }

  afterEach(() => srv.ngOnDestroy());

  describe('[default]', () => {
    beforeEach(() => genModule());

    it('should set the default empty title', fakeAsync(() => {
      srv.suffix = yunzai;
      srv.setTitle();
      tick(srv.DELAY_TIME + 1);
      expect(title.setTitle).toHaveBeenCalledWith(`${notPageName} - ${yunzai}`);
    }));

    it('should set new title', fakeAsync(() => {
      srv.suffix = yunzai;
      srv.setTitle('newTitle');
      tick(srv.DELAY_TIME + 1);
      expect(title.setTitle).toHaveBeenCalledWith(`newTitle - ${yunzai}`);
    }));

    it('should set new title via array', fakeAsync(() => {
      srv.suffix = yunzai;
      srv.setTitle(['newTitle']);
      tick(srv.DELAY_TIME + 1);
      expect(title.setTitle).toHaveBeenCalledWith(`newTitle - ${yunzai}`);
    }));

    it('#separator', fakeAsync(() => {
      srv.suffix = yunzai;
      srv.separator = ' / ';
      srv.setTitle('newTitle');
      tick(srv.DELAY_TIME + 1);
      expect(title.setTitle).toHaveBeenCalledWith(`newTitle / ${yunzai}`);
    }));

    it('#prefix', fakeAsync(() => {
      srv.prefix = yunzai;
      srv.setTitle('newTitle');
      tick(srv.DELAY_TIME + 1);
      expect(title.setTitle).toHaveBeenCalledWith(`${yunzai} - newTitle`);
    }));

    it('#reverse', fakeAsync(() => {
      srv.reverse = true;
      srv.suffix = yunzai;
      srv.setTitle('newTitle');
      tick(srv.DELAY_TIME + 1);
      expect(title.setTitle).toHaveBeenCalledWith(`${yunzai} - newTitle`);
    }));

    it('#default', fakeAsync(() => {
      const def = 'DEFAULT';
      srv.default = def;
      srv.setTitle();
      tick(srv.DELAY_TIME + 1);
      expect(title.setTitle).toHaveBeenCalledWith(def);
    }));
  });

  describe('[logic]', () => {
    describe('should be hava title via route data property', () => {
      it('with text', fakeAsync(() => {
        genModule([
          {
            provide: ActivatedRoute,
            useValue: {
              firstChild: {
                snapshot: {
                  data: {
                    title: yunzai
                  }
                }
              }
            }
          }
        ]);
        srv.setTitle();
        tick(srv.DELAY_TIME + 1);
        expect(title.setTitle).toHaveBeenCalledWith(yunzai);
      }));
      it('without', fakeAsync(() => {
        genModule([
          {
            provide: ActivatedRoute,
            useValue: {}
          }
        ]);
        srv.setTitle();
        tick(srv.DELAY_TIME + 1);
        expect(title.setTitle).toHaveBeenCalledWith(notPageName);
      }));
      it('with i18n', fakeAsync(() => {
        const titleI18n = 'a';
        genModule([
          {
            provide: ActivatedRoute,
            useValue: {
              snapshot: {
                data: {
                  titleI18n
                }
              }
            }
          }
        ]);
        spyOn(i18n, 'fanyi');
        srv.setTitle();
        tick(srv.DELAY_TIME + 1);
        expect(i18n.fanyi).toHaveBeenCalled();
      }));
    });

    describe('should be hava title via menu data property', () => {
      it('with text', fakeAsync(() => {
        getPathByUrlData = [{ text: 'home' }];
        genModule([{ provide: MenuService, useClass: TestMenuService }]);
        srv.setTitle();
        tick(srv.DELAY_TIME + 1);
        expect(title.setTitle).toHaveBeenCalledWith(getPathByUrlData[0].text);
      }));
      it('with i18n', fakeAsync(() => {
        getPathByUrlData = [{ text: 'home', i18n: 'a' }];
        genModule([{ provide: MenuService, useClass: TestMenuService }]);
        srv.setTitle();
        tick(srv.DELAY_TIME + 1);
        expect(title.setTitle).toHaveBeenCalledWith(getPathByUrlData[0].i18n);
      }));
      it('without menu data', fakeAsync(() => {
        getPathByUrlData = [];
        genModule([{ provide: MenuService, useClass: TestMenuService }]);
        srv.setTitle();
        tick(srv.DELAY_TIME + 1);
        expect(title.setTitle).toHaveBeenCalledWith(notPageName);
      }));
    });

    describe('should be hava title via element', () => {
      it('with element', fakeAsync(() => {
        genModule([{ provide: DOCUMENT, useClass: TestDocument }]);
        srv.setTitle();
        tick(srv.DELAY_TIME + 1);
        expect(title.setTitle).toHaveBeenCalledWith('a');
      }));
      it('without element', fakeAsync(() => {
        genModule([]);
        srv.setTitle();
        tick(srv.DELAY_TIME + 1);
        expect(title.setTitle).toHaveBeenCalledWith(notPageName);
      }));
    });
  });

  describe('[i18n]', () => {
    it('should be set when not i18n service', fakeAsync(() => {
      genModule([], false);
      srv.suffix = yunzai;
      srv.setTitle();
      tick(srv.DELAY_TIME + 1);
      expect(title.setTitle).toHaveBeenCalledWith(`${notPageName} - ${yunzai}`);
    }));
    it('should be reset title when i18n has changed', () => {
      genModule();
      spyOn(srv, 'setTitle');
      i18n.use('en', {});
      expect(srv.setTitle).toHaveBeenCalled();
    });
    it('#setTitleByI18n', fakeAsync(() => {
      genModule([], true);
      srv.suffix = yunzai;
      const key = 'aa';
      srv.setTitleByI18n(key);
      tick(srv.DELAY_TIME + 1);
      expect(title.setTitle).toHaveBeenCalledWith(`${key} - ${yunzai}`);
    }));
  });
});