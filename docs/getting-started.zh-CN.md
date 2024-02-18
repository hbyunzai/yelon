---
order: 10
title: 介绍
type: Basic
i18n: need-update
---

## 什么是NG-YUNZAI

NG-YUNZAI 是一个企业级中后台前端/设计解决方案脚手架，我们秉承 [Ant Design](https://ant.design/) 的设计价值观，目标也非常简单，希望在Angular上面开发企业后台更简单、更快速。随着『设计者』的不断反馈，将持续迭代，逐步沉淀和总结出更多设计模式和相应的代码实现，阐述中后台产品模板/组件/业务场景的最佳实践，也十分期待你的参与和共建。

## 环境搭建

Angular 开发环境至少需要安装 [Node.js](https://nodejs.org/en/download/)(Node.js 内置了 [npm](https://www.npmjs.com/get-npm) 无须单独安装）、[VSCode编辑器](https://code.visualstudio.com/)，其中 Node.js 建议安装 **LTS** 版本，安装完成后可以通过终端窗口中运行：

```bash
node -v # 查看 Node.js 当前版本
npm -v # 查看 Npm 当前版本
```

Npm 默认从国外源来下载包信息，鉴于国内环境因素，在开始下一步前先安装 [nnrm](https://github.com/YunYouJun/nnrm/blob/main/README.zh-CN.md) 并切换至淘宝镜像：

```bash
# 安装 nnrm
npm install -g nnrm
# 将Npm切换至淘宝源（不同 npm 源管理器命令有点不一样，更多细节请参考 nnrm 文档）
nnrm use taobao
```

## 安装

### 全局 Angular Cli

安装之前请先确保本地已经安装全局 Angular Cli，只有这样才能随时随地在终端使用 `ng` 命令，可以通过终端窗口中运行：

```bash
npm install -g @angular/cli
```

### 创建NG-YUNZAI项目

NG-YUNZAI 必须先创建一个全新的 Angular 项目，可以通过终端窗口中运行：

```bash
ng new my-project --style less --routing
cd my-project
# 或多重项目
ng new my-workspace --no-create-application
cd my-workspace
ng g application mgr --style less --routing
```

> 如果你想了解 `--style`、`--routing` 参数，请参考 [ng new](https://angular.io/cli/new#options) 文档。

接下来只需要将 NG-YUNZAI 添加到 `my-project` 项目中即可，在 `my-project` 目录下通过终端窗口中运行：

```bash
ng add ng-yunzai
```

> 若多重项目时，需要提供具体的项目名称。

NG-YUNZAI 会询问是否需要一些额外的插件，一开始完全可以一路回车，这些插件都是可插拔，后期可以自行添加与移除。

> 以上只会生成干净的项目，可以直接用于生产环境中。你可能在[预览](https://ng.yunzainfo.com/)上看到许多示例页，它们全都可以在 [Github](https://github.com/hbyunzai/ng-yunzai) 查看到源代码，当然也可以通过 Git 克隆代码的形式获得：
> ```bash
> git clone --depth=1 https://github.com/hbyunzai/ng-yunzai.git my-project
> cd my-project
> npm install
> ```

### 运行

```bash
npm start
```

启动完成后会打开浏览器访问 [http://localhost:4200](http://localhost:4200)，若你看到如下页面则代表成功了。

![](./assets/screenshot/start.png | width=700)

恭喜你，你已经成功部署一个 NG-YUNZAI 项目。

## 支持环境

- **受限于 Angular，不再支持 IE**
- 现代浏览器，[浏览器支持](https://angular.io/guide/browser-support)
- 支持服务端渲染
- [Electron](https://electron.atom.io/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Electron |
| --------- | --------- | --------- | --------- | --------- | --------- |
| last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions

## 如何贡献

在任何形式的参与前，请先阅读 [贡献者文档](/docs/contributing)。如果你希望参与贡献，欢迎 [Pull Request](https://github.com/hbyunzai/ng-yunzai/pulls)，或给我们 [报告 Bug](https://github.com/hbyunzai/ng-yunzai/issues)。

> 强烈推荐阅读 [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)(本指南不提供此项目的实际支持服务！)、[《如何向开源社区提问题》](https://github.com/seajs/seajs/issues/545) 和 [《如何有效地报告 Bug》](http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html)、[《如何向开源项目提交无法解答的问题》](https://zhuanlan.zhihu.com/p/25795393)，更好的问题更容易获得帮助。

## 捐助

如果你觉得 NG-YUNZAI 不错，可以考虑自愿为原作者(NG-ALAIN cipchk)打赏或捐助。

![](./assets/donate.png)
