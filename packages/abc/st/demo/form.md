---
order: 4
title:
  zh-CN: 搜索表单
  en-US: Search form
---

## zh-CN

配合 `load()` & `reset()` 实现搜索表单。

## en-US

Implement search form with `load()` & `reset()`.

```ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { STColumn, STModule } from '@yelon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-demo',
  template: `
    <div class="mb-md">
      <input
        nz-input
        [(ngModel)]="params.name"
        name="name"
        nzPlaceHolder="请输入姓名"
        style="width: 100px;"
        class="mr-sm"
      />
      <button nz-button (click)="st.load(1)" [nzType]="'primary'">搜索</button>
      <button nz-button (click)="params = {}; st.reset()">重置</button>
    </div>
    <st #st [data]="url" [req]="{ params: params }" [columns]="columns" />
  `,
  imports: [STModule, NzInputModule, FormsModule, NzButtonModule]
})
export class DemoComponent {
  url = `/users?total=100`;
  params: { name?: string } = { name: 'asdf' };
  columns: STColumn[] = [
    { title: '编号', index: 'id', default: '-' },
    { title: '头像', type: 'img', width: 60, index: 'picture.thumbnail' },
    { title: '邮箱', index: 'email' },
    { title: '电话', index: 'phone' },
    { title: '注册时间', type: 'date', index: 'registered' }
  ];
}
```
