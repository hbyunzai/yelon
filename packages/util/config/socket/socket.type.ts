import { RxStompConfig } from '@stomp/rx-stomp';

export interface YunzaiSocketConfig extends RxStompConfig {
  baseUrl: string;
}
