import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { _HttpClient } from '@yelon/theme';
import { YunzaiResponse } from '@yelon/util';

import { YunzaiDormitoryTree, YunzaiDormitoryTreeParam, YunzaiDormitoryTreeType } from './yunzai-dormitory-tree.types';

@Injectable({ providedIn: 'root' })
export class YunzaiDormitoryTreeService {
  constructor(private http: _HttpClient) {}

  tree(
    param: YunzaiDormitoryTreeParam = {
      isPower: false,
      treeType: YunzaiDormitoryTreeType.BUILDING_FLOORS_ROOMS
    }
  ): Observable<YunzaiDormitoryTree[]> {
    return this.http.post(`/auth/dorm/tree`, param).pipe(
      map((response: YunzaiResponse<YunzaiDormitoryTree[]>) => {
        return response.data;
      })
    );
  }
}
