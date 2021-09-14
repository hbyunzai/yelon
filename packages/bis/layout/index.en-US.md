---
order: 5
title: Yunzai Layout
type: Documents
---

Yunzai layout module provides a set of custom page layout components

## How to use

```ts
const yunzaiModules: any[] = [YunzaiThemeModule.forRoot(), YelonACLModule.forRoot(), YunzaiLayoutModule];
```

Replace the default `LayoutModule` with `YunzaiLayoutModule` in `global-config.modules.ts`

```ts
const routes: Routes = [
  {
    path:'',
    component: YzLayoutBasicComponent,
    children: [
      {path:'', redirectTo:'dashboard', pathMatch:'full' },
      {path:'dashboard', component: DashboardComponent, data: {title:'dashboard', reuse: true} },
      {path:'base/menu', component: DashboardComponent, data: {title:'Web Application Management', reuse: true} },
      {path:'base/app/menu', component: DashboardComponent, data: {title:'APP Application Management', reuse: true} },
      {path:'exception', loadChildren: () => import('./exception/exception.module').then(m => m.ExceptionModule) },
      {path:'trade', loadChildren: () => import('./trade/trade.module').then(m => m.TradeModule)}
    ]
  },
  {path:'**', redirectTo:'exception/404'}
];
```

Replace the outermost `BasicComponent` with `YzLayoutBasicComponent` in `routes-routing.module.ts`



## Module description

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
      useValue:'site-theme'
    }
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class YunzaiLayoutModule {}

```

`YunzaiLayoutModule` provides a set of custom layout components

| Components | Description
|-----|----|
| `[YzLayoutBasicComponent]` | The overall layout component that encapsulates the following small components |
| `[YzHeaderApplicationComponent]` | Apply to service button |
| `[YzHeaderNotifyComponent]` | Notification button |
| `[YzHeaderThemBtnComponent]` | Theme Options |
| `[YzHeaderUserComponent]` | User drop-down menu |
| `[YzHeaderFullScreenComponent]` | Full Screen |
| `[YzHeaderClearStorageComponent]` | Clear cache |
| `[YzHeaderI18NComponent]` | Change language |
