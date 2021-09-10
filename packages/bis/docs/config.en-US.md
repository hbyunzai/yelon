---
order: 2
title: Yunzai Configuration
type: Documents
---

## Interface

```ts
export interface YunzaiBusinessConfig {
  baseUrl?: string;
  systemCode?: string;
  loginForm?: FormData | null;
  refreshTokenEnabled?: boolean;
  refreshTokenType?:'re-request' |'auth-refresh';
}
```

## API

| Parameter name | Type | Description | Default value |
|-----|----|----| ---- |
| `[baseUrl]` | `string` | Gateway address | `/backstage` |
| `[systemCode]` | `string` | System code | `protal` |
| `[loginForm]` | `FormData` | Local development user authentication form | `null` |
| `[refreshTokenEnabled]` | `boolean` | Whether to enable token refresh | `true`
| `[refreshTokenType]` | `string` | token refresh mode | `re-request`

Regarding the `refreshTokenType`, if the `yunzai authentication` mode is used, then the `refreshTokenType` must be `re-request`

## Configuration method

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
  modules: [YelonMockModule.forRoot({ data: MOCKDATA })]
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

## Third-party access

If you, as a third party, want to join the Yunzai in the ecological development, you can browse our [official website](https://yunzainfo.com/homePage), contact a business person, and get your `client_id`,`client_secret` parameters , And authentication and authorization
