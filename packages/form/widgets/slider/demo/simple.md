---
title:
  zh-CN: 基础样例
  en-US: Basic Usage
order: 0
---

## zh-CN

最简单的用法。

## en-US

Simplest of usage.

```ts
import { Component, inject } from '@angular/core';

import { YelonFormModule, SFSchema } from '@yelon/form';
import type { SFSliderWidgetSchema } from '@yelon/form/widgets/slider';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" /> `,
  imports: [YelonFormModule]
})
export class DemoComponent {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      count: {
        type: 'number',
        title: '数量',
        ui: {
          widget: 'slider'
        } as SFSliderWidgetSchema,
        default: 10
      },
      // 双滑块模式
      range: {
        type: 'number',
        title: '范围',
        ui: {
          widget: 'slider',
          range: true
        } as SFSliderWidgetSchema,
        default: [10, 20]
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
