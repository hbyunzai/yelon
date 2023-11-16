import { Component, Inject, Injector, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { _HttpClient } from '@yelon/theme';
import {
  LayoutNavApplicationState,
  useLocalStorageHeader,
  WINDOW,
  YunzaiBusinessConfig,
  YunzaiConfigService,
  YunzaiNavTopic
} from '@yelon/util';

import { BUSINESS_DEFAULT_CONFIG, mergeBisConfig } from '../bis.config';
import { YunzaiI18NService } from '../yunzai-i18n.service';

@Component({
  selector: `layout-nav-application`,
  template: `
    <!--      search start-->
    <ng-template #search>
      <div nz-row class="yz-application-list-search">
        <nz-input-group [nzPrefix]="prefixTemplate">
          <input
            data-event-id="_nav_search"
            type="text"
            nz-input
            placeholder="{{ 'application.search' | i18n }}"
            [(ngModel)]="state.search"
            (ngModelChange)="onSearch()"
          />
          <ng-template #prefixTemplate>
            <i nz-icon nzType="search" nzTheme="outline"></i>
          </ng-template>
        </nz-input-group>
      </div>
    </ng-template>
    <!-- search end -->

    <!-- right menu start -->
    <ng-template #ld>
      <div class="yz-application-list">
        <ul>
          <li *ngFor="let topic of state.list">
            <h5>{{ topic.name | i18n }}</h5>
            <a
              data-event-id="_nav_item"
              [attr.data-name]="nav.name | i18n"
              href="javascript:;"
              *ngFor="let nav of topic.children"
              (click)="open(nav)"
              >{{ nav.name | i18n }}</a
            >
          </li>
        </ul>
      </div>
    </ng-template>
    <!-- right menu end -->

    <!--      button start-->
    <div data-event-id="_nav_app" id="navBtn" class="yunzai-default__nav-item" (click)="diffChange()">{{
      'mode.nav' | i18n
    }}</div>
    <!--      button end-->

    <!--      header start-->
    <div class="yz-application" id="navDropdown" nz-row *ngIf="state.active">
      <div nz-col [nzSpan]="3" class="yz-application-topic">
        <div
          *ngIf="showAllMenu"
          data-event-id="_nav_topic"
          data-name="全部应用"
          class="yz-application-text"
          (click)="attachNav('all')"
          >{{ 'mode.nav.all' | i18n }}</div
        >
        <div
          *ngIf="showMineMenu"
          data-event-id="_nav_topic"
          data-name="我的应用"
          class="yz-application-text"
          (click)="attachNav('mine')"
          >{{ 'mode.nav.mine' | i18n }}</div
        >
        <div
          data-event-id="_nav_topic"
          [attr.data-name]="nav.name | i18n"
          class="yz-application-text"
          *ngFor="let nav of state.topics"
          (click)="attachNav('other', nav)"
          >{{ nav.name | i18n }}</div
        >
      </div>
      <div nz-col [nzSpan]="21" [ngSwitch]="state.topic" class="yz-application-container">
        <div *ngIf="state.type === 'all'">
          <ng-template [ngTemplateOutlet]="search"></ng-template>
          <ng-template [ngTemplateOutlet]="ld"></ng-template>
        </div>
        <div *ngIf="state.type === 'mine'">
          <ng-template [ngTemplateOutlet]="search"></ng-template>
          <ng-template [ngTemplateOutlet]="ld"></ng-template>
        </div>
        <div *ngIf="state.type === 'other'" class="yz-application-list">
          <div class="yz-application-list-item">
            <ul>
              <li
                data-event-id="_nav_item"
                [attr.data-name]="nav.name | i18n"
                *ngFor="let nav of state.list"
                (click)="open(nav)"
              >
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
    <!--      header end-->
  `
})
export class LayoutNavApplicationComponent implements OnInit, OnDestroy {
  private bis: YunzaiBusinessConfig = BUSINESS_DEFAULT_CONFIG;
  private $destroy = new Subject();
  state: LayoutNavApplicationState = {
    active: false,
    type: 'all',
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

  constructor(
    private i18n: YunzaiI18NService,
    private http: _HttpClient,
    private inject: Injector,
    // @ts-ignore
    private configService: YunzaiConfigService,
    @Inject(WINDOW) private win: any
  ) {
    this.bis = mergeBisConfig(configService);
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
