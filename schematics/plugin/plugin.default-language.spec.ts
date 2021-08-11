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
    expect(content).toContain(`NZ_I18N, en_US`);
    expect(content).toContain(`YELON_LOCALE, en_US`);
  });

  it('should be from en to zh', async () => {
    await runner
      .runSchematicAsync('plugin', { name: 'defaultLanguage', type: 'add', defaultLanguage: 'zh' }, tree)
      .toPromise();
    const content = tree.readContent(PATH);
    expect(content).toContain(`@angular/common/locales/zh`);
    expect(content).toContain(`NZ_I18N, zh_CN`);
    expect(content).toContain(`YELON_LOCALE, zh_CN`);
  });
});
