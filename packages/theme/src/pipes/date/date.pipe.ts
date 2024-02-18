import { Pipe, PipeTransform, inject } from '@angular/core';

import { YunzaiConfigService } from '@yelon/util/config';
import { formatDate } from '@yelon/util/date-time';
import { NzI18nService } from 'ng-zorro-antd/i18n';

@Pipe({ name: '_date', standalone: true })
export class DatePipe implements PipeTransform {
  private nzI18n = inject(NzI18nService);
  private defFormat = inject(YunzaiConfigService).get('themePipe')?.dateFormat ?? 'yyyy-MM-dd HH:mm';

  transform(value: Date | string | number, formatString?: string | null): string {
    return formatDate(value, formatString ?? this.defFormat, this.nzI18n.getDateLocale());
  }
}
