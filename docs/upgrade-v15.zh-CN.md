---
order: 1000
type: Basic
title: 升级到 15.0 版本
hot: true
---

> 本指南适用于当前版本 ng-yunzai >= `14` ;
> 如果在升级过程中遇到问题，欢迎提出。提问前请阅读 [如何向开源社区提问题](https://github.com/seajs/seajs/issues/545)
> 如果发现本指南存在遗漏/错误，请指出!
> 或者你遇到了新的问题并解决了，欢迎补充!

## 开始之前

1. 首先确保你 `Node.js` >= `16.10.0`
2. 创建新的分支，或者使用其他方式备份当前项目
3. 删除项目下 `package-lock.json` 或 `yarn.lock` 文件

## 升级步骤

### 升级相关依赖

- 将项目升级到 Angular 14 运行 `ng update @angular/core@15 @angular/cli@15 @angular-eslint/schematics@15 ng-zorro-antd@15 ng-yunzai@15`。
- _如果你有单独使用 `@angular/cdk` 请执行 `ng update @angular/cdk@15`_
- **如果控制台出现警告消息请按提示修改对应代码**

### QA

以下为可选升级：

**移除 `.browserslistrc`**

若需要保持对一些旧 Chrome 版本的支持，例如 360 浏览器，则需要手动恢复，细节参考  [#2310](https://github.com/hbyunzai/ng-yunzai/issues/2310#issuecomment-1299460266)。

**移除 `polyfills.ts`, `test.ts`**
 
Angular15 简化了 `ng new` 的输出，将更多的配置项转移至  `angular.json` 中，好处是可以更好的针对不同环境进行配置，细节请参考 [#2351](https://github.com/hbyunzai/ng-yunzai/pull/2351)。

# 15.1.1 业务系统如何升级

## 修改的问题

- 1.跟随`ng-alain`常规更新，版本从`angular14升级到angular15`
- 2.`auth`模块`token`刷新问题
- 3.自定义模块命名不规范问题

## 新增功能

- 1.新增`@yelon/bcs`模块以及项目[文档](http://ng.yunzainfo.com/bcs/yunzai-contact/zh)，未来用于公共组件
- 2.新增`动态I18n 功能`,所有`i18n`的`key`以及`value`可以在统一门户平台进行动态配置.

## 破坏性升级

- 1. `stomp`命名更改为`socket`并单独拆出模块.所以需要安装.
- 2. 新增`@yelon/bcs`模块.所以需要安装.
- 3. 动态`i18n`所有泛型变更为`Observable<YunzaiI18nType>`,所以需要更新涉及到I18n泛型的地方.

## 如何升级

- 1. 卸载全局cli: `npm uninstall -g @angular/cli`
- 2. 安装全局cli: `npm install -g @angular/cli@15.2.0`
- 3. 删除项目下`node_modules`,`yarn.lock`,`package-lock.json`,如果项目中没有则无需删除.
- 4. 在package.json同级目录下执行`npx @yelon/version-alignment`,从远程拉取`package.json`同本地对比后自动刷到本地文件中.
- 5. 执行`npm install`或`yarn install`安装依赖.
- 6. 使用`yarn`或`npm`安装新依赖,`yarn add @yelon/socket@latest`,`yarn add @yelon/bcs@latest`安装`socket`和`bcs`模块.
- 7. 修改`environment`的`stomp`配置变更为`socket`

```ts
export const environment = {
  production: false,
  useHash: true,
  api: {
    ...
    socket: {
      connectHeaders: {
        login: 'xxx',
        passcode: 'xxx'
      },
      brokerURL: 'xxx',
      heartbeatIncoming: 1000 * 60,
      heartbeatOutgoing: 1000 * 60,
      reconnectDelay: 30000000
    }
  },
  modules: [YelonMockModule.forRoot({ data: MOCKDATA })]
} as Environment;
```

- 7.对应的,`global-config.module`注入`stomp`配置处也修改为`socket`

```ts
const yunzaiConfig: YunzaiConfig = {
  ...
  socket: { ...environment.api['socket'] },
  ...
};
```

- 8.将以下内容覆盖到`src/app/core/i18n/i18n.service.ts`中

```ts
// 请参考：https://ng.yunzainfo.com/docs/i18n
import { Platform } from '@angular/cdk/platform';
import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';
import { YUNZAI_LANGS } from '@yelon/bis/layout';
import { YelonLocaleService, SettingsService, _HttpClient, YunzaiI18nBaseService, YunzaiI18NType } from '@yelon/theme';
import { YunzaiConfigService } from '@yelon/util/config';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { Observable, Subject, of, takeUntil } from 'rxjs';

const DEFAULT = 'zh-CN';

@Injectable({ providedIn: 'root' })
export class I18NService extends YunzaiI18nBaseService {
  protected override _defaultLang = DEFAULT;
  private destroy$: Subject<any> = new Subject();

  constructor(
    private http: _HttpClient,
    private settings: SettingsService,
    private nzI18nService: NzI18nService,
    private yelonLocaleService: YelonLocaleService,
    private platform: Platform,
    cogSrv: YunzaiConfigService
  ) {
    super(cogSrv);

    const defaultLang = this.getDefaultLang();
    this.getLangs()
      .pipe(takeUntil(this.destroy$))
      .subscribe(langs => {
        this._defaultLang = langs.findIndex(w => w.code === defaultLang) === -1 ? DEFAULT : defaultLang;
      });
  }

  private getDefaultLang(): string {
    if (!this.platform.isBrowser) {
      return DEFAULT;
    }
    if (this.settings.layout.lang) {
      return this.settings.layout.lang;
    }
    let res = (navigator.languages ? navigator.languages[0] : null) || navigator.language;
    const arr = res.split('-');
    return arr.length <= 1 ? res : `${arr[0]}-${arr[1].toUpperCase()}`;
  }

  loadLangData(lang: string): Observable<NzSafeAny> {
    return this.http.get(`assets/tmp/i18n/${lang}.json`);
  }

  use(lang: string, data: Record<string, unknown>): void {
    if (this._currentLang === lang) return;

    this._data = this.flatData(data, []);

    const item = YUNZAI_LANGS[lang];
    registerLocaleData(item.ng);
    this.nzI18nService.setLocale(item.zorro);
    this.nzI18nService.setDateLocale(item.date);
    this.yelonLocaleService.setLocale(item.yelon);
    this._currentLang = lang;

    this._change$.next(lang);
  }

  getLangs(): Observable<YunzaiI18NType[]> {
    const langs = Object.keys(YUNZAI_LANGS).map(code => {
      const item = YUNZAI_LANGS[code];
      return { code, text: item.text, abbr: item.abbr, icon: undefined };
    });
    return of(langs);
  }
}
```
