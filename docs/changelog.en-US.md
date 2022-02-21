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




