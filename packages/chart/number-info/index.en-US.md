---
type: G2
title: number-info
subtitle: NumberInfo
cols: 2
module: import { NumberInfoModule } from '@yelon/chart/number-info';
---

Often used in data cards for highlighting the business data.

## API

### number-info

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[title]` | title | `TemplateRef<void>` | - |
| `[subTitle]` | subtitle | `TemplateRef<void>` | - |
| `[total]` | total amount | `string, number` | - |
| `[suffix]` | total amount suffix | `string` | - |
| `[subTotal]` | total amount of additional information | `string, number` | - |
| `[status]` | increase state | `'up','down'` | - |
| `[theme]` | state style | `'light','default'` | `'light'` |
| `[gap]` | set the spacing (pixels) between numbers and descriptions | `number` | 8 |
