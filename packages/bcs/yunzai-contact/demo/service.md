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

service函数签名,`nzOnOk`为回调函数，`param`为传入参数

```ts
const create = (
    nzOnOk: (users: YunzaiTableUser[]) => Observable<boolean>,
    param: YunzaiContactParam = {
        props: {
            wrap: false,
            disableFriendGroup: false,
            disableDormitoryTree: false,
            disableDeptTree: false,
            disableRoleTree: false
        },
        deptTree: {
            multiple: false,
            wrap: false,
            expand: true,
            class: true,
            historyClass: true,
            grade: true,
            types: [YUNZAI_DEPT_TYPES.DEPT, YUNZAI_DEPT_TYPES.CLASS],
        },
        dormitoryTree: {
            multiple: false,
            wrap: false,
            expand: true,
        },
        roleTree: {
            wrap: false,
            expand: true,
            multiple: false
        },
        friendGroup: {
            wrap: false
        },
        tableUser: {
            wrap: false,
            filteredColumns: [],
            page: {
                pageNum: 1,
                pageSize: 20,
                pageParam: {}
            },
            customColumns: [],
            list: true,
            check: {
                pageCheck: true,
                disable: false,
                data: [],
            }
        }
    }
): void => {
}
```
