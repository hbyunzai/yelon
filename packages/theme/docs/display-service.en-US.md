---
order: 20
title: 显示切换
type: Documents
---


The theme/layout-default module provides a way to hide and display layout elements and control the method of URL parameter passing



## URL parameter transfer method

| Path | Parameters | Description |
|-|-|-|
| http://localhost:4200/#/displayIndex?displayReusetab=true | displayReusetab | Show route reuse |
| http://localhost:4200/#/displayIndex?displayReusetab=false | displayReusetab | Hide route reuse |
| http://localhost:4200/#/displayIndex?displayAside=true | displayAside | Show left menu |
| http://localhost:4200/#/displayIndex?displayAside=false | displayAside | Hide left menu |
| http://localhost:4200/#/displayIndex?displayNav=true | displayNav | Show top menu |
| http://localhost:4200/#/displayIndex?displayNav=false | displayNav | Hide top menu |

## Injection service method

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
