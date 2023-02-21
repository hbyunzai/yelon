import { ChangeDetectionStrategy, Component, Inject, Injector, OnInit } from '@angular/core';

import { YA_SERVICE_TOKEN, ITokenService } from '@yelon/auth';
import { CacheService } from '@yelon/cache';
import { WINDOW, YunzaiBusinessConfig, YunzaiConfigService } from '@yelon/util';
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
      nz-dropdown
      nzPlacement="bottomRight"
      [nzDropdownMenu]="userMenu"
    >
      <div class="yz-user-name">
        <nz-avatar [nzSrc]="icon" nzSize="small" class="mr-sm"></nz-avatar>
        {{ username }}
      </div>
    </div>
    <nz-dropdown-menu #userMenu="nzDropdownMenu">
      <div nz-menu class="width-sm">
        <div nz-menu-item *ngFor="let m of menus" (click)="to(m.url)">
          <i nz-icon [nzType]="m.icon" class="mr-sm"></i>
          {{ m.name | i18n }}
        </div>
        <li nz-menu-divider></li>
        <div nz-menu-item (click)="logout()">
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
    private configService: YunzaiConfigService,
    private cacheService: CacheService
  ) {
    this.config = mergeBisConfig(configService);
  }

  icon: string = '';
  username: string = '';
  menus: UserLink[] = [];

  ngOnInit(): void {
    const projectInfo = this.cacheService.get('_yz_project_info', { mode: 'none' });
    const user = this.cacheService.get('_yz_user', { mode: 'none' });
    this.username = user.realname ? user.realname : '未命名';
    this.icon = user.avatarId
      ? `${this.config.baseUrl}/filecenter/file/${user.avatarId}`
      : `./assets/tmp/img/avatar.jpg`;
    this.menus = projectInfo.profileList;
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
