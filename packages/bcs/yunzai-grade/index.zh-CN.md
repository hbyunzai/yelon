---
type: Basic
title: yunzai-grade
subtitle: 学年
cols: 1
---

## 如何使用

查询学年

```ts
import {Component} from "@angular/core";
import {YunzaiGradeService} from "@yelon/bcs/yunzai-grade";

@Component({
    selector: `app-demo`,
    template: ``,
    styles: []
})
export class DemoComponent {

    constructor(private gradeService: YunzaiGradeService) {

    }

    test(): void {
        this.gradeService.grades().subscribe()
    }

}
```
