---
order: 1000
type: Basic
title: Upgrade to version 15.0
hot: true
---

> This guide applies to the current version ng-yunzai >= `14`;
> If you encounter problems during the upgrade process, feel free to comment here.
> If you find any errors in this guide, please point out
> Or you have encountered a new problem and solved it, welcome to comment here.

## Before upgrade

1. Make sure `Node.js` >= `16.10.0`.
2. Create a new branch, or use other methods to back up the current project.
3. Delete the `package-lock.json` or `yarn.lock` file.

### 1.Upgrade dependencies

- Upgrade Angular to 14.x version, Run `ng update @angular/core@15 @angular/cli@15 @angular-eslint/schematics@15 ng-zorro-antd@15 ng-yunzai@15`.
- _Run `ng update @angular/cdk@15`, if you have used `@angular/cdk`._
- **If any warning messages appear in the console, follow the prompts to modify the corresponding code.**

### QA

The following are optional upgrades:

**Remove `.browserslistrc`**

If you need to maintain the support of the old Chrome version, such as 360 browser, you need to restore it manually. For details, refer to [#2310](https://github.com/hbyunzai/ng-yunzai/issues/2310#issuecomment-1299460266).

**Remove `polyfills.ts`, `test.ts`**
 
Angular15 on a mission to simplify the output of `ng new`, transfer more configuration items to `angular.json`, the advantage is that it can be better configured for different environments, you can refer to [#2351](https://github.com/hbyunzai/ng-yunzai/pull/2351).

# 15.1.1 How to upgrade the business system

## Modified question

- 1. Following the regular update of `ng-alain`, the version is upgraded from `angular14 to angular15`
- 2. `auth` module `token` refresh problem
- 3. Custom module naming is not standardized

## new features

- 1. Add `@yelon/bcs` module and project [documentation](http://ng.yunzainfo.com/bcs/yunzai-contact/zh), which will be used for public components in the future
- 2. Add `Dynamic I18n function`, all `i18n` `key` and `value` can be dynamically configured on the unified portal platform.

## Destructive upgrade

- 1. The name of `stomp` is changed to `socket` and the module is removed separately. So it needs to be installed.
- 2. Add `@yelon/bcs` module, so it needs to be installed.
- 3. All generic types of `i18n` are dynamically changed to `Observable<YunzaiI18nType>`, so it is necessary to update the places related to I18n generic types.

## How to upgrade

- 1. Uninstall the global cli: `npm uninstall -g @angular/cli`
- 2. Install global cli: `npm install -g @angular/cli@15.2.0`
- 3. Delete `node_modules`, `yarn.lock`, `package-lock.json` under the project, if not in the project, there is no need to delete them.
- 4. Execute `npx @yelon/version-alignment` in the same directory as package.json, pull `package.json` from the remote and compare it with the local file, and then automatically flash it to the local file.
- 5. Execute `npm install` or `yarn install` to install dependencies.
- 6. Use `yarn` or `npm` to install new dependencies, `yarn add @yelon/socket@latest`, `yarn add @yelon/bcs@latest` to install `socket` and `bcs` modules.
- 7. Modify `stomp` configuration of `environment` to `socket`


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

- 7. Correspondingly, `global-config.module` is injected into `stomp` and the configuration is also changed to `socket`

```ts
const yunzaiConfig: YunzaiConfig = {
  ...
  socket: { ...environment.api['socket'] },
  ...
};
```

- 8. Overwrite the following content into `src/app/core/i18n/i18n.service.ts`

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
