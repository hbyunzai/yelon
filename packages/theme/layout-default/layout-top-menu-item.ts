import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, booleanAttribute } from '@angular/core';

@Component({
  selector: 'layout-default-top-menu-item',
  template: `<ng-content />`,
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
  @Input({ transform: booleanAttribute }) selected = false;
  @Input({ transform: booleanAttribute }) disabled = false;
}
