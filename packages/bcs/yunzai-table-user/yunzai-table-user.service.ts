import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

import { _HttpClient } from '@yelon/theme';
import { Page, YunzaiPageResponse, YunzaiResponse } from '@yelon/util';

import { YunzaiTableUser, YunzaiTableUserParam } from './yunzai-table-user.types';

@Injectable()
export class YunzaiTableUserService {
  private readonly http: _HttpClient = inject(_HttpClient);

  users(page: Page<YunzaiTableUserParam>): Observable<YunzaiPageResponse<YunzaiTableUser>> {
    return this.http.post(`/auth/baseUser/queryListForPage`, page).pipe(
      map((response: YunzaiPageResponse<YunzaiTableUser>) => {
        return response;
      }),
      catchError(e => {
        return throwError(e);
      })
    );
  }

  usersByIds(ids: string[]): Observable<YunzaiTableUser[]> {
    return this.http.post(`/auth/baseUser/users`, { userIds: ids }).pipe(
      map((response: YunzaiResponse<YunzaiTableUser[]>) => {
        return response.data;
      })
    );
  }
}
