---
order: 10
title: 云在布局服务
type: Documents
---

使用云在布局

## routes-routing.module.ts

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '@env/environment';
import { ActGuard, YzLayoutBasicComponent } from '@yelon/bis/layout';

import { LayoutBlankComponent } from '../layout/blank/blank.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',
    component: YzLayoutBasicComponent,
    canActivate: [ActGuard],
    canActivateChild: [ActGuard],
    children: [
      { path: '', redirectTo: 'displayIndex', pathMatch: 'full' },
      { path: 'displayIndex', component: IndexComponent, data: { title: '首页', titleI18n: 'page.index' } },
      { path: 'exception', loadChildren: () => import('./exception/exception.module').then(m => m.ExceptionModule) },
    ]
  },
  // 空白布局
  { path: 'blank', component: LayoutBlankComponent, children: [] },
  { path: '**', redirectTo: 'exception/404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class RouteRoutingModule {}

```
