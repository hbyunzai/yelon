---
type: Basic
title: yunzai-dormitory-tree
subtitle: 公寓树
cols: 1
module: import { YunzaiDormitoryTreeModule } from '@yelon/bcs/yunzai-dormitory-tree';
---



公寓树业务组件

## API

| 成员       | 说明           | 类型                       |  
|----------|--------------|--------------------------|
| wrap     | 是否用nz-card包裹 | bool                     |  
| expand   | 是否展开         | bool                     |  
| multiple | 是否多选         | bool                     |  
| param    | 宿舍列表查询参数     | YunzaiDormitoryTreeParam |  
| data     | 静态数据源        | YunzaiDormitoryTree[]    |  

### YunzaiDormitoryTreeParam

| 成员       | 说明     | 类型                      |  
|----------|--------|-------------------------|
| isPower  | 是否携带权限 | bool                    |  
| userId   | 用户ID   | string                  |  
| treeType | 宿舍树类型  | YunzaiDormitoryTreeType |  

### YunzaiDormitoryTreeType

| 成员                    | 说明 | 默认值 |  
|-----------------------|----|-----|
| BUILDING              | 建筑 | 0   |  
| BUILDING_FLOOR        | 楼层 | 1   |  
| BUILDING_FLOORS_ROOMS | 房间 | 2   |  







