import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ReuseTabModule } from '@yelon/abc/reuse-tab';
import { YunzaiWidgetsModule } from '@yelon/bis/yunzai-widgets';
import { StompService } from '@yelon/socket';
import { I18nPipe } from '@yelon/theme';
import { LayoutDefaultModule, LayoutDefaultOptions, LayoutDisplayService } from '@yelon/theme/layout-default';
import { ThemeBtnModule } from '@yelon/theme/theme-btn';
import {
  hasFavicon,
  LayoutBasicAside,
  LayoutBasicDisplay,
  log,
  NavType,
  setFavicon,
  useLocalStorageCurrent,
  useLocalStorageDefaultRoute,
  useLocalStorageHeaderType,
  useLocalStorageProjectInfo,
  WINDOW,
  YUNZAI_CONFIG,
  YunzaiBusinessConfig,
  YunzaiConfig,
  YunzaiHeaderStyle,
  YunzaiProjectInfo
} from '@yelon/util';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { YunzaiNavApplicationComponent } from './layout-nav-application.component';
import { YunzaiLayoutNavGroupComponent } from './layout-nav-group.component';
import { YunzaiLayoutNavTileComponent } from './layout-nav-tile.component';

export interface LayoutBasicState {
  options: LayoutDefaultOptions;
  aside: LayoutBasicAside;
  display: LayoutBasicDisplay;
  navType: NavType;
}

export interface ApplicationInfoInterface {
  id?: string;
  name?: string;
  showName?: string;
  lastVersion?: string;
  versionNum?: string;
  currentVersion?: string;
  firstDeploymentDate?: string;
  currentDeploymentDate?: string;
  lastPushDate?: string;
}

