## [12.0.17](https://github.com/hbyunzai/yelon/compare/12.0.16...12.0.17) (2021-11-28)


### Bug Fixes

* **abc:st:** fix can't render when data changed ([12bc7f6](https://github.com/hbyunzai/yelon/commit/12bc7f6cbe9f57796d91fb3f244c4c697e89b0b0))
* **bis:contact:** fix contact component exporter ([bec8d87](https://github.com/hbyunzai/yelon/commit/bec8d873ef5a6fa0a8849cc2875627347dc00746))


### Performance Improvements

* **cli:** update the  flag to the draft-07 standard ([6606a56](https://github.com/hbyunzai/yelon/commit/6606a560289feee9d7ca7c8d25178dc1ec04175b))



## [12.0.16](https://github.com/hbyunzai/yelon/compare/12.0.14...12.0.16) (2021-11-23)


### Bug Fixes

* **abc:exception:** fix observe content ([6aa284c](https://github.com/hbyunzai/yelon/commit/6aa284c9e8547477f56447189c3c3814ff5c78bd))
* **abc:sv:** fix vertical align of detail ([5b1050d](https://github.com/hbyunzai/yelon/commit/5b1050d70ce9bbd3531285b262f061144ffcf5c4))
* **bis:** fix i18n use default language ([8f992c5](https://github.com/hbyunzai/yelon/commit/8f992c56223aa12f648604a71b996aa56415bbef))
* **ci:** fix add swagger-typescript-api in util ([aaf5abd](https://github.com/hbyunzai/yelon/commit/aaf5abd4a2b604f3d426a6039bfeccec49587822))
* **startup:** fix injector and remove st module ([0812bb2](https://github.com/hbyunzai/yelon/commit/0812bb24a43acdf6e1489c238b1f15d31923a952))
* **yelon:** remove package-lock.json ([681cde7](https://github.com/hbyunzai/yelon/commit/681cde70264a8b9a1f360bf553f365761c100d09))


### Features

* **abc:st:** add filterChange type of change event ([3410e97](https://github.com/hbyunzai/yelon/commit/3410e97e65666893ea0dbd7f0d3e92fc1b21b545))
* **abc:st:** remove rowClickTime property ([b05f432](https://github.com/hbyunzai/yelon/commit/b05f432c8c78a883dfbc46d04987f34614c52a6d))
* **cli:** add ([db75243](https://github.com/hbyunzai/yelon/commit/db752431e1fa5d3ab60bcb8aa4be22dfa9374fe4))
* **cli:** add withoutModulePrefixInComponentName ([10fb99a](https://github.com/hbyunzai/yelon/commit/10fb99a3cd86822693f3a5449d11bd78c500a41c))
* **cli:** support specify routesRoot via ng-yunzai.json ([32ee360](https://github.com/hbyunzai/yelon/commit/32ee3604b79a1baef9498194076a12d061ce1879))


### Performance Improvements

* optimize error handling and navigate to the exception page ([bd052a8](https://github.com/hbyunzai/yelon/commit/bd052a896340f193aef77491cf6f119580aa9c6b))



## [12.0.14](https://github.com/hbyunzai/yelon/compare/12.0.13...12.0.14) (2021-11-15)


### Bug Fixes

* **chart:mini-area:** remove color in data ([#1379](https://github.com/hbyunzai/yelon/issues/1379))) ([954c707](https://github.com/hbyunzai/yelon/commit/954c707cde549d60e1a87ccf43f2a1d776993ba4))


### Features

* **bis:layout:** add act guard ([9c8e4aa](https://github.com/hbyunzai/yelon/commit/9c8e4aa21159220af825579c90847526b894fa38))
* **theme:i18n:** add flatData in i18n ([22053f4](https://github.com/hbyunzai/yelon/commit/22053f44a576ffd5bc5457ec24d63f31e623f140))
* **theme:layout:** add layout service ([08ffd9b](https://github.com/hbyunzai/yelon/commit/08ffd9bcb6c0008c523475f48819a74c956b5866))



## [12.0.13](https://github.com/hbyunzai/yelon/compare/12.0.12...12.0.13) (2021-11-08)


### Bug Fixes

* **abc:reuse-tab:** fix disabled refresh when non-active tab ([#1373](https://github.com/hbyunzai/yelon/issues/1373)) ([3189b6f](https://github.com/hbyunzai/yelon/commit/3189b6fbc0fd8f2b9388743a5b6427d3dae1ac74))
* **bis:layout:interceptor:** fix interceptor alert error message ([3db1e8a](https://github.com/hbyunzai/yelon/commit/3db1e8aca6f87760296231b9d8f2c73606d078b0))
* **layout:** fix package prefix name ([eff2c5f](https://github.com/hbyunzai/yelon/commit/eff2c5f05e79d2d1ed2a01b0932789adf2e5745f))
* **theme:layout-default:** fix can't render badge ([#1377](https://github.com/hbyunzai/yelon/issues/1377)) ([c8dec76](https://github.com/hbyunzai/yelon/commit/c8dec76e1f9a7087f71ff0b2eb3417dbf15eeb9d))
* **theme:layout-default:** fix can't render badge ([#1377](https://github.com/hbyunzai/yelon/issues/1377)) ([eb94d59](https://github.com/hbyunzai/yelon/commit/eb94d59f3ab2e1463ce148282ee67aa9f8da3e31))
* use `proxy.conf.js` instead of `proxy.conf.json` ([#1375](https://github.com/hbyunzai/yelon/issues/1375)) ([8a8ce82](https://github.com/hbyunzai/yelon/commit/8a8ce82e3d6f579398bad3aa08625afcb577cc8f))


### Features

* **form:widget:number:** add `change` event ([#1370](https://github.com/hbyunzai/yelon/issues/1370)) ([8d5e1cd](https://github.com/hbyunzai/yelon/commit/8d5e1cd4bbeb7ab32827e71575bddd844a623374))
* **theme:default:** add `customError` property ([#1376](https://github.com/hbyunzai/yelon/issues/1376)) ([c74874e](https://github.com/hbyunzai/yelon/commit/c74874ec5ded8851e77149c5572645c21e5df141))



## [12.0.12](https://github.com/hbyunzai/yelon/compare/12.0.11...12.0.12) (2021-11-01)


### Features

* **acl:** support function of guard ([#1365](https://github.com/hbyunzai/yelon/issues/1365)) ([9fb013d](https://github.com/hbyunzai/yelon/commit/9fb013de59e13ac9e024e9d53059791ab35a3b23))
* **bis:default:** add flag to control page jump ([871cf0c](https://github.com/hbyunzai/yelon/commit/871cf0ca788e76f4cc2e302d17ed5c99e8002158))
* **form:widget:text:** add html property ([97c6547](https://github.com/hbyunzai/yelon/commit/97c6547de9635094b6daa83406c2edc6f6d9609e))



## [12.0.11](https://github.com/hbyunzai/yelon/compare/12.0.10...12.0.11) (2021-10-25)


### Bug Fixes

* **abc:st:** fix `iif` of group columns ([664afbd](https://github.com/hbyunzai/yelon/commit/664afbdc8b62f7e37650c4a59e9ba35cfbd9d5eb))
* **sf:** remote `nz-wrap-widget.registry.ts` ([3108483](https://github.com/hbyunzai/yelon/commit/310848392cdd4ca0dd5f69d16e848339542f73e2))


### Features

* adding Italian locale ([c85c33d](https://github.com/hbyunzai/yelon/commit/c85c33de2a998806ce516adbc282d04bde0ecbc7))
* **theme:menu:** support `svg` type ([53d7a1e](https://github.com/hbyunzai/yelon/commit/53d7a1ed5b837940b932afad6e40e944c2b6ba8b))



## [12.0.10](https://github.com/hbyunzai/yelon/compare/12.0.9...12.0.10) (2021-10-03)


### Bug Fixes

* **form:** fix `ui` value cross pollute ([74ce482](https://github.com/hbyunzai/yelon/commit/74ce48281759f7c528736ab7f7b10e83da15f07b))
* **form:** remove `nzwrap-widget.registry.ts` ([417d192](https://github.com/hbyunzai/yelon/commit/417d192f05344e70f8d410056bc069ae2a893f21))


### Features

* **abc:xlsx:** add support csv file ([#1354](https://github.com/hbyunzai/yelon/issues/1354)) ([75129b8](https://github.com/hbyunzai/yelon/commit/75129b8d38b33e915a97e97ae331a92cfcc5e122))
* **chart:echarts:** add `on` property ([0a3d099](https://github.com/hbyunzai/yelon/commit/0a3d099ea075dec719d46404700036b54494bfe2))
* **form:** add nzwrap-widget.registry.ts ([eff625f](https://github.com/hbyunzai/yelon/commit/eff625fd8ae0029948e4fc8686dca6ab9401bafc))
* **util:format:** add token mode in format mask ([c393e68](https://github.com/hbyunzai/yelon/commit/c393e683e254b1864adc203fc8ad5e5a635f87ab))



## [12.0.9](https://github.com/hbyunzai/yelon/compare/12.0.8...12.0.9) (2021-09-18)


### Bug Fixes

* **bis:stomp:** fix stomp prefix ([4ea9caf](https://github.com/hbyunzai/yelon/commit/4ea9caf782a2e49ea3fc3166d82ff8a4a39d0241))
* **bis:** fic screen png ([cf0366d](https://github.com/hbyunzai/yelon/commit/cf0366d87feabf2c6f52b27573bd095c28f0d887))
* **bis:** fix auto config ([9a88856](https://github.com/hbyunzai/yelon/commit/9a8885606a77d60ac61833e8d2daac5ca3b47257))
* **bis:** fix bis icon ([e1214ab](https://github.com/hbyunzai/yelon/commit/e1214ab7c834c7b34f6dfd906ff7e29f1d51f909))
* **bis:** fix check function that was http or https ([674d65b](https://github.com/hbyunzai/yelon/commit/674d65beff48e116102740ada186eba2374034bd))
* **bis:** fix i18n and doc ([18d5ede](https://github.com/hbyunzai/yelon/commit/18d5ede5ee3ee51a399f5a7f5cb491af0574a305))
* **bis:** fix stomp in the dev mode ([38e950f](https://github.com/hbyunzai/yelon/commit/38e950f837b8036b6cd5b0090ef4e145942206e7))
* **header:** fix version list ([090e3e7](https://github.com/hbyunzai/yelon/commit/090e3e7eed98ff4ccfbb1f2783a0da99d7d21f5b))
* **i18n:** fix application i18n ([7401046](https://github.com/hbyunzai/yelon/commit/7401046b02896c4b63bda2f528783d891fda58d0))
* **theme:** add china theme ([cc53fa8](https://github.com/hbyunzai/yelon/commit/cc53fa83f4427c4480cc4468689d74ee380145a6))
* **theme:** change theme menu to dropdown list ([e153bbe](https://github.com/hbyunzai/yelon/commit/e153bbeef82c0dd34e4a56470b257cbf9fb3a152))
* **theme:** fix dark theme ([974897f](https://github.com/hbyunzai/yelon/commit/974897f58bf97d39956a737fa50e8fa9eaad0d0a))
* **theme:** fix dark theme ([a819694](https://github.com/hbyunzai/yelon/commit/a819694db9dd4d8dd6530d0a30e999c596f50bc9))
* **theme:** fix dark theme ([74f98f7](https://github.com/hbyunzai/yelon/commit/74f98f7801bdbe08cadefef20c87fb3ff5028618))
* **theme:** fix theme color ([9358e42](https://github.com/hbyunzai/yelon/commit/9358e4283ffa95063002fffcbeaf1afeec7ffb0e))
* **theme:** fix theme i18n key ([c643718](https://github.com/hbyunzai/yelon/commit/c643718d1751e0b1f6b697e714656ce19a506f12))
* **theme:** remove some props ([95e1dbe](https://github.com/hbyunzai/yelon/commit/95e1dbea157ddee3f3cfbafd34df2f1df5de1c86))


### Features

* **bis:stomp:** add publish and watch interface ([e481207](https://github.com/hbyunzai/yelon/commit/e4812072976f0dc51ef842dd6d0a2d6f79e8d67b))
* **bis:** add stomp plugin ([3ce3895](https://github.com/hbyunzai/yelon/commit/3ce3895f8bc85b8581651f67350ac2799b379d8e))
* **schematic:** add stomp plugin ([58bee1a](https://github.com/hbyunzai/yelon/commit/58bee1ae5b48593153838d53cf9715dfbb273e99))
* **theme:** add more theme ([ab5317c](https://github.com/hbyunzai/yelon/commit/ab5317c60cdb1115b679a4cc9cf9cd615d58054c))



## [12.0.8](https://github.com/hbyunzai/yelon/compare/12.0.7...12.0.8) (2021-09-14)


### Bug Fixes

* **bis:** fix i18n service ([e975603](https://github.com/hbyunzai/yelon/commit/e975603aa2c4bc7dfccd3c805331b9a38fbb789b))
* **doc:** fix menu and routes tab ([22e6d58](https://github.com/hbyunzai/yelon/commit/22e6d58571c4f217e558829abc2182925403abe7))
* **schematics:** add imgs into shell ([39e9056](https://github.com/hbyunzai/yelon/commit/39e90561ea63e453e1ac9bbfb3f70757721cf9e3))



## [12.0.7](https://github.com/hbyunzai/yelon/compare/12.0.6...12.0.7) (2021-09-13)


### Bug Fixes

* **abc:reuse-tab:** fix adding new tab should be after the current ([e4fd2de](https://github.com/hbyunzai/yelon/commit/e4fd2de36e9fea01c04c26deb602aa773962c38e))
* **abc:st:** fix `#NULL!` value when empty value and `type` is `date` ([ab31036](https://github.com/hbyunzai/yelon/commit/ab31036b177eda8f4255a8a07820cbdef4b4f9e4))
* **abc:st:** fix between sorts space of resizable handle ([f020f0d](https://github.com/hbyunzai/yelon/commit/f020f0d3ed49dfd26e2c5b5361b9ee456ef46684))
* **auth:** fix ensure `change` event and `get()` have consistent results ([5f52d97](https://github.com/hbyunzai/yelon/commit/5f52d97332d0777bd9f8574ce02abd1a6a8a012d))
* **bis:auth:** fix yunzai auth logout and 401 error ([86b440a](https://github.com/hbyunzai/yelon/commit/86b440a2af3b89018bc0f92efe42b8c7dc2b9710))
* **bis:** fix bis theme less imported ([a3e07fd](https://github.com/hbyunzai/yelon/commit/a3e07fd1bb5541817c44ac562b175de30f9c1ec7))
* **cli:tpl:** fix incorrect arguments index of schema.json ([d4efdfb](https://github.com/hbyunzai/yelon/commit/d4efdfbe340602593ae16b80cf6920724c2c2355))
* **cli:tpl:** fix lose `tplName` property of `schema.json` ([6dd4ad6](https://github.com/hbyunzai/yelon/commit/6dd4ad6d7a454b3c040b9925541d1d33312a92c5))
* **doc:** fix version list ([bfb8b43](https://github.com/hbyunzai/yelon/commit/bfb8b43ba502b6f84ebc2809844ba0513309ac5d))
* **form:** add `widget` index sign ([2243985](https://github.com/hbyunzai/yelon/commit/22439855f20d509054f49a253de239bbd095e135))
* **search:** fix algolia ([692b8e4](https://github.com/hbyunzai/yelon/commit/692b8e43907c8ed9a13681c4164d0b840ab90933))
* **util:format:** fix invalid mobile number starting with 198 ([216922f](https://github.com/hbyunzai/yelon/commit/216922f99c999c6a88f5df10b5d17f82de584aeb))



## [12.0.6](https://github.com/hbyunzai/yelon/compare/12.0.5...12.0.6) (2021-09-08)


### Bug Fixes

* **all:** fix version scripts ([5a003eb](https://github.com/hbyunzai/yelon/commit/5a003eb2c8a92f895cae618ec1d4b95d23e6c504))
* **schematics:** fix @yelon/bis package version ([1ce3108](https://github.com/hbyunzai/yelon/commit/1ce3108ad44345bffb3c25102e53113a950a7845))


### Features

* **all:** up ng-yunzai-plugin-theme version ([3d832be](https://github.com/hbyunzai/yelon/commit/3d832bef6689a0c9f640099f2f77ffd0719dba1d))
* **bis:** add business module and add some theme less ([cc6383e](https://github.com/hbyunzai/yelon/commit/cc6383e381d9fd682218e7ecd935c307c77cb6b5))
* **i18n:** add app.header.menu.bis ([dc972b3](https://github.com/hbyunzai/yelon/commit/dc972b3f8349be97c67bc4960ca0addfce943032))



## [12.0.5](https://github.com/hbyunzai/yelon/compare/12.0.4...12.0.5) (2021-09-03)


### Bug Fixes

* **package:bis:** fix interceptor export ([10103bc](https://github.com/hbyunzai/yelon/commit/10103bc8912cec115b4a1eabbcefe8cbda162f17))
* **package:bis:** fix module,remove that unused ([d3e2939](https://github.com/hbyunzai/yelon/commit/d3e2939d4f807a341905437a04eeada901bd887c))
* **package:bis:** fix package name ([93d17a4](https://github.com/hbyunzai/yelon/commit/93d17a439ffb2448901852c356dda0d560c4cf52))
* **package:bis:** fix theme button key ([4ec60e6](https://github.com/hbyunzai/yelon/commit/4ec60e69cd2ef7b756e2ae20132946b61fc4e860))
* **package:** fix version list ([26709f6](https://github.com/hbyunzai/yelon/commit/26709f61c1d0826d3693bccd0f151918e2127f37))
* **theme:** fix icon ([238804a](https://github.com/hbyunzai/yelon/commit/238804a5cd4612b64caf80941c94dbbb8a381243))
* **theme:** fix test ([236e303](https://github.com/hbyunzai/yelon/commit/236e3032eeacaee5602fdc6a72990fb207e9b8ad))


### Features

* **bit:** add bit module package ([932a30b](https://github.com/hbyunzai/yelon/commit/932a30bcb4bd3c0b4fb276693b8399f7df4c412e))



## [12.0.4](https://github.com/hbyunzai/yelon/compare/12.0.3...12.0.4) (2021-08-23)


### Bug Fixes

* **all:** daily update ([91b8b04](https://github.com/hbyunzai/yelon/commit/91b8b046cb399f5348941f933c931a68d1944a18))
* **schematics:** fix links ([aadc508](https://github.com/hbyunzai/yelon/commit/aadc508cc353e29540d8e3e550983987ce83c906))



## [12.0.3](https://github.com/hbyunzai/yelon/compare/12.0.2...12.0.3) (2021-08-19)


### Bug Fixes

* **abc:st:** fix render `undefined` when `safeType` is `text` ([ab8edc1](https://github.com/hbyunzai/yelon/commit/ab8edc1a95e9df03964afb6a065cbd8a7ff77b7e))
* **form,util:other:deep:** deepMergeKey ([2e896df](https://github.com/hbyunzai/yelon/commit/2e896dfe4b8a0f9e7a4590a934bdc6422cd16156))
* **form:widget:select:** fix invalid `orgData` of `change` event ([a446f7b](https://github.com/hbyunzai/yelon/commit/a446f7bcad5a908c63c512db159141c781f0c06e))
* **util:convert:** fix invalid `defaultValue` parament in `InputBoolean` ([b58c100](https://github.com/hbyunzai/yelon/commit/b58c10013d6bd10c8927d4383584c3a4f19508aa))
* **util:other:deep:** fix can't merge function in `deepMergeKey` ([236b0ef](https://github.com/hbyunzai/yelon/commit/236b0ef89b1ffade8120f7d679a6f60b8e193aa3))
* **util:other:deep:** fix can't merge function in `deepMergeKey` ([d0710f0](https://github.com/hbyunzai/yelon/commit/d0710f04378e70bf66b99ba417657c2baae0a4b9))


### Features

* **abc:se,sv:** add `noColon` property ([3011297](https://github.com/hbyunzai/yelon/commit/3011297c83765b4672cf6a9ccb452e88fcf51d2e))
* **theme:i18n:** add `interpolation` in global config ([33cdd5d](https://github.com/hbyunzai/yelon/commit/33cdd5d0b5be1980ab883de80332382e22d196b0))
* **theme:** add `[@nz-table-even-background](https://github.com/nz-table-even-background)` ([f4b85a6](https://github.com/hbyunzai/yelon/commit/f4b85a6cd097c41d9de7af6c2cb7b79052d17621))



## [12.0.2](https://github.com/hbyunzai/yelon/compare/12.0.1...12.0.2) (2021-08-13)


### Bug Fixes

* **auth:** fix invalid write token value in cookie type ([1b694d9](https://github.com/hbyunzai/yelon/commit/1b694d97032f28939b535ce0c0af1f29d7dfcef5))
* **ci:** add issuess page ([47fcf89](https://github.com/hbyunzai/yelon/commit/47fcf89ea5dad6897b8d80a8a9866132c580778e))
* **ci:** checkout current branch ([17682ac](https://github.com/hbyunzai/yelon/commit/17682acc260a50fc274ba1086249419b740ce6e9))
* **ci:** fix action trigger on publish ([fd776dd](https://github.com/hbyunzai/yelon/commit/fd776dd232603fa1098e470f01c666fc83d8f352))
* **ci:** incldue all branch ([b60bf02](https://github.com/hbyunzai/yelon/commit/b60bf02e299f37d21eb2938eb251429c9ca9fd12))
* **ci:** remove Sponsor ([84d17b4](https://github.com/hbyunzai/yelon/commit/84d17b48619c71ac9bb454c9b47b84f4a4b616e1))
* **core:** fix googletagmanager ([c104833](https://github.com/hbyunzai/yelon/commit/c104833da5c27778a37fffbab9355a76fa11cc4c))
* **doc:** add favicon ([ba72ea1](https://github.com/hbyunzai/yelon/commit/ba72ea16c9e928a3fa036258f56f5fcb1d680612))
* **doc:** add hljs ([4fed733](https://github.com/hbyunzai/yelon/commit/4fed73324c72658375dfc56457ae0f03c4f14963))
* **doc:** add thanks list ([3a51ea8](https://github.com/hbyunzai/yelon/commit/3a51ea8cc6206b640118e9c7584f86d4ce718924))
* **doc:** fix doc search apikey ([2624d56](https://github.com/hbyunzai/yelon/commit/2624d56f47ae08e788a4095bd7bf752bfd0500a9))
* **doc:** fix doc theme bug ([c05abaf](https://github.com/hbyunzai/yelon/commit/c05abafce24fce934c688519ea4d2514f7497255))
* **doc:** fix docker header and add CNAME ([8794969](https://github.com/hbyunzai/yelon/commit/87949699763a23d6c9d3c5589fbf6a6f7280426f))
* **doc:** fix double publish to gitee ([4aca3a2](https://github.com/hbyunzai/yelon/commit/4aca3a20ff7bc5c95823073c5cdb7694f27303cd))
* **doc:** fix html and some links ([7b227d9](https://github.com/hbyunzai/yelon/commit/7b227d9fa1f6fe1ccc2e6e550b624afd1b419b37))
* **form:** fix invlid type in `button` ([3c2d857](https://github.com/hbyunzai/yelon/commit/3c2d85787d235a7c8aa3e800b7803f4410c97c5a))


### Features

* **ci:** add coverage and CNAME ([be65a46](https://github.com/hbyunzai/yelon/commit/be65a46e7f6b848ea454071e7b00603a7505acd0))



## [12.0.1](https://github.com/hbyunzai/yelon/compare/12.0.0...12.0.1) (2021-08-12)


### Bug Fixes

* **docs:** fix docs link ([aaf17e2](https://github.com/hbyunzai/yelon/commit/aaf17e23b9cb2921b18e9277504ae83f31ab0e11))


### Features

* **ci:github:action:** add gitee action ([3c9a15c](https://github.com/hbyunzai/yelon/commit/3c9a15c0ee63fd45bf3ef4be212d083dfc69382b))
* **ci:github:action:** add github action ([7c8d473](https://github.com/hbyunzai/yelon/commit/7c8d473cecbf56d75014461193762543e66ebd25))



# 12.0.0 (2021-08-11)


### Bug Fixes

* **scripts:ci:util:** change utils.sh to util.sh ([98d3e83](https://github.com/hbyunzai/yelon/commit/98d3e83ed0b520e5405b23052ce633dbe71d675d))
* **scripts:ci:** fix format ([c2fd124](https://github.com/hbyunzai/yelon/commit/c2fd1242c0e4e447fcc4fc01d3456bab193000f0))


### Features

* **all:** first commit ([252eb53](https://github.com/hbyunzai/yelon/commit/252eb53a85fab4941770762994cf1993d0953e30))



