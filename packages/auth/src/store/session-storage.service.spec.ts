import { SessionStorageStore } from './session-storage.service';
import { ITokenModel } from '../token/interface';

describe('auth: session-storage', () => {
  const store = new SessionStorageStore();
  const KEY = 'access_token';
  const VALUE: ITokenModel = {
    access_token: 'token data'
  } as ITokenModel;

  beforeEach(() => {
    let data: Record<string, any> = {};

    spyOn(sessionStorage, 'getItem').and.callFake((key: string): string => {
      return data[key] || null;
    });
    spyOn(sessionStorage, 'removeItem').and.callFake((key: string): void => {
      delete data[key];
    });
    spyOn(sessionStorage, 'setItem').and.callFake((key: string, value: string): string => {
      return (data[key] = value as string);
    });
    spyOn(sessionStorage, 'clear').and.callFake(() => {
      data = {};
    });
  });

  it('should be never return null', () => {
    store.set(KEY, null);
    const ret = store.get(KEY);
    expect(ret).not.toBeNull();
  });

  describe('[property]', () => {
    it('#get', () => {
      store.set(KEY, VALUE);
      const ret = store.get(KEY);
      expect(ret).not.toBeNull();
      expect(ret.access_token).toBe(VALUE.access_token);
      const invalidRet = store.get('asdf');
      expect(invalidRet).not.toBeNull();
      expect(invalidRet.access_token).toBeUndefined();
    });

    it('#set', () => {
      store.set(KEY, VALUE);
      const ret = store.get(KEY);
      expect(ret).not.toBeNull();
      expect(ret.access_token).toBe(VALUE.access_token);
    });

    it('#remove', () => {
      store.set(KEY, VALUE);
      store.remove(KEY);
      const ret = store.get(KEY);
      expect(ret).not.toBeNull();
      expect(ret.access_token).toBeUndefined();
    });
  });
});
