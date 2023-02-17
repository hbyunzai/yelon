import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { CacheService, YunzaiProjectInfo } from '@yelon/cache';
import { StompService } from '@yelon/socket';
import { LayoutDefaultOptions, LayoutDisplayService } from '@yelon/theme/layout-default';
import { WINDOW, log } from '@yelon/util';

import { LayoutBasicAside, LayoutBasicState, NavType } from './interface';
@Component({
  selector: `yz-layout-basic`,
  template: `<layout-default
      [options]="options"
      [asideUser]="asideUserTpl"
      [content]="displayReusetab ? contentTpl : noneTpl"
    >
      <!-- nav -->
      <layout-default-header-item direction="left">
        <ng-container [ngSwitch]="navType">
          <ng-container *ngSwitchCase="NavType.APPLICATION">
            <layout-nav-application></layout-nav-application>
          </ng-container>
          <ng-container *ngSwitchCase="NavType.GROUP"> <layout-nav-group></layout-nav-group></ng-container>
          <ng-container *ngSwitchCase="NavType.TILE"> <layout-nav-tile></layout-nav-tile> </ng-container>
          <ng-container *ngSwitchDefault> <layout-nav-application></layout-nav-application> </ng-container>
        </ng-container>
      </layout-default-header-item>
      <!-- nav end -->
      <layout-default-header-item direction="right" hidden="mobile">
        <yunzai-notify></yunzai-notify>
      </layout-default-header-item>
      <layout-default-header-item direction="right" hidden="mobile">
        <yunzai-theme-btn></yunzai-theme-btn>
      </layout-default-header-item>
      <!-- setting -->
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

            <div nz-menu-item (click)="onNavTypeChange(NavType.APPLICATION)">
              <i nz-icon nzType="appstore" class="mr-sm"></i>
              {{ 'menu.application.application' | i18n }}
            </div>
            <div nz-menu-item (click)="onNavTypeChange(NavType.GROUP)">
              <i nz-icon nzType="group" class="mr-sm"></i>
              {{ 'menu.application.group' | i18n }}
            </div>
            <div nz-menu-item (click)="onNavTypeChange(NavType.TILE)">
              <i nz-icon nzType="appstore" class="mr-sm"></i>
              {{ 'menu.application.tile' | i18n }}
            </div>
            <div nz-menu-item> <yunzai-fullscreen></yunzai-fullscreen> </div>
            <div nz-menu-item> <yunzai-clearstorage></yunzai-clearstorage> </div>
            <div nz-menu-item> <yunzai-i18n></yunzai-i18n> </div>
          </div>
        </nz-dropdown-menu>
      </layout-default-header-item>
      <layout-default-header-item direction="right">
        <yunzai-user></yunzai-user>
      </layout-default-header-item>
      <!-- setting end -->
    </layout-default>
    <ng-template #asideUserTpl>
      <div nz-dropdown nzTrigger="click" [nzDropdownMenu]="userMenu" class="yunzai-default__aside-user">
        <nz-avatar class="yunzai-default__aside-user-avatar" [nzSrc]="aside.icon"></nz-avatar>
        <div class="yunzai-default__aside-user-info">
          <strong>{{ aside.name }}</strong>
          <p class="mb0">{{ aside.intro }}</p>
        </div>
      </div>
      <nz-dropdown-menu #userMenu="nzDropdownMenu">
        <ul nz-menu>
          <li nz-menu-item routerLink="/">{{ 'menu.backtohome' | i18n }}</li>
        </ul>
      </nz-dropdown-menu>
    </ng-template>
    <ng-template #contentTpl>
      <reuse-tab #reuseTab [ngStyle]="reusetabCSS"></reuse-tab>
      <router-outlet (activate)="reuseTab.activate($event)" (attach)="reuseTab.activate($event)"></router-outlet>
    </ng-template>
    <ng-template #noneTpl>
      <router-outlet></router-outlet>
    </ng-template> `
})
class YunzaiLayoutBasicComponent implements OnInit, OnDestroy {
  public NavType = NavType;
  private state: LayoutBasicState = {
    options: {
      logoExpanded: `./assets/logo-full.svg`,
      logoCollapsed: `./assets/logo.svg`
    },
    aside: {
      name: '',
      intro: '',
      icon: ''
    },
    display: {
      nav: true,
      aside: true,
      reusetab: true
    },
    navType: NavType.APPLICATION,
    destroy$: new Subject()
  };

