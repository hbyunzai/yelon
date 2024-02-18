---
order: 20
title:
  en-US: FAQ
  zh-CN: 常见问题
type: Other
---

Please check the FAQ below before asking questions.

## Basic

### Expression Changed After It Has Been Checked Error

Common mistakes under Angular, [this article](https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4) will help you understand why.

### Can't bind to 'formGroup' since it isn't a known property of 'form'

Common mistakes under Angular, the use of Reactive Forms requires the introduction of `ReactiveFormsModule`, refer to [official documentation](https://angular.io/guide/reactive-forms).

### Why is the page not updated after the data is modified?

The NG-ZORRO and @yelon/* components work in OnPush mode by default. Mutate objects or arrays do not trigger Angular's change detection. Use the immutable method.

### How to use @yelon daily build version

NG-YUNZAI provides a [yelon-builds](https://github.com/hbyunzai/yelon-builds.git) repository as a daily build version. It's not the final stable version, but contains the latest fixed BUG, To use the latest features, you can create `yelon.sh` in the root directory:

```bash
#!/usr/bin/env bash
set -e
echo "Download latest @yelon version"
rm -rf yelon-builds
git clone --depth 1 https://github.com/hbyunzai/yelon-builds.git
rm -rf node_modules/@yelon
rm -rf node_modules/ng-yunzai
rsync -am yelon-builds/ node_modules/
NG_YUNZAI_VERSION=$(node -p "require('./node_modules/ng-yunzai/package.json').version")
rm -rf yelon-builds
echo "Using ng-yunzai version: ${NG_YUNZAI_VERSION}"
```

When you need to use the daily build version of @yelon, you only need to run:

```bash
bash yelon.sh
```

> If in Windows environment, please use [WSL](https://docs.microsoft.com/en-us/windows/wsl/install) to execute Bash scripts.

## Installation

### Why can't I find the ng-zorro-antd/src/*.less style?

Two situations:

- Using `cnpm` to install dependencies, you will not be able to find style files. This is because `cnpm` is in the form of a soft link path, which causes the `ng-zorro-antd` folder name to change, so it is recommended to use the `yarn` install dependency package instead.
- The `ng-zorro-antd` version is too old to cause some components to fail to load into the appropriate style

### How to use other mirror?

Install the [nnrm](https://github.com/YunYouJun/nnrm/blob/main/README.zh-CN.md) plugin.

```bash
# Install nnrm
npm install -g nnrm
# Switch Npm to Taobao mirror
nnrm use taobao
```

## Configuration

### How do I deploy the antd icon locally?

First, the latest iconfont file can go to [this link](https://ant.design/docs/spec/download) ([mirror](http://ant-design.gitee.io/docs/spec/download)) Download.

Finally, redefine the new path in `src/styles/theme.less`:

```less
@icon-url: "/assets/iconfont";
```

> Use an absolute path or CDN address.

### Missing locale data for the locale "zh-cn"

For missing language imports, refer to [app.module.ts](https://github.com/hbyunzai/ng-yunzai/blob/master/src/app/app.module.ts#L6-L25).

### How to deploy ng-yunzai.com documentation site in local

Online documents will only retain the data of the last three major version numbers. If the version is low, you can view it through local deployment:

```bash
git clone --depth 1 -b full https://github.com/ng-yunzai/archive-docs.git ng-yunzai-doc
cd ng-yunzai-doc
npm install
npm start
```

### Fix the abnormal display of the lower part of the 360 browser

The built-in Chrome core of some 360 browsers is too low, resulting in some CSS3 not supported, you can manually increase `.browserslistrc` For more details, refer to [#2310](https://github.com/hbyunzai/ng-yunzai/issues/2310#issuecomment-1299460266).
