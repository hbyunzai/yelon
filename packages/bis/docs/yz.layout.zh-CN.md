---
order: 150
title: 云在布局服务
type: Documents
---

为了适应各种情况所以提供了布局服务

## 如何使用

### URL传参方式

| 路径 | 参数 | 说明 |
| - | - | - |
| http://localhost:4200/#/displayIndex?showResuseTab=true | showResuseTab | 显示路由复用 |
| http://localhost:4200/#/displayIndex?showResuseTab=除true外任意值 | showResuseTab | 隐藏路由复用 |
| http://localhost:4200/#/displayIndex?showSider=true | showSider | 显示左侧菜单 |
| http://localhost:4200/#/displayIndex?showSider=除true外任意值 | showSider | 隐藏左侧菜单 |
| http://localhost:4200/#/displayIndex?showHeader=true | showHeader | 显示顶部菜单 |
| http://localhost:4200/#/displayIndex?showHeader=除true外任意值 | showHeader | 隐藏顶部菜单 |

### 注入服务方式

```ts
import { LayoutService } from '@yelon/theme/layout-default';

export class AppComponent implements OnInit {
  constructor(
    private layoutService: LayoutService
  ) {
  }

  ngOnInit(): void {
    // 显示/隐藏左侧菜单
    this.layoutService.showSider();
    this.layoutService.hideSider();
    // 显示/隐藏顶部菜单
    this.layoutService.showHeader();
    this.layoutService.hideHeader();
    // 显示/隐藏路由复用
    this.layoutService.showReuseTab();
    this.layoutService.hideReuseTab();
  }
}
```



