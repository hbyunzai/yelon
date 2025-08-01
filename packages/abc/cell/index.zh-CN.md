---
type: CURD
title: cell
subtitle: 单元格数据
cols: 1
order: 4
module: import { CellModule } from '@yelon/abc/cell';
---

内置支持十几种数据类型的格式化，且支持小部件自定义模式。

## API

### cell

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[value]` | 值 | `unknown` | - |
| `[options]` | 选项 | `CellOptions` | - |
| `[loading]` | 是否加载中 | `boolean` | `false` |

### CellOptions

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[type]` | 渲染类型 | - | - |
| `[tooltip]` | 文字提示 | `string` | - |
| `[renderType]` | 渲染类型 | `primary,success,danger,warning` | - |
| `[size]` | 大小 | `large,small` | - |
| `[unit]` | 单位，也可通过 `value: {text: 100, unit: '元'}` 来指定 | `string` | `-` |
| `[default]` | 默认文本 | `string | CellDefaultText` | - |
| `[mask]` | 格式化掩码, 参考[文档](https://ng.yunzainfo.com/util/format/zh#formatMask) | `string, FormatMaskOption` | - |
| `[widget]` | 小部件配置 | `{key?: string, data?: string}` | - |
| `[date]` | 日期配置，支持 `几分钟前` 格式化 | `{format?: string}` | - |
| `[mega]` | 大数据格式化配置 | `CurrencyMegaOptions` | - |
| `[currency]` | 货币配置 | `CurrencyFormatOptions` | - |
| `[boolean]` | 布尔配置 | `YNOptions` | - |
| `[img]` | 图像配置，支持大图预览 | `{ size?: number; big?: boolean }` | - |
| `[link]` | 链接配置 | `{ url?: string; target?: string }` | - |
| `[html]` | HTML 配置 | `{ safe?: string }` | - |
| `[badge]` | 徽章配置 | `{ data?: CellBadge }` | - |
| `[tag]` | 标签配置 | `{ data?: CellTag }` | - |
| `[checkbox]` | 复选框配置 | `{ label?: string }` | - |
| `[radio]` | 单选框配置 | `{ label?: string }` | - |

**渲染类型**

- `string` 字符串
- `number` 数字
- `mega` 大数据格式化
- `currency` 货币
- `cny` 转化成人民币表示法
- `boolean` 布尔
- `date` 日期
- `img` 图像，支持大图预览
- `link` 链接
- `html` HTML
- `badge` 徽章
- `tag` 标签
- `checkbox` 复选框（支持 `disabled`）
- `radio` 单选框（支持 `disabled`）
- `enum` 枚举转换
- `widget` 自定义小部件

## 自定义小部件

实现 `CellWidgetInstance` 接口即可，例如：

```ts
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import type { CellTextResult, CellWidgetInstance } from '@yelon/abc/cell';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'cell-widget-test',
  template: `<img nz-tooltip nzTooltipTitle="Client it" [src]="data.result.text" class="img" style="cursor: pointer" /> `,
  host: {
    '(click)': 'show()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ NzTooltipModule ]
})
export class CellTestWidget implements CellWidgetInstance {
  private readonly msg = inject(NzMessageService);
  static readonly KEY = 'test';

  readonly data!: CellTextResult;

  show(): void {
    this.msg.info(`click`);
  }
}
```

其中 `data` 为固定参数，包含 `value`、`options` 配置项。

最后在 `app.config.ts` 下通过 `provideCellWidgets` 注册小部件，例如：

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideCellWidgets(
      { KEY: CellTestWidget.KEY, type: CellTestWidget }
    ),
  ]
}
```
