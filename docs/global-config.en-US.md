---
order: 90
title:
  en-US: Global Configuration
  zh-CN: 全局配置项
type: Dev
---

We add support of **global configuration** to many components. You can define the default behavior of the component through global configuration, thus reducing the code that needs to be written in the template, and support changing global config at runtime.

## How to Use?

If you want to provide default configurations to some components, you should provide an object that implements the interface **YunzaiConfig** with the injection token **YUNZAI_CONFIG**, in the root module (in another word, to the root injector). Like this:

```typescript
// global-config.module.ts
import { YunzaiConfig, YUNZAI_CONFIG } from '@yelon/util/config';

const yunzaiConfig: YunzaiConfig = {
  st: { ps: 3 },
};

@NgModule({
  providers: [
    { provide: YUNZAI_CONFIG, useValue: yunzaiConfig },
  ],
})
export class GlobalConfigModule {}
```

These global configuration would be injected into a service named `YunzaiConfigService` and gets stored.

## About NG-ZORRO

Please refer to NG-ZORRO Website [Documentation](https://ng.ant.design/docs/global-config/en).
