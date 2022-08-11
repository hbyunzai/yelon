import { Component, OnDestroy, OnInit } from '@angular/core';

import { CacheService } from '@yelon/cache';
import { LayoutDefaultOptions, LayoutService } from '@yelon/theme/layout-default';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { YzStompService } from './yz.stomp.service';

@Component({
  selector: 'yz-layout-basic',
  template: `
    <layout-default [options]="options" [asideUser]="asideUserTpl" [content]="showReuseTab ? contentTpl : noneTpl">
      <layout-default-header-item direction="left">
        <yz-header-application></yz-header-application>
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
    private layoutService: LayoutService
  ) {}

  ngOnInit(): void {
    const current: NzSafeAny = this.cacheService.get('_yz_current', { mode: 'none' });
    const project: NzSafeAny = this.cacheService.get('_yz_project_info', { mode: 'none' });
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

  ngOnDestroy(): void {
    this.yzStompService.unListen();
  }
}
