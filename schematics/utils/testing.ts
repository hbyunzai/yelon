import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { join } from 'path';

import { Schema as NgAddSchema } from '../ng-add/schema';

/** Path to the collection file for the Material schematics */
export const collectionPath = join(__dirname, '..', 'collection.json');

/** Path to the migration file for the Material update schematics */
export const migrationCollection = join(__dirname, '..', 'migration.json');

export const APPNAME = 'foo';
export const FILE_PREFIX = `/projects/${APPNAME}`;

export interface AppResult {
  runner: SchematicTestRunner;
  tree: UnitTestTree;
}

export function createNgRunner(): SchematicTestRunner {
  return new SchematicTestRunner('schematics', join('./node_modules/@schematics/angular/collection.json'));
}

export function createYunzaiRunner(): SchematicTestRunner {
  return new SchematicTestRunner('schematics', collectionPath);
}

export async function createYunzaiApp(ngAddOptions?: NgAddSchema): Promise<AppResult> {
  const baseRunner = createNgRunner();
  const workspaceTree = await baseRunner.runSchematic('workspace', {
    name: 'workspace',
    newProjectRoot: 'projects',
    version: '8.0.0'
  });
  const appTree = await baseRunner.runSchematic(
    'application',
    {
      name: APPNAME,
      inlineStyle: false,
      inlineTemplate: false,
      routing: false,
      style: 'css',
      skipTests: false,
      skipPackageJson: false
    },
    workspaceTree
  );
  const yunzaiRunner = createYunzaiRunner();
  const tree = await yunzaiRunner.runSchematic(
    'ng-add',
    {
      skipPackageJson: false,
      ...ngAddOptions
    },
    appTree
  );
  return { runner: yunzaiRunner, tree };
}

export async function createYunzaiAndModuleApp(
  name: string = 'trade',
  ngAddOptions?: object,
  yunzaiData?: unknown
): Promise<AppResult> {
  const res = await createYunzaiApp(ngAddOptions);
  if (yunzaiData != null) {
    res.tree.create('ng-yunzai.json', JSON.stringify(yunzaiData));
  }
  res.tree = await res.runner.runSchematic('module', { name, project: APPNAME, routing: true }, res.tree);
  return res;
}

export async function createTestApp(): Promise<{ runner: SchematicTestRunner; tree: UnitTestTree }> {
  const runner = await createNgRunner();
  const workspaceTree = await runner.runSchematic('workspace', {
    name: 'workspace',
    newProjectRoot: 'projects',
    version: '8.0.0'
  });
  const appTree = await runner.runSchematic(
    'application',
    {
      name: APPNAME,
      inlineStyle: false,
      inlineTemplate: false,
      routing: false,
      style: 'css',
      skipTests: false,
      skipPackageJson: false
    },
    workspaceTree
  );
  return { runner, tree: appTree };
}
