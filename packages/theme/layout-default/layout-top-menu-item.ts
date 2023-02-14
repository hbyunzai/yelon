import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

import { BooleanInput, InputBoolean } from '@yelon/util/decorator';

@Component({
  selector: 'layout-default-top-menu-item',
  template: `<ng-content></ng-content>`,
  host: {
    '[class.yunzai-default__nav-item]': `true`,
    '[class.yunzai-default__top-menu-item]': `true`,
    '[class.yunzai-default__top-menu-item-selected]': `selected`,
    '[class.yunzai-default__top-menu-item-disabled]': `disabled`
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class LayoutDefaultTopMenuItemComponent {
  static ngAcceptInputType_selected: BooleanInput;
  static ngAcceptInputType_disabled: BooleanInput;

  @Input() @InputBoolean() selected = false;
  @Input() @InputBoolean() disabled = false;
}
