---
order: 0
title:
  zh-CN: 静态数据源
  en-US: static datasource
---

```ts
import {Component} from "@angular/core";
import {YunzaiDeptTreeProps, YunzaiDeptTree} from "@yelon/bcs/yunzai-dept-tree";
import {YunzaiDeptTreeModule} from "@yelon/bcs/yunzai-dept-tree";

@Component({
  selector: `app-demo`,
  template: `
    <yunzai-dept-tree [props]="props" (onQueryComplete)="onQueryComplete($event)" (onSelect)="onSelect($event)"></yunzai-dept-tree>
    `,
  styles: [],
  standalone: true,
  imports: [YunzaiDeptTreeModule]
})
export class DemoComponent {

  props: YunzaiDeptTreeProps = {
    multiple: true,
    wrap: true,
    expand: true,
    data: [
      {
        title: "一级部门", key: '1', value: '1', icon: '',
        children: [
          {title: "二级部门", key: '21', value: '21', icon: '', children: []},
          {title: "二级部门", key: '22', value: '22', icon: '', children: []},
          {title: "二级部门", key: '23', value: '23', icon: '', children: []},
          {
            title: "二级部门", key: '24', value: '24', icon: '', children: [
              {title: "三级部门", key: '31', value: '31', icon: '', children: []},
            ]
          },
        ]
      }
    ]
  }

  onQueryComplete(e: YunzaiDeptTree[]): void {
    console.log(e)
  }

  onSelect(e: YunzaiDeptTree[]): void {
    console.log(e)
  }
}
```

