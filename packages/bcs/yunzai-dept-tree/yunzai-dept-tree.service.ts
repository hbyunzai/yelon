import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

import { _HttpClient } from '@yelon/theme';
import { YunzaiResponse } from '@yelon/util';

import { YUNZAI_DEPT_TYPES, YunzaiDeptTree } from './yunzai-dept-tree.types';

@Injectable({ providedIn: 'root' })
export class YunzaiDeptTreeService {
  constructor(private http: _HttpClient) {}

  /**
   * @param includeClass include class
   * @param history include history class
   */
  tree(includeClass: boolean, history: boolean): Observable<YunzaiDeptTree[]>;

  /**
   * @param includeClass include class
   * @param history include history class
   * @param types dept types
   */
  tree(includeClass: boolean, history: boolean, types?: YUNZAI_DEPT_TYPES[]): Observable<YunzaiDeptTree[]>;

  /**
   * @param includeClass include class
   * @param history include history class
   * @param types dept types
   * @param gradeId gradeId
   */
  tree(
    includeClass: boolean,
    history: boolean,
    types?: YUNZAI_DEPT_TYPES[],
    gradeId?: string
  ): Observable<YunzaiDeptTree[]>;

  /**
   * @param includeClass include class
   * @param history include history class
   * @param types dept types
   * @param gradeId gradeId
   */
  tree(
    includeClass: boolean,
    history: boolean,
    types?: YUNZAI_DEPT_TYPES[],
    gradeId?: string
  ): Observable<YunzaiDeptTree[]> {
    let params = Object.create({});
    if (includeClass) {
      params['includeClass'] = true;
    }
    if (history) {
      params['includeHisClass'] = true;
    }
    if (types) {
      params['deptType'] = types.join(',');
    }
    if (gradeId) {
      params['gradeId'] = gradeId;
    }
    return this.http.get('/auth/baseDepartMent/tree', params).pipe(
      map((response: YunzaiResponse<YunzaiDeptTree[]>) => {
        return response.data;
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }
}
