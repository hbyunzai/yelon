/*
 * @Author: cui <devcui@outlook.com>
 * @Editor: microsoft vscode
 * @Date: 2021-11-07 10:02:22
 * @LastEditTime: 2021-11-14 12:30:52
 * @LastEditors: cui <devcui@outlook.com>
 * @Description: empty description
 * @FilePath: \yelon\schematics\plugin\plugin.network-env.spec.ts
 * MIT License Copyright (c) 2017-present 卡色<cipchk@qq.com>
 */

import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { createYunzaiApp } from '../utils/testing';

describe('NgYunzaiSchematic: plugin: networkEnv', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  describe(`[npm]`, () => {
    const npmrc = '/.npmrc';

    beforeEach(async () => ({ runner, tree } = await createYunzaiApp({ npm: true })));

    describe('when add', () => {
      it(`should add .npmrc`, () => {
        expect(tree.exists(npmrc)).toBe(true);
        expect(tree.readContent(npmrc)).toContain(`registry=https://registry.npmmirror.com`);
      });
    });

    describe('when remove', () => {
      beforeEach(async () =>
        runner
          .runSchematicAsync('plugin', { name: 'networkEnv', type: 'remove', packageManager: 'npm' }, tree)
          .toPromise()
      );

      it(`should remove .npmrc`, () => {
        expect(tree.exists(npmrc)).toBe(false);
      });
    });
  });

  describe(`[yarn]`, () => {
    const yarnrc = '/.yarnrc';

    beforeEach(async () => ({ runner, tree } = await createYunzaiApp({ yarn: true })));

    describe('when add', () => {
      it(`should add .yarnrc`, () => {
        expect(tree.exists(yarnrc)).toBe(true);
        expect(tree.readContent(yarnrc)).toContain(`registry "https://registry.npmmirror.com"`);
      });
    });

    describe('when remove', () => {
      beforeEach(async () =>
        runner
          .runSchematicAsync('plugin', { name: 'networkEnv', type: 'remove', packageManager: 'yarn' }, tree)
          .toPromise()
      );

      it(`should remove .yarnrc`, () => {
        expect(tree.exists(yarnrc)).toBe(false);
      });
    });
  });
});
