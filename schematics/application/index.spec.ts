import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import * as LANG from '../core/lang.config';
import { APPNAME, createYunzaiApp, createYunzaiRunner, createNgRunner } from '../utils/testing';

describe('NgYunzaiSchematic: application', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  describe(``, () => {
    beforeEach(async () => ({ runner, tree } = await createYunzaiApp()));
    it(`should add @yelon to dependencies`, () => {
      const packageJson = JSON.parse(tree.readContent('package.json'));
      expect(packageJson.dependencies['@yelon/theme']).toBeDefined();
      expect(packageJson.dependencies['@yelon/abc']).toBeDefined();
      expect(packageJson.dependencies['@yelon/util']).toBeDefined();
      expect(packageJson.dependencies['@yelon/acl']).toBeDefined();
      expect(packageJson.dependencies['@yelon/auth']).toBeDefined();
      expect(packageJson.dependencies['@yelon/cache']).toBeDefined();
      expect(packageJson.dependencies['@yelon/mock']).toBeDefined();
    });
    // it('should be add vscode extensions confir', () => {
    //   const filePath = '.vscode/extensions.json';
    //   expect(tree.exists(filePath)).toBe(true, `Not found [${filePath}]`);
    //   const json = JSON.parse(tree.readContent(filePath));
    //   expect(json != null).toBe(true);
    //   expect(json.recommendations[0]).toBe('cipchk.ng-yunzai-extension-pack');
    // });
  });

  describe('#i18n', () => {
    describe('with true', () => {
      beforeEach(async () => ({ runner, tree } = await createYunzaiApp({ i18n: true })));
      it(`can add i18n related`, () => {
        const specTs = tree.readContent('/projects/foo/src/app/app.module.ts');
        expect(specTs).toContain(`import { I18NService } from '@core'`);
      });
    });
    describe('with false', () => {
      beforeEach(async () => ({ runner, tree } = await createYunzaiApp({ i18n: false })));
      it(`can't add i18n related`, () => {
        const specTs = tree.readContent('/projects/foo/src/app/app.module.ts');
        expect(specTs).not.toContain(`@core/i18n/`);
      });
    });
    describe('default language', () => {
      it(`with use zh`, async () => {
        spyOn(LANG, 'getLangData').and.returnValue({
          key1: 'Key1',
          key2: 'KEY2'
        });
        const baseRunner = createNgRunner();
        const workspaceTree = await baseRunner
          .runSchematicAsync('workspace', {
            name: 'workspace',
            newProjectRoot: 'projects',
            version: '6.0.0'
          })
          .toPromise();
        const appTree = await baseRunner
          .runSchematicAsync(
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
          )
          .toPromise();
        appTree.create(
          '/demo.html',
          `
        {{(status ? 'key1' : 'key2') | i18n }}
        {{ (status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | i18n }}
        [placeholder]="'key1' | i18n">
        <nz-tab [nzTitle]="'key1' | i18n">
        {{ 'Please enter mobile number!' | i18n }}
        <button>{{ count ? count + 's' : 'key1' | i18n }}</button>
        `
        );

        const yunzaiRunner = createYunzaiRunner();
        const tree = await yunzaiRunner
          .runSchematicAsync(
            'ng-add',
            {
              skipPackageJson: false,
              defaultLanguage: 'zh'
            },
            appTree
          )
          .toPromise();

        const res = tree.readContent('/demo.html');
        expect(res).toBe(`
        {{ status ? 'Key1' : 'KEY2' }}
        {{ status ? 'menu.fullscreen.exit' : 'menu.fullscreen' }}
        [placeholder]="'Key1'">
        <nz-tab [nzTitle]="'Key1'">
        Please enter mobile number!
        <button>{{ count ? count + 's' : 'Key1'}}</button>
        `);
      });
    });
  });
});
