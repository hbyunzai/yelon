import { inject, Injectable } from '@angular/core';
import { CanActivateChildFn, CanActivateFn } from '@angular/router';

import { ITokenService, YA_SERVICE_TOKEN } from '@yelon/auth';
import { BUSINESS_DEFAULT_CONFIG, mergeBisConfig } from '@yelon/bis/config';
import { Menu } from '@yelon/theme';
import { deepCopy, PathToRegexpService, useLocalStorageUser, WINDOW, YunzaiBusinessConfig, YunzaiConfigService, YunzaiUser } from '@yelon/util';

@Injectable({
  providedIn: 'root'
})
export class YunzaiAnalysisAddonGuardService {
  private bis: YunzaiBusinessConfig = BUSINESS_DEFAULT_CONFIG;
  private menus: any[] = [];
  private links: Array<{ title: string; link: string }> = [];
  private value: any = {};

  private configService: YunzaiConfigService = inject(YunzaiConfigService);
  private pathToRegexp: PathToRegexpService = inject(PathToRegexpService);
  private win: any = inject(WINDOW);
  private tokenService: ITokenService = inject(YA_SERVICE_TOKEN);

  constructor() {
    this.bis = mergeBisConfig(this.configService);
    const [, getUser] = useLocalStorageUser();
    const user: YunzaiUser = getUser()!;
    this.menus = deepCopy((user.menu as any) || []).filter((m: Menu) => m.systemCode && m.systemCode === this.bis.systemCode) as Menu[];
    if (user) {
      this.value = {
        systemCode: this.bis.systemCode,
        userid: user.id,
        realname: user.realname,
        usertype: user.userType,
        usercode: user.userCode,
        username: user.username,
        account: user.username,
        deptid: user.deptId,
        deptname: user.deptName,
        token: this.tokenService.get()?.access_token
      };
    }
    if (this.menus && this.menus.length > 0) {
      this.value['system'] = (this.menus[0] as Menu).text;
    }
    this.getAllLinks(this.menus, this.links);
  }

  process(url: string): boolean {
    let flag = false;
    this.links.forEach(link => {
      if (link.link === url.split('?')[0]) {
        flag = true;
        this.value['routename'] = link.title;
        this.value['routeurl'] = link.link;
        if (this.win['yunzai']) {
          this.win['yunzai'].setExtra(this.value);
        }
        return;
      }
      const regexp: RegExp = this.pathToRegexp.stringToRegexp(link, null, null);
      if (regexp.test(url.split('?')[0])) {
        flag = true;
        this.value['routename'] = link.title;
        this.value['routeurl'] = link.link;
        if (this.win['yunzai']) {
          this.win['yunzai'].setExtra(this.value);
        }
        return;
      }
    });
    if (!flag) {
      this.value['routename'] = url;
      this.value['routeurl'] = url;
      if (this.win['yunzai']) {
        this.win['yunzai'].setExtra(this.value);
      }
    }
    return true;
  }

  getAllLinks(menu: Menu[], links: Array<{ title: string; link: string }>): void {
    menu.forEach((sider: Menu) => {
      if (sider.link) {
        links.push({ title: sider.text ? sider.text : sider.link, link: sider.link });
      }
      if (sider.children && sider.children.length > 0) {
        this.getAllLinks(sider.children, links);
      }
    });
  }
}

export const analysisAddonCanActive: CanActivateFn = (_, state) => inject(YunzaiAnalysisAddonGuardService).process(state.url);
export const analysisAddonCanActiveChild: CanActivateChildFn = (_, state) => inject(YunzaiAnalysisAddonGuardService).process(state.url);
