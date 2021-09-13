---
order: 2
title: Yunzai Configuration
type: Documents
---

---
order: 2
title: Cloud is configuring
type: Documents
---

## How to configure

Usually, in order to distinguish between `local` and `production` modes, we put all the configuration into `environment.ts` and `environment.prod.ts`, so that when packaging, use the `--prod` parameter to decide which set of configuration files to use

### Local development-environment.ts

```ts
import {YelonMockModule} from'@yelon/mock';
import {Environment} from'@yelon/theme';

import * as MOCKDATA from'../../_mock';

const form: FormData = new FormData();

form.set('username','');
form.set('password','');
form.set('grant_type','');
form.set('client_id','');
form.set('scope','');
form.set('client_secret','');

export const environment = {
  production: false,
  useHash: true,
  api: {
    loginForm: form,
    baseUrl:'/backstage',
    refreshTokenEnabled: true,
    refreshTokenType:'re-request'
  },
  modules: [YelonMockModule.forRoot({data: MOCKDATA})]
} as Environment;
```

In local development, it is usually necessary to configure the proxy file `proxy.conf.json` to the server address

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

### Production environment-environment.prod.ts

```ts
import {Environment} from'@yelon/theme';

export const environment = {
  production: true,
  useHash: true,
  api: {
    baseUrl:'/backstage',
    refreshTokenEnabled: true,
    refreshTokenType:'re-request'
  }
} as Environment;

```

### Import into the global-config.module module

```ts
const yunzaiConfig: YunzaiConfig = {
  // Configure the structure of env here
  bis: {...environment.api },
  st: {modal: {size:'lg'} },
  pageHeader: {homeI18n:'home' },
  lodop: {
    license: `A59B099A586B3851E0F0D7FDBF37B603`,
    licenseA: `C94CEE276DB2187AE6B65D56B3FC2848`
  },
  auth: {login_url:'/passport/login'}
};
```

## Interface Type

```ts
export interface YunzaiBusinessConfig {
  baseUrl?: string;
  systemCode?: string;
  loginForm?: FormData | null;
  refreshTokenEnabled?: boolean;
  refreshTokenType?:'re-request' |'auth-refresh';
}
```

## Use in code

Inject `YunzaiBusinessConfig`, use `mergeConfig` under the bis package to merge the configuration

```ts
import {mergeConfig as mergeBisConfig} from'@yelon/bis/shared';

@Injectable({providedIn:'root'})
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

Or directly use `YunzaiConfigService` to obtain

```ts
@Injectable({providedIn:'root'})
export class YzAuthService {

  private get csr(): YunzaiConfigService {
    return this.injector.get(YunzaiConfigService);
  }
  
  constructor(private injector: Injector) {
      console.log(this.csr.get('bis'));
  }
}
```

## API list

| Parameter name | Type | Description | Default value |
|-----|----|----| ---- |
| `[baseUrl]` | `string` | Gateway address | `/backstage` |
| `[systemCode]` | `string` | System code | `protal` |
| `[loginForm]` | `FormData` | Local development user authentication form | `null` |
| `[refreshTokenEnabled]` | `boolean` | Whether to enable token refresh | `true` |
| `[refreshTokenType]` | `string` | token refresh mode | `re-request` |

Regarding the `refreshTokenType`, if the `yunzai authentication` mode is used, then the `refreshTokenType` must be `re-request


## Third-party access

If you, as a third party, want to join the yunzai in the ecological development, you can browse our [official website](https://yunzainfo.com/homePage), contact a business person, and get your `client_id`,`client_secret` parameters , And authentication and authorization
