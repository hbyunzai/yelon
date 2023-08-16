---
type: Basic
title: yunzai-contact
subtitle: 联系人
cols: 1
order: 20
module: import { YunzaiTableUserModule } from '@yelon/bcs/yunzai-table-user';
---

联系人组件，聚合其他组件而成

## API

### Input Arguments

| 成员                | 说明         | 类型                                  |  
|-------------------|------------|-------------------------------------|
| deptTree          | 部门树组件输入属性  | YunzaiDeptTreeProps                 |  
| dormitoryTree     | 宿舍树组件输入属性  | YunzaiDormitoryTreeProps            |  
| friendGroup       | 好友组组件输入属性  | YunzaiFriendGroupProps              | 
| roleTree          | 角色树组件输入属性  | YunzaiRoleTreeProps                 |
| tableUser         | 用户列表组件输入属性 | YunzaiTableUserProps                |
| props             | 联系人组件输入属性  | YunzaiContactProps                  |
| onSelect          | 输出属性人员列表   | `EventEmitter<YunzaiTableUser[]>`     |
| onSelectDept      | 输出属性选择的部门  | `EventEmitter<YunzaiDeptTree[]>`      |
| onSelectRole      | 输出属性选择的角色  | `EventEmitter<YunzaiRoleTree[]>`      |
| onSelectDormitory | 输出属性选择的宿舍  | `EventEmitter<YunzaiDormitoryTree[]>` |
| onSelectGroup     | 输出属性选择的好友组 | `EventEmitter<YunzaiFriendGroup>`     |

### YunzaiContactProps

| 成员                   | 说明            | 类型   |  
|----------------------|---------------|------|
| disableDeptTree      | 是否关闭部门树       | bool |  
| disableRoleTree      | 是否关闭角色树       | bool |  
| disableDormitoryTree | 是否关闭宿舍树       | bool | 
| disableFriendGroup   | 是否关闭好友组       | bool |
| wrap                 | 是否使用nz-card包裹 | bool |


### 函数签名
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

### others

其他属性请查找相应组件的API



