import { ITokenModel } from '../interface';

export class SimpleTokenModel implements ITokenModel {
  [key: string]: any;

  access_token: string | null | undefined;

  expires_in?: number;
}