@Component({
  selector: `yunzai-layout-basic`,
  template: `
    <layout-default [options]="options" [asideUser]="asideUserTpl" [content]="displayReusetab ? contentTpl : noneTpl">
      <layout-default-header-item direction="left">
        <ng-container [ngSwitch]="navType">
          <ng-container *ngSwitchCase="NavType.APPLICATION">
            <yunzai-layout-nav-application />
          </ng-container>
          <ng-container *ngSwitchCase="NavType.GROUP">
            <yunzai-layout-nav-group />
          </ng-container>
          <ng-container *ngSwitchCase="NavType.TILE">
            <yunzai-layout-nav-tile />
          </ng-container>
          <ng-container *ngSwitchCase="NavType.BLANK" />
          <ng-container *ngSwitchCase="NavType.TABS" />
          <ng-container *ngSwitchDefault>
            <yunzai-layout-nav-application />
          </ng-container>
        </ng-container>
      </layout-default-header-item>
      <layout-default-header-item direction="right" hidden="mobile">
        <yunzai-header-notify />
      </layout-default-header-item>
      <layout-default-header-item direction="right" hidden="mobile">
        <theme-btn />
      </layout-default-header-item>
      <layout-default-header-item direction="right" hidden="mobile">
        <div
          data-event-id="_nav_settings"
          layout-default-header-item-trigger
          nz-dropdown
          [nzDropdownMenu]="settingsMenu"
          nzTrigger="click"
          nzPlacement="bottomRight"
        >
          <nz-icon nzType="setting" nzTheme="outline"></nz-icon>
        </div>
        <nz-dropdown-menu #settingsMenu="nzDropdownMenu">
          <div nz-menu style="width: 200px;">
            <div data-event-id="_nav_mode" nz-menu-item>
              {{ 'mode.nav' | i18n }}
            </div>

            @if (headerStyleList.length > 1) {
              @for (i of headerStyleList; track $index) {
                <div
                  data-event-id="_nav_mode"
                  nz-menu-item
                  [attr.data-type]="i.value"
                  (click)="onNavTypeChange(i.value)"
                >
                  <ng-container [ngSwitch]="i.value">
                    <ng-container *ngSwitchCase="NavType.APPLICATION">
                      <nz-icon nzType="appstore" nzTheme="outline" class="mr-sm" />
                    </ng-container>
                    <ng-container *ngSwitchCase="NavType.GROUP">
                      <nz-icon nzType="group" nzTheme="outline" class="mr-sm" />
                    </ng-container>
                    <ng-container *ngSwitchCase="NavType.TILE">
                      <nz-icon nzType="dash" nzTheme="outline" class="mr-sm" />
                    </ng-container>
                    <ng-container *ngSwitchCase="NavType.BLANK">
                      <nz-icon nzType="border" nzTheme="outline" class="mr-sm" />
                    </ng-container>
                    <ng-container *ngSwitchCase="NavType.TABS">
                      <nz-icon nzType="insert-row-above" nzTheme="outline" class="mr-sm" />
                    </ng-container>
                    <ng-container *ngSwitchDefault>
                      <nz-icon nzType="appstore" nzTheme="outline" class="mr-sm" />
                    </ng-container>
                    {{ 'mode.nav.' + i.value | i18n }}
                  </ng-container>
                </div>
              }
            }

            <div data-event-id="_nav_fullscreen" nz-menu-item>
              <yunzai-header-fullscreen />
            </div>
            <div data-event-id="_nav_clearstorage" nz-menu-item>
              <yunzai-header-clear-storage />
            </div>
            <div data-event-id="_nav_i18n" nz-menu-item>
              <yunzai-header-i18n />
            </div>
          </div>
        </nz-dropdown-menu>
      </layout-default-header-item>
      <layout-default-header-item direction="right">
        <yunzai-header-user />
      </layout-default-header-item>
    </layout-default>
    <ng-template #asideUserTpl>
      <div data-event-id="_route_user" class="yunzai-default__aside-user">
        <nz-avatar
          class="yunzai-default__aside-user-avatar"
          [nzSize]="40"
          [nzSrc]="aside.icon"
          (click)="aboutApplication()"
        />
        <div class="yunzai-default__aside-user-info" nz-dropdown nzTrigger="click" [nzDropdownMenu]="userMenu">
          <strong>{{ aside.name | i18n }}</strong>
          <p>{{ aside.intro | i18n }}</p>
        </div>
      </div>
      <nz-dropdown-menu #userMenu="nzDropdownMenu">
        <ul nz-menu>
          <li data-event-id="_route_backhome" nz-menu-item routerLink="/">{{ 'back.home' | i18n }}</li>
        </ul>
      </nz-dropdown-menu>
    </ng-template>
    <ng-template #contentTpl>
      <reuse-tab #reuseTab [style]="reusetabCSS" />
      <router-outlet (activate)="reuseTab.activate($event)" (attach)="reuseTab.activate($event)" />
    </ng-template>
    <ng-template #noneTpl>
      <router-outlet />
    </ng-template>

    <nz-modal
      nzTitle="关于本应用"
      [(nzVisible)]="applicationModal.isVisible"
      [nzOkText]="null"
      [nzCancelText]="'关闭'"
      [nzWidth]="700"
      (nzOnCancel)="applicationModal.isVisible = false"
    >
      <ng-container *nzModalContent>
        <nz-skeleton [nzLoading]="applicationModal.loading" [nzActive]="true">
          <nz-descriptions nzBordered [nzSize]="'middle'" [nzColumn]="{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }">
            <nz-descriptions-item nzTitle="应用名称">{{ applicationInfo?.showName }}</nz-descriptions-item>
            <nz-descriptions-item nzTitle="应用标识">{{ applicationInfo?.name }}</nz-descriptions-item>
            <nz-descriptions-item nzTitle="版本总数">{{ applicationInfo?.versionNum }}</nz-descriptions-item>
            <nz-descriptions-item nzTitle="应用首次部署时间">{{
              applicationInfo?.firstDeploymentDate | date: 'yyyy-MM-dd HH:mm:ss'
            }}</nz-descriptions-item>
            <nz-descriptions-item nzTitle="当前版本">{{ applicationInfo?.currentVersion }}</nz-descriptions-item>
            <nz-descriptions-item nzTitle="当前版本部署时间">{{
              applicationInfo?.currentDeploymentDate | date: 'yyyy-MM-dd HH:mm:ss'
            }}</nz-descriptions-item>
            <nz-descriptions-item nzTitle="最新版本">{{ applicationInfo?.lastVersion }}</nz-descriptions-item>
            <nz-descriptions-item nzTitle="最新版本发布时间">{{
              applicationInfo?.lastPushDate | date: 'yyyy-MM-dd HH:mm:ss'
            }}</nz-descriptions-item>
          </nz-descriptions>
        </nz-skeleton>
      </ng-container>
    </nz-modal>
  `,
  imports: [
    LayoutDefaultModule,
    RouterModule,
    ReuseTabModule,
    CommonModule,
    I18nPipe,
    NzDropDownModule,
    NzAvatarModule,
    NzIconModule,
    NzModalModule,
    NzSkeletonModule,
    NzDescriptionsModule,
    ThemeBtnModule,
    YunzaiWidgetsModule,
    YunzaiNavApplicationComponent,
    YunzaiLayoutNavGroupComponent,
    YunzaiLayoutNavTileComponent
  ]
})
export class YunzaiLayoutBasicComponent implements OnInit {
  private readonly stomp = inject(StompService);
  private readonly win = inject(WINDOW);
  private readonly layoutDisplayService = inject(LayoutDisplayService);
  private readonly conf: YunzaiConfig = inject(YUNZAI_CONFIG);

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

