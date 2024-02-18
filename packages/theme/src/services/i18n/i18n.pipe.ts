import { Pipe, PipeTransform, inject } from '@angular/core';

import { YUNZAI_I18N_TOKEN } from './i18n';

@Pipe({ name: 'i18n', standalone: true })
export class I18nPipe implements PipeTransform {
  private readonly i18n = inject(YUNZAI_I18N_TOKEN);

  transform(key: string, params?: unknown | unknown[]): string {
    return this.i18n.fanyi(key, params);
  }
}
