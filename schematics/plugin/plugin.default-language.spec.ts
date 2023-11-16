import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { createYunzaiApp } from '../utils/testing';

const PATH = '/projects/foo/src/app/app.module.ts';

describe('NgYunzaiSchematic: plugin: default-language', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(async () => ({ runner, tree } = await createYunzaiApp({ defaultLanguage: 'en' })));

  it(`should working`, () => {
    const content = tree.readContent(PATH);
    expect(content).toContain(`@angular/common/locales/en`);
    expect(content).toContain(`provideNzI18n, en_US`);
    expect(content).toContain(`YELON_LOCALE, en_US`);
  });

  it('should be from en to zh', async () => {
    await runner.runSchematic('plugin', { name: 'defaultLanguage', type: 'add', defaultLanguage: 'zh' }, tree);
    const content = tree.readContent(PATH);
    expect(content).toContain(`@angular/common/locales/zh`);
    expect(content).toContain(`provideNzI18n, zh_CN`);
    expect(content).toContain(`YELON_LOCALE, zh_CN`);
  });
});
