import { ITokenModel } from '../token/interface';
import { IStore } from './interface';

/**
 * `sessionStorage` storage, **lost after closing the browser**.
 *
 * ```ts
 provideHttpClient(withInterceptors([...(environment.interceptorFns ?? []), authJWTInterceptor, defaultInterceptor])),
 provideAuth(withSessionStorage()),
 * ```
 */
export class SessionStorageStore implements IStore {
  get(key: string): ITokenModel {
    return JSON.parse(sessionStorage.getItem(key) || '{}') || {};
  }

  set(key: string, value: ITokenModel | null): boolean {
    sessionStorage.setItem(key, JSON.stringify(value));
    return true;
  }

  remove(key: string): void {
    sessionStorage.removeItem(key);
  }
}
