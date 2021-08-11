import { Inject, Pipe, PipeTransform } from '@angular/core';

import { YunzaiI18NService, YUNZAI_I18N_TOKEN } from './i18n';

@Pipe({ name: 'i18n' })
export class I18nPipe implements PipeTransform {
  constructor(@Inject(YUNZAI_I18N_TOKEN) private i18n: YunzaiI18NService) {}

  transform(key: string, params?: Record<string, unknown>): string {
    return this.i18n.fanyi(key, params);
  }
}
