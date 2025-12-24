import { Component, OnInit } from '@angular/core';

import { I18nPipe } from '@yelon/theme';
import { LayoutNavGroupState, useLocalStorageHeader } from '@yelon/util';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { YunzaiLayoutNavBase } from './layout-nav-base';

@Component({
  selector: `yunzai-layout-nav-group`,
  template: `
    <div class="yz-application-group">
      <nz-tabset>
        @for (menu of state.topics; track menu) {
          <nz-tab [nzTitle]="groupTitleTpl">
            <ng-template #groupTitleTpl>
              <a data-event-id="_nav_topic" [attr.data-name]="menu.name | i18n" nz-dropdown [nzDropdownMenu]="menuTpl" [nzTrigger]="'click'" [nzOverlayClassName]="'yz-application-dropdown'">
                @if (menu.icon) {
                  <nz-icon [nzType]="menu.icon" nzTheme="outline"></nz-icon>
                }
                {{ menu.name | i18n }}
                @if (menu.children && menu.children.length > 0) {
                  <nz-icon nzType="down" nzTheme="outline"></nz-icon>
                }
              </a>
              <nz-dropdown-menu #menuTpl="nzDropdownMenu">
                @if (menu.children && menu.children.length > 0) {
                  <ul nz-menu nzSelectable>
                    @for (item of menu.children; track item) {
                      <ng-container>
                        @if (item.auth) {
                          <li data-event-id="_nav_item" [attr.data-name]="item.name | i18n" nz-menu-item (click)="open(item)">
                            @if (item.icon) {
                              <nz-icon [nzType]="item.icon" nzTheme="outline"></nz-icon>
                            }
                            {{ item.name | i18n }}
                          </li>
                        }
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

  imports: [NzIconModule, NzDropDownModule, I18nPipe, NzTabsModule]
})
export class YunzaiLayoutNavGroupComponent extends YunzaiLayoutNavBase implements OnInit {
  state: LayoutNavGroupState = {
    topics: []
  };

  ngOnInit(): void {
    const [, getTopics] = useLocalStorageHeader();
    this.state.topics = getTopics() || [];
  }
}
