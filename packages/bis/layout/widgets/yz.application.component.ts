import { ChangeDetectionStrategy, Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CacheService } from '@yelon/cache';
import { _HttpClient } from '@yelon/theme';
import { WINDOW } from '@yelon/util';

import { YzI18NService } from '../yz.i18n.service';

export enum TOPIC {
  FULL,
  OWN,
  EVERY
}

export interface HeaderTopic {
  // 忘了
  attribute: any;
  // 子菜单
  children: HeaderTopic[];
  // 描述
  intro: string;
  // key
  key: string;
  // 名称
  name: string;
  // 打开方式
  target: string;
  // 是否有权限打开
  auth: boolean;
  // 路径
  url: string;
  // 版本
  version: string;
}

@Component({
  selector: 'yz-header-application',
  template: `
    <!--      template start-->
    <ng-template #search>
      <div nz-row class="yz-application-list-search">
        <nz-input-group [nzPrefix]="prefixTemplate">
          <input
            type="text"
            nz-input
            [placeholder]="'请输入要搜索的应用名称!'"
            [(ngModel)]="searchValue"
            (ngModelChange)="onSearch()"
          />
          <ng-template #prefixTemplate>
            <i nz-icon nzType="search" nzTheme="outline"></i>
          </ng-template>
        </nz-input-group>
      </div>
    </ng-template>
    <ng-template #ld>
      <div class="yz-application-list">
        <ul>
          <li *ngFor="let d of listData">
            <h5>{{ d.name }}</h5>
            <a href="javascript:;" *ngFor="let cd of d.children" (click)="open(cd)">{{ cd.name }}</a>
          </li>
        </ul>
      </div>
    </ng-template>
    <!--      template end-->

    <!--      button start-->
    <div class="yunzai-default__nav-item" (click)="diffChange()"> 应用与服务</div>
    <!--      button end-->

    <!--      header start-->
    <div class="yz-application" nz-row *ngIf="active">
      <div nz-col [nzSpan]="3" class="yz-application-topic">
        <div class="yz-application-text" (click)="full()">全部应用</div>
        <div class="yz-application-text" (click)="own()">我的应用</div>
        <div class="yz-application-text" *ngFor="let d of topicData" (click)="every(d)">
          {{ d.name }}
        </div>
      </div>
      <div nz-col [nzSpan]="21" [ngSwitch]="topic" class="yz-application-container">
        <div *ngSwitchCase="T.FULL">
          <ng-template [ngTemplateOutlet]="search"></ng-template>
          <ng-template [ngTemplateOutlet]="ld"></ng-template>
        </div>
        <div *ngSwitchCase="T.OWN">
          <ng-template [ngTemplateOutlet]="search"></ng-template>
          <ng-template [ngTemplateOutlet]="ld"></ng-template>
        </div>
        <div *ngSwitchCase="T.EVERY" class="yz-application-list">
          <div class="yz-application-list-item">
            <ul>
              <li *ngFor="let d of listData" (click)="open(d)">
                <a href="javascript:;">
                  <h4>{{ d.name }}</h4>
                  <p>{{ d.intro }}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--      header end-->
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YzHeaderApplicationComponent implements OnInit, OnDestroy {
  T = TOPIC;
  active: boolean = false;
  topicData: HeaderTopic[] = [];
  listData: HeaderTopic[] = [];
  topic: TOPIC = TOPIC.FULL;
  choosed: HeaderTopic | undefined;
  searchValue: string | null = null;
  subs: Subscription[] = [];

  constructor(
    private inject: Injector,
    private cacheService: CacheService,
    private i18n: YzI18NService,
    private http: _HttpClient
  ) {}

  ngOnInit(): void {
    this.topicData = this.cacheService.get('_yz_header', { mode: 'none' });
    this.listData = this.cacheService.get('_yz_header', { mode: 'none' });
  }

  ngOnDestroy(): void {
    this.subs.forEach(f => f.unsubscribe());
  }

  diffChange(flag?: boolean) {
    if (flag) {
      this.active = flag;
    } else {
      this.active = !this.active;
    }
  }

  initTopic(topic: TOPIC) {
    this.searchValue = null;
    this.listData = this.cacheService.get('_yz_header', { mode: 'none' });
    this.topic = topic;
  }

  full() {
    this.initTopic(TOPIC.FULL);
  }

  own() {
    this.initTopic(TOPIC.OWN);
    const temp: HeaderTopic[] = this.cacheService.get('_yz_header', { mode: 'none' });
    this.listData = temp
      .filter((topic: HeaderTopic) => {
        topic.children = topic.children.filter((child: HeaderTopic) => {
          return child.auth;
        });
        return topic;
      })
      .filter((topic: HeaderTopic) => {
        return topic.children.length > 0;
      });
  }

  every(e: HeaderTopic) {
    this.initTopic(TOPIC.EVERY);
    this.choosed = e;
    const temp: HeaderTopic[] = this.cacheService.get('_yz_header', { mode: 'none' });
    this.listData = [...temp.filter(t => t.key === e.key)[0].children];
  }

  onSearch() {
    const temp: HeaderTopic[] = this.cacheService.get('_yz_header', { mode: 'none' });
    // 如果搜索输入的有值
    if (this.searchValue) {
      // 过滤菜单过滤出搜索的值
      this.listData = temp
        .filter((topic: HeaderTopic) => {
          if (this.i18n.fanyi(topic.name).includes(this.searchValue!)) {
            return topic;
          } else {
            topic.children = topic.children.filter((child: HeaderTopic) => {
              return this.i18n.fanyi(child.name).includes(this.searchValue!);
            });
            return topic;
          }
        })
        .filter((topic: HeaderTopic) => {
          return topic.children.length > 0;
        });
    } else {
      // 如果没有值,取消搜索
      this.listData = this.cacheService.get('_yz_header', { mode: 'none' });
    }
  }

  open(topic: HeaderTopic) {
    if (topic.key) {
      this.subs.push(
        this.http
          .post(`/app-manager/web-scan/save`, {
            appId: topic.key,
            createDate: new Date()
          })
          .subscribe()
      );
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
}
