import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { createYunzaiApp } from '../utils/testing';

describe('Schematic: ng-add', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(async () => ({ runner, tree } = await createYunzaiApp()));

  it('should dependencies @yelon of an application', () => {
    const packageJson = JSON.parse(tree.readContent('package.json'));
    expect(packageJson.dependencies['@yelon/theme']).toBeDefined();
  });
});
