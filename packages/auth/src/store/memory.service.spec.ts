import { MemoryStore } from './memory.service';
import { ITokenModel } from '../token/interface';

describe('auth: memory', () => {
  const store = new MemoryStore();
  const KEY = 'token';
  const VALUE: ITokenModel = {
    token: 'token data'
  } as ITokenModel;

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
