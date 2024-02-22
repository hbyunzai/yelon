import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { YA_SERVICE_TOKEN } from '@yelon/auth';
import { mergeBisConfig } from '@yelon/bis/config';
import { I18nPipe } from '@yelon/theme';
import {
  useLocalStorageProjectInfo,
  useLocalStorageUser,
  WINDOW,
  YunzaiBusinessConfig,
  YunzaiConfigService
} from '@yelon/util';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';

export interface UserLink {
  icon: string;
  name: string;
  url: string;
}

@Component({
  selector: `yunzai-header-user`,
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
        @for (m of menus; track m) {
          <div data-event-id="_nav_user" [attr.data-name]="m.name | i18n" nz-menu-item (click)="to(m.url)">
            <i nz-icon [nzType]="m.icon" class="mr-sm"></i>
            {{ m.name | i18n }}
          </div>
        }
        <li nz-menu-divider></li>
        <div data-event-id="_nav_user" data-name="注销登录" nz-menu-item (click)="logout()">
          <i nz-icon nzType="logout" class="mr-sm"></i>
          {{ 'logout' | i18n }}
        </div>
      </div>
    </nz-dropdown-menu>
  `,
  standalone: true,
  imports: [NzDropDownModule, I18nPipe, NzIconModule, NzAvatarModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YunzaiHeaderUserComponent implements OnInit {
  private readonly msg = inject(NzMessageService);
  private readonly tokenService = inject(YA_SERVICE_TOKEN);
  private readonly configService = inject(YunzaiConfigService);
  private readonly config: YunzaiBusinessConfig = mergeBisConfig(this.configService);
  private readonly win = inject(WINDOW);

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
    this.win.location.href = `${this.config.baseUrl}/cas-proxy/app/logout`;
  }

  to(href: string): void {
    if (href) {
      this.win.open(href);
    } else {
      this.msg.error('该菜单没有配置链接!');
    }
  }
}
