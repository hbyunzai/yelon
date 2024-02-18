---
order: 2
title: Internationalization
type: Documents
---

Provide a uniform localization support for `@yelon/*` class library built-in text of components.

## Usage

### Providers

Provides the token of `YELON_LOCALE` for configuring antd locale text globally.

```ts
import { YELON_LOCALE, en_US } from '@yelon/theme';
@NgModule({
  ...
  providers   : [ { provide: YELON_LOCALE, useValue: en_US } ]
})
export class AppModule { }
```

### Service

Provides the service of `YelonLocaleService` to dynamic change the locale text.

```ts
import { en_US, YelonLocaleService } from '@yelon/theme';
...
constructor(private yelonLocaleService: YelonLocaleService) {
}

switchLanguage() {
  this.yelonLocaleService.setLocale(en_US);
}
```

Note: `en_US` is the package name, follow below.

## Supported languages

| Language | Filename |
|----------|----------|
| English | en_US |
| Chinese (Simplified) | zh_CN |
| Chinese (Traditional) | zh_TW |
| Turkish | tr_TR |
| Polish | pl_PL |
| Greek | el_GR |
| Korean | ko_KR |
| Croatian | hr_HR |
| Japanese | ja_JP |
| Slovenian | sl_SI |
| French | fr_FR |
| Spanish | es_ES |
| Italian | it_IT |
| Vietnamese | vi_VI |

## Add a new language

If you can't find your language, you are welcome to create a locale package based on [en_US](https://github.com/hbyunzai/yelon/tree/master/packages/theme/src/locale/languages/en-US.ts) (You can also refer to [#308](https://github.com/hbyunzai/yelon/pull/308) to contribute language package to us) and send us a pull request.
