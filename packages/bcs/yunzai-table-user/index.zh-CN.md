---
type: Basic
title: yunzai-table-user
subtitle: 人员列表
cols: 1
module: import { YunzaiTableUserModule } from "@yelon/bcs/yunzai-table-user";
---


人员列表

## API

| 成员                | 说明              | 数据类型                                                         |  
|-------------------|-----------------|--------------------------------------------------------------|
| wrap              | 是否使用nz-card包裹   | bool                                                         |  
| data              | 静态数据源           | YunzaiTableUser[]                                            |  
| userIds           | 已经被选择的用户id集合    | string[]                                                     |  
| filteredColumns   | 列过滤(通过index属性)  | string[]                                                     |  
| customColumns     | 自定义列(通过index属性) | STColumn[]                                                   |  
| additionalColumns | 附加列             | STColumn[]                                                   |  
| page              | 分页              | `{pageNum:number,pageSize:number,pageParam:{}}`              |  
| list              | 是否显示右侧列表        | bool                                                         |  
| scroll            | 滚动距离            | `{x:string,y:string}`                                        |  
| check             | 选框              | `{disable:boolean,data:YunzaiTableUser[],pageCheck:boolean}` |  

### YunzaiTableUser

| 成员               | 数据类型                  |   
|------------------|-----------------------|
| userId           | string                |      
| account          | string                |      
| realName         | string                |      
| userType         | number                |      
| userCode         | string                |      
| sex              | number                |      
| email            | string                |      
| mobile           | string                |      
| officePhone      | string                |      
| readNumber       | number                |      
| status           | number                |      
| displayIndex     | number                |      
| idCard           | string                |      
| lastDate         | string                |      
| operUser         | string                |      
| lastLoginTime    | string                |      
| remark           | string                |      
| errorCount       | number                |      
| question         | string                |      
| answer           | string                |      
| theme            | string                |      
| roles            | YunzaiTableUserRole[] |      
| roleIdList       | string[]              |      
| dept             | YunzaiTableUserDept   |      
| deptId           | string                |      
| isDelete         | number                |      
| avatarId         | string                |      
| bgimgId          | string                |      
| profile          | string                |      
| passwordStrength | string                |      
| lastLoginIp      | string                |      

### YunzaiTableUserRole

| 成员             | 数据类型   |  
|----------------|--------|
| createdDate    | string |  
| id             | string |  
| roleName       | string |  
| roleValue      | string |  
| status         | number |  
| roleDesc       | string |  
| displayIndex   | number |  
| landingPageUrl | string |  
| roleGroups     | any    |  
| thisDepartment | bool   |  
| onlyOne        | bool   |  
| onlyDeptOne    | bool   |  
| systemFlag     | number |  

### YunzaiTableUserDept

| 成员           | 数据类型                  |  
|--------------|-----------------------|
| createdDate  | string                |  
| deptId       | string                |  
| deptName     | string                |  
| deptType     | string                |  
| deptComment  | string                |  
| leaf         | any                   |  
| displayIndex | string                |  
| deptCode     | string                |  
| status       | number                |  
| deptLevel    | any                   |  
| children     | YunzaiTableUserDept[] |  
| pid          | string                |  
| expand       | bool                  |  

