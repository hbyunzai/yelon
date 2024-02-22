import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { _HttpClient } from '@yelon/theme';
import { YunzaiResponse } from '@yelon/util';

import { YunzaiFriendGroup } from './yunzai-friend-group.types';

@Injectable()
export class YunzaiFriendGroupService {
  private readonly http: _HttpClient = inject(_HttpClient);

  groups(): Observable<YunzaiFriendGroup[]> {
    return this.http.post('/contact/appcontact/findGroup', {}).pipe(
      map((response: YunzaiResponse<YunzaiFriendGroup[]>) => {
        return response.data;
      })
    );
  }
}
