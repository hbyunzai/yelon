import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

import { _HttpClient } from '@yelon/theme';
import { Page, YunzaiPageResponse } from '@yelon/util';

import { YunzaiTableUser, YunzaiTableUserParam } from './yunzai-table-user.types';

@Injectable({ providedIn: 'root' })
export class YunzaiTableUserService {
  constructor(private http: _HttpClient) {}

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
}
