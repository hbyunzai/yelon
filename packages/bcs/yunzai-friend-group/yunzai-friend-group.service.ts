import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { _HttpClient } from '@yelon/theme';
import { YunzaiResponse } from '@yelon/util';

import { YunzaiFriendGroup } from './yunzai-friend-group.types';

@Injectable({
  providedIn: 'root'
})
export class YunzaiFriendGroupService {
  constructor(private http: _HttpClient) {}

  groups(): Observable<YunzaiFriendGroup[]> {
    return this.http.post('/contact/appcontact/findGroup', {}).pipe(
      map((response: YunzaiResponse<YunzaiFriendGroup[]>) => {
        return response.data;
      })
    );
  }
}
