---
type: Layout
title: exception
subtitle: 异常
cols: 1
module: import { ExceptionModule } from '@yelon/abc/exception';
---

异常页用于对页面特定的异常状态进行反馈。通常，它包含对错误状态的阐述，并向用户提供建议或操作，避免用户感到迷失和困惑。

## API

### exception

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[type]` | 页面类型，若配置，则自带对应类型默认的 `title`，`desc`，`img`，此默认设置可以被 `title`，`desc`，`img` 覆盖 | `'403','404','500'` | - | ✅ |
| `[title]` | 标题 | `string` | - | - |
| `[desc]` | 补充描述 | `string` | - | - |
| `[img]` | 背景图片地址 | `string` | - | - |
| `[backRouterLink]` | 后退路由链接 | `string, any[]` | `/` | - |
| `ng-content` | 建议操作，配置此属性时默认的『返回首页』按钮不生效 | `TemplateRef<void>` | - | - |
