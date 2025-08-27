import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { _HttpClient, I18nPipe } from '@yelon/theme';
import { LayoutNavGroupState, useLocalStorageHeader, WINDOW, YunzaiNavTopic } from '@yelon/util';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: `yunzai-layout-nav-group`,
  template: `
    <div class="yz-application-group">
      <nz-tabset>
        <nz-tab *ngFor="let menu of state.topics" [nzTitle]="groupTitleTpl">
          <ng-template #groupTitleTpl>
            <a data-event-id="_nav_topic" [attr.data-name]="menu.name | i18n" nz-dropdown [nzDropdownMenu]="menuTpl" [nzTrigger]="'click'" [nzOverlayClassName]="'yz-application-dropdown'">
              <nz-icon *ngIf="menu.icon" [nzType]="menu.icon" nzTheme="outline"></nz-icon>
              {{ menu.name | i18n }}
              <nz-icon *ngIf="menu.children && menu.children.length > 0" nz-icon nzType="down" nzTheme="outline"></nz-icon>
            </a>
            <nz-dropdown-menu #menuTpl="nzDropdownMenu">
              <ul nz-menu nzSelectable *ngIf="menu.children && menu.children.length > 0">
                <ng-container *ngFor="let item of menu.children">
                  <li data-event-id="_nav_item" *ngIf="item.auth" [attr.data-name]="item.name | i18n" nz-menu-item (click)="open(item)">
                    <nz-icon *ngIf="item.icon" [nzType]="item.icon" nzTheme="outline" style="margin-right: 4px;"></nz-icon>{{ item.name | i18n }}
                  </li>
                </ng-container>
              </ul>
            </nz-dropdown-menu>
          </ng-template>
        </nz-tab>
      </nz-tabset>
    </div>
  `,
  imports: [NzIconModule, NzDropDownModule, I18nPipe, NzTabsModule]
})
export class YunzaiLayoutNavGroupComponent implements OnInit, OnDestroy {
  private $destroy = new Subject();
  state: LayoutNavGroupState = {
    topics: []
  };

  private http: _HttpClient = inject(_HttpClient);

  ngOnInit(): void {
    const [, getTopics] = useLocalStorageHeader();
    this.state.topics = getTopics() || [];
  }

  open(topic: YunzaiNavTopic): void {
    if (topic.key) {
      this.http
        .post(`/app-manager/web-scan/save`, {
          appId: topic.key,
          createDate: new Date()
        })
        .pipe(takeUntil(this.$destroy))
        .subscribe();
    }
    switch (topic.target) {
      case 'href':
        inject(WINDOW).location.href = topic.url;
        break;
      case 'blank':
        inject(WINDOW).open(topic.url);
        break;
      case 'target':
        inject(WINDOW).open(topic.url);
        break;
      default:
        inject(WINDOW).location.href = topic.url;
        break;
    }
  }

  ngOnDestroy(): void {
    this.$destroy.complete();
  }
}
