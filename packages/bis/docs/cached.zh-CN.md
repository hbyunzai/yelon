---
order: 100
title: 云在缓存
type: Documents
---

在系统初始化完成后，我们已经准备好了必要的用户数据，项目数据丢在缓存中。
结合[Cache模块](/cache/getting-started)开发者使用只需使用以下方式提取即可

## 用户数据

```ts
const user = this.cacheService.get('_yz_user', { mode: 'none' });
```

## 项目详情

```ts
const projectInfo = this.cacheService.get('_yz_project_info', { mode: 'none' });
```

## 应用与服务

```ts
const yzHeader = this.cacheService.get('_yz_header', { mode: 'none' });
```

