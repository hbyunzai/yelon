---
order: 2 
title: 云在配置 
type: Documents
---

## 如何配置

通常我们为了区分`本地`和`生产`模式，会将所有配置放入`environment.ts`和`environment.prod.ts`,这样打包时通过`--prod`参数决定使用哪套配置文件

### 本地开发 - environment.ts

```ts
import {YelonMockModule} from '@yelon/mock';
import {Environment} from '@yelon/theme';

import * as MOCKDATA from '../../_mock';

const form: FormData = new FormData();

form.set('username', '');
form.set('password', '');
form.set('grant_type', '');
form.set('client_id', '');
form.set('scope', '');
form.set('client_secret', '');

export const environment = {
  production: false,
  useHash: true,
  api: {
    loginForm: form,
    baseUrl: '/backstage',
    refreshTokenEnabled: true,
    refreshTokenType: 're-request'
  },
  modules: [YelonMockModule.forRoot({data: MOCKDATA})]
} as Environment;
```

本地开发时通常需要配置代理文件`proxy.conf.json`至服务端地址

```json
{
  "/backstage": {
    "target": "",
    "secure": true,
    "logLevel": "debug",
    "changeOrigin": true
  }
}
```

### 生产环境 - environment.prod.ts

```ts
import {Environment} from '@yelon/theme';

export const environment = {
  production: true,
  useHash: true,
  api: {
    baseUrl: '/backstage',
    refreshTokenEnabled: true,
    refreshTokenType: 're-request'
  }
} as Environment;

```

### 导入到global-config.module模块中

```ts
const yunzaiConfig: YunzaiConfig = {
  //  将env配置好的结构到这里
  bis: { ...environment.api },
  st: { modal: { size: 'lg' } },
  pageHeader: { homeI18n: 'home' },
  lodop: {
    license: `A59B099A586B3851E0F0D7FDBF37B603`,
    licenseA: `C94CEE276DB2187AE6B65D56B3FC2848`
  },
  auth: { login_url: '/passport/login' }
};
```

## 接口类型

```ts
export interface YunzaiBusinessConfig {
  baseUrl?: string;
  systemCode?: string;
  loginForm?: FormData | null;
  refreshTokenEnabled?: boolean;
  refreshTokenType?: 're-request' | 'auth-refresh';
}
```

## 在代码中使用

注入`YunzaiBusinessConfig`，使用bis包下的`mergeConfig`将配置合并

```ts
import { mergeConfig as mergeBisConfig } from '@yelon/bis/shared';

@Injectable({providedIn: 'root'})
export class YzAuthService {
  protected bis: YunzaiBusinessConfig;

  private get csr(): YunzaiConfigService {
    return this.injector.get(YunzaiConfigService);
  }
  constructor(private injector: Injector) {
    this.bis = mergeBisConfig(this.csr);
    console.log(this.bis.baseUrl);
  }
}
```

或者直接使用`YunzaiConfigService`获取

```ts
@Injectable({providedIn: 'root'})
export class YzAuthService {

  private get csr(): YunzaiConfigService {
    return this.injector.get(YunzaiConfigService);
  }
  
  constructor(private injector: Injector) {
      console.log(this.csr.get('bis'));
  }
}
```

## API列表

| 参数名 | 类型 | 描述 | 默认值 |
|-----|----|----| ---- |
| `[baseUrl]` | `string` | 网关地址 | `/backstage` |
| `[systemCode]` | `string` | 系统代码 | `protal` |
| `[loginForm]` | `FormData` | 本地开发用户认证表单 | `null` | 
| `[refreshTokenEnabled]` | `boolean` | 是否开启token刷新 | `true` |
| `[refreshTokenType]` | `string` | token刷新模式 | `re-request` |

关于`refreshTokenType`，如果使用`云在认证`模式，那么`refreshTokenType`必须为`re-request


## 第三方接入

假如您作为第三方想要加入到云在生态开发中，可以浏览我们的[官方网站](https://yunzainfo.com/homePage) ,联系商务人员，获得您的`client_id`,`client_secret`参数，以及认证授权

