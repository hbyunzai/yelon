---
order: 0
title:
  zh-CN: 静态数据源
  en-US: static datasource
---

```ts
import {Component} from "@angular/core";
import {YunzaiTableUserProps, YunzaiTableUser} from "@yelon/bcs/yunzai-table-user";
import {YunzaiTableUserModule} from "@yelon/bcs/yunzai-table-user";

@Component({
  selector: `app-demo`,
  template: `
    <yunzai-table-user [props]="props" (onChecked)="onChecked($event)"></yunzai-table-user>
    `,
  styles: [],
  standalone: true,
  imports: [YunzaiTableUserModule]
})
export class DemoComponent {
  props: YunzaiTableUserProps = {
    wrap: true,
    data: [{
      userId: "1",
      account: "11",
      realName: "测试分页",
      userType: 1,
      userCode: "242424234",
      sex: 0,
      email: null,
      mobile: "******",
      officePhone: null,
      readNumber: null,
      status: 1,
      displayIndex: 0,
      idCard: "******",
      lastDate: "2023-07-06T09:02:20.699+00:00",
      operUser: null,
      lastLoginTime: "2023-07-12T06:31:47.000+00:00",
      remark: null,
      errorCount: 0,
      question: null,
      answer: null,
      theme: null,
      roles: []
    }] as any,
    filteredColumns: [],
    customColumns: [],
    additionalColumns: [],
    list: true,
    scroll: {
      x: '1000',
      y: '1200'
    },
    check: {
      disable: false,
      data: [],
      pageCheck: true
    }
  }

  onChecked(data: YunzaiTableUser[]): void {
    console.log(data)
  }
}
```

