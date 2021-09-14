---
order: 5
title: 云在布局
type: Documents
---

云在布局模块提供了一套自定的页面布局组件

## 如何使用

```ts
const yunzaiModules: any[] = [YunzaiThemeModule.forRoot(), YelonACLModule.forRoot(), YunzaiLayoutModule];
```

在`global-config.modules.ts`中将默认的`LayoutModule`替换成为`YunzaiLayoutModule`

```ts
const routes: Routes = [
  {
    path: '',
    component: YzLayoutBasicComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent, data: { title: '仪表盘', reuse: true } },
      { path: 'base/menu', component: DashboardComponent, data: { title: 'Web应用管理', reuse: true } },
      { path: 'base/app/menu', component: DashboardComponent, data: { title: 'APP应用管理', reuse: true } },
      { path: 'exception', loadChildren: () => import('./exception/exception.module').then(m => m.ExceptionModule) },
      { path: 'trade', loadChildren: () => import('./trade/trade.module').then(m => m.TradeModule) }
    ]
  },
  { path: '**', redirectTo: 'exception/404' }
];
```

在`routes-routing.module.ts`中将最外层`BasicComponent`替换成`YzLayoutBasicComponent`



## 模块说明

```ts
const COMPONENTS = [
  YzLayoutBasicComponent,
  YzHeaderApplicationComponent,
  YzHeaderNotifyComponent,
  YzHeaderThemBtnComponent,
  YzHeaderUserComponent,
  YzHeaderFullScreenComponent,
  YzHeaderClearStorageComponent,
  YzHeaderI18NComponent
];

@NgModule({
  imports: [HttpClientModule, CommonModule, FormsModule, RouterModule, ReactiveFormsModule, YzSharedModule],
  providers: [
    {
      provide: YUNZAI_THEME_BTN_KEYS,
      useValue: 'site-theme'
    }
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class YunzaiLayoutModule {}

```

`YunzaiLayoutModule`提供了一套自定义的布局组件

| 组件 | 说明 
|-----|----|
| `[YzLayoutBasicComponent]` | 将以下小组件封装起来的整体布局组件 |
| `[YzHeaderApplicationComponent]` | 应用于服务按钮 |
| `[YzHeaderNotifyComponent]` | 通知按钮 | 
| `[YzHeaderThemBtnComponent]` | 主题选项 |
| `[YzHeaderUserComponent]` | 用户下拉菜单 |
| `[YzHeaderFullScreenComponent]` | 全屏 |
| `[YzHeaderClearStorageComponent]` | 清除缓存 |
| `[YzHeaderI18NComponent]` | 切换语言 |
