---
order: 150
title: Yunzai Layout Service
type: Documents
---

In order to adapt to various situations, layout services are provided

## how to use

### URL parameter transfer method

| Path | Parameters | Description |
|-|-|-|
| http://localhost:4200/#/displayIndex?showResuseTab=true | showResuseTab | Show route reuse |
| http://localhost:4200/#/displayIndex?showResuseTab=Any value except true | showResuseTab | Hide route reuse |
| http://localhost:4200/#/displayIndex?showSider=true | showSider | Show left menu |
| http://localhost:4200/#/displayIndex?showSider=Any value except true | showSider | Hide left menu |
| http://localhost:4200/#/displayIndex?showHeader=true | showHeader | Show top menu |
| http://localhost:4200/#/displayIndex?showHeader=Any value except true | showHeader | Hide top menu |

### Injection service method

```ts
import {LayoutService} from'@yelon/theme/layout-default';

export class AppComponent implements OnInit {
  constructor(
    private layoutService: LayoutService
  ) {
  }

  ngOnInit(): void {
    // Show/hide the left menu
    this.layoutService.showSider();
    this.layoutService.hideSider();
    // Show/hide the top menu
    this.layoutService.showHeader();
    this.layoutService.hideHeader();
    // Show/hide routing reuse
    this.layoutService.showReuseTab();
    this.layoutService.hideReuseTab();
  }
}
```
