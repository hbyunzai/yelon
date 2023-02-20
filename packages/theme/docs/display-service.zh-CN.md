---
order: 20
title: display
type: Documents
---

theme/layout-default 模块提供了对布局元素的隐藏与显示以及url传参方式控制的途径

## URL参数传递方式

|路径 |参数 |说明 |
|-|-|-|
| http://localhost:4200/#/displayIndex?displayReusetab=true |显示重用tab |显示路线重用 |
| http://localhost:4200/#/displayIndex?displayReusetab=false |显示重用tab |隐藏路线重用 |
| http://localhost:4200/#/displayIndex?displayAside=true |显示一边 |显示左侧菜单 |
| http://localhost:4200/#/displayIndex?displayAside=false |显示一边 |隐藏左侧菜单 |
| http://localhost:4200/#/displayIndex?displayNav=true |显示导航 |显示顶部菜单 |
| http://localhost:4200/#/displayIndex?displayNav=false |显示导航 |隐藏顶部菜单 |


## 注入服务方式

```ts
import { LayoutDisplayService } from '@yelon/theme/layout-default';
export class AppComponent implements OnInit {
  constructor(
    private layoutDisplayService: LayoutDisplayService
  ) {
  }

  ngOnInit(): void {
    this.layoutDisplayService.listen('reuseTab', (display: boolean) => {
      this.state.display.reusetab = display;
    });
    this.layoutDisplayService.listen('nav', (display: boolean) => {
      this.state.display.nav = display;
    });
    this.layoutDisplayService.listen('aside', (display: boolean) => {
      this.state.display.aside = display;
    });
    this.layoutDisplayService.hide("nav")
    this.layoutDisplayService.display("nav")
  }

}
```
