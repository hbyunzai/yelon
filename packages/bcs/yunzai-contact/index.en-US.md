---
type: Basic
title: yunzai-contact
subtitle: Contact
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

### others

其他属性请查找相应组件的API


