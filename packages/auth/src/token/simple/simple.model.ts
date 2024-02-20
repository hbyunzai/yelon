import { ITokenModel } from '../interface';

export class SimpleTokenModel implements ITokenModel {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;

  access_token: string | null | undefined;

  expires_in?: number;
}
