---
type: Documents
order: 10
title: Performance
---

ng-yunzai also includes a set of like bootstrap style tools, And built on the design principles developed by [Ant Design](https://ant.design/). If you are familiar with Bootstrap, it will be very friendly, because all naming as close as it. Also, Install [ng-yunzai snippets](https://marketplace.visualstudio.com/items?itemName=yunzai-bot.ng-yunzai-vscode) plugin in VSCode for intellisense these class names.

## Usage

We have hundreds of Less variables (including ng-zorro-antd, ng-yunzai), some of which contain the `-enabled` suffix, which means that these libraries are optional.

You can to [theme.less](https://github.com/hbyunzai/ng-yunzai/blob/master/src/styles/theme.less) set to `false`, which can reduce css file size.

```less
// I don't need masonry style
@masonry-enabled: false
```

## Parameters

| Name | Default | Description |
| --- | --- | --- |
| `@scrollbar-enabled` | `true` | Enable landscaping scrollbars |
| `@preserve-white-spaces-enabled` | `true` | Fixed between buttons spacing when enabled [preserveWhitespaces](https://angular.io/api/core/Component#preserveWhitespaces) is true |
| `@form-state-visual-feedback-enabled` | `false` | Turn on visual feedback of form invalid elements |
| `@hafl-enabled` | `true` | Whether hafl image |
| `@abs-enabled` | `true` | Whether abs element|
| `@masonry-enabled` | `true` | Whether css masonry |
| `@setting-drawer-enabled` | `true` | Whether setting drawer css |
| `@search-form-enabled` | `true` | Simple style search form, [DEMO](https://ng-yunzai.surge.sh/) |
| `@search__form-enabled` | `true` | Pro style search form, [DEMO](https://ng-yunzai.surge.sh/) |





