import { TestBed } from '@angular/core/testing';

import { CookieOptions, CookieService } from '@yelon/util/browser';

import { CookieStorageStore } from './cookie-storage.service';
import { ITokenModel } from '../token/interface';

describe('auth: cookie-storage', () => {
  let data: Record<string, any> = {};
  let putSpy: jasmine.Spy;
  let store: CookieStorageStore;
  const KEY = 'token';
  const VALUE: ITokenModel = {
    access_token: 'token data'
  } as ITokenModel;

  beforeEach(() => {
    data = {};
    putSpy = jasmine.createSpy('put').and.callFake((key: string, value: string) => (data[key] = value));
    TestBed.configureTestingModule({
      providers: [
        {
          provide: CookieService,
          useValue: {
            put: putSpy,
            get: jasmine.createSpy('get').and.callFake((key: string) => data[key]),
            remove: jasmine.createSpy('remove').and.callFake((key: string) => {
              delete data[key];
            })
          }
        },
        CookieStorageStore
      ]
    });
    store = TestBed.inject(CookieStorageStore);
  });

  it('should be never return null', () => {
    store.set(KEY, null);
    const ret = store.get(KEY);
    expect(ret).not.toBeNull();
  });

  it('should be parse error', () => {
    data['error'] = `{a`;
    const ret = store.get('error');
    console.log(ret);
  });

  it('#get', () => {
    store.set(KEY, VALUE);
    const ret = store.get(KEY);
    expect(ret).not.toBeNull();
    expect(ret.access_token).toBe(VALUE.access_token);

    const invalidRet = store.get('asdf');
    expect(invalidRet).not.toBeNull();
    expect(invalidRet.access_token).toBeUndefined();
  });

  describe('#set', () => {
    it('should be working', () => {
      store.set(KEY, VALUE);
      let ret = store.get(KEY);
      expect(ret).not.toBeNull();
      expect(ret.access_token).toBe(VALUE.access_token);

      // when is null or undefined
      store.set(KEY, undefined);
      ret = store.get(KEY);
      expect(ret).not.toBeNull();
      expect(Object.keys(ret).length).toBe(0);
    });
    it('should be set expired', () => {
      store.set(KEY, { ...VALUE, expires_in: 1000 * 3 });
      const args = putSpy.calls.first().args;
      expect(args.length).toBe(3);
      const options = args[2] as CookieOptions;
      expect(typeof options.expires === 'number' && options.expires > 0).toBe(true);
    });
  });

  it('#remove', () => {
    store.set(KEY, VALUE);
    store.remove(KEY);
    const ret = store.get(KEY);
    expect(ret).not.toBeNull();
    expect(ret.access_token).toBeUndefined();
  });
});
