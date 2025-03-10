---
order: 1
title: 开始使用
type: Documents
---

ACL 全称叫访问控制列表（Access Control List），是一种非常简单的基于角色权限控制方式。一个完全独立 `@yelon/acl` 模块（[DEMO](//ng-yunzai.github.io/ng-yunzai/#/logics/acl)）。

## 如何运行

内部实际是一个 `ACLService` 它提供一套基于角色权限服务类。为了更好的编码体验 ng-yunzai 有多处组件或模块也依赖于它，例如：`st`、`MenuService` 等，并且这些会以 `acl` 属性的形式表现。因此，当遇到 `acl` 属性都表示 [can](#ACLCanType) 方法的**参数值**。

## 如何使用

安装 `@yelon/acl` 依赖包：

```bash
npm i -S @yelon/acl
```

若使用 Standalone 无需要额外导入 `YelonACLModule` 模块，否则：

```typescript
import { YelonACLModule } from '@yelon/acl';

@NgModule({
  imports: [
    YelonACLModule
  ]
})
export class AppModule { }
```

## API

### 参数

| 参数 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[guard_url]` | `string` | 路由守卫失败后跳转 | `/403` | ✅ |
| `[preCan]` | `(roleOrAbility: ACLCanType) => ACLType` | `can` 执行前回调 | - | ✅ |

> 可以通过[全局配置](/docs/global-config)覆盖它们。

### ACLService

| 方法 | 说明 |
|----|----|
| `[change]` | 监听ACL变更通知 |
| `[data]` | 获取所有ACL数据 |
| `setFull(val: boolean)` | 标识当前用户为全量，即不受限 |
| `set(value: ACLType)` | 设置当前用户角色或权限能力（会先清除所有） |
| `setRole(roles: string[])` | 设置当前用户角色（会先清除所有） |
| `setAbility(abilities: (number | string)[])` | 设置当前用户权限能力（会先清除所有） |
| `add(value: ACLType)` | 为当前用户增加角色或权限能力 |
| `attachRole(roles: string[])` | 为当前用户附加角色 |
| `attachAbility(abilities: (number | string)[])` | 为当前用户附加权限 |
| `removeRole(roles: string[])` | 为当前用户移除角色 |
| `removeAbility(abilities: (number | string)[])` | 为当前用户移除权限 |
| `can(roleOrAbility: ACLCanType)` | 当前用户是否有对应角色 |
| `canAbility(ability: ACLCanType)` | 当前用户是否有对应权限点 |

### ACLCanType

```ts
type ACLCanType = number | number[] | string | string[] | ACLType
```

### ACLType

| 属性 | 类型 | 说明 | 默认 |
|----|----|----|----|
| `[role]` | `string[]` | 角色 | - |
| `[ability]` | `number[], string[]` | 权限点 | - |
| `[mode]` | `allOf, oneOf` | `allOf` 表示必须满足所有角色或权限点数组算有效<br>`oneOf` 表示只须满足角色或权限点数组中的一项算有效 | `oneOf` |
| `[except]` | `boolean` | 是否取反，即结果为 `true` 时表示未授权 | `false` |
