import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { createYunzaiAndModuleApp } from '../utils/testing';
import { addValueToVariable, CommonSchema } from './yunzai';

describe('Schematic: yunzai', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(async () => {
    ({ runner, tree } = await createYunzaiAndModuleApp());
  });

  it('#addValueToVariable', () => {
    const fileName = '1.ts';
    const newComponentName = 'AComponent';
    tree.create(
      fileName,
      `
const COMPONENTS = [Components...];
    `
    );
    addValueToVariable(tree, fileName, 'COMPONENTS', newComponentName, false);
    const content = tree.readContent(fileName);
    expect(content.includes(`Components...,AComponent`)).toBe(true);
  });

  describe('#withoutModulePrefixInComponentName', () => {
    it('with true', async () => {
      tree = await runner.runSchematic(
        'empty',
        { name: 'list', module: 'trade', withoutModulePrefixInComponentName: true } as CommonSchema,
        tree
      );
      const listTsCon = tree.readContent(`/projects/foo/src/app/routes/trade/list/list.component.ts`);
      expect(listTsCon).toContain(`ListComponent`);
    });
    it('with false', async () => {
      tree = await runner.runSchematic('empty', { name: 'list', module: 'trade' } as CommonSchema, tree);
      const listTsCon = tree.readContent(`/projects/foo/src/app/routes/trade/list/list.component.ts`);
      expect(listTsCon).toContain(`TradeListComponent`);
    });
  });
});
