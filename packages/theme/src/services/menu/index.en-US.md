---
order: 2
title: MenuService
subtitle: Menu Service
type: Service
---

The data format is an array of [Menu](https://github.com/hbyunzai/yelon/blob/master/packages/theme/src/services/menu/interface.ts), where `text` text property muse be required, And it's not affected by external components (such as [sidebar-nav](/components/sidebar-nav)),

This is because menus it's essential part of the applications, And it can be used more effectively as a service, such as: dynamically generate navigation, title etc.

**Suggest:** Start up Angular ([startup.service.ts](https://github.com/hbyunzai/ng-yunzai/blob/master/src/app/core/startup/startup.service .ts)) After get menu data from remote, call the `add()` method.

## API

### MenuService

| Method | Description |
|--------|-----------|
| `add` | Setting menu data |
| `clear` | Clear menu data |
| `resume` | Reset menu, may need call when I18N, user acl changed |
| `find` | Find a menu item by `url` or `key` |
| `getItem` | Get menu item based on `key` |
| `getPathByUrl` | Get menu list based on url |
| `setItem` | Set menu item |
| `open` | Open of the menu |
| `toggleOpen` | Toggle menu open or close |
| `openAll` | Toggle all menu open or close |
| `getDefaultRedirect` | Returns a default menu link |

**recursive**

Recursive upward find, for example, the menu data source contains `/ware`, then `/ware/1` is equivalent to `/ware`.

### Menu

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `render_type` | Rendering type of menu item | `item, divider` | - |
| `text` | Text of menu item, can be choose one of `text` or `i18n` (Support HTML) | `string` | - |
| `i18n` | I18n key of menu item, can be choose one of `text` or `i18n` (Support HTML) | `string` | - |
| `group` | Whether to display the group name | `boolean` | `true` |
| `link` | Routing for the menu item, can be choose one of `link` or `externalLink` | `string` | - |
| `externalLink` | External link for the menu item, can be choose one of `link` or `externalLink` | `string` | - |
| `target` | Specifies `externalLink` where to display the linked URL | `_blank,_self,_parent,_top` | - |
| `icon` | Icon for the menu item, only valid for the first level menu | `string | MenuIcon` | - |
| `badge` | Badget for the menu item when `group` is `true` | `number` | - |
| `badgeDot` | Whether to display a red dot instead of `badge` value | `boolean` | - |
| `badgeStatus` | Badge [color](https://ng.ant.design/components/badge/en#nz-badge) | `success,processing,default,error,warning` | `error` |
| `badgeOverflowCount` | Maximum count to show in badge, show `${badgeOverflowCount}+` when exceed | `number` | - |
| `open` | Whether open for the menu item | `boolean` | `false` |
| `disabled` | Whether disable for the menu item | `boolean` | `false` |
| `hide` | Whether hidden for the menu item | `boolean` | `false` |
| `hideInBreadcrumb` | Whether hide in breadcrumbs, which are valid when the `page-header` component automatically generates breadcrumbs | `boolean` | - |
| `acl` | ACL configuration, it's equivalent to `ACLService.can(roleOrAbility: ACLCanType)` parameter value | `any` | - |
| `shortcut` | Whether shortcut menu item | `boolean` | - |
| `shortcutRoot` | Wheter shortcut menu root node | `boolean` | - |
| `reuse` | Whether to allow reuse, need to cooperate with the `reuse-tab` component | `boolean` | - |
| `open` | Whether to expand, when `checkStrictly` is valid in `sidebar-nav` component | `boolean` | - |
| `key` | Unique identifier of the menu item, can be used in `getItem`, `setItem` to update a menu | `string` | - |
| `children` | Children for the menu item | `Menu[]` | - |

### MenuIcon

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[type]` | Type for icon; `img`, `svg` Size uses `14px` width and height | `class,icon,iconfont,img,svg` | `icon` |
| `[value]` | Value for the icon, can be set Class Name, nz-icon of `nzType`, image | `string` | - |
| `[theme]` | Type of the ant design icon | `outline,twotone,fill` | `outline` |
| `[spin]` | Rotate icon with animation | `boolean` | `false` |
| `[twoToneColor]` | Only support the two-tone icon. Specific the primary color | `string` | - |
| `[iconfont]` | Type of the icon from iconfont | `string` | - |
| `[rotate]` | Rotate degrees | `number` | - |
