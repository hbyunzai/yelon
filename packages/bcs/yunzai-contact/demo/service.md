---
order: 1
title:
  zh-CN: 使用服务方式
  en-US: use service
---

使用Service方式

```ts
import {Component} from "@angular/core";
import {YunzaiContactService} from "@yelon/bcs/yunzai-contact";
import {of} from "rxjs"

@Component({
    selector: `app-demo`,
    template: `
      <button nz-button nzType="primary" (click)="show()">show</button>
    `,
})
export class DemoComponent {
    constructor(private yunzaiContactService: YunzaiContactService) {

    }


    ngOnInit(): void {
    }

    show(): void {
        this.yunzaiContactService.create((users) => {
            console.log(users)
            return of(true)
        });
    }

}
```

