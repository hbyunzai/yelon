import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { mergeBisConfig } from '@yelon/bis/config';
import { I18nPipe, YunzaiHttpI18NService } from '@yelon/theme';
import { LayoutNavApplicationState, useLocalStorageHeader, YunzaiConfigService } from '@yelon/util';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

import { YunzaiLayoutNavBase } from './layout-nav-base';

@Component({
  selector: `yunzai-layout-nav-application`,
  template: `
    <ng-template #search>
      <div nz-row class="yz-application-list-search">
        <nz-input-group [nzPrefix]="prefixTemplate">
          <input data-event-id="_nav_search" type="text" nz-input placeholder="{{ 'application.search' | i18n }}" [(ngModel)]="state.search" (ngModelChange)="onSearch()" />
          <ng-template #prefixTemplate>
            <nz-icon nzType="search" nzTheme="outline"></nz-icon>
          </ng-template>
        </nz-input-group>
      </div>
    </ng-template>

    <ng-template #ld>
      <div class="yz-application-list">
        <ul>
          @for (topic of state.list; track topic) {
            <li>
              <h5>{{ topic.name | i18n }}</h5>
              @for (nav of topic.children; track nav) {
                <a data-event-id="_nav_item" [attr.data-name]="nav.name | i18n" href="javascript:;" (click)="open(nav)">{{ nav.name | i18n }}</a>
              }
            </li>
          }
        </ul>
      </div>
    </ng-template>

    <div data-event-id="_nav_app" id="navBtn" class="yunzai-default__nav-item" (click)="diffChange()">{{ 'mode.nav' | i18n }} </div>

    <div class="yz-application" id="navDropdown" nz-row *ngIf="state.active">
      <div nz-col [nzSpan]="3" class="yz-application-topic">
        <div class="yz-application-topic-list">
          @if (showAllMenu) {
            <div data-event-id="_nav_topic" data-name="全部应用" class="yz-application-text" (click)="attachNav('all')">{{ 'mode.nav.all' | i18n }} </div>
          }
          @if (showMineMenu) {
            <div data-event-id="_nav_topic" data-name="我的应用" class="yz-application-text" (click)="attachNav('mine')">{{ 'mode.nav.mine' | i18n }} </div>
          }
          @for (nav of state.topics; track nav) {
            <div data-event-id="_nav_topic" [attr.data-name]="nav.name | i18n" class="yz-application-text" (click)="attachNav('other', nav)">{{ nav.name | i18n }} </div>
          }
        </div>
      </div>
      <div nz-col [nzSpan]="21" class="yz-application-container">
        @switch (state.type) {
          @case ('all') {
            <div>
              <ng-template [ngTemplateOutlet]="search" />
              <ng-template [ngTemplateOutlet]="ld" />
            </div>
          }
          @case ('mine') {
            <div>
              <ng-template [ngTemplateOutlet]="search" />
              <ng-template [ngTemplateOutlet]="ld" />
            </div>
          }
          @case ('other') {
            <div class="yz-application-list yz-application-list-other">
              <div class="yz-application-list-item">
                <ul>
                  @for (nav of state.list; track nav) {
                    <li data-event-id="_nav_item" [attr.data-name]="nav.name | i18n" (click)="open(nav)">
                      <a href="javascript:;">
                        <h4>{{ nav.name | i18n }}</h4>
                        <p>{{ nav.intro | i18n }}</p>
                      </a>
                    </li>
                  }
                </ul>
              </div>
            </div>
          }
        }
      </div>
    </div>
  `,
  imports: [I18nPipe, FormsModule, NzFormModule, NzInputModule, CommonModule, NzGridModule, NzIconModule]
})
export class YunzaiNavApplicationComponent extends YunzaiLayoutNavBase implements OnInit {
  private readonly config = mergeBisConfig(inject(YunzaiConfigService));
  private readonly i18n = inject(YunzaiHttpI18NService);

  state: LayoutNavApplicationState = {
    active: false,
    type: 'all',
    topic: undefined,
    topics: [],
    list: [],
    search: null
  };

  get showAllMenu(): boolean {
    if (this.config.nav) return this.config.nav!.all!;
    return true;
  }

  get showMineMenu(): boolean {
    if (this.config.nav) return this.config.nav!.mine!;
    return true;
  }

  ngOnInit(): void {
    this.fetchAllTopic();
    this.attachNav('all');
    this.win.addEventListener('click', (event: any) => {
      const { target } = event;
      const btn = this.win.document.getElementById('navBtn');
      const dropdown = this.win.document.getElementById('navDropdown');
      if (btn && dropdown && !dropdown.contains(target) && !btn.contains(target)) {
        this.state.active = false;
      }
    });
  }

  fetchAllTopic(): void {
    const [, getTopics] = useLocalStorageHeader();
    this.state.topics = getTopics()!;
  }

  attachNav(type: 'all' | 'mine' | 'other', topic?: YunzaiNavTopic): void {
    this.state.type = type;
    this.clearSearch();
    if (type === 'all') {
      this.displayAllNav();
    }
    if (type === 'mine') {
      this.displayMineNav();
    }
    if (type === 'other' && topic) {
      this.displayOtherNav(topic);
    }
  }

  clearSearch(): void {
    this.state.search = null;
  }

  displayAllNav(): void {
    const [, getTopics] = useLocalStorageHeader();
    this.state.list = getTopics()!;
  }

  displayMineNav(): void {
    const [, getTopics] = useLocalStorageHeader();
    this.state.list = getTopics()!
      .filter((topic: YunzaiNavTopic) => {
        topic.children = topic.children.filter((child: YunzaiNavTopic) => {
          return child.auth;
        });
        return topic;
      })
      .filter((topic: YunzaiNavTopic) => {
        return topic.children.length > 0;
      });
  }

  displayOtherNav(topic: YunzaiNavTopic): void {
    const [, getTopics] = useLocalStorageHeader();
    this.state.topic = topic;
    const temp: YunzaiNavTopic[] = getTopics()!;
    this.state.list = temp.filter(t => t.key === topic.key)[0].children;
  }

  diffChange(flag?: boolean): void {
    if (flag) {
      this.state.active = flag;
    } else {
      this.state.active = !this.state.active;
    }
  }

  onSearch(): void {
    const [, getTopics] = useLocalStorageHeader();
    const temp: YunzaiNavTopic[] = getTopics()!;
    if (this.state.search) {
      this.state.list = temp
        .filter((topic: YunzaiNavTopic) => {
          if (this.i18n.fanyi(topic.name).includes(this.state.search!)) {
            return topic;
          } else {
            topic.children = topic.children.filter((child: YunzaiNavTopic) => {
              return this.i18n.fanyi(child.name).includes(this.state.search!);
            });
            return topic;
          }
        })
        .filter((topic: YunzaiNavTopic) => {
          return topic.children.length > 0;
        });
    } else {
      const [, getTopics] = useLocalStorageHeader();
      this.state.list = getTopics()!;
    }
  }
}
