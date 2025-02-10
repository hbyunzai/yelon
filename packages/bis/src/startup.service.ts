import { HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, inject, Injectable, Provider } from '@angular/core';
import { catchError, combineLatest, EMPTY, map, mergeMap, Observable, of } from 'rxjs';

import { ACLService } from '@yelon/acl';
import { ITokenModel, YA_SERVICE_TOKEN } from '@yelon/auth';
import { mergeBisConfig } from '@yelon/bis/config';
import {
  Menu,
  MenuService,
  SettingsService,
  TitleService,
  YUNZAI_I18N_TOKEN,
  YunzaiHttpI18NService
} from '@yelon/theme';
import {
  deepCopy,
  useLocalStorageCurrent,
  useLocalStorageDefaultRoute,
  useLocalStorageHeader,
  useLocalStorageProjectInfo,
  useLocalStorageTenant,
  useLocalStorageUser,
  WINDOW,
  YunzaiConfigService,
  YunzaiMenu,
  YunzaiMenuAttribute
} from '@yelon/util';


export interface LoadParam {
  force?: boolean;
}

export function provideYunzaiStartup(): Provider[] {
  return [
    YunzaiStartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: (startupService: YunzaiStartupService) => () => startupService.load(),
      deps: [YunzaiStartupService],
      multi: true
    }
  ];
}

@Injectable()
export class YunzaiStartupService {
  private readonly config = mergeBisConfig(inject(YunzaiConfigService));
  private readonly menuService = inject(MenuService);
  private readonly aclService = inject(ACLService);
  private readonly titleService = inject(TitleService);
  private readonly tokenService = inject(YA_SERVICE_TOKEN);
  private readonly httpClient = inject(HttpClient);
  private readonly settingService = inject(SettingsService);
  private readonly i18n = inject<YunzaiHttpI18NService>(YUNZAI_I18N_TOKEN);
  private readonly win = inject(WINDOW);
  private readonly configService = inject(YunzaiConfigService);

  load(param?: LoadParam): Observable<void> {
    let defaultLang: string = this.settingService.layout.lang || this.i18n.defaultLang || 'zh-CN';
    const [setTenant] = useLocalStorageTenant();
    const [setUser, getUser] = useLocalStorageUser();
    const [setHeader] = useLocalStorageHeader();
    const [setProject] = useLocalStorageProjectInfo();
    const [setDefaultRoute] = useLocalStorageDefaultRoute();
    const [setCurrent] = useLocalStorageCurrent();

    return this.token(param).pipe(
      mergeMap((token: any) => {
        if (token === false) {
          return this.i18n.loadLocaleData(defaultLang).pipe(
            map((langData: any) => {
              this.i18n.use(defaultLang, langData);
              this.settingService.setLayout('lang', defaultLang);
            }),
            mergeMap(() => EMPTY)
          );
        }
        this.configService.set('auth', {
          token_send_key: 'Authorization',
          token_send_template: `${token.token_type} \${access_token}`,
          token_send_place: 'header'
        });
        this.tokenService.set(token);
        return of(void 0);
      }),
      mergeMap(() => {
        return combineLatest([
          this.httpClient.get(`/auth/user`),
          this.httpClient.get(`/auth/allheader/v2`),
          this.httpClient.get(`/app-manager/project/info`)
        ]).pipe(
          map(([user, header, project]: any) => {
            setUser(user.principal);
            setTenant(user.tenantId);
            setHeader(header.data);
            setProject(project.data);
            return void 0;
          })
        );
      }),
      mergeMap(() => {
        return this.i18n.loadLangData(defaultLang).pipe(
          map((langData: any) => {
            this.i18n.use(defaultLang, langData);
            return void 0;
          })
        );
      }),
      mergeMap(() => {
        const yunzaiUser = getUser()!;
        const yunzaiMenus: YunzaiMenu[] = deepCopy(yunzaiUser.menu).filter(
          m => m.systemCode && m.systemCode === this.config.systemCode
        );
        const currentMenu = yunzaiMenus.pop();
        if (currentMenu) {
          this.settingService.setApp({ name: currentMenu.text, description: currentMenu.intro });
          this.settingService.setUser({
            name: yunzaiUser.realname,
            avatar: `${this.config.baseUrl}/filecenter/file/${yunzaiUser.avatarId}` || '',
            email: yunzaiUser.email
          });
          this.titleService.default = currentMenu && currentMenu.text ? currentMenu.text : 'default application name';
          this.titleService.setTitle(currentMenu && currentMenu.text ? currentMenu.text : 'no title');
          const abilities: string[] = [];
          generateAbility([currentMenu], abilities, '');
          this.aclService.attachRole(
            yunzaiUser?.roles
              .map((role: any) => {
                return role.roleValue;
              })
              .filter((a: any) => !!a) || []
          );
          this.aclService.attachAbility(abilities);
          this.menuService.add([currentMenu as Menu]);
          setCurrent({
            name: currentMenu.text,
            intro: currentMenu.intro || '',
            icon: currentMenu.appIconUrl || './assets/tmp/img/avatar.jpg'
          });
          const attributes = currentMenu.attribute;
          if (attributes) {
            const attr: YunzaiMenuAttribute = JSON.parse(attributes);
            if (attr && attr.defaultRoute) {
              setDefaultRoute(attr.defaultRoute);
            } else {
              setDefaultRoute('/displayIndex');
            }
          } else {
            setDefaultRoute('/displayIndex');
          }
        }
        return of(void 0);
      }),
      catchError((error: any) => {
        console.error('Error occurred:', error);
        return of(void 0);
      })
    );
  }

