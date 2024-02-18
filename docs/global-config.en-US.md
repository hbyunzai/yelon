---
order: 90
title:
  en-US: Global Configuration
  zh-CN: 全局配置项
type: Dev
---

We add support of **global configuration** to many components. You can define the default behavior of the component through global configuration, thus reducing the code that needs to be written in the template, and support changing global config at runtime.

## How to Use?

If you want to provide default configurations to some components, please use `provideYunzai` function. object providing implements interface `YunzaiProvideOptions` For example:

```typescript
// global-config.module.ts
import { YunzaiConfig, YunzaiProvideLang } from '@yelon/util/config';
import { ICONS } from '../style-icons';
import { ICONS_AUTO } from '../style-icons-auto';

const defaultLang: YunzaiProvideLang = {
  abbr: 'zh-CN',
  ng: ngLang,
  zorro: zorroLang,
  date: dateLang,
  yelon: yelonLang
};

const yunzaiConfig: YunzaiConfig = {
  st: { ps: 3 },
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideYunzai({ config: yunzaiConfig, defaultLang, icons: [...ICONS_AUTO, ...ICONS] })
  ]
};
```

These global configuration would be injected into a service named `YunzaiConfigService` and gets stored.

## About NG-ZORRO

Please refer to NG-ZORRO Website [Documentation](https://ng.ant.design/docs/global-config/en).
