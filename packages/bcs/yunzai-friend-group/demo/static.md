---
order: 0
title:
  zh-CN: 静态数据源
  en-US: static datasource
---

```ts
import {Component} from "@angular/core";
import {YunzaiFriendGroupProps, YunzaiFriendGroup} from "@yelon/bcs/yunzai-friend-group";
import {YunzaiFriendGroupModule} from "@yelon/bcs/yunzai-friend-group";

@Component({
  selector: `app-demo`,
  template: `
    <yunzai-friend-group [props]="props" (onSelect)="onSelect($event)"></yunzai-friend-group>
    `,
  styles: [],
  standalone: true,
  imports: [YunzaiFriendGroupModule]
})
export class DemoComponent {
  props: YunzaiFriendGroupProps = {
    wrap: true,
    data: [{
      id: "1",
      name: "好友一组",
      userAccount: "account",
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
      }] as any
    }]
  }

  onSelect(data: YunzaiFriendGroup): void {
    console.log(data)
  }
}
```

