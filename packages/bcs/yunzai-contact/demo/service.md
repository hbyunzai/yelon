---
order: 1
title:
  zh-CN: 使用服务方式
  en-US: use service
---

使用Service方式

```ts
import {Component} from "@angular/core";
import {of} from "rxjs"
import {YunzaiContactService,YunzaiContactModule} from "@yelon/bcs/yunzai-contact";

@Component({
  selector: `app-demo`,
  template: `
      <button nz-button nzType="primary" (click)="show()">show</button>
    `,
  standalone: true,
  imports: [YunzaiContactModule]
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

