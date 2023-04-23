import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { createYunzaiApp } from '../utils/testing';

describe('NgYunzaiSchematic: plugin: sts', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(async () => {
    ({ runner, tree } = await createYunzaiApp());
    tree = await runner.runSchematic('plugin', { name: 'sts', type: 'add' }, tree);
  });

  describe('when add', () => {
    it(`should add files`, () => {
      const json = JSON.parse(tree.readContent('package.json'));
      expect(json.devDependencies['ng-yunzai-sts']).toBeDefined();
      expect(tree.exists(`/_cli-tpl/_fix.js`)).toBe(true);
      expect(
        tree.exists(
          `/_cli-tpl/swagger-edit/__path__/__name@dasherize@if-flat__/__name@dasherize__.component.html.template`
        )
      ).toBe(true);
      expect(
        tree.exists(
          `/_cli-tpl/swagger-list/__path__/__name@dasherize@if-flat__/__name@dasherize__.component.ts.template`
        )
      ).toBe(true);
    });
  });

  describe('when remove', () => {
    beforeEach(async () => (tree = await runner.runSchematic('plugin', { name: 'sts', type: 'remove' }, tree)));
    it(`should add files`, () => {
      const json = JSON.parse(tree.readContent('package.json'));
      expect(json.devDependencies['ng-yunzai-sts']).not.toBeDefined();
    });
  });
});
