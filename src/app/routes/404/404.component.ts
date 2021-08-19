import { Component, Inject } from '@angular/core';

import { YUNZAI_I18N_TOKEN } from '@yelon/theme';

import { I18NService } from '@core';

@Component({
  selector: 'not-found',
  templateUrl: './404.component.html'
})
export class NotFoundComponent {
  constructor(@Inject(YUNZAI_I18N_TOKEN) public i18n: I18NService) {}
}