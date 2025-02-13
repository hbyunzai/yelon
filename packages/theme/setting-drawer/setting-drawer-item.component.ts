import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';
import { NzSwitchComponent } from 'ng-zorro-antd/switch';

@Component({
  selector: 'setting-drawer-item',
  templateUrl: './setting-drawer-item.component.html',
  host: {
    '[class.setting-drawer__body-item]': 'true'
  },
  imports: [FormsModule, NzInputDirective, NzInputNumberComponent, NzSwitchComponent, NzDrawerModule]
})
export class SettingDrawerItemComponent {
  i: any = {};

  @Input()
  set data(val: any) {
    this.i = val;
    if (val.type === 'px') {
      this.pxVal = +val.value.replace('px', '');
    }
  }

  pxVal = 0;

  pxChange(val: number): void {
    this.i.value = `${val}px`;
  }

  format = (value: number): string => `${value} px`;
}
