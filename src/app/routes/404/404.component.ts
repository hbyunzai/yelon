import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { YUNZAI_I18N_TOKEN } from '@yelon/theme';

@Component({
  selector: 'not-found',
  templateUrl: './404.component.html',
  standalone: true,
  imports: [RouterLink]
})
export class NotFoundComponent {
  readonly i18n = inject(YUNZAI_I18N_TOKEN);
}
