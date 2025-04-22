---
order: 100
title: 更新日志
type: Other
---

NG-YUNZAI 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

#### 发布周期

* 修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
* 次版本号：每月发布一个带有新特性的向下兼容的版本。
* 主版本号：含有破坏性更新和新特性，不在发布周期内。

---
# [19.1.0](https://github.com/hbyunzai/yelon/compare/19.0.2-beta.1...19.1.0) (2025-04-22)


### Bug Fixes

* **form:array:** fix track to identify each item uniquely ([#1892](https://github.com/hbyunzai/yelon/issues/1892)) ([5915540](https://github.com/hbyunzai/yelon/commit/59155401059f4cb70aceee6136fb59c04528b0d1))
* **form:utils:** replace getEnum with getCopyEnum in getData ([3ff9260](https://github.com/hbyunzai/yelon/commit/3ff9260e38a32b13d09c62cbde096158b5f8872a))


### Features

* **module:theme:** add the `badgeOverflowCount` property to Menu ([#1891](https://github.com/hbyunzai/yelon/issues/1891)) ([cc0326a](https://github.com/hbyunzai/yelon/commit/cc0326a9b7bb332172050c5aebd501cab8c3170a))


## [19.0.2-beta.1](https://github.com/hbyunzai/yelon/compare/19.0.1...19.0.2-beta.1) (2025-02-27)


### Bug Fixes

* fix logout url ([2687650](https://github.com/hbyunzai/yelon/commit/268765059f45d77c46089aa8e8ca56ca5c15fabe))


## [19.0.1](https://github.com/hbyunzai/yelon/compare/19.0.0...19.0.1) (2025-02-14)


### Bug Fixes

* fix bugs ([f99d260](https://github.com/hbyunzai/yelon/commit/f99d26056555745368d63b5f8942b92df1988668))
* fix schema missing bis bcs socket ([54e6cdf](https://github.com/hbyunzai/yelon/commit/54e6cdf86844d7296a83703df0d639da7f56c59c))


# [19.0.0](https://github.com/hbyunzai/yelon/compare/18.3.0...19.0.0) (2025-02-13)


### Bug Fixes

* fix ci and route paths ([3541f31](https://github.com/hbyunzai/yelon/commit/3541f3148a2e3af3964e817cefa6b3b1adeeb9ab))
* fix missing functions ([aeb31cc](https://github.com/hbyunzai/yelon/commit/aeb31ccb38c74b5db662d6fc8a0e7866383d1318))
* fix test ([9a2a5c9](https://github.com/hbyunzai/yelon/commit/9a2a5c915a54191094c44ef935539b667e1f9784))
* style linperf: optimizing `[@let](https://github.com/let)` ([#1849](https://github.com/hbyunzai/yelon/issues/1849))t ([bc7143b](https://github.com/hbyunzai/yelon/commit/bc7143be690c6dede0217d252e7d75a2223fa801))
* style lint ([359a14a](https://github.com/hbyunzai/yelon/commit/359a14a263ca513d09921b43bd99d4d945a76ce8))


### Features

* **abc:avatar-list:** set deprecated ([#1848](https://github.com/hbyunzai/yelon/issues/1848)) ([4d3542d](https://github.com/hbyunzai/yelon/commit/4d3542de152275f8ec9950ff2a22f9e6b9f5aa16))
* **theme:menu:** add `getDefaultRedirect` method ([#1850](https://github.com/hbyunzai/yelon/issues/1850)) ([ba573fe](https://github.com/hbyunzai/yelon/commit/ba573fe4ee0f504b36ec5b34f797fea7330075e3))



## 18.3.0 (2024-11-07)

* feat: yarn 4.5.0 ([ffbedf1](https://github.com/hbyunzai/yelon/commit/ffbedf1))
* chore: bump angular to 18.2 (#1839) ([157f3ab](https://github.com/hbyunzai/yelon/commit/157f3ab)), closes [#1839](https://github.com/hbyunzai/yelon/issues/1839)
* chore: relock ([e43daa3](https://github.com/hbyunzai/yelon/commit/e43daa3))
* docs: typo (#1838) ([96f4506](https://github.com/hbyunzai/yelon/commit/96f4506)), closes [#1838](https://github.com/hbyunzai/yelon/issues/1838)
* docs(mock): 修复Mock组件文档中MockOptions配置表格中的表 ([6098276](https://github.com/hbyunzai/yelon/commit/6098276))
* fix: lint ([21941f7](https://github.com/hbyunzai/yelon/commit/21941f7))




## 18.2.0 (2024-11-07)

* feat(form:select,cascader,tree-select): default value when cleared ([d1e9817](https://github.com/hbyunzai/yelon/commit/d1e9817))
* fix(abc:st): a more friendly expandIcon (#1842) ([6e28ff5](https://github.com/hbyunzai/yelon/commit/6e28ff5)), closes [#1842](https://github.com/hbyunzai/yelon/issues/1842)
* fix(theme:default): fix inconsistency of top icon size (#1841) ([f9792e6](https://github.com/hbyunzai/yelon/commit/f9792e6)), closes [#1841](https://github.com/hbyunzai/yelon/issues/1841)
* fix(theme): fix `lg` size of modal style (#1845) ([e964622](https://github.com/hbyunzai/yelon/commit/e964622)), closes [#1845](https://github.com/hbyunzai/yelon/issues/1845)

## <small>18.1.4 (2024-10-15)</small>

* feat(bis): add layout ([b8203d7](https://github.com/hbyunzai/yelon/commit/b8203d7))

## <small>18.1.3 (2024-10-11)</small>

* feat: add website layout 01 ([4e172a1](https://github.com/hbyunzai/yelon/commit/4e172a1))
* fix: fix i18n load and not over stream when autoAuth equals false ([992cbd8](https://github.com/hbyunzai/yelon/commit/992cbd8))

## <small>18.1.2 (2024-10-08)</small>

* fix: 修复token的暂存状态 ([062c889](https://github.com/hbyunzai/yelon/commit/062c889))
## <small>18.1.1 (2024-10-08)</small>

* fix: fix auto login validate ([5047596](https://github.com/hbyunzai/yelon/commit/5047596))
* fix: fix missing type ([45dd404](https://github.com/hbyunzai/yelon/commit/45dd404))
* fix: fix style ([e539cf5](https://github.com/hbyunzai/yelon/commit/e539cf5))
* fix: fix typedef ([31049f6](https://github.com/hbyunzai/yelon/commit/31049f6))
* fix: lock yarn ([c59bfff](https://github.com/hbyunzai/yelon/commit/c59bfff))
* fix: 修复auth状态判断不足的问题 ([3ff719f](https://github.com/hbyunzai/yelon/commit/3ff719f))
* fix: 修改startup逻辑 ([c2e2463](https://github.com/hbyunzai/yelon/commit/c2e2463))
* fix(cli): fix could not find any [routes] variable (#1832) ([38daae1](https://github.com/hbyunzai/yelon/commit/38daae1)), closes [#1832](https://github.com/hbyunzai/yelon/issues/1832)
* chore: bump angualr to `18.2` (#1831) ([43e8583](https://github.com/hbyunzai/yelon/commit/43e8583)), closes [#1831](https://github.com/hbyunzai/yelon/issues/1831)
* chore: docs ([6f9beff](https://github.com/hbyunzai/yelon/commit/6f9beff))
* chore: lint fix ([3ea3643](https://github.com/hbyunzai/yelon/commit/3ea3643))
* chore: rm codecov test upload ([a26551c](https://github.com/hbyunzai/yelon/commit/a26551c))
* feat: 添加新的认证模式 ([d7db0d5](https://github.com/hbyunzai/yelon/commit/d7db0d5))
* feat(theme): add `.hide-scrollbar` style (#1835) ([2fd6e7b](https://github.com/hbyunzai/yelon/commit/2fd6e7b)), closes [#1835](https://github.com/hbyunzai/yelon/issues/1835)
* feat(form:tree-select): add `change` of schema (#1827) ([42ca17b](https://github.com/hbyunzai/yelon/commit/42ca17b)), closes [#1827](https://github.com/hbyunzai/yelon/issues/1827)
* feat(theme:menu): add `last` argument of `find` (#1834) ([8cacab3](https://github.com/hbyunzai/yelon/commit/8cacab3)), closes [#1834](https://github.com/hbyunzai/yelon/issues/1834)
* feat(theme:modal): support build-in and focus button (#1828 ([a6c537f](https://github.com/hbyunzai/yelon/commit/a6c537f)), closes [#1828](https://github.com/hbyunzai/yelon/issues/1828)
* fix(abc:st): fix submenu blank area to be clickable (#1833) ([9ef589f](https://github.com/hbyunzai/yelon/commit/9ef589f)), closes [#1833](https://github.com/hbyunzai/yelon/issues/1833)
* docs: missing 17 doc link (#1829) ([c8afb0f](https://github.com/hbyunzai/yelon/commit/c8afb0f)), closes [#1829](https://github.com/hbyunzai/yelon/issues/1829)
* docs(auth): typo (#1830) ([3fe22c7](https://github.com/hbyunzai/yelon/commit/3fe22c7)), closes [#1830](https://github.com/hbyunzai/yelon/issues/1830)





## 18.1.0 (2024-08-21)

* chore: bump angular to 18.1 ([a23aa77](https://github.com/hbyunzai/yelon/commit/a23aa77))
* feat(abc:let): will be removed in v19 (#1814) ([81dab23](https://github.com/hbyunzai/yelon/commit/81dab23)), closes [#1814](https://github.com/hbyunzai/yelon/issues/1814)
* feat(abc:result): will be removed in v20 (#1818) ([67ed7f2](https://github.com/hbyunzai/yelon/commit/67ed7f2)), closes [#1818](https://github.com/hbyunzai/yelon/issues/1818)
* feat(abc:st): add `expandIcon` property (#1812) ([d7ba151](https://github.com/hbyunzai/yelon/commit/d7ba151)), closes [#1812](https://github.com/hbyunzai/yelon/issues/1812)
* fix(abc:lodop): support URL with parameters (#1824) ([3769102](https://github.com/hbyunzai/yelon/commit/3769102)), closes [#1824](https://github.com/hbyunzai/yelon/issues/1824)
* fix(abc:st): correct default value of `date` type (#1823) ([ff47176](https://github.com/hbyunzai/yelon/commit/ff47176)), closes [#1823](https://github.com/hbyunzai/yelon/issues/1823)
* fix(form:select): fix `maxTagCount` default value is `Infinity` (#1815) ([f928585](https://github.com/hbyunzai/yelon/commit/f928585)), closes [#1815](https://github.com/hbyunzai/yelon/issues/1815)
* fix(form:select): fix incorrect default value of `showArrow` (#1816) ([098989c](https://github.com/hbyunzai/yelon/commit/098989c)), closes [#1816](https://github.com/hbyunzai/yelon/issues/1816)
* feat(theme): support custom process of `_date` pipe (#1822) ([2f62723](https://github.com/hbyunzai/yelon/commit/2f62723)), closes [#1822](https://github.com/hbyunzai/yelon/issues/1822)
* fix: fix theme ([40e834f](https://github.com/hbyunzai/yelon/commit/40e834f))
* fix(theme): fix dark style color (#1819) ([8cbf163](https://github.com/hbyunzai/yelon/commit/8cbf163)), closes [#1819](https://github.com/hbyunzai/yelon/issues/1819)
* docs: typo (#1817) ([5a7fac2](https://github.com/hbyunzai/yelon/commit/5a7fac2)), closes [#1817](https://github.com/hbyunzai/yelon/issues/1817)


## <small>18.0.1 (2024-07-05)</small>

* fix: fix css theme generate ([13e78f2](https://github.com/hbyunzai/yelon/commit/13e78f2))


## 18.0.0 (2024-07-03)

* chore: chore abc ([ae77969](https://github.com/hbyunzai/yelon/commit/ae77969))
* chore: chore acl,auth,cache,chart ([5d54170](https://github.com/hbyunzai/yelon/commit/5d54170))
* chore: chore form ([f117443](https://github.com/hbyunzai/yelon/commit/f117443))
* chore: chore package.json ([472fca0](https://github.com/hbyunzai/yelon/commit/472fca0))
* chore: chore schematics ([5a8c071](https://github.com/hbyunzai/yelon/commit/5a8c071))
* chore: chore schematics ([4fe0677](https://github.com/hbyunzai/yelon/commit/4fe0677))
* chore: chore theme ([3c74551](https://github.com/hbyunzai/yelon/commit/3c74551))
* chore: chore utils ([2090ea5](https://github.com/hbyunzai/yelon/commit/2090ea5))
* chore: project ci utils ([9a092c5](https://github.com/hbyunzai/yelon/commit/9a092c5))
* chore: project dependencies ([f60ae25](https://github.com/hbyunzai/yelon/commit/f60ae25))
* fix: fix build-schematics.sh ([4551b34](https://github.com/hbyunzai/yelon/commit/4551b34))
* fix: fix some bugs ([f5c4d96](https://github.com/hbyunzai/yelon/commit/f5c4d96))
* fix(layout): 项目副标题折行，图标间距调大、group模式中菜单增加权限控制，链接在新窗口中打开 ([c9e44fa](https://github.com/hbyunzai/yelon/commit/c9e44fa))
* fix(layout): application模式中菜单链接在新窗口中打开,左侧菜单图标错误后不显示，防止产生对齐问题 ([2b11775](https://github.com/hbyunzai/yelon/commit/2b11775))



## [17.3.2](https://github.com/hbyunzai/yelon/compare/17.3.1...17.3.2) (2024-03-21)

### Bug Fixes

* **abc:cell:** fix can't change detection of widget ([931f613](https://github.com/hbyunzai/yelon/commit/931f6130302df86aa9003b56aa4f94eb023ad431))
* **abc:st:** fix resizeable will trigger sorting or filter ([#1788](https://github.com/hbyunzai/yelon/issues/1788)) ([8c43573](https://github.com/hbyunzai/yelon/commit/8c435736e9490bc60ef1ccb0c40a7bc4fb323004))
* **abc:st:** fix sorting trigger misalignment in mulit-column ([#1767](https://github.com/hbyunzai/yelon/issues/1767)) ([a09ccb0](https://github.com/hbyunzai/yelon/commit/a09ccb0f9ddfcbe38ab0514273f62d0c567ad937))
* daily fix ([1a91dd8](https://github.com/hbyunzai/yelon/commit/1a91dd867dc4608f41562e03c30ab7b8f6698592))
* **from:** fix test ([cdf6ed7](https://github.com/hbyunzai/yelon/commit/cdf6ed7d94fd112d99e716663160396ebe6e1eb8))
* **layout:** 修改layoutDisplayService无法隐藏头部及左侧bug ([1b67259](https://github.com/hbyunzai/yelon/commit/1b67259b903f827531804a172ba114d69f16e643))
* **theme:** correct `.no-data` text color in dark ([9515974](https://github.com/hbyunzai/yelon/commit/9515974394c6af9bef4e9b490a5838318bea523e))
* **theme:** fix ng-package.json ([ad3d4b9](https://github.com/hbyunzai/yelon/commit/ad3d4b924b42fce5c1eac80821abde7f4a0fbe24))



# [17.3.0](https://github.com/hbyunzai/yelon/compare/17.2.3...17.3.0) (2024-03-14)


### Bug Fixes

* **abc:reuse-tab:** fix can't cache when component is not used ([110c44a](https://github.com/hbyunzai/yelon/commit/110c44acbef03884b482c3668626bd4161276406))
* **all:** 1.修改header模式；2.修改浏览器title设置规则；3.修改主题按钮位置；4.左侧系统图标点击弹出“关于本应用”弹窗； ([a3aedf4](https://github.com/hbyunzai/yelon/commit/a3aedf48334e990f999fe3cf94607fb5b37ece3b))
* **cli:** add `./` current fold in `startup.service` ([978d926](https://github.com/hbyunzai/yelon/commit/978d9264a24a7f3a0c0536a77cd933013cf90784))
* **theme:** fix theme title service ([e672ea7](https://github.com/hbyunzai/yelon/commit/e672ea75d6b6c76164fed399a0646639822b9efd))


### Features

* **auth:** ignore all local resource ([f542903](https://github.com/hbyunzai/yelon/commit/f542903d29052a4ccac620a6fe0346265b3adb01))


## [17.2.3](https://github.com/hbyunzai/yelon/compare/17.2.2...17.2.3) (2024-02-22)


### Bug Fixes

* fix inject bugs ([9344fc2](https://github.com/hbyunzai/yelon/commit/9344fc2683100a1bd747be52616b9a9c5fb9312f))


## [17.2.2](https://github.com/hbyunzai/yelon/compare/17.2.1...17.2.2) (2024-02-22)


### Bug Fixes

* **bcs:iframe:** add missing styles ([0612238](https://github.com/hbyunzai/yelon/commit/0612238af0e49b68102f0b10b8695b325889e520))
* **bcs:** add missing COMPONENT ([58c51c7](https://github.com/hbyunzai/yelon/commit/58c51c7d2dcde98f5d3d5268c2b15c7070721acd))
* **bcs:** add missing module ([40e36e1](https://github.com/hbyunzai/yelon/commit/40e36e1bd6ad6dabbb4bf9a39f2cc6eb5dff467e))
* **bcs:** add missing styles ([db858b6](https://github.com/hbyunzai/yelon/commit/db858b6d75ce74ef38e336fcc69ef8324fac3f4d))
* **bcs:** fix contact component import path ([35df484](https://github.com/hbyunzai/yelon/commit/35df484d464ece2d5e30287d71a65dabf314dff8))
* **bis:** fix layout import ([b0aeb4c](https://github.com/hbyunzai/yelon/commit/b0aeb4c8aef16d9612e94714ce861ed36c8446d5))
* **theme:** fix missing less ([7d1fd6c](https://github.com/hbyunzai/yelon/commit/7d1fd6cfbffc2d841a84e79ae9810b45c3397f88))

## [17.2.1](https://github.com/hbyunzai/yelon/compare/17.2.0...17.2.1) (2024-02-19)


### Bug Fixes

* **ci:** add CNAME copy ([362a580](https://github.com/hbyunzai/yelon/commit/362a58033c6724f05c6a4e48108d0d6f1585c3c0))
* **ci:** add yarn lock ([cbd9915](https://github.com/hbyunzai/yelon/commit/cbd9915c325af11b57d7bb209a37f14e98dbb539))
* **ci:** fix docker name ([a67a0c3](https://github.com/hbyunzai/yelon/commit/a67a0c36c74c2eb3d3c199bedfd15256f0075e2a))
* **schematics:** add missing images ([ed959c5](https://github.com/hbyunzai/yelon/commit/ed959c5f804da8f0e1bb73bbbf678ba42f06d4ba))
* **schematics:** fix module name ([0e0a376](https://github.com/hbyunzai/yelon/commit/0e0a376c31188ea0ffa25ccaea5b730dfd615f81))



# [17.2.0](https://github.com/hbyunzai/yelon/compare/17.1.0...17.2.0) (2024-02-02)

### Bug Fixes

* 修复Chrome 121色块 ([#1761](https://github.com/hbyunzai/yelon/issues/1761)) ([6861343](https://github.com/hbyunzai/yelon/commit/6861343bbe3219dd588cb7ffc062984fa8a3a64e))
* **form:widget:array:** 修复移除时导致重复性通知 ([#1758](https://github.com/hbyunzai/yelon/issues/1758)) ([4957399](https://github.com/hbyunzai/yelon/commit/49573999a63796a93a63eae63f392ff4da994e3d))

### Features

* **abc:st:** 新增 `trackBy` 属性 ([#1760](https://github.com/hbyunzai/yelon/issues/1760)) ([f4b2fec](https://github.com/hbyunzai/yelon/commit/f4b2feca272139ad70b7814e3ce5f407e07ef931))
* **cache:** 新增 `CacheInterceptor` 本地缓存拦截器 ([#1576](https://github.com/hbyunzai/yelon/issues/1576)) ([837f4f0](https://github.com/hbyunzai/yelon/commit/837f4f0f7ac90da9912be8c6b3a1d7aa0c22b220))


# [17.1.0](https://github.com/hbyunzai/yelon/compare/17.0.5...17.1.0) (2024-01-20)

### Bug Fixes

* **abc:reuse-tab:** 修复保持打开顺序 ([#1743](https://github.com/hbyunzai/yelon/issues/1743)) ([e17f5e7](https://github.com/hbyunzai/yelon/commit/e17f5e7813ff1da26ce4bada81c5b098bc190b8c))
* **abc:st:** 纠正空值语法错误 ([#1744](https://github.com/hbyunzai/yelon/issues/1744)) ([69bb0bb](https://github.com/hbyunzai/yelon/commit/69bb0bb432b100cf8a6c5ec87e0fd28dd2923d7d))

### Features

* 新增越南语 ([#1751](https://github.com/hbyunzai/yelon/issues/1751)) ([385dc1c](https://github.com/hbyunzai/yelon/commit/385dc1c716327e899f5e61d9823c3deba26ee4bf))
* **cli:** 新增 `withViewTransitions` ([#1736](https://github.com/hbyunzai/yelon/issues/1736)) ([c03a797](https://github.com/hbyunzai/yelon/commit/c03a797c9fb2405acb8455e9c236f23296577c0e))
* **form:** 新增 `setDisabled`, `setRequired` 方法 ([#1733](https://github.com/hbyunzai/yelon/issues/1733)) ([581f197](https://github.com/hbyunzai/yelon/commit/581f197be67e33189aee44b31465fb8b6d21c640))
* **theme:layout-default:** 新增 `hideEmptyChildren` ([#1746](https://github.com/hbyunzai/yelon/issues/1746)) ([b6ab5f0](https://github.com/hbyunzai/yelon/commit/b6ab5f01c18d1668989925377da84b467aa8ee27))
* **abc:auto-focus:** 优化代码 ([#1753](https://github.com/hbyunzai/yelon/issues/1753)) ([7032139](https://github.com/hbyunzai/yelon/commit/7032139472381e5f4619dc0b71c31e43a986965b))
* **auth:** 移除 `ignores` 默认值 ([#1745](https://github.com/hbyunzai/yelon/issues/1745)) ([e473ff4](https://github.com/hbyunzai/yelon/commit/e473ff4efc4299a7f2cb2e96dd44fdefedae8e82))
* 支持 Standalone ([#1750](https://github.com/hbyunzai/yelon/issues/1750)) ([7940464](https://github.com/hbyunzai/yelon/commit/7940464f69f93f3a1c3013a916d29f73146516d9))


## <small>17.0.5 (2023-12-25)</small>

* fix(abc:st): 修复导出Excel不匹配 (#1740) ([a46f2ee](https://github.com/hbyunzai/yelon/commit/a46f2ee)), closes [#1740](https://github.com/hbyunzai/yelon/issues/1740)
* fix(form:array): 修复无效 `trackBy` (#1741) ([3e55228](https://github.com/hbyunzai/yelon/commit/3e55228)), closes [#1741](https://github.com/hbyunzai/yelon/issues/1741)


## <small>17.0.4 (2023-12-20)</small>

* fix(abc:se): 修复响应式表单无法自动识别必填项 (#1737) ([a2ca109](https://github.com/hbyunzai/yelon/commit/a2ca109)), closes [#1737](https://github.com/hbyunzai/yelon/issues/1737)
* fix(abc:sv): 修复有边框时底部间距问题 (#1732) ([b5bea4e](https://github.com/hbyunzai/yelon/commit/b5bea4e)), closes [#1732](https://github.com/hbyunzai/yelon/issues/1732)
* fix(util:pipe:filter): 修复应该使用 `pure` (#1735) ([f374209](https://github.com/hbyunzai/yelon/commit/f374209)), closes [#1735](https://github.com/hbyunzai/yelon/issues/1735)
* fix(cli): 修复拼写错误 'providers' (#1731) ([5eafa8f](https://github.com/hbyunzai/yelon/commit/5eafa8f)), closes [#1731](https://github.com/hbyunzai/yelon/issues/1731)


## <small>17.0.3 (2023-12-08)</small>

* fix(theme:i18n): 纠正 `i18n` 管道参数类型不匹配 (#1723) ([bdf0e62](https://github.com/hbyunzai/yelon/commit/bdf0e62)), closes [#1723](https://github.com/hbyunzai/yelon/issues/1723)
* fix(cli): 纠正生成NG-YUNZAI存在空值问题 (#1724) ([c88c9f2](https://github.com/hbyunzai/yelon/commit/c88c9f2)), closes [#1724](https://github.com/hbyunzai/yelon/issues/1724)


## <small>17.0.2 (2023-11-27)</small>

* fix(cli): fix cannot find module `@angular/cdk/schematics` (#1721) ([49a84a1](https://github.com/hbyunzai/yelon/commit/49a84a1)), closes [#1721](https://github.com/hbyunzai/yelon/issues/1721)

## <small>17.0.1 (2023-11-26)</small>

* fix(cli): 修复不支持 node 20 版本 (#1719) ([df40bb3](https://github.com/hbyunzai/yelon/commit/df40bb3)), closes [#1719](https://github.com/hbyunzai/yelon/issues/1719)


## 17.0.0 (2023-11-26)

### Breaking Changes

* refactor(form): 重构低频率小部件为可选导入 (#1668) ([8ab0e82](https://github.com/hbyunzai/yelon/commit/8ab0e82)), closes [#1668](https://github.com/hbyunzai/yelon/issues/1668)
* build: 移除 `networkEnv` 插件，使用 [nnrm](https://github.com/YunYouJun/nnrm/blob/main/README.zh-CN.md) 替代 (#1680) ([b7dbc68](https://github.com/hbyunzai/yelon/commit/b7dbc68)), closes [#1680](https://github.com/hbyunzai/yelon/issues/1680)
* feat(acl): 移除 `forRoot` (#1690) ([4472d48](https://github.com/hbyunzai/yelon/commit/4472d48)), closes [#1690](https://github.com/hbyunzai/yelon/issues/1690)

### Features

* feat(cli): 支持多重项目下使用 `ng add ng-yunzai` (#1664) ([e5476e2](https://github.com/hbyunzai/yelon/commit/e5476e2)), closes [#1664](https://github.com/hbyunzai/yelon/issues/1664)
* feat(theme): 新增 `provideYunzai` (#1697) ([4311426](https://github.com/hbyunzai/yelon/commit/4311426)), closes [#1697](https://github.com/hbyunzai/yelon/issues/1697)
* feat(abc:cell): 新增 `provideCellWidgets` (#1700) ([7ea0daf](https://github.com/hbyunzai/yelon/commit/7ea0daf)), closes [#1700](https://github.com/hbyunzai/yelon/issues/1700)
* feat(abc:reuse-tab): 新增 `provideReuseTabConfig` (#1707) ([2f85357](https://github.com/hbyunzai/yelon/commit/2f85357)), closes [#1707](https://github.com/hbyunzai/yelon/issues/1707)
* feat(abc:st): 新增 `provideSTWidgets` (#1701) ([065316a](https://github.com/hbyunzai/yelon/commit/065316a)), closes [#1701](https://github.com/hbyunzai/yelon/issues/1701)
* feat(theme:_httpclient): 新增 `timestampSecond` 支持 10 位时间戳 (#1670) ([051b087](https://github.com/hbyunzai/yelon/commit/051b087)), closes [#1670](https://github.com/hbyunzai/yelon/issues/1670)
* feat(theme:pipe:date): 支持全局配置格式化字符串 (#1711) ([b3b93fa](https://github.com/hbyunzai/yelon/commit/b3b93fa)), closes [#1711](https://github.com/hbyunzai/yelon/issues/1711)
* feat: 新增 `provideYunzaiConfig` (#1689) ([b9e0fad](https://github.com/hbyunzai/yelon/commit/b9e0fad)), closes [#1689](https://github.com/hbyunzai/yelon/issues/1689)
* feat(auth): 新增 `provideAuth` (#1704) ([c0c731b](https://github.com/hbyunzai/yelon/commit/c0c731b)), closes [#1704](https://github.com/hbyunzai/yelon/issues/1704)
* feat(form): 新增 `provideSFConfig` (#1702) ([2404802](https://github.com/hbyunzai/yelon/commit/2404802)), closes [#1702](https://github.com/hbyunzai/yelon/issues/1702)
* feat(mock): 新增 `mockInterceptor` (#1698) ([da051b2](https://github.com/hbyunzai/yelon/commit/da051b2)), closes [#1698](https://github.com/hbyunzai/yelon/issues/1698)
* feat(mock): 支持异步返回，例如 `Promise`、`Observable` (#1686) ([d7980db](https://github.com/hbyunzai/yelon/commit/d7980db)), closes [#1686](https://github.com/hbyunzai/yelon/issues/1686)
* feat(mock): 新增 `provideYelonMockConfig` (#1695) ([683ab23](https://github.com/hbyunzai/yelon/commit/683ab23)), closes [#1695](https://github.com/hbyunzai/yelon/issues/1695)
* feat(testing): 新增 `delay` function (#1682) ([f83ea57](https://github.com/hbyunzai/yelon/commit/f83ea57)), closes [#1682](https://github.com/hbyunzai/yelon/issues/1682)
* build: support pnpm and update yarn to `4` (#1678) ([b904b9a](https://github.com/hbyunzai/yelon/commit/b904b9a)), closes [#1678](https://github.com/hbyunzai/yelon/issues/1678)

### Bug Fixes

* fix(theme:preloader): 修复启动动画存在懒加载时空白问题 (#1691) ([f09c324](https://github.com/hbyunzai/yelon/commit/f09c324)), closes [#1691](https://github.com/hbyunzai/yelon/issues/1691)
* fix(cli:update): 修复自动追加 `@_mock` 路径 (#1675) ([d014b54](https://github.com/hbyunzai/yelon/commit/d014b54)), closes [#1675](https://github.com/hbyunzai/yelon/issues/1675)

## 历史版本

历史版本的更新记录可以在 [Github](https://github.com/hbyunzai/ng-yunzai/releases) 查看。
