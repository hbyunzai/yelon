---
order: 2
title:
  zh-CN: 列类型
  en-US: Column type
---

## zh-CN

支持十种不同列类型：行号、多选、单选、徽标、标签、图片、数字、货币、日期、布尔徽章、枚举。也可以使用自定义列完成更复杂渲染。

## en-US

Support for ten different column types: no, checkbox, radio, badge, tag, image, number, currency, date, boolean badge, enum.

```ts
import { Component } from '@angular/core';

import { STColumn, STColumnBadge, STColumnTag, STData, STModule } from '@yelon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';

const BADGE: STColumnBadge = {
  1: { text: '成功', color: 'success' },
  2: { text: '错误', color: 'error', tooltip: 'TIPS' },
  3: { text: '进行中', color: 'processing' },
  4: { text: '默认', color: 'default' },
  5: { text: '警告', color: 'warning' }
};
const TAG: STColumnTag = {
  1: { text: '成功', color: 'green' },
  2: { text: '错误', color: 'red' },
  3: { text: '进行中', color: 'blue' },
  4: { text: '默认', color: '' },
  5: { text: '警告', color: 'orange', tooltip: 'TIPS' }
};
const r = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min);

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button (click)="reload()">Reload</button>
    <st #st [data]="users" [columns]="columns" [page]="{ position: 'both' }" />
  `,
  imports: [STModule, NzButtonModule]
})
export class DemoComponent {
  users: STData[] = [];
  columns: STColumn[] = [
    { title: '行号', type: 'no' },
    { title: '姓名', index: 'name' },
    { title: '年龄', index: 'age', type: 'number' },
    { title: 'HTML', index: 'html', safeType: 'safeHtml' },
    { title: 'Text', index: 'html', safeType: 'text' },
    { title: 'tag', index: 'tag', type: 'tag', tag: TAG },
    { title: 'badge', index: 'badge', type: 'badge', badge: BADGE },
    { title: 'Enum', index: 'enum', type: 'enum', enum: { 1: '壹', 2: '贰', 3: '叁' } },
    { title: 'yn', index: 'yn', type: 'yn' }
  ];

  reload(): void {
    this.users = Array(10)
      .fill({})
      .map((_, idx) => ({
        id: idx + 1,
        name: `name ${idx + 1}`,
        age: r(10, 50),
        tag: r(1, 5),
        badge: r(1, 5),
        enum: r(1, 3),
        yn: [true, false][r(1, 5) % 2],
        html: `<strong>${idx + 1}</strong> Other`
      }));
  }

  constructor() {
    this.reload();
  }
}
```
