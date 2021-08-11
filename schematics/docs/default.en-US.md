---
order: 90
title: Default parameter
type: Documents
---

ng-yunzai provides a number of build modules, page templates, which have same option parameters, such as: `spec` for generating test pages, `flat` for flat directories, `inline-template` for inline template, etc.

However, parameters can be preset via `angular.json`.

```json
// angular.json
{
  "schematics": {
    "ng-yunzai:module": {
      "routing": true,
      "spec": false
    },
    "ng-yunzai:list": {
      "spec": false
    },
    "ng-yunzai:edit": {
      "spec": false,
      "modal": true
    },
    "ng-yunzai:view": {
      "spec": false,
      "modal": true
    },
    "ng-yunzai:curd": {
      "spec": false
    },
    "@schematics/angular:module": {
      "routing": true,
      "spec": false
    },
    "@schematics/angular:component": {
      "spec": false,
      "flat": false,
      "inlineStyle": true,
      "inlineTemplate": false
    },
    "@schematics/angular:directive": {
      "spec": false
    },
    "@schematics/angular:service": {
      "spec": false
    }
  }
}
```

You can execute the following command to get the parameter description:

```bash
ng g ng-yunzai:list --help
```
