import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { createYunzaiApp } from '../utils/testing';

const PATH = '/projects/foo/src/app/app.config.ts';

describe('NgYunzaiSchematic: plugin: default-language', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(async () => ({ runner, tree } = await createYunzaiApp({ defaultLanguage: 'en' })));

  it(`should working`, () => {
    const content = tree.readContent(PATH);
    expect(content).toContain(`@angular/common/locales/en`);
    expect(content).toContain(`en_US as zorroLang`);
    expect(content).toContain(`enUS as dateLang`);
    expect(content).toContain(`en_US as yelonLang`);
  });

  it('should be from en to zh', async () => {
    await runner.runSchematic('plugin', { name: 'defaultLanguage', type: 'add', defaultLanguage: 'zh' }, tree);
    const content = tree.readContent(PATH);
    expect(content).toContain(`@angular/common/locales/zh`);
    expect(content).toContain(`zh_CN as zorroLang`);
    expect(content).toContain(`zhCN as dateLang`);
    expect(content).toContain(`zh_CN as yelonLang`);
  });
});
