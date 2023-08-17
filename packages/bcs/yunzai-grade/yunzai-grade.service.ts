import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { _HttpClient } from '@yelon/theme';
import { YunzaiResponse } from '@yelon/util';

import { YunzaiGrade } from './yunzai-grade.types';

@Injectable({ providedIn: 'root' })
export class YunzaiGradeService {
  constructor(private http: _HttpClient) {}

  grades(): Observable<YunzaiGrade[]> {
    return this.http.get(`/auth/gradeYear/queryListForPage`).pipe(
      map((response: YunzaiResponse<YunzaiGrade[]>) => {
        return response.data;
      })
    );
  }
}
