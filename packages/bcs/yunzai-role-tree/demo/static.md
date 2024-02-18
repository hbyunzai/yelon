---
order: 0
title:
  zh-CN: 静态数据源
  en-US: static datasource
---

```ts
import {Component} from "@angular/core";
import {YunzaiRoleTreeProps, YunzaiRoleTree} from "@yelon/bcs/yunzai-role-tree";
import {YunzaiRoleTreeModule} from "@yelon/bcs/yunzai-role-tree";

@Component({
  selector: `app-demo`,
  template: `
    <yunzai-role-tree [props]="props" (onQueryComplete)="onQueryComplete($event)" (onSelect)="onSelect($event)"></yunzai-role-tree>
    `,
  styles: [],
  standalone: true,
  imports: [YunzaiRoleTreeModule]
})
export class DemoComponent {

  props: YunzaiRoleTreeProps = {
    multiple: true,
    wrap: true,
    expand: true,
    data: [
      {
        title: "角色组", key: '1', code: "1", leaf: false, type: 'dept',
        children: [
          {title: "角色1", key: '21', code: "21", leaf: true, type: '', children: []},
        ]
      }
    ]
  }

  onQueryComplete(e: YunzaiRoleTree[]): void {
    console.log(e)
  }

  onSelect(e: YunzaiRoleTree[]): void {
    console.log(e)
  }
}
```

