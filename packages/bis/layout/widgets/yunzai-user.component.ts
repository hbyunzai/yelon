import { ChangeDetectionStrategy, Component, Inject, Injector, OnInit } from '@angular/core';

import { YA_SERVICE_TOKEN, ITokenService } from '@yelon/auth';
import {
  useLocalStorageProjectInfo,
  useLocalStorageUser,
  WINDOW,
  YunzaiBusinessConfig,
  YunzaiConfigService
} from '@yelon/util';
import { NzMessageService } from 'ng-zorro-antd/message';

import { mergeBisConfig } from '../bis.config';

export interface UserLink {
  icon: string;
  name: string;
  url: string;
}

@Component({
  selector: 'yunzai-user',
  template: `
    <div
      class="yunzai-default__nav-item d-flex align-items-center px-sm"
      data-event-id="_nav_user"
      nz-dropdown
      nzPlacement="bottomRight"
      [nzDropdownMenu]="userMenu"
    >
      <div class="yz-user-name">
        <nz-avatar [nzSrc]="icon" nzSize="small" class="mr-sm" />
        {{ username }}
      </div>
    </div>
    <nz-dropdown-menu #userMenu="nzDropdownMenu">
      <div nz-menu class="width-sm">
        <div
          data-event-id="_nav_user"
          [attr.data-name]="m.name | i18n"
          nz-menu-item
          *ngFor="let m of menus"
          (click)="to(m.url)"
        >
          <i nz-icon [nzType]="m.icon" class="mr-sm"></i>
          {{ m.name | i18n }}
        </div>
        <li nz-menu-divider></li>
        <div data-event-id="_nav_user" data-name="注销登录" nz-menu-item (click)="logout()">
          <i nz-icon nzType="logout" class="mr-sm"></i>
          {{ 'logout' | i18n }}
        </div>
      </div>
    </nz-dropdown-menu>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YunzaiUserComponent implements OnInit {
  private config: YunzaiBusinessConfig;

  constructor(
    private injector: Injector,
    private msg: NzMessageService,
    @Inject(YA_SERVICE_TOKEN) private tokenService: ITokenService,
    // @ts-ignore
    private configService: YunzaiConfigService
  ) {
    this.config = mergeBisConfig(configService);
  }

  icon: string = '';
  username: string = '';
  menus: UserLink[] = [];

  ngOnInit(): void {
    const [, getProjectInfo] = useLocalStorageProjectInfo();
    const [, getUser] = useLocalStorageUser();
    const projectInfo = getProjectInfo()!;
    const user = getUser()!;
    this.username = user.realname ? user.realname : '未命名';
    this.icon = user.avatarId
      ? `${this.config.baseUrl}/filecenter/file/${user.avatarId}`
      : `./assets/tmp/img/avatar.jpg`;
    this.menus = projectInfo.profileList as UserLink[];
  }

  logout(): void {
    localStorage.clear();
    this.tokenService.clear();
    this.injector.get(WINDOW).location.href = `${this.config.baseUrl}/cas-proxy/app/logout`;
  }

  to(href: string): void {
    if (href) {
      this.injector.get(WINDOW).open(href);
    } else {
      this.msg.error('该菜单没有配置链接!');
    }
  }
}
