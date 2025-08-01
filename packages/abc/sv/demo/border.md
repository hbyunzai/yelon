---
order: 2
title:
  zh-CN: 带边框的
  en-US: Border
---

## zh-CN

带边框和背景颜色。

## en-US

With border and background color.

```ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SVModule } from '@yelon/abc/sv';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';


@Component({
  selector: 'app-demo',
  template: `
    <div class="mb-md">
      <button nz-button (click)="bordered = !bordered">切换边框</button>
      <nz-radio-group [(ngModel)]="size" class="ml-md">
        <label nz-radio nzValue="default">default</label>
        <label nz-radio nzValue="large">large</label>
        <label nz-radio nzValue="small">small</label>
      </nz-radio-group>
    </div>
    <div sv-container labelWidth="150" [bordered]="bordered" [size]="size">
      <sv label="ID">1</sv>
      <sv label="Name">asdf</sv>
      <sv label="Age">25</sv>
      <sv label="Long Optional Long Optional" optional="(RMB)">Optional</sv>
      <sv label="Optional" optionalHelp="Tips">Optional Help</sv>
      <sv label="Default" optionalHelp="The background color is #f50" optionalHelpColor="#f50" />
      <sv [label]="label" col="1">
        <ng-template #label>
          <a nz-tooltip="test">long</a>
        </ng-template>
        <p>Custom label</p>
        <p>Custom label</p>
        <p>Custom label</p>
      </sv>
    </div>
  `,
  imports: [SVModule, NzButtonModule, NzRadioModule, NzTooltipModule, FormsModule]
})
export class DemoComponent {
  bordered = true;
  size?: 'small' | 'large' | 'default' = 'default';
}
```
