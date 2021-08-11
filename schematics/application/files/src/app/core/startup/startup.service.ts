import { Injectable, Injector, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { YA_SERVICE_TOKEN, ITokenService } from '@yelon/auth';
import { YUNZAI_I18N_TOKEN, MenuService, SettingsService, TitleService } from '@yelon/theme';
import { ACLService } from '@yelon/acl';<% if (i18n) { %>
import { I18NService } from '../i18n/i18n.service';<% } %>
import { Observable, zip, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzIconService } from 'ng-zorro-antd/icon';

import { ICONS } from '../../../style-icons';
import { ICONS_AUTO } from '../../../style-icons-auto';

/**
 * Used for application startup
 * Generally used to get the basic data of the application, like: Menu Data, User Data, etc.
 */
@Injectable()
export class StartupService {
  constructor(
    iconSrv: NzIconService,
    private menuService: MenuService,<% if (i18n) { %>
    @Inject(YUNZAI_I18N_TOKEN) private i18n: I18NService,<% } %>
    private settingService: SettingsService,
    private aclService: ACLService,
    private titleService: TitleService,
    @Inject(YA_SERVICE_TOKEN) private tokenService: ITokenService,
    private httpClient: HttpClient,
    private injector: Injector
  ) {
    iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
  }

  <% if (i18n) { %>
    private viaHttp(): Observable<void> {
      const defaultLang = this.i18n.defaultLang;
      return zip(this.i18n.loadLangData(defaultLang), this.httpClient.get('assets/tmp/app-data.json')).pipe(
        catchError((res: NzSafeAny) => {
          console.warn(`StartupService.load: Network request failed`, res);
          return [];
        }),
        map(([langData, appData]: [Record<string, string>, NzSafeAny]) => {
          // setting language data
          this.i18n.use(defaultLang, langData);

          // Application data
          // Application information: including site name, description, year
          this.settingService.setApp(appData.app);
          // User information: including name, avatar, email address
          this.settingService.setUser(appData.user);
          // ACL: Set the permissions to full, https://ng-yunzai.com/acl/getting-started
          this.aclService.setFull(true);
          // Menu data, https://ng-yunzai.com/theme/menu
          this.menuService.add(appData.menu);
          // Can be set page suffix title, https://ng-yunzai.com/theme/title
          this.titleService.suffix = appData.app.name;
        })
      );
    }
  <% } else { %>
    private viaHttp(): Observable<void> {
      return this.httpClient.get('assets/tmp/app-data.json').pipe(
        catchError((res: NzSafeAny) => {
          console.warn(`StartupService.load: Network request failed`, res);
          return of({});
        }),
        map((res: NzSafeAny) => {
          // Application information: including site name, description, year
          this.settingService.setApp(res.app);
          // User information: including name, avatar, email address
          this.settingService.setUser(res.user);
          // ACL: Set the permissions to full, https://ng-yunzai.com/acl/getting-started
          this.aclService.setFull(true);
          // Menu data, https://ng-yunzai.com/theme/menu
          this.menuService.add(res.menu);
          // Can be set page suffix title, https://ng-yunzai.com/theme/title
          this.titleService.suffix = res.app.name;
        })
      );
    }
  <% } %>

  <% if (i18n) { %>
  private viaMockI18n(): Observable<void> {
    const defaultLang = this.i18n.defaultLang;
    return this.i18n.loadLangData(defaultLang).pipe(
        map((langData: NzSafeAny) => {
          this.i18n.use(defaultLang, langData);

          this.viaMock();
        })
      );
  }
  <% } %>
  private viaMock(): Observable<void> {
    // const tokenData = this.tokenService.get();
    // if (!tokenData.token) {
    //   this.injector.get(Router).navigateByUrl('/passport/login');
    //   return;
    // }
    // mock
    const app: any = {
      name: `ng-yunzai`,
      description: `Ng-zorro admin panel front-end framework`
    };
    const user: any = {
      name: 'Admin',
      avatar: './assets/tmp/img/avatar.jpg',
      email: 'cipchk@qq.com',
      token: '123456789'
    };
    // Application information: including site name, description, year
    this.settingService.setApp(app);
    // User information: including name, avatar, email address
    this.settingService.setUser(user);
    // ACL: Set the permissions to full, https://ng-yunzai.com/acl/getting-started
    this.aclService.setFull(true);
    // Menu data, https://ng-yunzai.com/theme/menu
    this.menuService.add([
      {
        text: 'Main',
        group: true,
        children: [
          {
            text: 'Dashboard',
            link: '/dashboard',
            icon: { type: 'icon', value: 'appstore' }
          }
        ]
      }
    ]);
    // Can be set page suffix title, https://ng-yunzai.com/theme/title
    this.titleService.suffix = app.name;

    return of();
  }

  load(): Observable<void> {
    // http
    // return this.viaHttp();
    // mock: Don’t use it in a production environment. ViaMock is just to simulate some data to make the scaffolding work normally
    // mock：请勿在生产环境中这么使用，viaMock 单纯只是为了模拟一些数据使脚手架一开始能正常运行
    return <% if (i18n) { %>this.viaMockI18n();<% } else { %>this.viaMock();<% } %>
  }
}
