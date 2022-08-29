---
order: 100
title: Change Log
type: Other
---

NG-YUNZAI strictly follows [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/).

#### Release Schedule

* Weekly release: patch version at the end of every week for routine bugfix (anytime for urgent bugfix).
* Monthly release: minor version at the end of every month for new features.
* Major version release is not included in this schedule for breaking change and new features.

---
## [13.5.2-beta.0](https://github.com/hbyunzai/yelon/compare/13.5.2...13.5.2-beta.0) (2022-08-11)


### Bug Fixes

* **bis:layout:** remove onpush ([e877658](https://github.com/hbyunzai/yelon/commit/e877658bd4105c6ef267e6add1781b02987e10cd))


### Features

* **readme:** add jetbrains.png ([944b0bc](https://github.com/hbyunzai/yelon/commit/944b0bc58f53fa9a5ea5a1a23d4f54895201453a))


## [13.5.2](https://github.com/hbyunzai/yelon/compare/13.5.1...13.5.2) (2022-07-13)


### Bug Fixes

* fix 'null' is not assignable to type 'NzFormControlStatusType' ([85e60b9](https://github.com/hbyunzai/yelon/commit/85e60b9d229a408c3a8ac9c628276f4809ac5682))

## [13.5.1](https://github.com/hbyunzai/yelon/compare/13.5.0...13.5.1) (2022-07-11)


### Bug Fixes

* **abc:qr:** fix can't center ([327977d](https://github.com/hbyunzai/yelon/commit/327977deeedee6b800937ce99064b737f0a0e6c7))
* **cli:** fix folder name case sensitive ([34eef32](https://github.com/hbyunzai/yelon/commit/34eef32cc59002d7b2733172c319772bf3858411))
* **form:model:** fix NzFormControlStatusType  type ([1fab037](https://github.com/hbyunzai/yelon/commit/1fab037e2ccd9f8380f32f51d0a474f2d1ed86dc))
* **form:modle:** lock ng-zorro-antd and revert ([7eee8f4](https://github.com/hbyunzai/yelon/commit/7eee8f4d929e5643d0e4db8b9bec6686f6c0bee3))
* **util:copy:** fix invalid `copy` in latest chrome ([2b9ca78](https://github.com/hbyunzai/yelon/commit/2b9ca78eb75b6a919aacb2fcafebbb61a5a93113))


### Performance Improvements

* 'rxjs/operators' export site has been deprecated ([cfb8959](https://github.com/hbyunzai/yelon/commit/cfb8959aaddce7e27158a9bcfd8bfd4cbcb7f95e))


# [13.5.0](https://github.com/hbyunzai/yelon/compare/13.4.2...13.5.0) (2022-05-20)


### Bug Fixes

* **abc:st:** fix safe null check of menus ([5f2b779](https://github.com/hbyunzai/yelon/commit/5f2b779e89fe7eb965b97945cd515ed714d9fef1))
* **form:** fix modify disabled & loading to cause refresh schema ([3454081](https://github.com/hbyunzai/yelon/commit/3454081b2dee8a6c5b5980d120823dab8e60b223))
* **util:cookie:** fix wrong set value of `remove` ([83949e1](https://github.com/hbyunzai/yelon/commit/83949e10e30cfc6b76286533fb87801ab3472da1))


### Features

* **abc:st:** add `maxMultipleButton` of column ([9b8b194](https://github.com/hbyunzai/yelon/commit/9b8b194ce6c95caf2c1136df367669c5643659b9))
* **form:** add `delay` property ([2e12033](https://github.com/hbyunzai/yelon/commit/2e12033797cb8837047efdbc1aceeb2d30f2a072))
* **form:** export `setErrors` method ([308030f](https://github.com/hbyunzai/yelon/commit/308030fd901540f337c6a9275f53b867b7949f32))
* **theme:http:** allow PATCH and DELETE to support request body ([3168121](https://github.com/hbyunzai/yelon/commit/3168121a16d94fc0d6d24fd0db33c22ed5d03e0c))



## [13.4.2](https://github.com/hbyunzai/yelon/compare/13.2.1...13.4.2) (2022-04-20)


### Bug Fixes

* **abc:tag-select:** fix style misagligment ([3963dfa](https://github.com/hbyunzai/yelon/commit/3963dfa16ef054e1d6f0d3838735f030468b1d60))
* **chart:card:** fix support html of `total` property ([fa2c3b7](https://github.com/hbyunzai/yelon/commit/fa2c3b7c437026eb41fd0ace9f22e97068111213))
* **cli:** fic can't use ng g ng-yunzai command ([5915c4a](https://github.com/hbyunzai/yelon/commit/5915c4a1c48dcdfa59fa08ff56bd4e8cd9fb7446))
* **cli:** fix deprecated --synatx of lint-staged ([3258d45](https://github.com/hbyunzai/yelon/commit/3258d45a3df919deb19b223b8d89998cb327f268))
* **sf:widget:radio:** fix SafeHtml ([591cb90](https://github.com/hbyunzai/yelon/commit/591cb902caf67428ba99a85c425bf76256c37073))
* **theme:layout-default:** fix RTL will misaligment in medium screen ([25b567a](https://github.com/hbyunzai/yelon/commit/25b567a30c9225c2c0681846a7ec7916bef7c762))
* **theme:** fix theme btn arg bug ([abe09d2](https://github.com/hbyunzai/yelon/commit/abe09d20b69500e1735380e0a50150def7d40de5))


### Features

* **abc:st:** add `addRow` method ([f8e522e](https://github.com/hbyunzai/yelon/commit/f8e522edcd8d205b49c387b7483e8ea1b094ed2b))
* **form:** add feed back ([032f6f0](https://github.com/hbyunzai/yelon/commit/032f6f024ccd33a453afbb68fb4404db9eab9041))
* **package:** add package-lock.json ([e391b9a](https://github.com/hbyunzai/yelon/commit/e391b9ae5d6b7dbc45e8cd4699008e1de8d988dc))
* **theme:i18n:** add `YunzaiI18NGuard` guard ([24fc707](https://github.com/hbyunzai/yelon/commit/24fc70719135acb45afdea1bd3e4a5f9ce8cda71))
* **theme:theme-btn:** add `themeChange` event ([24d384b](https://github.com/hbyunzai/yelon/commit/24d384baad3e28f4845a8305df770bcafb07243c))


## [13.2.1](https://github.com/hbyunzai/yelon/compare/13.2.0...13.2.1) (2022-03-16)


### Bug Fixes

* **abc:media:** fix cannot redefine property error ([2d2ad18](https://github.com/hbyunzai/yelon/commit/2d2ad18c47a5ac643fce9df0a16aeef6bc0eb170))
* **abc:pdf:** fix `container` must be absolutely positioned error ([4790217](https://github.com/hbyunzai/yelon/commit/479021727d3ef89d8b1696f8208621ba686f3aa3))
* **chart:pie:** fix ECAIHBC error in block ([0d7a248](https://github.com/hbyunzai/yelon/commit/0d7a248810040b7cbdaa158560b36eda4a41f976))
* **form:tree-select:** fix typo `checkfStrictly` ([3f6e45a](https://github.com/hbyunzai/yelon/commit/3f6e45a846cbdea09dfb1c221b3e2bf27d38c9d6))
* **form:** fix buttons misalignment in `inline` layout ([f6a1f2f](https://github.com/hbyunzai/yelon/commit/f6a1f2fb0bb6b6492ec318e6c7b006314ccde2df))



# [13.2.0](https://github.com/hbyunzai/yelon/compare/13.1.0...13.2.0) (2022-02-21)


### Bug Fixes

* **form:** fix schema polluted in array ([5a083fa](https://github.com/hbyunzai/yelon/commit/5a083fa2ce1917cc4444fa40d4d47aab956d1031))
* **schema:** fix generate code ([81fc52e](https://github.com/hbyunzai/yelon/commit/81fc52ea561256f4b54f6f80a5028319493ed030))


### Features

* **abc:qr:** support function of `value` ([3266104](https://github.com/hbyunzai/yelon/commit/3266104fe22939dce6505b60166d2958ee209a3b))
* **cache:** add property ([ba59935](https://github.com/hbyunzai/yelon/commit/ba5993521cd9c45350ca7f59e06792e5ec972cba))


# [13.1.0](https://github.com/hbyunzai/yelon/compare/13.0.0...13.1.0) (2022-02-08)


### Bug Fixes

* **abc:se:** fix invalid error style ([d80d4ca](https://github.com/hbyunzai/yelon/commit/d80d4ca11d0d5ae80f5c0f8d4f6f3bc6733bc979))
* **cli:module:** fix missing comma ([e146930](https://github.com/hbyunzai/yelon/commit/e146930a0f120261375b373e814d2fb327263f86))
* **cli:** fix lint:style script ([8971346](https://github.com/hbyunzai/yelon/commit/897134660824d8409878a1bec96bc3dbaeab956b))
* **mock:user:** fix import bug ([670e7b7](https://github.com/hbyunzai/yelon/commit/670e7b7fffd661ed61fd943d22f0cf280f8c6ac5))
* **package:** fix dependencies ([abb684b](https://github.com/hbyunzai/yelon/commit/abb684b8cfcf863a6415378248349e0fd82bdece))


### Features

* **chart:*:** add ready event ([0eef1c0](https://github.com/hbyunzai/yelon/commit/0eef1c0e0f885bf6e15a8d8302be9bde0cfa7161))
* **cli:** add generation of service file ([5be82ac](https://github.com/hbyunzai/yelon/commit/5be82ac5e7048722a8c171e89d381b41508683e5))


### Performance Improvements

* more friendly generic support ([adfc595](https://github.com/hbyunzai/yelon/commit/adfc59597541b060fe043478c4a75fac177675e6))
* remove deprecated ([fae2e49](https://github.com/hbyunzai/yelon/commit/fae2e49584241819449f48d2e636ecccdbcb2f9b))


# [13.0.0](https://github.com/hbyunzai/yelon/compare/12.0.19...13.0.0) (2022-01-10)


### Bug Fixes

* **all:** fix test command ([295ef5c](https://github.com/hbyunzai/yelon/commit/295ef5c22763c16bddb9e6570cd6cdd22ae29584))
* **util:** test error ([1279898](https://github.com/hbyunzai/yelon/commit/127989843f5873e07b2d1a2564570195fe6d6566))


### Features

* **cli:** add ng update of verion 13 ([0ed447b](https://github.com/hbyunzai/yelon/commit/0ed447bf8c35cdb721c64a1a56983070fefa3620))
* **cli:** please use yarn instead of NPM to install dependencies ([685f694](https://github.com/hbyunzai/yelon/commit/685f694ebd442af86b8417790f57c5a845c73ca9))


### Performance Improvements

* remove ie support ([1a7ca29](https://github.com/hbyunzai/yelon/commit/1a7ca29304cea95cc23f41d24c03237c7d68fecd))
* tree-shake warnings in production ([cc20998](https://github.com/hbyunzai/yelon/commit/cc20998eb48c88e2909aff317139f8af09b2e740))
* **util:copy:** use standard interface navigator.clipboard ([2f8db50](https://github.com/hbyunzai/yelon/commit/2f8db50f949b392fdfe2164342099a1a65cd68f3))




