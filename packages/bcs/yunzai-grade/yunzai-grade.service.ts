import { inject } from '@angular/core';
import { map, Observable } from 'rxjs';

import { _HttpClient } from '@yelon/theme';
import { YunzaiResponse } from '@yelon/util';

import { YunzaiGrade } from './yunzai-grade.types';

export class YunzaiGradeService {
  private readonly http: _HttpClient = inject(_HttpClient);

  grades(): Observable<YunzaiGrade[]> {
    return this.http.get(`/auth/gradeYear/queryListForPage`).pipe(
      map((response: YunzaiResponse<YunzaiGrade[]>) => {
        return response.data;
      })
    );
  }
}
