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