  headerStyleList: YunzaiHeaderStyle[] = [];

  applicationInfo!: ApplicationInfoInterface;

  applicationModal = {
    isVisible: false,
    loading: false
  };

  private readonly httpClient = inject(HttpClient);
  private config!: YunzaiBusinessConfig;

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
        left: '0px'
      };
    }
    return cascadingStyleSheet;
  }

  ngOnInit(): void {
    this.config = this.conf.bis!;
    this.initLogo();
    this.initFavicon();
    this.initNavType();
    this.initAside();
    this.addLayoutDisplayListener();
    this.stomp.listen();
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
    } else {
      this.state.navType = NavType.APPLICATION;
    }
    if (projectInfo.headerStyle && projectInfo.headerStyle.length > 0) {
      this.headerStyleList = projectInfo.headerStyle;
      const hasThis = this.headerStyleList.some(item => item.value === this.state.navType);
      if (!hasThis) {
        this.state.navType = projectInfo.headerStyle[0].value as NavType;
        const [setHeaderType] = useLocalStorageHeaderType();
        setHeaderType(this.state.navType);
      }
    }
  }

  toIndex(): void {
    const [, getDefaultRoute] = useLocalStorageDefaultRoute();
    const defaultRoute = getDefaultRoute()!;
    log('YunzaiLayoutBasicComponent: ', `todo: the default route was ${defaultRoute}, 但是还没想好如何实现.`);
  }

  onNavTypeChange(type: NavType | string): void {
    const [setHeaderType] = useLocalStorageHeaderType();
    setHeaderType(type as NavType);
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

  // 关于本应用
  aboutApplication(): void {
    const urlArr = window.location.pathname.split(`${this.config.baseUrl}/`);
    if (urlArr.length > 1) {
      // 应用标识，截取路径中 /backstage/后第一个字符串
      // 例: http://222.30.194.61/backstage/auth/page/oafportal/#/base/menu  中 auth
      const name = urlArr[1].split('/')[0];
      this.applicationModal.isVisible = true;
      this.applicationModal.loading = true;
      this.httpClient.get(`/basic/api/app/aboutApp?name=${name}`).subscribe(
        (response: any) => {
          this.applicationModal.loading = false;
          if (response.data) {
            this.applicationInfo = response.data;
          }
        },
        () => {
          this.applicationModal.loading = false;
        }
      );
    }
  }
}
