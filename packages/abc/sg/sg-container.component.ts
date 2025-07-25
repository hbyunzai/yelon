import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, inject, numberAttribute } from '@angular/core';

import type { REP_TYPE } from '@yelon/theme';
import { YunzaiConfigService } from '@yelon/util/config';

@Component({
  selector: 'sg-container, [sg-container]',
  exportAs: 'sgContainer',
  template: ` <ng-content /> `,
  host: {
    '[style.margin-left.px]': 'marginValue',
    '[style.margin-right.px]': 'marginValue',
    '[class.ant-row]': 'true',
    '[class.sg__wrap]': 'true'
  },

  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SGContainerComponent {
  private readonly cogSrv = inject(YunzaiConfigService);
  @Input({ transform: numberAttribute }) gutter!: number;
  @Input({ alias: 'sg-container', transform: (v: unknown) => (v == null ? null : numberAttribute(v)) })
  colInCon?: REP_TYPE;
  @Input({ transform: (v: unknown) => (v == null ? null : numberAttribute(v)) }) col!: REP_TYPE;

  get marginValue(): number {
    return -(this.gutter / 2);
  }

  constructor() {
    this.cogSrv.attach(this, 'sg', {
      gutter: 32,
      col: 2
    });
  }
}
