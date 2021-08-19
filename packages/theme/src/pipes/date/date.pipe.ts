import { Pipe, PipeTransform } from '@angular/core';

import { format, formatDistanceToNow } from 'date-fns';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzI18nService } from 'ng-zorro-antd/i18n';

import { toDate } from '@yelon/util/date-time';

@Pipe({ name: '_date' })
export class DatePipe implements PipeTransform {
  constructor(private nzI18n: NzI18nService) {}

  transform(value: Date | string | number, formatString: string = 'yyyy-MM-dd HH:mm'): string {
    value = toDate(value);
    if (isNaN(value as NzSafeAny)) return '';

    const langOpt = { locale: this.nzI18n.getDateLocale() };
    return formatString === 'fn' ? formatDistanceToNow(value, langOpt) : format(value, formatString, langOpt);
  }
}