import { DOCUMENT } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { discardPeriodicTasks, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DefaultUrlSerializer, Router, provideRouter } from '@angular/router';

import { SocialService } from './social.service';
import { YA_SERVICE_TOKEN, ITokenModel } from '../token/interface';
import { SimpleTokenModel } from '../token/simple/simple.model';

const mockRouter = {
  url: '',
  navigate: jasmine.createSpy('navigate'),
  navigateByUrl: jasmine.createSpy('navigateByUrl'),
  parseUrl: jasmine.createSpy('parseUrl').and.callFake((value: any) => {
    return new DefaultUrlSerializer().parse(value);
  })
};

class MockDocument {
  location = new MockLocation();
  querySelectorAll(): any {
    return {};
  }
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

const MockAuth0 = {
  type: 'auth0',
  url: `//yunzai-bot.auth0.com/login?client=8gcNydIDzGBYxzqV0Vm1CX_RXH-wsWo5&redirect_uri=${decodeURIComponent('http://localhost:4200/#/login/callback')}`,
  be: { client: '8gcNydIDzGBYxzqV0Vm1CX_RXH-wsWo5' },
  model: { client: '8gcNydIDzGBYxzqV0Vm1CX_RXH-wsWo5', access_token: '123' }
};

describe('auth: social.service', () => {
  let srv: SocialService;

  function genModule(tokenData?: SimpleTokenModel): void {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([]), SocialService, { provide: DOCUMENT, useClass: MockDocument }, { provide: Router, useValue: mockRouter }]
    });
    if (tokenData) TestBed.inject(YA_SERVICE_TOKEN).set(tokenData);

    srv = TestBed.inject<SocialService>(SocialService);
  }

  beforeEach(() => {
    genModule();
  });

  afterEach(() => srv.ngOnDestroy());

  describe('#login', () => {
    [MockAuth0].forEach((item: any) => {
      it(`${item.type} via href`, () => {
        srv.login(item.url, '/', { type: 'href' });
        const ret = TestBed.inject(DOCUMENT).location.href;
        Object.keys(item.be).forEach(key => {
          const expected = `${key}=${item.be[key]}`;
          expect(ret).withContext(`muse contain "${expected}"`).toContain(expected);
        });
      });

      it(`${item.type} via window`, fakeAsync(() => {
        const mockWindowOpen = (): { closed: boolean } => {
          TestBed.inject(YA_SERVICE_TOKEN).set(item.model);
          return { closed: true };
        };
        spyOn(window, 'open').and.callFake(mockWindowOpen as any);
        srv.login(item.url).subscribe(() => {});
        tick(130);
        expect(window.open).toHaveBeenCalled();
        const token = TestBed.inject(YA_SERVICE_TOKEN).get()!;
        Object.keys(item.be).forEach(key => {
          expect(token[key]).toContain(item.be[key]);
        });
        discardPeriodicTasks();
      }));
    });

    it(`should be return null model if set a null in window`, fakeAsync(() => {
      const mockWindowOpen = (): { closed: boolean } => {
        TestBed.inject(YA_SERVICE_TOKEN).set(null);
        return { closed: true };
      };
      spyOn(window, 'open').and.callFake(mockWindowOpen as any);
      srv.login(MockAuth0.url).subscribe(() => {});
      tick(130);
      expect(window.open).toHaveBeenCalled();
      discardPeriodicTasks();
    }));

    it(`can't get model until closed`, fakeAsync(() => {
      spyOn(srv, 'ngOnDestroy');
      const mockWindowOpen = (): { closed: boolean } => {
        TestBed.inject(YA_SERVICE_TOKEN).set(null);
        return { closed: false };
      };
      spyOn(window, 'open').and.callFake(mockWindowOpen as any);
      srv.login(MockAuth0.url).subscribe(() => {});
      tick(130);
      expect(window.open).toHaveBeenCalled();
      expect(srv.ngOnDestroy).not.toHaveBeenCalled();
      discardPeriodicTasks();
    }));
  });

  describe('#callback', () => {
    const jwtToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NfdG9rZW4iOiIxMjM0NTY3ODkwLTM0NTY3ODkwIiwidXNlciI6Inl1bnphaS1ib3QiLCJ1aWQiOjEsInJvbGUiOiJhZG1pbiIsInBlcm1pc3Npb24iOlsxLDIsMyw0XX0.okVgOIadKQBFy6CC-TsRfr7203lSBTO-m5ZgJ0__BjI`;
    const swtData: ITokenModel = {
      access_token: '1234567890-34567890',
      user: 'yunzai-bot',
      uid: 1,
      role: 'admin',
      permission: [1, 2, 3, 4]
    };
    [
      {
        summary: 'swt via url',
        url: 'http://localhost:4200/login/callback?access_token=40SOJV-L8oOwwUIs&name=yunzai-bot&uid=1',
        be: { access_token: '40SOJV-L8oOwwUIs', name: 'yunzai-bot', uid: '1' }
      },
      {
        summary: 'jwt via url',
        url: `http://localhost:4200/login/callback?access_token=${jwtToken}`,
        be: { access_token: jwtToken }
      },
      {
        summary: 'url muse contain a ?',
        url: 'http://localhost:4200/callback',
        be: 'throw'
      },
      {
        summary: 'invalide token data',
        url: 'http://localhost:4200/?code=40SOJV-L8oOwwUIs#/login/callback',
        be: 'throw'
      },
      { summary: 'via ITokenModel', url: swtData, be: swtData }
    ].forEach((item: any) => {
      it(`${item.summary}`, () => {
        if (item.be === 'throw') {
          const router = TestBed.inject<Router>(Router) as any;
          router.url = item.url;
          expect(() => {
            srv.callback(null);
          }).toThrow();
          return;
        }
        const ret = srv.callback(item.url);
        Object.keys(item.be).forEach(key => {
          expect(ret[key]).toBe(item.be[key]);
        });
      });
    });
  });
});
