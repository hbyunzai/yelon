---
title:
  zh-CN: 基础样例
  en-US: Basic Usage
order: 0
---

## zh-CN

查询年级信息.

## en-US

query grades data.

```ts
import {Component} from '@angular/core';
import {YunzaiGrade, YunzaiGradeService} from "@yelon/bcs/yunzai-grade";

@Component({
    selector: 'app-demo',
    template: `<div></div>`,
})
export class DemoComponent {
    constructor(private yunzaiGradeSerivce: YunzaiGradeService) {
        this.yunzaiGradeSerivce.grades().subscribe((grades: YunzaiGrade[]) => {
            console.log(grades)
        });
    }
}
```
