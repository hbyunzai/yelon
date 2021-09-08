import { APP_INITIALIZER, Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzIconService } from 'ng-zorro-antd/icon';

import { ACLService } from '@yelon/acl';
import { BUSINESS_DEFAULT_CONFIG, mergeConfig, ICONS } from '@yelon/bis/shared';
import { CacheService } from '@yelon/cache';
import { Menu, MenuService, SettingsService, TitleService, User, YUNZAI_I18N_TOKEN } from '@yelon/theme';
import { deepCopy, log, YunzaiBusinessConfig, YunzaiConfigService } from '@yelon/util';

import { YzAuthService } from './yz.auth.service';
import { YzI18NService } from './yz.i18n.service';

export function mapYzSideToYelonMenu(menus: Menu[]) {
  menus.forEach(menu => {
    menu.badgeDot = menu.badge_dot || null;
    menu.badgeStatus = menu.badge_status || null;
    menu.shortcutRoot = menu.shortcut_root || null;
    if (menu.children) {
      mapYzSideToYelonMenu(menu.children);
    }
  });
}

export function generateAbility(menus: Menu[], abilities: string[], prefix: string): void {
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

@Injectable()
export class YzStartupService {
  private bis: YunzaiBusinessConfig = BUSINESS_DEFAULT_CONFIG;

  constructor(
    iconSrv: NzIconService,
    private menuService: MenuService,
    @Inject(YUNZAI_I18N_TOKEN) private i18n: YzI18NService,
    private settingService: SettingsService,
    private aclService: ACLService,
    private titleService: TitleService,
    private yzAuthService: YzAuthService,
    private cacheService: CacheService,
    private configService: YunzaiConfigService
  ) {
    this.bis = mergeConfig(this.configService);
    iconSrv.addIcon(...ICONS);
  }

  load(): Observable<void> {
    log('startup.service: ', 'load');
    const defaultLang = this.i18n.defaultLang;
    return this.i18n.loadLangData(defaultLang).pipe(
      mergeMap(langData => {
        log('startup.service: ', 'set i18n, defaultLang->', defaultLang, ' langData->', langData);
        this.i18n.use(defaultLang, langData);
        return of(null);
      }),
      mergeMap(() => {
        return this.yzAuthService.login();
      }),
      mergeMap(v => {
        // preloader finish
        this.systemInit();
        log('startup.service: preloader finish');
        const win = window as NzSafeAny;
        if (win && win.appBootstrap) {
          win.appBootstrap();
        }
        return of(v);
      })
    );
  }

  systemInit(): void {
    log('startup.service: system init');
    // user
    const user: User = this.cacheService.get('_yz_user', { mode: 'none' });
    // menu
    const ms = deepCopy(user.menu).filter((m: Menu) => m.systemCode && m.systemCode === this.bis.systemCode) as Menu[];
    mapYzSideToYelonMenu(ms);
    const currentMenu = ms.pop()!;
    this.menuService.add(currentMenu.children!);

    // logo app
    this.settingService.setApp({ name: currentMenu.text, description: currentMenu.intro });
    this.settingService.setUser({
      name: user.realname || 'no name',
      avatar: `${this.bis.baseUrl}/filecenter/file/${user.avatarId}` || '',
      email: user.email || 'no email'
    });

    // title
    this.titleService.default = currentMenu.text || 'default application name';
    this.titleService.setTitle(currentMenu.text || 'no title');

    // acl
    const abilities: string[] = [];
    generateAbility([currentMenu], abilities, '');
    this.aclService.add({
      role:
        user?.roles
          .map((role: NzSafeAny) => {
            return role.roleValue;
          })
          .filter((a: NzSafeAny) => !!a) || [],
      ability: abilities
    });

    // cache current
    this.cacheService.set('_yz_current', {
      text: currentMenu.text,
      intro: currentMenu.intro,
      icon: currentMenu.appIconUrl
    });
  }
}

export function YzStartupServiceFactory(startupService: YzStartupService): () => Observable<void> {
  return () => startupService.load();
}

//@ts-ignore
export const YZ_APPINIT_PROVIDES = [
  YzStartupService,
  {
    provide: APP_INITIALIZER,
    useFactory: YzStartupServiceFactory,
    deps: [YzStartupService],
    multi: true
  }
];
