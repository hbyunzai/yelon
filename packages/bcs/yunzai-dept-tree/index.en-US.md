---
type: Basic
title: yunzai-dept-tree
subtitle: Dept Tree
cols: 1
order: 1
module: import { YunzaiDeptTreeModule } from '@yelon/bcs/yunzai-dept-tree';
---

部门树业务组件

## API

| 成员              | 说明      | 类型                             | 默认值       | 
|-----------------|---------|--------------------------------|-----------|
| props           | 传入参数    | YunzaiDeptTreeProps            | undefined | 
| onQueryComplete | 部门树查询结果 | EventEmitter<YunzaiDeptTree[]> | undefined | 
| onSelect        | 部门树选择结果 | EventEmitter<YunzaiDeptTree[]> | undefined |

### YunzaiDeptTreeProps

| 成员           | 说明         | 类型                  | 默认值       | 
|--------------|------------|---------------------|-----------|
| multiple     | 是否多选       | bool                | false     |
| wrap         | 是否NzCard包裹 | bool                | false     |
| expand       | 是否展开       | bool                | false     |
| types        | 部门树请求类型    | YUNZAI_DEPT_TYPES[] | [DEPT]    | 
| grade        | 是否包含年级     | bool                | false     |
| gradeId      | 默认年级ID     | string?             | undefined |
| class        | 是否包含班级     | bool                | false     |
| historyClass | 是否包含历史班级   | bool                | false     |
| data         | 静态数据源      | YunzaiDeptTree[]    | []        |

### YunzaiDeptTree

| 成员       | 说明       | 类型               |
|----------|----------|------------------|
| key      | key      | string           |
| icon     | icon     | string           |
| title    | title    | string           |
| value    | value    | string           |
| children | children | YunzaiDeptTree[] |
