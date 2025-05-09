---
type: Basic
order: 1
title: reuse-tab
subtitle: Reuse Route Tab
cols: 1
module: import { ReuseTabModule } from '@yelon/abc/reuse-tab';
---

Reuse route tab are extremely common for admin interfaces, and the problem of component data is not lost when switching routes.

The newly opened is always the current page, and the route reuse means that when we leave the current page, if the reuse condition is met (ie: matching mode), all component states (including subcomponents) of the current route are saved, wait for the next time you enter the route to restore the component data based on the cache.

## Usage

1. Provide `provideReuseTabConfig()` configuration in `app.config.ts` file
2. Add `<reuse-tab>` in the `src/app/layout/basic/basic.component.ts` file, like this:

```html
- <router-outlet />
+ <reuse-tab #reuseTab />
+ <router-outlet (activate)="reuseTab.activate($event)" (attach)="reuseTab.activate($event)" />
```

> **Note: If you do not specify the `(activate)` event, you cannot refresh current tab when uncached.**

## Matching Mode

Inject the `ReuseTabService` class anywhere in the project and set the `mode` property, or pass `<reuse-tab [mode]="0" />` Reset values.

**0. Menu (Default)**

Press the ([Menu](/theme/menu#Menu)) to configure.

Reusable:

```
{ text:'Dashboard' }
{ text:'Dashboard', reuse: true }
```

Not reusable:

```
{ text:'Dashboard', reuse: false }
```

**1. MenuForce**

Press the ([Menu](/theme/menu#Menu)) to force the configure.

Reusable:

```
{ text:'Dashboard', reuse: true }
```

Not reusable:

```
{ text:'Dashboard' }
{ text:'Dashboard', reuse: false }
```

**2. URL**

Valid for all routes, can be combined with `excludes` filtering without reusing.

## Tab Text

Get the tab text in the following order:

1. Overwrite text within the component with `ReuseTabService.title = 'new title'
2. The `data` property in the routing configuration
3. `text` property in menu data

Use `ReuseTabService` example:

```ts
export class DemoReuseTabEditComponent implements OnInit {
  id: any;

  constructor(private route: ActivatedRoute, private reuseTabService: ReuseTabService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.reuseTabService.title = `Edit ${this.id}`;
    });
  }
}
```

## Reuse Events

Route reusing does not touch the Angular component lifecycle hooks (eg: `ngOnInit`, etc.), but often requires data to be refreshed during the reuse process, so two new lifecycle hooks are provided to temporarily resolve such problems.

**OnReuseInit** Interface

- `_onReuseInit(type?: ReuseHookOnReuseInitType): void;`

Triggered when the current route is in the reusing process, The values of `type` are:

-`init` when routing process
-`refresh` when refresh action via tab

**OnReuseDestroy** Interface

- `_onReuseDestroy(): void;`

Triggered when the current route allows reusing and leave route.

A simple example:

```ts
import { OnReuseDestroy, OnReuseInit, ReuseHookOnReuseInitType } from '@yelon/abc/reuse-tab';

@Component()
export class DemoComponent implements OnReuseInit, OnReuseDestroy {
  _onReuseInit(type: ReuseHookOnReuseInitType) {
    console.log('_onReuseInit', type);
  }
  _onReuseDestroy() {
    console.log('_onReuseDestroy');
  }
}
```

## Scroll Position

Turning on `keepingScroll` will restore the previous scrollbar position after reused, pls attention to detail:

> **Make sure** to use the routing option [scrollPositionRestoration](https://angular.io/api/router/ExtraOptions#scrollPositionRestoration) to manage the scrollbar position.

- `true`: Keep the previous scroll bar position
- `false`: Do't operate on the scroll bar
- If all page used route reuse, you can set `scrollPositionRestoration: 'disabled'` to avoid delayed scrolling.
- If part of the page used route reuse, it's limited by `scrollPositionRestoration` **priority value**, there will be a `1ms` delay to restore the scrollbar position.

## API

### ReuseTabService

**Property**

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[max]` | Maximum of reuse | `number` | `10` |
| `[mode]` | Matching Mode | `ReuseTabMatchMode` | `0` |
| `[debug]` | Whether Debug mode | `boolean` | `false` |
| `[keepingScroll]` | Keep the scrollbar position | `boolean` | `false` |
| `[keepingScrollContainer]` | Keep the scroll bar container | `Element` | `window` |
| `[excludes]` | Exclusion rules, limited by `mode=URL` | `RegExp[]` | - |
| `[items]` | Get cached routes | `ReuseTabCached[]` | - |
| `[count]` | Get the number of cached routes | `number` | - |
| `[change]` | Cache change callback | `Observable<ReuseTabNotify>` | - |
| `[title]` | Customize the current title | `string` | - |
| `[closable]` | Customize the current `closable` state | `boolean` | - |

**Method**

| Name | Description | Type |
|------|-------------|------|
| `index(url)` | Returns the index of the first element in the caches, and -1 otherwise | `number` |
| `exists(url)` | Exists cache by URL | `boolean` |
| `get(url)` | Get cache data by URL | `ReuseTabCached` |
| `getTitle(url, route?: ActivatedRouteSnapshot)` | Get title | `string` |
| `clearTitleCached()` | Clear all title caches | `void` |
| `getClosable(url, route?: ActivatedRouteSnapshot)` | Get `closable` state | `string` |
| `clearClosableCached()` | Clear cached of closable | `void` |
| `remove(url)` | Remove the tag, touch change remove event | `void` |
| `move(url, position)` | Move of caches, touch change move event | `void` |
| `clear()` | Clear caches, touch change clear event | `void` |
| `refresh()` | Just touch change refresh event | `void` |
| `replace(url)` | Force closed current route (including the non-closable) and navigate back to the `newUrl` route | `void` |

### reuse-tab

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[i18n]` | Context Menu internationalization, support HTML | `ReuseContextI18n` | - |
| `[mode]` | Matching Mode | `ReuseTabMatchMode` | `0` |
| `[debug]` | Whether Debug mode | `boolean` | `false` |
| `[max]` | Maximum of reuse | `number` | `10` |
| `[keepingScroll]` | Keep the scrollbar position | `boolean` | `false` |
| `[keepingScrollContainer]` | Keep the scroll bar container | `string | Element` | `window` |
| `[excludes]` | Exclusion rules, limited by `mode=URL` | `RegExp[]` | - |
| `[allowClose]` | Whether to allow close tab | `boolean` | `true` |
| `[customContextMenu]` | Custom context click menu | `ReuseCustomContextMenu[]` | - |
| `[tabBarExtraContent]` | Extra content in tab bar | `TemplateRef<void>` | - |
| `[tabBarStyle]` | Tab bar style object | `object` | - |
| `[tabBarGutter]` | The gap between tabs | `number` | - |
| `[tabType]` | Basic style of tabs | `line, card` | `line` |
| `[tabMaxWidth]` | The maximum width of each tab, unit: `px` | `number` | - |
| `[routeParamMatchMode]` | Match the pattern when routing parameters are included, for example:`/view/:id`<br> - `strict` Strict mode `/view/1`, `/view/2` Different pages<br> - `loose` Loose mode `/view/1`, `/view/2` Same page and only one tab of component | `strict,loose` | `strict` |
| `[disabled]` | Whether to disabled | `boolean` | `false` |
| `[titleRender]` | Custom rendering of the title | `TemplateRef<{ $implicit: ReuseItem }>` | - |
| `[storageState]` | Whether to store the state, keep the last browser state | `boolean` | `false` |
| `[canClose]` | A function to determine what should be closed | `(options: { item: ReuseItem; includeNonCloseable: boolean }) => Observable<boolean>` | - |
| `(close)` | Close callback event | `EventEmitter` | - |
| `(change)` | Callback when switching | `EventEmitter` | - |

**Context Menu**

The non-closeable item is forcibly removed when the keyboard `ctrl` is pressed.

### ReuseTabCached

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[title]` | Title | `string` | - |
| `[url]` | URL | `string` | - |
| `[closable]` | Whether to allow close | `boolean` | - |

### ReuseTabNotify

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[active]` | Event types | `title,close,closeRight,clear,move,closable,refresh,add` | - |

### ReuseContextI18n

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[close]` | Close | `string` | - |
| `[closeOther]` | Close other tabs | `string` | - |
| `[closeRight]` | Close tabs to the right | `string` | - |
| `[clear]` | Clear tabs | `string` | - |

### ReuseCustomContextMenu

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[id]` | Identifier for current context menu | `string` | - |
| `[title]` | Title for current context menu | `string` | - |
| `[fn]` | Process method for current context menu | `(item: ReuseItem, menu: ReuseCustomContextMenu) => void` | - |
| `[disabled]` | Whether to disabled | `(item: ReuseItem) => boolean` | - |

### Route data

By routing the `data` property, you can provide partial [global configuration](/docs/global-config) for some pages, for example:

```ts
// Specify no route
{ path: 'p1', component: DemoComponent, data: { reuse: false } }
// Specify title
{ path: 'p1', component: DemoComponent, data: { title: 'New Title' } }
```

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[reuse]` | Whether to reuse | `boolean` | - |
| `[title]` | Title | `string` | - |
| `[titleI18n]` | Ii18n title key | `string` | - |
| `[reuseClosable]` | Whether to allow close | `boolean` | - |
| `[keepingScroll]` | Keep the scrollbar position | `boolean` | - |

> **Note:** The above data can also be reflected in the [Menu](/theme/menu#Menu) data.

## FAQ

### How to Debug

Route reuse preserves component data state, which may bring another drawback. The Angular lifecycle hook is not triggered during the reuse process. In most cases, it can run normally. There are several common problems:

- `OnDestroy` may handle the external style in component (eg: `body`), which can be resolved by Reuse Events
- Turn on the `debug` mode to help you analyze

### Max

Limiting the maximum number of reuse can reduce memory growth. There are several issues to be aware of:

- `max` Forces a close and ignores the closable state when value changes
- When it's out of `max` range, it will turn off the first open tab (Only **closable**), ignore close when all pages are **non-closable**

### Not supported QueryString parameters

Route reuse preserves uses URLs to distinguish whether the same page, and QueryString query parameters will be repeatedly misused, so not supported, and the QueryString part is forced to be ignored.

### Multi-application cache processing

Use `provideReuseTabConfig(storeKey: 'newKey')` Or overriding `REUSE_TAB_CACHED_MANAGER` to change the cache storage, for example when using a micro-frontend (similar to [ngx-planet](https://github.com/worktile/ngx-planet)) can rewrite cached data to `window` guaranteed data sharing.
