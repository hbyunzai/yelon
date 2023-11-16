import { APP_INITIALIZER, Inject, Injectable } from '@angular/core';
import { Observable, mergeMap, of } from 'rxjs';

import { ACLService } from '@yelon/acl';
import { Menu, MenuService, SettingsService, TitleService, YUNZAI_I18N_TOKEN } from '@yelon/theme';
import {
  YunzaiMenu,
  WINDOW,
  YunzaiBusinessConfig,
  YunzaiConfigService,
  deepCopy,
  log,
  YunzaiMenuAttribute,
  useLocalStorageCurrent,
  useLocalStorageUser,
  useLocalStorageDefaultRoute
} from '@yelon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzIconService } from 'ng-zorro-antd/icon';

import { BUSINESS_DEFAULT_CONFIG, mergeBisConfig } from './bis.config';
import { ICONS } from './icon/style-icons';
import { YunzaiAuthService } from './yunzai-auth.service';
import { YunzaiI18NService } from './yunzai-i18n.service';

@Injectable()
export class YunzaiStartupService {
  private config: YunzaiBusinessConfig = BUSINESS_DEFAULT_CONFIG;

  constructor(
    iconSrv: NzIconService,
    private menuService: MenuService,
    @Inject(YUNZAI_I18N_TOKEN) private i18n: YunzaiI18NService,
    @Inject(WINDOW) private win: NzSafeAny,
    private settingService: SettingsService,
    private aclService: ACLService,
    private titleService: TitleService,
    private yzAuthService: YunzaiAuthService,
    private configService: YunzaiConfigService
  ) {
    this.config = mergeBisConfig(this.configService);
    iconSrv.addIcon(...ICONS);
  }

  load(): Observable<void> {
    log('startup.service: ', 'load');
    let defaultLang: string = this.settingService.layout.lang || this.i18n.defaultLang;
    return this.yzAuthService.login().pipe(
      mergeMap(() => {
        return this.i18n.loadLangData(defaultLang);
      }),
      mergeMap(langData => {
        log('startup.service: ', 'set i18n, defaultLang->', defaultLang, ' langData->', langData);
        this.i18n.use(defaultLang!, langData);
        return of(void 0);
      }),
      mergeMap(v => {
        this.systemInit();
        log('startup.service: preloader finish');
        if (this.win && this.win.appBootstrap) {
          this.win.appBootstrap();
        }
        return of(v);
      })
    );
  }

  systemInit(): void {
    log('startup.service: system init');
    const [setCurrent] = useLocalStorageCurrent();
    const [, getUser] = useLocalStorageUser();
    const [setDefaultRoute] = useLocalStorageDefaultRoute();
    const yunzaiUser = getUser()!;
    // @ts-ignore
    const yunzaiMenus: YunzaiMenu[] = deepCopy(yunzaiUser.menu).filter(
      m => m.systemCode && m.systemCode === this.config.systemCode
    );
    mapYzSideToYelonMenu(yunzaiMenus);
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
          .map((role: NzSafeAny) => {
            return role.roleValue;
          })
          .filter((a: NzSafeAny) => !!a) || []
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
  }
}

export function mapYzSideToYelonMenu(menus: YunzaiMenu[]): void {
  menus.forEach(menu => {
    if (menu.children && menu.hideChildren) {
      menu.children.forEach(c => (c.hide = true));
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

export function YunzaiStartupServiceFactory(startupService: YunzaiStartupService): () => Observable<void> {
  return () => startupService.load();
}

//@ts-ignore
export const YUNZAI_APPINIT_PROVIDES = [
  YunzaiStartupService,
  {
    provide: APP_INITIALIZER,
    useFactory: YunzaiStartupServiceFactory,
    deps: [YunzaiStartupService],
    multi: true
  }
];
