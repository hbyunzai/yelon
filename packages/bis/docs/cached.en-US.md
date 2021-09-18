---
order: 100
title: Yunzai Cached
type: Documents
---

After the system initialization is completed, we have prepared the necessary user data, and the project data is lost in the cache.

For use with [cache module](/cache/getting-started) developers, you only need to use the following methods to extract

##User data

```ts
const user = this.cacheService.get('_yz_user', { mode: 'none' });
```

##Project details

```ts
const projectInfo = this.cacheService.get('_yz_project_info', { mode: 'none' });
```

##Applications and services

```ts
const yzHeader = this.cacheService.get('_yz_header', { mode: 'none' });
```
