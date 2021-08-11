import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { createYunzaiAndModuleApp } from '../utils/testing';

describe('Schematic: curd', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(async () => {
    ({ runner, tree } = await createYunzaiAndModuleApp());
    tree = await runner.runSchematicAsync('curd', { name: 'list', module: 'trade' }, tree).toPromise();
  });

  it('should be generate list page', () => {
    expect(tree.exists('/projects/foo/src/app/routes/trade/list/list.component.ts')).toBe(true);
  });

  it('should be generate view page', () => {
    expect(tree.exists('/projects/foo/src/app/routes/trade/list/view/view.component.ts')).toBe(true);
  });

  it('should be generate edit page', () => {
    expect(tree.exists('/projects/foo/src/app/routes/trade/list/edit/edit.component.ts')).toBe(true);
  });
});
