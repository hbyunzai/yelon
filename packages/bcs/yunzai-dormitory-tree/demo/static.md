---
order: 0
title:
  zh-CN: 静态数据源
  en-US: static datasource
---

```ts
import {Component} from "@angular/core";
import {YunzaiDormitoryTreeProps, YunzaiDormitoryTree} from "@yelon/bcs/yunzai-dormitory-tree";
import {YunzaiDormitoryTreeModule} from "@yelon/bcs/yunzai-dormitory-tree";

@Component({
  selector: `app-demo`,
  template: `
    <yunzai-dormitory-tree [props]="props" (onQueryComplete)="onQueryComplete($event)" (onSelect)="onSelect($event)"></yunzai-dormitory-tree>
    `,
  styles: [],
  standalone: true,
  imports: [YunzaiDormitoryTreeModule]
})
export class DemoComponent {
  props: YunzaiDormitoryTreeProps = {
    multiple: true,
    wrap: true,
    expand: true,
    data: [
      {
        buildPid: "",
        expanded: true,
        floorPid: "",
        isExpanded: true,
        isLeaf: false,
        key: '1',
        selected: false,
        title: "1号楼",
        type: "0",
        children: [
          {
            buildPid: "1",
            expanded: true,
            floorPid: "",
            isExpanded: true,
            isLeaf: false,
            key: '11',
            selected: false,
            title: "1号楼1单元",
            type: "1",
            children: [
              {
                buildPid: "1",
                expanded: true,
                floorPid: "11",
                isExpanded: true,
                isLeaf: true,
                key: '111',
                selected: false,
                title: "1号楼1单元101",
                type: "2",
                children: []
              }
            ]
          }
        ]
      }
    ]
  }

  onQueryComplete(e: YunzaiDormitoryTree[]): void {
    console.log(e)
  }

  onSelect(e: YunzaiDormitoryTree[]): void {
    console.log(e)
  }
}
```

