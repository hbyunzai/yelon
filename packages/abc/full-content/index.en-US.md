---
type: Layout
title: full-content
subtitle: Full Screen Workspace
cols: 1
module: import { FullContentModule } from '@yelon/abc/full-content';
---

Often used for tables with scroll bars, a simple [demo](https://ng-yunzai.surge.sh/#/yelon/st)。

## API

### full-content:standalone

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[(fullscreen)]` | Whether full screen (not including top, sidebar area) | `boolean` | - |
| `[hideTitle]` | Hide title when `fullscreen` is true | `boolean` | `true` |
| `[padding]` | Padding of work area | `number` | `24` |

### [full-toggle]:standalone

Switch whether it is full screen.

## Control

There are three ways:

- Use `fullscreen` property, it support two-way binding
- Use `[full-toggle]` directive
- Use `FullContentService.toggle()` service
