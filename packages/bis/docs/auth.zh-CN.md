---
order: 3
title: 云在认证
type: Documents
---

`@yelon/bis`使用内置`YzStartupService`,采用与`CAS`交互的方式,仅提供`前台对接`模式(*需要管理端授权/更改配置*).


## 默认初始化


```ts
import { StartupService } from '@core';

export function StartupServiceFactory(startupService: StartupService): () => Observable<void> {
  return () => startupService.load();
}

const APPINIT_PROVIDES = [
  StartupService,
  {
    provide: APP_INITIALIZER,
    useFactory: StartupServiceFactory,
    deps: [StartupService],
    multi: true
  }
];
```

- 1.通过脚手架创建项目完毕后于`app.modules.ts`中存在以下几行
- 2.可以把 `APPINIT_PROVIDES` 理解为项目`初始化生命周期的flag`.
- 3.当使用这个标识时，会调用传入的`Factory`.
- 4.`StartupServiceFactory`依赖`StartupService`这个服务，所以使用`deps:[StartupService]`引入依赖.
- 5.`StartupServiceFactory`调用`Service`中的`load`函数进入项目初始化过程.


```ts
@NgModule({
  providers: [...LANG_PROVIDES, ...INTERCEPTOR_PROVIDES, ...I18NSERVICE_PROVIDES, ...APPINIT_PROVIDES],
})
export class AppModule {}
```

最后导入到`AppModule`中: 数组中的`APPINIT_PROVIDES`


---

`StartupService`提供了一套默认的应用加载机制

```ts
@Injectable()
export class StartupService {
  constructor(
    iconSrv: NzIconService,
    private menuService: MenuService,
    @Inject(YUNZAI_I18N_TOKEN) private i18n: I18NService,
    private settingService: SettingsService,
    private aclService: ACLService,
    private titleService: TitleService,
    private httpClient: HttpClient
  ) {
    iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
  }

  load(): Observable<void> {
    const defaultLang = this.i18n.defaultLang;
    return zip(this.i18n.loadLangData(defaultLang), this.httpClient.get('assets/tmp/app-data.json')).pipe(
      // 接收其他拦截器后产生的异常消息
      catchError(res => {
        console.warn(`StartupService.load: Network request failed`, res);
        return [];
      }),
      map(([langData, appData]: [Record<string, string>, NzSafeAny]) => {
        // setting language data
        this.i18n.use(defaultLang, langData);

        // 应用信息：包括站点名、描述、年份
        this.settingService.setApp(appData.app);
        // 用户信息：包括姓名、头像、邮箱地址
        this.settingService.setUser(appData.user);
        // ACL：设置权限为全量
        this.aclService.setFull(true);
        // 初始化菜单
        this.menuService.add(appData.menu);
        // 设置页面标题的后缀
        this.titleService.default = '';
        this.titleService.suffix = appData.app.name;
      })
    );
  }
}
```

---

## 云在初始化


 云在初始化位于`@yelon/bis`中,提供了一套为对接云在认证定制的初始化流程

```ts
@NgModule({
  providers: [...LANG_PROVIDES, ...INTERCEPTOR_PROVIDES, ...I18NSERVICE_PROVIDES, ...YZ_APPINIT_PROVIDES],
})
export class AppModule {}
```
- 1.将原初始化配置删除`APPINIT_PROVIDES`
- 2.直接引用`@yelon/bis`内的 `YZ_APPINIT_PROVIDES` 初始化配置(下方代码数组中的最后一个参数)

## i18n初始化


```ts
@Injectable()
export class YzStartupService {
    constructor(
        @Inject(YUNZAI_I18N_TOKEN) private i18n: YzI18NService,
    ) {
      const defaultLang = this.i18n.defaultLang;
    }
}
```

由于`YzStartupService`中引入`YzI18NService`来初始化`i18n`

```ts
const I18NSERVICE_PROVIDES = [{ provide: YUNZAI_I18N_TOKEN, useClass: YzI18NService, multi: false }];
```

所以需要将`useClass`中的`I18NService`改变成`YzI18NService`,**`i18n`配置位于`app.module.ts`**.


## 代码解析


### YzStartupService

