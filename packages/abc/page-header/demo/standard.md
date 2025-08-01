---
order: 1
title:
  en-US: Standard
  zh-CN: 标准
bg: f2f4f5
---

标准页头。

```ts
import { Component, inject } from '@angular/core';

import { PageHeaderComponent } from '@yelon/abc/page-header';
import { SVModule } from '@yelon/abc/sv';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSpaceCompactComponent } from 'ng-zorro-antd/space';

@Component({
  selector: 'app-demo',
  template: `
    <page-header
      [title]="'单号：234231029431'"
      [breadcrumb]="breadcrumb"
      [logo]="logo"
      [action]="action"
      [extra]="extra"
      [content]="content"
      [tab]="tab"
    >
      <ng-template #breadcrumb>
        <nz-breadcrumb>
          <nz-breadcrumb-item><a>一级菜单</a></nz-breadcrumb-item>
          <nz-breadcrumb-item><a>二级菜单</a></nz-breadcrumb-item>
          <nz-breadcrumb-item><a>三级菜单</a></nz-breadcrumb-item>
        </nz-breadcrumb>
      </ng-template>
      <ng-template #logo><img src="https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png" /></ng-template>
      <ng-template #action>
        <nz-space-compact>
          <button nz-button>操作</button>
          <button nz-button>操作</button>
        </nz-space-compact>
        <button nz-button nz-dropdown [nzDropdownMenu]="actionMoreMenu" class="mx-sm">
          <nz-icon nzType="ellipsis" />
        </button>
        <nz-dropdown-menu #actionMoreMenu="nzDropdownMenu">
          <ul nz-menu>
            <li nz-menu-item>选项一</li>
            <li nz-menu-item>选项二</li>
            <li nz-menu-item>选项三</li>
          </ul>
        </nz-dropdown-menu>
        <button nz-button [nzType]="'primary'">主操作</button>
      </ng-template>
      <ng-template #content>
        <sv-container size="small" col="2">
          <sv label="创建人">曲丽丽</sv>
          <sv label="订购产品">XX 服务</sv>
          <sv label="创建时间">2017-07-07</sv>
          <sv label="关联单据"><a (click)="msg.success('yes')">12421</a></sv>
          <sv label="生效日期">2017-07-07 ~ 2017-08-08</sv>
          <sv label="备注">请于两个工作日内确认</sv>
        </sv-container>
      </ng-template>
      <ng-template #extra>
        <div nz-row>
          <div nz-col nzXs="24" nzSm="12">
            <p class="text-grey">状态</p>
            <p class="text-lg">待审批</p>
          </div>
          <div nz-col nzXs="24" nzSm="12">
            <p class="text-grey">订单金额</p>
            <p class="text-lg">¥ 568.08</p>
          </div>
        </div>
      </ng-template>
      <ng-template #tab>
                <nz-tabs [nzSize]="'default'">
          <nz-tab nzTitle="详情" />
          <nz-tab nzTitle="规则" />
                  </nz-tabs>
      </ng-template>
    </page-header>
  `,
  imports: [
    PageHeaderComponent,
    NzBreadCrumbModule,
    NzButtonModule,
    NzSpaceCompactComponent,
    NzDropDownModule,
    NzTabsModule,
    NzGridModule,
    NzIconModule,
    SVModule
  ]
})
export class DemoComponent {
  readonly msg = inject(NzMessageService);
}
```
