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
# [16.3.0](https://github.com/hbyunzai/yelon/compare/16.2.5...16.3.0) (2023-09-28)


### Bug Fixes

* **abc:pdf:** fix ignore dependency `pdfjs-dist` ([b804bb1](https://github.com/hbyunzai/yelon/commit/b804bb17a6176e7ad168aaa412cada8b6be52abc))
* **form:select:** fix ignore reset option data when set `onSearch` ([68d194e](https://github.com/hbyunzai/yelon/commit/68d194ec81a587a32af7b246d31947834e6b141b))
* **scripts:** fix version script ([d0e6b69](https://github.com/hbyunzai/yelon/commit/d0e6b69e25ccc8ebe0b3c883d9ffd3bb288bfac8))
* **theme:http:** fix missing `content` of `HttpOptions` ([e0592bd](https://github.com/hbyunzai/yelon/commit/e0592bdad298e5fb1d5230e600875d15fc157ffe))


### Features

* **abc:cell:** add `cell` component ([#1530](https://github.com/hbyunzai/yelon/issues/1530)) ([e3da675](https://github.com/hbyunzai/yelon/commit/e3da675917abb5ba50b70b8b778d31d770a4df04))
* **abc:page-header:** add `titleSub` property ([8fec9d7](https://github.com/hbyunzai/yelon/commit/8fec9d7a890a01f5fbd822c12f279beec297b1c2))
* **abc:st:** add `tooltip` in tag or badge ([92a7032](https://github.com/hbyunzai/yelon/commit/92a70320745dc003794a94ca2d765d318ac8ab73))
* **abc:sv:** add `bordered` property ([360083c](https://github.com/hbyunzai/yelon/commit/360083c9faf04052e18a74d3f1da7f4adb9dbece))
* **cli:** add `bindToComponentInputs` of `ng add` ([5cf8c87](https://github.com/hbyunzai/yelon/commit/5cf8c870c1a40d9b5c65b62f9c0e4a4b3abee01d))
* **theme:drawer:** add `closeAll`, `openDrawers` method ([937cf39](https://github.com/hbyunzai/yelon/commit/937cf3914f79cdd0dd56e828bd4e3608b40b6f67))
* **theme:modal:** add size support percentage ([514e6c2](https://github.com/hbyunzai/yelon/commit/514e6c24e8215ec1edf244bdead2492bab81668a))


## [16.2.5](https://github.com/hbyunzai/yelon/compare/16.2.4...16.2.5) (2023-08-28)


### Bug Fixes

* **i18n:** remove i18n data from cache ([56fc04d](https://github.com/hbyunzai/yelon/commit/56fc04d8fbb18a025b802eeb2345af0287b5c8c0))


## [16.2.4](https://github.com/hbyunzai/yelon/compare/16.2.3...16.2.4) (2023-08-25)


### Bug Fixes

* **bcs:** contact not emit ([be30cbe](https://github.com/hbyunzai/yelon/commit/be30cbee96e079d93762592c09e8a3709a0f5a1c))
* **i18n:** nullObject is {} ([2202e26](https://github.com/hbyunzai/yelon/commit/2202e266a994d59ad4ccdc37c8b3971428e58a98))
* **i18n:** nullObject is {} ([e1c54e2](https://github.com/hbyunzai/yelon/commit/e1c54e25061aae3de72205d6ae0342a3763b1a79))


## [16.2.3](https://github.com/hbyunzai/yelon/compare/16.2.2...16.2.3) (2023-08-24)


### Bug Fixes

* **bis:** fix destroy ([9e7dabc](https://github.com/hbyunzai/yelon/commit/9e7dabc88d1d719008d8b3261a0a8cd24ff7cc7b))
* **bis:** fix error import ([ccdc0f5](https://github.com/hbyunzai/yelon/commit/ccdc0f5ea323f07adb15b0f6872be4021b3bd1a2))


## [16.2.2](https://github.com/hbyunzai/yelon/compare/16.2.1...16.2.2) (2023-08-24)

blank version

## [16.2.1](https://github.com/hbyunzai/yelon/compare/16.2.0...16.2.1) (2023-08-24)


### Bug Fixes

* **all:** fix destroy subject ([dda3f3d](https://github.com/hbyunzai/yelon/commit/dda3f3d86e5c2c1eefff0b302e0ca07e0052a0dc))
* **layout:** unuse bug ([4eb15f2](https://github.com/hbyunzai/yelon/commit/4eb15f2b4cccddaac579e6a54feae506c2e39086))


# [16.2.0](https://github.com/hbyunzai/yelon/compare/16.0.5...16.2.0) (2023-08-24)


### Bug Fixes

* **abc:onboarding:** fix `ComponentFactoryResolver` ([76e3b09](https://github.com/hbyunzai/yelon/commit/76e3b09f4ba5a41ea598eae9401dbb07095f490d))
* **abc:reuse-tab:** fix cache ([ac4632f](https://github.com/hbyunzai/yelon/commit/ac4632f5158b23f7381eb38096c2a3d53491e4e5))
* **abc:reuse-tab:** fix missing export cache ([9baeb77](https://github.com/hbyunzai/yelon/commit/9baeb77f9199dada6ac113d3f7eee0e000e50c3f))
* **auth:cookie:** fix cookie expires ([ddc8fb6](https://github.com/hbyunzai/yelon/commit/ddc8fb69fb69b6c9c6dce073b79003b84c5408e8))
* **bcs:contact:** fix style ([a5f6bc5](https://github.com/hbyunzai/yelon/commit/a5f6bc5541cbecbd2c14ad04c8607d302767646e))
* **bcs:** fix tag name ([bd895ee](https://github.com/hbyunzai/yelon/commit/bd895ee3f3c83ed7021adce99c470983f757a81c))
* **chat:timeline:** fix `y2` to be optional ([e6c0d4e](https://github.com/hbyunzai/yelon/commit/e6c0d4e546054436b16f8c14a6f7b96151259f47))
* **cli:** remove `skipTests` from generating module ([825ac78](https://github.com/hbyunzai/yelon/commit/825ac7832caae31852eb8a6c0973f8b58f9fcea8))
* **cli:** remove `stylelint-config-prettier` ([571fa7f](https://github.com/hbyunzai/yelon/commit/571fa7f35ba1c20ee1d37ec8ac1c9414a7766f90))
* fix misalignment of `col` placeholders in `se`, `sv`, `sg` ([62bc221](https://github.com/hbyunzai/yelon/commit/62bc22170c3de08d6dabfac38a10a14f22edbf3d))
* **layoout:** fix layout-display.service.ts channel ([e32fab9](https://github.com/hbyunzai/yelon/commit/e32fab913354d6099b1cabba32fd2d6058398ebe))
* **layout:** fix destroy can't find ([c4f189e](https://github.com/hbyunzai/yelon/commit/c4f189ec1f6e133b4a85ceade01585b911e4fea4))
* **se:** fix spell ([ecfb7b0](https://github.com/hbyunzai/yelon/commit/ecfb7b0ec492f903fd7ce7089192e6c663f96f3a))
* **theme:modal:** removed `nzComponentParams ([6507ead](https://github.com/hbyunzai/yelon/commit/6507ead349cfaf6f4184dc601a5e8b0609d2483a))
* **theme:table:** fix table image spacing ([dadeddc](https://github.com/hbyunzai/yelon/commit/dadeddcb9c1b5ec7aaf02c6898498b46b8d98fcc))
* **theme:title:** fix ignore empty title ([f3d35d8](https://github.com/hbyunzai/yelon/commit/f3d35d8c35a4fea77b45cbc5623c13bc75bae0b1))
* **theme:** fix ant-btn preserve white spaces when is link type ([6249f0e](https://github.com/hbyunzai/yelon/commit/6249f0e205f7f1f8cd3df49d40d52e57856554a8))


### Features

* **abc:reuse-tab:** support custom cache data ([4e4171b](https://github.com/hbyunzai/yelon/commit/4e4171b3a72a14407243d33eca340ef5558a6db3))
* **abc:st:** add `onCell`, support colSpan and rowSpan merging ([c219e8c](https://github.com/hbyunzai/yelon/commit/c219e8cc5e0ff04f91768e3ce5f84865a9cee0de))
* **abc:st:** button support function method of `icon`, `className` ([486a077](https://github.com/hbyunzai/yelon/commit/486a07760b22de7064a37e886c55980e34319962))
* **bcs:table:** add ids params ([e71e344](https://github.com/hbyunzai/yelon/commit/e71e3440d5aad453972476e7806a3fa94fdc9fa5))
* **bis:** add show all/mine menu config ([b6073ae](https://github.com/hbyunzai/yelon/commit/b6073aea60ec9a7fc8b86ee7cdd837434dcd870e))
* **theme:layout-default:** add `fetching` property ([0acbfdf](https://github.com/hbyunzai/yelon/commit/0acbfdffbb6f33f9e7f776d3d47764a30e4bfc69))
* **theme:modal:** support drag ([4cb5065](https://github.com/hbyunzai/yelon/commit/4cb5065fc1a4054ce3717865dbdbaa6bcd219b7d))


## [16.0.5](https://github.com/hbyunzai/yelon/compare/16.0.4...16.0.5) (2023-08-16)


### Bug Fixes

* **bis:** fix hide menu children and header type key ([7c21452](https://github.com/hbyunzai/yelon/commit/7c214528eabaa80b2fccadc8fddf165e54e81c72))


## [16.0.4](https://github.com/hbyunzai/yelon/compare/16.0.3...16.0.4) (2023-08-16)


### Bug Fixes

* **bis:** fix hide menu children and header type key ([c6595ad](https://github.com/hbyunzai/yelon/commit/c6595ad510f7e9730658c57d1a967c9e3b7ab55a))


## [16.0.3](https://github.com/hbyunzai/yelon/compare/16.0.2...16.0.3) (2023-08-15)


### Bug Fixes

* **auth:** fix auth cache sort ([150aad4](https://github.com/hbyunzai/yelon/commit/150aad460810fad104a8d2fe9ed608d4d8bbab3d))
* **bis:** fix token key to access_token,remove all cache ([a520ae1](https://github.com/hbyunzai/yelon/commit/a520ae159511e832121a1740bec60eeaa196af51))


### Features

* **bcd:** add markdown doc ([e8de48d](https://github.com/hbyunzai/yelon/commit/e8de48d2d90f977e8472257c2d52ca86b48c15e9))
* **bcs:** add contact comp ([e722890](https://github.com/hbyunzai/yelon/commit/e722890bcde219fc5c261942e2d200fed80cccb8))
* **bcs:** add contact comp ([ea5e83f](https://github.com/hbyunzai/yelon/commit/ea5e83f0545a4052092972e2ee419ed08183b6a4))
* **bcs:** add dept tree comp ([03b14bb](https://github.com/hbyunzai/yelon/commit/03b14bbf73e393f55f59ac47f8669d3be80948f8))
* **bcs:** add table user and friend comps ([38c53e5](https://github.com/hbyunzai/yelon/commit/38c53e50946d4b574a12c2470c9c5ca95278a8d6))
* **bcs:** add yunzai table user comp ([0839cf4](https://github.com/hbyunzai/yelon/commit/0839cf47d76930b5bb425369694763a45834c261))
* **bcs:** add yunzai-dormitory-tree ([1dc9fdf](https://github.com/hbyunzai/yelon/commit/1dc9fdff01063c22d8a7803c421b87b3b5e9a08c))
* **bcs:** add yunzai-role-tree ([7bb5f3f](https://github.com/hbyunzai/yelon/commit/7bb5f3fb25cd7ea21d844ff7eb45d33e04fa27b6))
* **bis:** add utils ([eb88288](https://github.com/hbyunzai/yelon/commit/eb88288a7fbf425eff3250884d64a3f76c512614))


### Reverts

* Revert "merge" ([eae9b01](https://github.com/hbyunzai/yelon/commit/eae9b016f39fa03b32eac35accd5cd9a207e93b1))


## [16.0.2](https://github.com/hbyunzai/yelon/compare/16.0.1...16.0.2) (2023-06-28)


### Bug Fixes

* **stylelint:** downgrade dependency ([be448b0](https://github.com/hbyunzai/yelon/commit/be448b0c92229a80bd1b7f79e5e0ec97b953cbde))



## [16.0.1](https://github.com/hbyunzai/yelon/compare/15.2.6...16.0.1) (2023-06-28)


### Bug Fixes

* **stylelint:** fix stylelint version ([ac69beb](https://github.com/hbyunzai/yelon/commit/ac69beb3ae6dc373f9c670de57ffa7191ebadef6))


# [16.0.0](https://github.com/hbyunzai/yelon/compare/15.2.6...16.0.0) (2023-06-27)


### Bug Fixes

* **abc:st:** fix error row class in fixed column title cell ([861af0d](https://github.com/hbyunzai/yelon/commit/861af0d9a9d0e39879eab797e5fcdc63198cb306))
* **example:** fix entry comp ([31ec14d](https://github.com/hbyunzai/yelon/commit/31ec14d64cf6b2892b6d89f54b71a98624be3dd6))
* **form:** fix interiting references to other of ui ([4d116db](https://github.com/hbyunzai/yelon/commit/4d116dbfe88dc8f1474cccdac98b78eef16ce638))


### Features

* **scripts:** add package upversion js ([f02abe0](https://github.com/hbyunzai/yelon/commit/f02abe0049675a02f82dd59c4f47084a7d0d20c7))

