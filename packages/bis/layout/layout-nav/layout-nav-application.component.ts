import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { CacheService, YunzaiNavTopic } from '@yelon/cache';
import { _HttpClient } from '@yelon/theme';
import { WINDOW } from '@yelon/util';

import { YunzaiI18NService } from '../yunzai-i18n.service';
import { LayoutNavApplicationState, TopicType } from './types';

@Component({
  selector: `layout-nav-application`,
  template: `
    <!--      template start-->
    <ng-template #search>
      <div nz-row class="yz-application-list-search">
        <nz-input-group [nzPrefix]="prefixTemplate">
          <input
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
    <ng-template #ld>
      <div class="yz-application-list">
        <ul>
          <li *ngFor="let d of state.list">
            <h5>{{ d.name }}</h5>
            <a href="javascript:;" *ngFor="let cd of d.children" (click)="open(cd)">{{ cd.name }}</a>
          </li>
        </ul>
      </div>
    </ng-template>
    <!--      template end-->

    <!--      button start-->
    <div class="yunzai-default__nav-item" (click)="diffChange()"> {{ 'application.button' | i18n }}</div>
    <!--      button end-->

    <!--      header start-->
    <div class="yz-application" nz-row *ngIf="state.active">
      <div nz-col [nzSpan]="3" class="yz-application-topic">
        <div class="yz-application-text" (click)="full()">{{ 'application.all' | i18n }}</div>
        <div class="yz-application-text" (click)="own()">{{ 'application.mine' | i18n }}</div>
        <div class="yz-application-text" *ngFor="let d of state.topics" (click)="every(d)">{{ d.name }}</div>
      </div>
      <div nz-col [nzSpan]="21" [ngSwitch]="state.topic" class="yz-application-container">
        <div *ngSwitchCase="TopicType.FULL">
          <ng-template [ngTemplateOutlet]="search"></ng-template>
          <ng-template [ngTemplateOutlet]="ld"></ng-template>
        </div>
        <div *ngSwitchCase="TopicType.OWN">
          <ng-template [ngTemplateOutlet]="search"></ng-template>
          <ng-template [ngTemplateOutlet]="ld"></ng-template>
        </div>
        <div *ngSwitchCase="TopicType.EVERY" class="yz-application-list">
          <div class="yz-application-list-item">
            <ul>
              <li *ngFor="let d of state.list" (click)="open(d)">
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
  `
})
export class LayoutNavApplicationComponent implements OnInit, OnDestroy {
  public TopicType = TopicType;
  state: LayoutNavApplicationState = {
    active: false,
    type: TopicType.FULL,
    topic: undefined,
    topics: [],
    list: [],
    search: null,
    destroy$: new Subject<any>()
  };

  constructor(
    private cacheService: CacheService,
    private i18n: YunzaiI18NService,
    private http: _HttpClient,
    private inject: Injector
  ) {}

  ngOnInit(): void {
    this.state.list = this.state.topics = this.cacheService.get('_yz_header', { mode: 'none' });
  }

  initTopic(type: TopicType): void {
    this.state.search = null;
    this.state.list = this.cacheService.get('_yz_header', { mode: 'none' });
    this.state.type = type;
  }

  full(): void {
    this.initTopic(TopicType.FULL);
  }

  own(): void {
    this.initTopic(TopicType.OWN);
    const temp: YunzaiNavTopic[] = this.cacheService.get('_yz_header', { mode: 'none' });
    this.state.list = temp
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

  every(e: YunzaiNavTopic): void {
    this.initTopic(TopicType.EVERY);
    this.state.topic = e;
    const temp: YunzaiNavTopic[] = this.cacheService.get('_yz_header', { mode: 'none' });
    this.state.list = [...temp.filter(t => t.key === e.key)[0].children];
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

  onSearch(): void {
    const temp: YunzaiNavTopic[] = this.cacheService.get('_yz_header', { mode: 'none' });
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
      this.state.list = this.cacheService.get('_yz_header', { mode: 'none' });
    }
  }

  ngOnDestroy(): void {
    this.state.destroy$.complete();
  }
}
