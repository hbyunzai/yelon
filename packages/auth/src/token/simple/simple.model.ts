import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { ITokenModel } from '../interface';

export class SimpleTokenModel implements ITokenModel {
  [key: string]: NzSafeAny;
  access_token?: string | null;
  expires_in?: number;
  refresh_token?: string;
  scope?: string;
  token_type?: string;
}