  token(param?: LoadParam): Observable<ITokenModel | boolean> {
    const auto = this.configService.get('auth')?.auto;
    const force = param?.force || undefined;
    if (this.config.loginForm) {
      if (this.tokenService.get()?.access_token || force || auto) {
        return this.httpClient.post(`/auth/oauth/token?_allow_anonymous=true`, this.config.loginForm).pipe(
          map((response: any) => {
            return response;
          })
        );
      }
      return of(false);
    } else {
      const uri = encodeURIComponent(this.win.location.href);
      return this.httpClient
        .get(`/cas-proxy/app/validate_full?callback=${uri}&_allow_anonymous=true&timestamp=${new Date().getTime()}`)
        .pipe(
          map((response: any) => {
            switch (response.errcode) {
              case 2000:
                return response.data;
              case 2001:
                if (!force && !auto) {
                  // 自动认证为false情况下会出现: 后台已经下线,但是用户进入网页存储了上次的cookie,Token，所以网页还是登录状态
                  // 在这里如果2001时自动清理客户端过时的token以保证页面显示登录状态正常
                  localStorage.clear();
                  this.tokenService.clear();
                  return false;
                }
                this.win.location.href = response.msg;
                throw Error("Cookie Error: Can't find Cas Cookie,So jump to login!");
              default:
                if (response.data) {
                  console.error(response.data);
                  throw Error(response.data);
                } else if (response.msg) {
                  console.error(response.msg);
                  throw Error(response.msg);
                } else {
                  console.error('cas unknown error');
                  throw Error('Unknown Error: Cas auth exception!');
                }
            }
          })
        );
    }
  }
}

export function mapYzSideToYelonMenu(menus: YunzaiMenu[]): void {
  menus.forEach((menu: any) => {
    if (menu.children && menu.hideChildren) {
      menu.children.forEach((c: any) => (c.hide = true));
    }
    menu.badgeDot = menu.badge_dot || null;
    menu.badgeStatus = menu.badge_status || null;
    menu.shortcutRoot = menu.shortcut_root || null;
    menu.reuse = true;
    if (menu.children) {
      mapYzSideToYelonMenu(menu.children);
    }
  });
}

export function generateAbility(menus: YunzaiMenu[], abilities: string[], prefix: string): void {
  menus.forEach(menu => {
    if (menu.link) {
      prefix += menu.link;
    } else {
      prefix += '';
    }
    if (menu.menuAuths) {
      menu.menuAuths.forEach((a: string) => {
        abilities.push(`${prefix}:${a}`);
        abilities.push(a);
      });
    }

    if (menu.children) {
      generateAbility(menu.children, abilities, prefix);
    }
  });
}
