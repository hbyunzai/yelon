import { Component, Injector, OnDestroy, OnInit } from '@angular/core';

import { CacheService } from '@yelon/cache';
import { LayoutDefaultOptions, LayoutService } from '@yelon/theme/layout-default';
import { WINDOW } from '@yelon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { YzStompService } from './yz.stomp.service';

@Component({
  selector: 'yz-layout-basic',
  template: `
    <layout-default [options]="options" [asideUser]="asideUserTpl" [content]="showReuseTab ? contentTpl : noneTpl">
      <layout-default-header-item direction="left">
        <ng-container [ngSwitch]="headerType">
          <ng-container *ngSwitchCase="'application'">
            <yz-header-application></yz-header-application>
          </ng-container>

          <ng-container *ngSwitchCase="'group'">
            <yz-header-application-group></yz-header-application-group>
          </ng-container>

          <ng-container *ngSwitchDefault>
            <yz-header-application></yz-header-application>
          </ng-container>
        </ng-container>
      </layout-default-header-item>

      <layout-default-header-item direction="right" hidden="mobile">
        <yz-header-notify></yz-header-notify>
      </layout-default-header-item>

      <layout-default-header-item direction="right" hidden="mobile">
        <yz-header-theme-btn></yz-header-theme-btn>
      </layout-default-header-item>

      <layout-default-header-item direction="right" hidden="mobile">
        <div
          layout-default-header-item-trigger
          nz-dropdown
          [nzDropdownMenu]="settingsMenu"
          nzTrigger="click"
          nzPlacement="bottomRight"
        >
          <i nz-icon nzType="setting"></i>
        </div>
        <nz-dropdown-menu #settingsMenu="nzDropdownMenu">
          <div nz-menu style="width: 200px;">
            <div nz-menu-item>
              {{ 'menu.application.mode' | i18n }}
            </div>

            <div nz-menu-item (click)="onHeaderTypeChange('application')">
              <i nz-icon nzType="appstore" class="mr-sm"></i>
              {{ 'menu.application.application' | i18n }}
            </div>

            <div nz-menu-item (click)="onHeaderTypeChange('group')">
              <i nz-icon nzType="group" class="mr-sm"></i>
              {{ 'menu.application.group' | i18n }}
            </div>

            <div nz-menu-item>
              <yz-header-fullscreen></yz-header-fullscreen>
            </div>
            <div nz-menu-item>
              <yz-header-clear-storage></yz-header-clear-storage>
            </div>
            <div nz-menu-item>
              <yz-header-i18n></yz-header-i18n>
            </div>
          </div>
        </nz-dropdown-menu>
      </layout-default-header-item>
      <layout-default-header-item direction="right">
        <yz-header-user></yz-header-user>
      </layout-default-header-item>
      <ng-template #asideUserTpl>
        <div nz-dropdown nzTrigger="click" [nzDropdownMenu]="userMenu" class="yunzai-default__aside-user">
          <nz-avatar class="yunzai-default__aside-user-avatar" [nzSrc]="icon"></nz-avatar>
          <div class="yunzai-default__aside-user-info">
            <strong>{{ text }}</strong>
            <p class="mb0">{{ intro }}</p>
          </div>
        </div>
        <nz-dropdown-menu #userMenu="nzDropdownMenu">
          <ul nz-menu>
            <li nz-menu-item routerLink="/">{{ 'menu.backtohome' | i18n }}</li>
          </ul>
        </nz-dropdown-menu>
      </ng-template>
      <ng-template #contentTpl>
        <reuse-tab #reuseTab [ngStyle]="reuseStyleSheet"></reuse-tab>
        <router-outlet (activate)="reuseTab.activate($event)"></router-outlet>
      </ng-template>
      <ng-template #noneTpl>
        <router-outlet></router-outlet>
      </ng-template>
    </layout-default>
  `
})
export class YzLayoutBasicComponent implements OnInit, OnDestroy {
  options: LayoutDefaultOptions = {
    logoExpanded: `./assets/logo-full.svg`,
    logoCollapsed: `./assets/logo.svg`
  };

  intro: string = '';
  text: string = '';
  icon: string = '';

  showReuseTab: boolean = true;
  showHeader: boolean = true;
  showSider: boolean = true;
  headerType: string = 'application';

  get reuseStyleSheet(): NzSafeAny {
    let cascadingStyleSheet = {};
    if (!this.showHeader) {
      cascadingStyleSheet = {
        ...cascadingStyleSheet,
        top: 0
      };
    }
    if (!this.showSider) {
      cascadingStyleSheet = {
        ...cascadingStyleSheet,
        left: '24px'
      };
    }
    return cascadingStyleSheet;
  }

  constructor(
    private cacheService: CacheService,
    private yzStompService: YzStompService,
    private layoutService: LayoutService,
    private injector: Injector
  ) {}

  ngOnInit(): void {
    const current: NzSafeAny = this.cacheService.get('_yz_current', { mode: 'none' });
    const project: NzSafeAny = this.cacheService.get('_yz_project_info', { mode: 'none' });
    const headerType = this.cacheService.get('_yz_header_type', { mode: 'none' });
    if (headerType) this.headerType = headerType;
    this.text = current.text ? current.text : '应用名称';
    this.intro = current.intro ? current.intro : '应用描述';
    this.icon = current.icon ? current.icon : `./assets/tmp/img/avatar.jpg`;
    this.options.logoExpanded = project.maxLogoUrl ? project.maxLogoUrl : `./assets/logo-full.svg`;
    this.options.logoCollapsed = project.miniLogoUrl ? project.miniLogoUrl : `./assets/logo.svg`;
    this.yzStompService.listen();
    this.layoutService.reuseTab.asObservable().subscribe(show => (this.showReuseTab = show));
    this.layoutService.header.asObservable().subscribe(show => (this.showHeader = show));
    this.layoutService.sidebar.asObservable().subscribe(show => (this.showSider = show));
  }

  onHeaderTypeChange(type: string): void {
    this.cacheService.set('_yz_header_type', type);
    this.injector.get(WINDOW).location.reload();
  }

  ngOnDestroy(): void {
    this.yzStompService.unListen();
  }
}
