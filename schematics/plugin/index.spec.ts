import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { createYunzaiApp } from '../utils/testing';

describe('NgYunzaiSchematic: plugin', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(async () => ({ runner, tree } = await createYunzaiApp({})));

  it('should be throw error when not find plugin name', async () => {
    try {
      await runner.runSchematic('plugin', { name: 'invalid-name', type: 'remove', packageManager: 'npm' }, tree);
      expect(true).toBe(false);
    } catch {
      expect(true).toBe(true);
    }
  });
});
