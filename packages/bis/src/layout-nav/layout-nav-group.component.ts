import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { CacheService, YunzaiNavTopic } from '@yelon/cache';
import { _HttpClient } from '@yelon/theme';
import { WINDOW } from '@yelon/util';

import { LayoutNavGroupState } from './types';

@Component({
  selector: `layout-nav-group`,
  template: `
    <div class="yz-application-group">
      <nz-tabset>
        <nz-tab *ngFor="let menu of state.topics" [nzTitle]="groupTitleTpl">
          <ng-template #groupTitleTpl>
            <a
              nz-dropdown
              [nzDropdownMenu]="menuTpl"
              [nzTrigger]="'click'"
              [nzOverlayClassName]="'yz-application-dropdown'"
            >
              <i nz-icon *ngIf="menu.icon" [nzType]="menu.icon" nzTheme="outline"></i>
              {{ menu.name | i18n }}
              <i *ngIf="menu.children && menu.children.length > 0" nz-icon nzType="down" nzTheme="outline"></i>
            </a>
            <nz-dropdown-menu #menuTpl="nzDropdownMenu">
              <ul nz-menu nzSelectable *ngIf="menu.children && menu.children.length > 0">
                <ng-container *ngFor="let item of menu.children">
                  <li nz-menu-item (click)="open(item)">
                    <i nz-icon *ngIf="item.icon" [nzType]="item.icon" nzTheme="outline"></i>{{ item.name | i18n }}
                  </li>
                </ng-container>
              </ul>
            </nz-dropdown-menu>
          </ng-template>
        </nz-tab>
      </nz-tabset>
    </div>
  `
})
export class LayoutNavGroupComponent implements OnInit, OnDestroy {
  state: LayoutNavGroupState = {
    topics: [],
    destroy$: new Subject<any>()
  };

  constructor(private inject: Injector, private cacheService: CacheService, private http: _HttpClient) {}

  ngOnInit(): void {
    this.state.topics = this.cacheService.get('_yz_header', { mode: 'none' });
  }

  open(topic: YunzaiNavTopic): void {
    if (topic.key) {
      this.http
        .post(`/app-manager/web-scan/save`, {
          appId: topic.key,
          createDate: new Date()
        })
        .pipe(takeUntil(this.state.destroy$))
        .subscribe();
    }
    switch (topic.target) {
      case 'href':
        this.inject.get(WINDOW).location.href = topic.url;
        break;
      case 'blank':
        this.inject.get(WINDOW).location.href = topic.url;
        break;
      case 'target':
        this.inject.get(WINDOW).location.href = topic.url;
        break;
      default:
        this.inject.get(WINDOW).location.href = topic.url;
        break;
    }
  }

  ngOnDestroy(): void {
    this.state.destroy$.complete();
  }
}