  get options(): LayoutDefaultOptions {
    return this.state.options;
  }

  get navType(): NavType {
    return this.state.navType;
  }

  get aside(): LayoutBasicAside {
    return this.state.aside;
  }

  get displayReusetab(): boolean {
    return this.state.display.reusetab;
  }

  get reusetabCSS(): any {
    let cascadingStyleSheet = {};
    if (!this.state.display.nav) {
      cascadingStyleSheet = {
        ...cascadingStyleSheet,
        top: '0px'
      };
    }
    if (!this.state.display.aside) {
      cascadingStyleSheet = {
        ...cascadingStyleSheet,
        left: '24px'
      };
    }
    return cascadingStyleSheet;
  }

  constructor(
    private layoutDisplayService: LayoutDisplayService,
    private cacheService: CacheService,
    private stompService: StompService,
    @Inject(WINDOW) private win: typeof window
  ) {}

  ngOnInit(): void {
    this.initLogo();
    this.initNavType();
    this.initAside();
    this.addLayoutDisplayListener();
    this.stompService.listen();
    this.toIndex();
  }

  initAside(): void {
    const aside: LayoutBasicAside = this.cacheService.get('_yz_current', { mode: 'none' });
    this.state.aside = { ...aside };
  }

  initLogo(): void {
    const projectInfo: YunzaiProjectInfo = this.cacheService.get('_yz_project_info', { mode: 'none' });
    this.state.options.logoExpanded = projectInfo.maxLogoUrl ? projectInfo.maxLogoUrl : `./assets/logo-full.svg`;
    this.state.options.logoCollapsed = projectInfo.miniLogoUrl ? projectInfo.miniLogoUrl : `./assets/logo.svg`;
  }

  initNavType(): void {
    //  from browser cache
    const navType: NavType = this.cacheService.get('_yz_header_type', { mode: 'none' });
    if (navType !== null) {
      this.state.navType = navType;
      return;
    }
    // from project info
    const projectInfo: YunzaiProjectInfo = this.cacheService.get('_yz_project_info', { mode: 'none' });
    let fetchedNavType: string | undefined = undefined;
    if (projectInfo.headerStyle && projectInfo.headerStyle.length > 0) {
      fetchedNavType = projectInfo.headerStyle.pop()?.value;
    }
    // default value
    if (!fetchedNavType) {
      fetchedNavType = NavType.APPLICATION;
    }
  }

  toIndex(): void {
    const defaultRoute = this.cacheService.get('_yz_defaultRoute', { mode: 'none' });
    log('YunzaiLayoutBasicComponent: ', `todo: the default route was ${defaultRoute}, 但是还没想好如何实现.`);
  }
  onNavTypeChange(type: NavType): void {
    this.cacheService.set('_yz_header_type', type);
    this.win.location.reload();
  }

  addLayoutDisplayListener(): void {
    this.layoutDisplayService.listen('reuseTab', (display: boolean) => {
      this.state.display.reusetab = display;
    });
    this.layoutDisplayService.listen('nav', (display: boolean) => {
      this.state.display.nav = display;
    });

    this.layoutDisplayService.listen('aside', (display: boolean) => {
      this.state.display.aside = display;
    });
  }

  ngOnDestroy(): void {
    this.state.destroy$.complete();
  }
}
export { YunzaiLayoutBasicComponent as YzLayoutBasicComponent, YunzaiLayoutBasicComponent };