```ts
import { APP_INITIALIZER, Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs';

import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzIconService } from 'ng-zorro-antd/icon';

import { ACLService } from '@yelon/acl';
import { BUSINESS_DEFAULT_CONFIG, mergeConfig, ICONS } from '@yelon/bis/shared';
import { CacheService } from '@yelon/cache';
import { Menu, MenuService, SettingsService, TitleService, User, YUNZAI_I18N_TOKEN } from '@yelon/theme';
import { deepCopy, log, YunzaiBusinessConfig, YunzaiConfigService } from '@yelon/util';

import { YzAuthService } from './yz.auth.service';
import { YzI18NService } from './yz.i18n.service';

// 递归将数据库中的菜单数据转换成 Ng-Yunzai支持的数据类型
export function mapYzSideToYelonMenu(menus: Menu[]) {
  menus.forEach(menu => {
    menu.badgeDot = menu.badge_dot || null;
    menu.badgeStatus = menu.badge_status || null;
    menu.shortcutRoot = menu.shortcut_root || null;
    menu.reuse = true;
    if (menu.children) {
      mapYzSideToYelonMenu(menu.children);
    }
  });
}

// 递归从数据库菜单配置中生成权限点数
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
  // 声明一个默认配置
  private bis: YunzaiBusinessConfig = BUSINESS_DEFAULT_CONFIG;

  constructor(
    // ICON 配置
    iconSrv: NzIconService,
    // 菜单服务
    private menuService: MenuService,
    // i18n服务
    @Inject(YUNZAI_I18N_TOKEN) private i18n: YzI18NService,
    // 全局服务
    private settingService: SettingsService,
    // 权限服务
    private aclService: ACLService,
    // 标题服务
    private titleService: TitleService,
    // 云在认证服务
    private yzAuthService: YzAuthService,
    // 缓存服务
    private cacheService: CacheService,
    // 配置服务
    private configService: YunzaiConfigService
  ) {
    // 使用外部，也就是global模块传入的config和默认config进行merge操作
    this.bis = mergeConfig(this.configService);
    // 加入图标
    iconSrv.addIcon(...ICONS);
  }

  // 由Angular初始化调用
  load(): Observable<void> {
    log('startup.service: ', 'load');
    // i18n的默认配置
    const defaultLang = this.i18n.defaultLang;
    return this.i18n.loadLangData(defaultLang).pipe(
      mergeMap(langData => {
        log('startup.service: ', 'set i18n, defaultLang->', defaultLang, ' langData->', langData);
        this.i18n.use(defaultLang, langData);
        return of(null);
      }),
      mergeMap(() => {
          // 调用云在认证服务
        return this.yzAuthService.login();
      }),
      mergeMap(v => {
        // preloader finish
        // 认证后系统初始化
        this.systemInit();
        log('startup.service: preloader finish');
        // 去除遮罩层，进入系统
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
    // 从缓存中获取user
    const user: User = this.cacheService.get('_yz_user', { mode: 'none' });
    // 从缓存中过滤出当前系统的菜单
    const ms = deepCopy(user.menu).filter((m: Menu) => m.systemCode && m.systemCode === this.bis.systemCode) as Menu[];
    // 菜单转换
    mapYzSideToYelonMenu(ms);
    const currentMenu = ms.pop()!;
    // 菜单服务设置上菜单
    this.menuService.add([currentMenu]);

    // 设置LOGO
    this.settingService.setApp({ name: currentMenu.text, description: currentMenu.intro });
    this.settingService.setUser({
      name: user.realname || 'no name',
      avatar: `${this.bis.baseUrl}/filecenter/file/${user.avatarId}` || '',
      email: user.email || 'no email'
    });

    // 设置标题
    this.titleService.default = currentMenu.text || 'default application name';
    this.titleService.setTitle(currentMenu.text || 'no title');

    // 设置权限点数
    const abilities: string[] = [];
    generateAbility([currentMenu], abilities, '');
    this.aclService.attachRole(
      user?.roles
        .map((role: NzSafeAny) => {
          return role.roleValue;
        })
        .filter((a: NzSafeAny) => !!a) || []
    );
    this.aclService.attachAbility(abilities); 

    // 将当前系统信息设置到缓存中
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

```

### YzAuthService

