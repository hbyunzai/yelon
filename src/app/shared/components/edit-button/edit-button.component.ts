import { Component, Inject, Input } from '@angular/core';

import { YUNZAI_I18N_TOKEN } from '@yelon/theme';

import { I18NService, MetaService } from '@core';

@Component({
  selector: 'edit-button',
  template: `
    <a
      href="{{ _full }}"
      target="_blank"
      class="edit-button"
      nz-tooltip
      nzTooltipTitle="{{ 'app.content.edit-page' | i18n }}"
    >
      <i nz-icon nzType="edit"></i>
    </a>
  `
})
export class EditButtonComponent {
  _full: string;

  @Input()
  set item(data: { urls: string }) {
    this._full = `${this.meta.github}/edit/master/${this.i18n.get(data.urls)}`;
  }

  constructor(private meta: MetaService, @Inject(YUNZAI_I18N_TOKEN) private i18n: I18NService) {}
}