import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { _HttpClient } from '@yelon/theme';
import { YunzaiResponse } from '@yelon/util';

import { YunzaiRoleTree } from './yunzai-role-tree.types';

@Injectable({ providedIn: 'root' })
export class YunzaiRoleTreeService {
  constructor(private http: _HttpClient) {}

  tree(roleGroupCode?: string): Observable<YunzaiRoleTree[]> {
    return this.http.post(`/auth/baseRole/findGroupRole`, { roleGroupCode: roleGroupCode }).pipe(
      map((response: YunzaiResponse<YunzaiRoleTree[]>) => {
        return response.data;
      })
    );
  }
}