```ts
import { Injectable, Injector } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs';

import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { ITokenModel, ITokenService, mergeConfig as mergeAuthConfig, YA_SERVICE_TOKEN } from '@yelon/auth';
import { mergeConfig as mergeBisConfig } from '@yelon/bis/shared';
import { CacheService } from '@yelon/cache';
import { _HttpClient } from '@yelon/theme';
import { WINDOW, YunzaiAuthConfig, YunzaiBusinessConfig } from '@yelon/util';
import { YunzaiConfigService } from '@yelon/util/config';
import { log } from '@yelon/util/other';

@Injectable({ providedIn: 'root' })
export class YzAuthService {
  // 两项配置
  protected option: YunzaiAuthConfig;
  protected bis: YunzaiBusinessConfig;

  constructor(private injector: Injector) {
    // 将默认配置和global传入的配置merge 
    this.option = mergeAuthConfig(this.csr);
    this.bis = mergeBisConfig(this.csr);
  }

  // 注入YunzaiConfig服务
  private get csr(): YunzaiConfigService {
    return this.injector.get(YunzaiConfigService);
  }

  // 注入Token服务
  private get tokenService(): ITokenService {
    return this.injector.get(YA_SERVICE_TOKEN);
  }

  // 注入Http服务
  private get httpClient(): _HttpClient {
    return this.injector.get(_HttpClient);
  }

  // 注入缓存服务
  private get cacheService(): CacheService {
    return this.injector.get(CacheService);
  }

  // 尝试取出Token
  askToken(): Observable<ITokenModel> {
    log('yz.auth.service: ', 'askToken');
    // 如果TokenService中含有Token那么直接返回
    if (this.tokenService.get()?.token) {
      return of(this.tokenService.get()!);
    } else {
      // 本地开发模式通过是否有登录表单判断
      if (this.bis.loginForm) {
        // 本地登录  
        return this.fetchTokenByUP();
      } else {
        // 正常通过CAS获取Token  
        return this.fetchTokenByCas();
      }
    }
  }

  fetchTokenByUP(): Observable<ITokenModel> {
    log('yz.auth.service: ', 'fetchTokenByUP');
    // 发送请求换取Token
    return this.httpClient.post(`/auth/oauth/token?_allow_anonymous=true`, this.bis.loginForm).pipe(
      map((response: NzSafeAny) => {
        const { access_token, expires_in, refresh_token, scope, token_type } = response;
        return {
          token: access_token,
          expired: expires_in,
          refreshToken: refresh_token,
          tokenType: token_type,
          scope
        };
      })
    );
  }

  fetchTokenByCas(): Observable<ITokenModel> {
    log('yz.auth.service: ', 'fetchTokenByCas');
    // 回跳地址
    const uri = encodeURIComponent(this.injector.get(WINDOW).location.href);
    // 发送get请求给cas服务，传入回调地址
    return this.httpClient
      .get(`/cas-proxy/app/validate_full?callback=${uri}&_allow_anonymous=true&timestamp=${new Date().getTime()}`)
      .pipe(
        map((response: NzSafeAny) => {
          switch (response.errcode) {
            // 2000，已经登录过，直接拿到Token
            case 2000:
              const { access_token, expires_in, refresh_token, scope, token_type } = response.data;
              return {
                token: access_token,
                expired: expires_in,
                refreshToken: refresh_token,
                tokenType: token_type,
                scope
              } as ITokenModel;
            // 2001, 没有登录过，通过response返回了登录地址，去登录
            case 2001:
              this.injector.get(WINDOW).location.href = response.msg;
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

  login(): Observable<void> {
    log('yz.auth.service: ', 'login white login form->', this.bis.loginForm);
    // 第一步尝试获取Token
    return this.askToken().pipe(
      mergeMap(token => {
        log('yz.auth.service: get token->', token);
        this.csr.set('auth', {
          token_send_key: 'Authorization',
          token_send_template: `${token.tokenType} \${token}`,
          token_send_place: 'header'
        });
        log('yz.auth.service: ', 'set token');
        this.tokenService.set(token);
        // 第二步，缓存所有系统需要的信息
        return this.cacheInit();
      }),
      mergeAll()
    );
  }

  cacheInit(): Observable<void[]> {
    log('yz.auth.service: ', 'cacheInit');
    // 尝试获取缓存
    const user = this.cacheService.get('_yz_user', { mode: 'none' });
    const header = this.cacheService.get('_yz_header', { mode: 'none' });
    const project = this.cacheService.get('_yz_project_info', { mode: 'none' });
    return forkJoin(of(user), of(header), of(project)).pipe(
      mergeMap(([u, h, p]) => {
        let list = [];
        // 如果获取不到
        if (!u) {
          log('yz.auth.service: ', 'fetch user cache');
          list.push(
              // 重新请求
            this.httpClient.get(`/auth/user`).pipe(
              map((user: NzSafeAny) => {
                  // 设置缓存
                this.cacheService.set('_yz_user', user.principal);
              })
            )
          );
        } else {
          log('yz.auth.service: ', 'user recache');
          list.push(of<NzSafeAny>(() => {}));
        }
        // header cache
        if (!h) {
          log('yz.auth.service: ', 'fetch header cache');
          list.push(
            this.httpClient.get(`/auth/allheader/v2`).pipe(
              map((header: NzSafeAny) => {
                this.cacheService.set('_yz_header', header.data);
              })
            )
          );
        } else {
          log('yz.auth.service: ', 'header recache');
          list.push(of<NzSafeAny>(() => {}));
        }
        // project cache
        if (!p) {
          log('yz.auth.service: ', 'fetch project cache');
          list.push(
            this.httpClient.get(`/app-manager/project/info`).pipe(
              map((info: NzSafeAny) => {
                this.cacheService.set('_yz_project_info', info.data);
              })
            )
          );
        } else {
          log('yz.auth.service: ', 'project recache');
          list.push(of<NzSafeAny>(() => {}));
        }
        return forkJoin(list);
      })
    );
  }
}

```
