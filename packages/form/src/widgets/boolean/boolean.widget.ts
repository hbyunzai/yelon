import { Component, ViewEncapsulation } from '@angular/core';

import { SFBooleanWidgetSchema } from './schema';
import { ControlUIWidget } from '../../widget';

@Component({
  selector: 'sf-boolean',
  template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-switch
      [ngModel]="value"
      (ngModelChange)="setValue($event)"
      [nzDisabled]="disabled"
      [nzSize]="ui.size!"
      [nzCheckedChildren]="ui.checkedChildren!"
      [nzUnCheckedChildren]="ui.unCheckedChildren!"
      [nzLoading]="ui.loading"
    />
  </sf-item-wrap>`,

  encapsulation: ViewEncapsulation.None,
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class BooleanWidget extends ControlUIWidget<SFBooleanWidgetSchema> {}
