import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { createYunzaiApp } from '../utils/testing';

describe('NgYunzaiSchematic: plugin: rtl', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(async () => {
    ({ runner, tree } = await createYunzaiApp());
    tree = await runner.runSchematic('plugin', { name: 'rtl', type: 'add' }, tree);
  });

  it(`should be working`, () => {
    const con = tree.readContent(`/projects/foo/src/app/layout/basic/basic.component.ts`);
    expect(con).toContain(`HeaderRTLComponent`);
  });
});
