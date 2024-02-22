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
        @for (menu of state.topics; track menu) {
          <nz-tab [nzTitle]="groupTitleTpl">
            <ng-template #groupTitleTpl>
              <a
                data-event-id="_nav_topic"
                [attr.data-name]="menu.name | i18n"
                nz-dropdown
                [nzDropdownMenu]="menuTpl"
                [nzTrigger]="'click'"
                [nzOverlayClassName]="'yz-application-dropdown'"
              >
                @if (menu.icon) {
                  <i nz-icon [nzType]="menu.icon" nzTheme="outline"></i>
                }
                {{ menu.name | i18n }}
                @if (menu.children && menu.children.length > 0) {
                  <i nz-icon nzType="down" nzTheme="outline"></i>
                }
              </a>
              <nz-dropdown-menu #menuTpl="nzDropdownMenu">
                @if (menu.children && menu.children.length > 0) {
                  <ul nz-menu nzSelectable>
                    @for (item of menu.children; track item) {
                      <ng-container>
                        <li
                          data-event-id="_nav_item"
                          [attr.data-name]="item.name | i18n"
                          nz-menu-item
                          (click)="open(item)"
                        >
                          @if (item.icon) {
                            <i nz-icon [nzType]="item.icon" nzTheme="outline"></i>{{ item.name | i18n }}
                          }
                        </li>
                      </ng-container>
                    }
                  </ul>
                }
              </nz-dropdown-menu>
            </ng-template>
          </nz-tab>
        }
      </nz-tabset>
    </div>
  `,
  standalone: true,
  imports: [NzIconModule, NzDropDownModule, I18nPipe, NzTabsModule]
})
export class YunzaiLayoutNavGroupComponent implements OnInit, OnDestroy {
  private readonly http = inject(_HttpClient);
  private destroy$ = new Subject();
  private readonly win = inject(WINDOW);
  state: LayoutNavGroupState = {
    topics: []
  };

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
        .pipe(takeUntil(this.destroy$))
        .subscribe();
    }
    switch (topic.target) {
      case 'href':
        this.win.location.href = topic.url;
        break;
      case 'blank':
        this.win.location.href = topic.url;
        break;
      case 'target':
        this.win.location.href = topic.url;
        break;
      default:
        this.win.location.href = topic.url;
        break;
    }
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
  }
}
