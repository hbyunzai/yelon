import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { _HttpClient, I18nPipe, YunzaiHttpI18NService } from '@yelon/theme';
import { LayoutNavApplicationState, useLocalStorageHeader, WINDOW, YUNZAI_CONFIG, YunzaiBusinessConfig, YunzaiConfig, YunzaiNavTopic } from '@yelon/util';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
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
      <div style="overflow: hidden;width: 100%; height: calc(100% - 58px)">
        <div class="yz-application-list">
          <ul>
            <li *ngFor="let topic of state.list">
              <h5>{{ topic.name | i18n }}</h5>
              <a data-event-id="_nav_item" [attr.data-name]="nav.name | i18n" href="javascript:;" *ngFor="let nav of topic.children" (click)="open(nav)">{{ nav.name | i18n }}</a>
            </li>
          </ul>
        </div>
      </div>
    </ng-template>

    <div data-event-id="_nav_app" id="navBtn" class="yunzai-default__nav-item" (click)="diffChange()">{{ 'mode.nav' | i18n }}</div>

    <div class="yz-application" id="navDropdown" *ngIf="state.active">
      <div class="yz-application-topic">
        <h2>{{ 'mode.nav' | i18n }}</h2>
        <dl>
          <dd *ngIf="showMineMenu" data-event-id="_nav_topic" data-name="我的应用" class="yz-application-text" (click)="attachNav('mine')">
            <b> {{ 'mode.nav.mine' | i18n }}</b>
            <nz-icon nzType="right" nzTheme="outline"></nz-icon>
          </dd>
          <dd data-event-id="_nav_topic" [attr.data-name]="nav.name | i18n" class="yz-application-text" *ngFor="let nav of state.topics" (click)="attachNav('other', nav)">
            <b>{{ nav.name | i18n }}</b>
            <nz-icon nzType="right" nzTheme="outline"></nz-icon>
          </dd>
        </dl>
      </div>
      <div [ngSwitch]="state.topic" class="yz-application-container">
        <ng-container *ngIf="state.type === 'mine'">
          <ng-template [ngTemplateOutlet]="search"></ng-template>
          <ng-template [ngTemplateOutlet]="ld"></ng-template>
        </ng-container>
        <div *ngIf="state.type === 'other'" style="overflow: hidden;width: 100%; height: 100%">
          <div class="yz-application-list">
            <div class="yz-application-list-item">
              <ul>
                <li data-event-id="_nav_item" [attr.data-name]="nav.name | i18n" *ngFor="let nav of state.list" (click)="open(nav)">
                  <a href="javascript:;">
                    <h4>{{ nav.name | i18n }}</h4>
                    <p>{{ nav.intro | i18n }}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  imports: [I18nPipe, FormsModule, NzFormModule, NzInputModule, CommonModule, NzGridModule, NzIconModule]
})
export class YunzaiNavApplicationComponent implements OnInit, OnDestroy {
  private $destroy = new Subject();
  state: LayoutNavApplicationState = {
    active: false,
    type: 'mine',
    topic: undefined,
    topics: [],
    list: [],
    search: null
  };

  get showAllMenu(): boolean {
    if (this.bis.nav) return this.bis.nav!.all!;
    return true;
  }

  get showMineMenu(): boolean {
    if (this.bis.nav) return this.bis.nav!.mine!;
    return true;
  }

  private i18n: YunzaiHttpI18NService = inject(YunzaiHttpI18NService);
  private http: _HttpClient = inject(_HttpClient);
  private win: any = inject(WINDOW);
  private conf: YunzaiConfig = inject(YUNZAI_CONFIG);
  private bis: YunzaiBusinessConfig = this.conf.bis!;

  ngOnInit(): void {
    this.fetchAllTopic();
    this.attachNav('mine');
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
        this.win.location.href = topic.url;
        break;
      case 'blank':
        this.win.open(topic.url);
        break;
      case 'target':
        this.win.open(topic.url);
        break;
      default:
        this.win.location.href = topic.url;
        break;
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

  ngOnDestroy(): void {
    this.$destroy.complete();
  }
}
