import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { _HttpClient } from '@yelon/theme';
import { YunzaiResponse } from '@yelon/util';

import { YunzaiRoleTree } from './yunzai-role-tree.types';

@Injectable()
export class YunzaiRoleTreeService {
  private readonly http: _HttpClient = inject(_HttpClient);
  tree(roleGroupCode?: string): Observable<YunzaiRoleTree[]> {
    return this.http.post(`/auth/baseRole/findGroupRole`, { roleGroupCode: roleGroupCode }).pipe(
      map((response: YunzaiResponse<YunzaiRoleTree[]>) => {
        return response.data;
      })
    );
  }
}
