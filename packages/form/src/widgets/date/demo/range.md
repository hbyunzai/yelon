---
title:
  zh-CN: 范围
  en-US: Data Range
order: 1
---

## zh-CN

一个简单的开始与结束日期，**注意：** `end` 依然需要定义对应的Schema，但会强制隐藏状态。

## en-US

A simple start & end date range, **Note: ** `end` still needs define in schema, but will forced to be hidden.

```ts
import { Component, inject } from '@angular/core';

import { subWeeks } from 'date-fns';

import { YelonFormModule, SFDateWidgetSchema, SFSchema } from '@yelon/form';
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
      start: {
        type: 'string',
        ui: { widget: 'date', end: 'end', separator: '到' } as SFDateWidgetSchema,
        default: new Date()
      },
      end: {
        type: 'string',
        default: subWeeks(new Date(), 6)
      },
      startWeek: {
        type: 'string',
        ui: { widget: 'date', rangeMode: 'week', end: 'endWeek' } as SFDateWidgetSchema,
        default: new Date()
      },
      endWeek: {
        type: 'string',
        default: subWeeks(new Date(), 6)
      },
      startMonth: {
        type: 'string',
        ui: { widget: 'date', rangeMode: 'month', end: 'endMonth' } as SFDateWidgetSchema,
        default: new Date()
      },
      endMonth: {
        type: 'string',
        default: subWeeks(new Date(), 6)
      },
      startYear: {
        type: 'string',
        ui: { widget: 'date', rangeMode: 'year', end: 'endYear' } as SFDateWidgetSchema,
        default: new Date()
      },
      endYear: {
        type: 'string',
        default: subWeeks(new Date(), 6)
      }
    },
    required: ['start']
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
