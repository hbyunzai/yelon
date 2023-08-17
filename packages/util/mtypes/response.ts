import { YunzaiPageResult } from './page';

export interface YunzaiResponse<T> {
  data: T;
  errorMessage: string;
  message: string;
}

export type YunzaiPageResponse<T> = YunzaiResponse<YunzaiPageResult<T>>;
