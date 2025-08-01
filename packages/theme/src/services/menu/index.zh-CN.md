---
order: 2
title: MenuService
subtitle: 菜单服务
type: Service
---

菜单服务的数据格式是一个 [Menu](https://github.com/hbyunzai/yelon/blob/master/packages/theme/src/services/menu/interface.ts) 数组，其中 `text` 属性表示菜单文本为必填项，而且本身并不受外部组件的影响（例如[sidebar-nav](/components/sidebar-nav)组件），这是因为菜单是贯穿整个项目必不可少的组成部分，而将其独立成一个服务可以更有效被使用，例如：动态生成导航、标题等。

**建议：** 在 Angular 启动服务（[startup.service.ts](https://github.com/hbyunzai/ng-yunzai/blob/master/src/app/core/startup/startup.service.ts)）从远程获取到菜单数据后，调用 `add()` 方法。

## API

### MenuService

| 方法 | 描述 |
|----|----|
| `add` | 设置菜单数据 |
| `clear` | 清空菜单数据 |
| `resume` | 重置菜单，可能I18N、用户权限变动时需要调用刷新 |
| `find` | 利用 `url` 或 `key` 查找菜单 |
| `getItem` | 根据 `key` 获取菜单 |
| `getPathByUrl` | 根据url获取菜单列表 |
| `setItem` | 设置菜单值 |
| `open` | 展开某菜单 |
| `toggleOpen` | 切换菜单的展开或关闭 |
| `openAll` | 展开或关闭所有菜单 |
| `getDefaultRedirect` | 返回一个默认跳转的菜单链接 |

**recursive**

表示自动向上递归查找，例如菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项。

### Menu

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `render_type` | 菜单项的渲染类型 | `item, divider` | - |
| `text` | 文本（支持HTML），**必填项** | `string` | - |
| `i18n` | i18n主键（支持HTML） | `string` | - |
| `group` | 是否显示分组名，指[示例](//ng-yunzai.github.io/ng-yunzai/)中的【主导航】字样 | `boolean` | `true` |
| `link` | 路由，`link`、`externalLink` 二选其一 | `string` | - |
| `externalLink` | 外部链接，`link`、`externalLink` 二选其一 | `string` | - |
| `target` | 链接 target | `_blank,_self,_parent,_top` | - |
| `icon` | 图标，指[示例](//ng-yunzai.github.io/ng-yunzai/)中的【仪表盘】前图标，只对一级菜单有效 | `string | MenuIcon` | - |
| `badge` | 徽标数，展示的数字，指[示例](//ng-yunzai.github.io/ng-yunzai/)中的【小部件】后的红色块。（注：`group:true` 时无效） | `number` | - |
| `badgeDot` | 徽标数，显示小红点 | `boolean` | - |
| `badgeStatus` | 徽标 Badge [颜色](https://ng.ant.design/components/badge/en#nz-badge) | `success,processing,default,error,warning` | `error` |
| `badgeOverflowCount` | 徽标数值显示上限，超过显示 `${badgeOverflowCount}+` | `number` | - |
| `open` | 是否打开菜单 | `boolean` | `false` |
| `disabled` | 是否禁用菜单 | `boolean` | `false` |
| `hide` | 是否隐藏菜单 | `boolean` | `false` |
| `hideInBreadcrumb` | 隐藏面包屑，指 `page-header` 组件的自动生成面包屑时有效 | `boolean` | - |
| `acl` | ACL配置，若导入 `@yelon/acl` 时自动有效，等同于 `ACLService.can(roleOrAbility: ACLCanType)` 参数值 | `any` | - |
| `shortcut` | 是否快捷菜单项 | `boolean` | - |
| `shortcutRoot` | 快捷菜单根节点 | `boolean` | - |
| `reuse` | 是否允许复用，需配合 `reuse-tab` 组件 | `boolean` | - |
| `key` | 菜单项唯一标识符，可用于 `getItem`、`setItem` 来更新某个菜单 | `string` | - |
| `children` | 子菜单 | `Menu[]` | - |

### MenuIcon

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[type]` | 类型；`img`, `svg` 类型需要 `14px` 宽与高尺寸 | `class,icon,iconfont,img,svg` | `icon` |
| `[value]` | 值，包含：类名、图标 `nzType`、图像 | `string` | - |
| `[theme]` | 图标主题风格 | `outline,twotone,fill` | `outline` |
| `[spin]` | 是否有旋转动画 | `boolean` | `false` |
| `[twoToneColor]` | 仅适用双色图标，设置双色图标的主要颜色，仅对当前 icon 生效 | `string` | - |
| `[iconfont]` | 指定来自 IconFont 的图标类型 | `string` | - |
| `[rotate]` | 图标旋转角度 | `number` | - |

> 使用 `iconfont` 类型必须先加载 `NzIconService.fetchFromIconfont`，建议在根模块中执行。
