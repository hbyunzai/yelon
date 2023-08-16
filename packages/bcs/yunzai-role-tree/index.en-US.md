---
type: Basic
title: yunzai-role-tree
subtitle: Role Tree
cols: 1
module: import { YunzaiRoleTreeModule } from '@yelon/bcs/yunzai-role-tree';
---

角色树业务组件

## API

| 成员            | 说明            | 数据类型             |  
|---------------|---------------|------------------|
| wrap          | 是否使用nz-card包裹 | bool             |  
| expand        | 是否展开          | bool             |  
| multiple      | 是否多选          | bool             |  
| roleGroupCode | 角色组代码         | string           |  
| data          | 静态数据源         | YunzaiRoleTree[] |  

### YunzaiRoleTree

| 成员       | 说明     | 数据类型              |  
|----------|--------|-------------------|
| code     | 角色编码   | string            |  
| key      | 角色key  | string            |  
| leaf     | 是否为子节点 | bool              |  
| title    | 角色名称   | string            |  
| type     | 角色类型   | string            |  
| children | 好友组ID  | YunzaiRoleTree [] |  


