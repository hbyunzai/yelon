import { InjectionToken } from '@angular/core';

import { YA_STORE_TOKEN_LOCAL_FACTORY } from './local-storage.service';
import { ITokenModel } from '../token/interface';

export const YA_STORE_TOKEN = new InjectionToken<IStore>('AUTH_STORE_TOKEN', {
  providedIn: 'root',
  factory: YA_STORE_TOKEN_LOCAL_FACTORY
});

export interface IStore {
  get(key: string): ITokenModel;

  set(key: string, value: ITokenModel): boolean;

  remove(key: string): void;
}
