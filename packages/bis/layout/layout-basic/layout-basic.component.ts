import { Component, Inject, OnInit } from '@angular/core';

import { StompService } from '@yelon/socket';
import { LayoutDefaultOptions, LayoutDisplayService } from '@yelon/theme/layout-default';
import {
  WINDOW,
  hasFavicon,
  log,
  setFavicon,
  NavType,
  LayoutBasicAside,
  YunzaiProjectInfo,
  useLocalStorageCurrent,
  useLocalStorageProjectInfo,
  useLocalStorageHeaderType,
  useLocalStorageDefaultRoute
} from '@yelon/util';

import { LayoutBasicState } from './interface';

@Component({
  selector: `yz-layout-basic`,
  template: `
    <layout-default [options]="options" [asideUser]="asideUserTpl" [content]="displayReusetab ? contentTpl : noneTpl">
      <!-- nav -->
      <layout-default-header-item direction="left">
        <ng-container [ngSwitch]="navType">
          <ng-container *ngSwitchCase="NavType.APPLICATION">
            <layout-nav-application />
          </ng-container>
          <ng-container *ngSwitchCase="NavType.GROUP">
            <layout-nav-group />
          </ng-container>
          <ng-container *ngSwitchCase="NavType.TILE">
            <layout-nav-tile />
          </ng-container>
          <ng-container *ngSwitchDefault>
            <layout-nav-application />
          </ng-container>
        </ng-container>
      </layout-default-header-item>
      <!-- nav end -->
      <layout-default-header-item direction="right" hidden="mobile">
        <yunzai-notify />
      </layout-default-header-item>
      <layout-default-header-item direction="right" hidden="mobile">
        <yunzai-theme-btn />
      </layout-default-header-item>
      <!-- setting -->
      <layout-default-header-item direction="right" hidden="mobile">
        <div
          data-event-id="_nav_settings"
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
            <div data-event-id="_nav_mode" nz-menu-item>
              {{ 'mode.nav' | i18n }}
            </div>

            <div
              data-event-id="_nav_mode"
              data-type="application"
              nz-menu-item
              (click)="onNavTypeChange(NavType.APPLICATION)"
            >
              <i nz-icon nzType="appstore" class="mr-sm"></i>
              {{ 'mode.nav.application' | i18n }}
            </div>
            <div data-event-id="_nav_mode" data-type="group" nz-menu-item (click)="onNavTypeChange(NavType.GROUP)">
              <i nz-icon nzType="group" class="mr-sm"></i>
              {{ 'mode.nav.group' | i18n }}
            </div>
            <div data-event-id="_nav_mode" data-type="tile" nz-menu-item (click)="onNavTypeChange(NavType.TILE)">
              <i nz-icon nzType="appstore" class="mr-sm"></i>
              {{ 'mode.nav.tile' | i18n }}
            </div>
            <div data-event-id="_nav_fullscreen" nz-menu-item>
              <yunzai-fullscreen />
            </div>
            <div data-event-id="_nav_clearstorage" nz-menu-item>
              <yunzai-clearstorage />
            </div>
            <div data-event-id="_nav_i18n" nz-menu-item>
              <yunzai-i18n />
            </div>
          </div>
        </nz-dropdown-menu>
      </layout-default-header-item>
      <layout-default-header-item direction="right">
        <yunzai-user />
      </layout-default-header-item>
      <!-- setting end -->
    </layout-default>
    <ng-template #asideUserTpl>
      <div
        data-event-id="_route_user"
        nz-dropdown
        nzTrigger="click"
        [nzDropdownMenu]="userMenu"
        class="yunzai-default__aside-user"
      >
        <nz-avatar class="yunzai-default__aside-user-avatar" [nzSrc]="aside.icon" />
        <div class="yunzai-default__aside-user-info">
          <strong>{{ aside.name | i18n }}</strong>
          <p class="mb0">{{ aside.intro | i18n }}</p>
        </div>
      </div>
      <nz-dropdown-menu #userMenu="nzDropdownMenu">
        <ul nz-menu>
          <li data-event-id="_route_backhome" nz-menu-item routerLink="/">{{ 'back.home' | i18n }}</li>
        </ul>
      </nz-dropdown-menu>
    </ng-template>
    <ng-template #contentTpl>
      <reuse-tab #reuseTab [ngStyle]="reusetabCSS" />
      <router-outlet (activate)="reuseTab.activate($event)" (attach)="reuseTab.activate($event)" />
    </ng-template>
    <ng-template #noneTpl> <router-outlet /> </ng-template>
  `
})
export class YunzaiLayoutBasicComponent implements OnInit {
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
    navType: NavType.APPLICATION
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
    private stompService: StompService,
    @Inject(WINDOW) private win: typeof window
  ) {}

  ngOnInit(): void {
    this.initLogo();
    this.initFavicon();
    this.initNavType();
    this.initAside();
    this.addLayoutDisplayListener();
    this.stompService.listen();
    this.toIndex();
  }

  initFavicon(): void {
    const [, getProjectInfo] = useLocalStorageProjectInfo();
    const projectInfo: YunzaiProjectInfo = getProjectInfo()!;
    if (projectInfo.faviconUrl) {
      hasFavicon(projectInfo.faviconUrl).then((has: boolean) => {
        if (has) {
          setFavicon(projectInfo.faviconUrl);
        } else {
          setFavicon('./assets/favicon.ico');
        }
      });
    }
  }

  initAside(): void {
    const [, getCurrent] = useLocalStorageCurrent();
    const aside: LayoutBasicAside = getCurrent()!;
    this.state.aside = { ...aside };
  }

  initLogo(): void {
    const [, getProjectInfo] = useLocalStorageProjectInfo();
    const projectInfo: YunzaiProjectInfo = getProjectInfo()!;
    this.state.options.logoExpanded = projectInfo.maxLogoUrl ? projectInfo.maxLogoUrl : `./assets/logo-full.svg`;
    this.state.options.logoCollapsed = projectInfo.miniLogoUrl ? projectInfo.miniLogoUrl : `./assets/logo.svg`;
  }

  initNavType(): void {
    const [, getHeaderType] = useLocalStorageHeaderType();
    const [, getProjectInfo] = useLocalStorageProjectInfo();
    const navType: NavType | null = getHeaderType();
    const projectInfo: YunzaiProjectInfo = getProjectInfo()!;
    if (navType !== null) {
      this.state.navType = navType;
      return;
    }
    let fetchedNavType: any;
    if (projectInfo.headerStyle && projectInfo.headerStyle.length > 0) {
      fetchedNavType = projectInfo.headerStyle.pop()?.value;
    }
    // default value
    if (!fetchedNavType) {
      fetchedNavType = NavType.APPLICATION;
    }
    this.state.navType = fetchedNavType;
  }

  toIndex(): void {
    const [, getDefaultRoute] = useLocalStorageDefaultRoute();
    const defaultRoute = getDefaultRoute()!;
    log('YunzaiLayoutBasicComponent: ', `todo: the default route was ${defaultRoute}, 但是还没想好如何实现.`);
  }

  onNavTypeChange(type: NavType): void {
    const [setHeaderType] = useLocalStorageHeaderType();
    setHeaderType(type);
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
}
