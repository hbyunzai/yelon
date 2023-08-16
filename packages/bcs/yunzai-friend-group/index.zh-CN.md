---
type: Basic
title: yunzai-friend-group
subtitle: 好友组
cols: 1
module: import { YunzaiFriendGroupModule } from '@yelon/bcs/yunzai-friend-group';
---

好友组

## API

| 成员   | 说明            | 数据类型                |  
|------|---------------|---------------------|
| wrap | 是否使用nz-card包裹 | bool                |  
| data | 静态数据源         | YunzaiFriendGroup[] |  

### YunzaiFriendGroup

| 成员          | 说明       | 数据类型                |  
|-------------|----------|---------------------|
| id          | 好友组ID    | string              |  
| name        | 好友组名称    | YunzaiFriendGroup[] |  
| userAccount | 账号?      | string              |  
| data        | 用户组包含 人员 | YunzaiTableUser[]   |  

