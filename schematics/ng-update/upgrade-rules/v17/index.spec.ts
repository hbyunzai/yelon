import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import jsonSchema from './files/jsonSchemaModule';
import { tryAddFile } from '../../../utils';
import { createYunzaiApp, migrationCollection } from '../../../utils/testing';

describe('Schematic: ng-update: v17Rule', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;
  const logs: string[] = [];

  beforeEach(async () => {
    ({ runner, tree } = await createYunzaiApp());
  });

  async function runMigration(): Promise<void> {
    logs.length = 0;
    runner = new SchematicTestRunner('schematics', migrationCollection);
    runner.logger.subscribe(e => logs.push(e.message));
    await runner.runSchematic('migration-v17', {}, tree);
  }

  it('should be working', async () => {
    const jsonSchemaModulePath = '/projects/foo/src/app/shared/json-schema/json-schema.module.ts';
    tryAddFile(tree, jsonSchemaModulePath, jsonSchema);
    await runMigration();
    const content = tree.readContent(jsonSchemaModulePath);
    expect(content).toContain(`import { UploadWidgetModule } from '@yelon/form/widgets/upload';`);
    expect(content).toContain(`, UploadWidgetModule`);
  });

  it('#removeForRoot', async () => {
    const globalConfigPath = '/projects/foo/src/app/global-config.module.ts';
    tryAddFile(
      tree,
      globalConfigPath,
      `
    import { YunzaiThemeModule } from '@yelon/theme';
    const yunzaiModules: any[] = [YunzaiThemeModule.forRoot(), YelonACLModule.forRoot()];
    const yunzaiProvides = [{ provide: YUNZAI_CONFIG, useValue: yunzaiConfig }];
    `
    );
    await runMigration();
    const content = tree.readContent(globalConfigPath);
    expect(content).not.toContain(`YunzaiThemeModule.forRoot()`);
    expect(content).toContain(`provideYunzai(`);
    expect(content).not.toContain(`YelonACLModule.forRoot()`);
  });

  it('#replaceProvideYunzaiConfig', async () => {
    const globalConfigPath = '/projects/foo/src/app/global-config.module.ts';
    tryAddFile(tree, globalConfigPath, `const yunzaiProvides = [{ provide: YUNZAI_CONFIG, useValue: yunzaiConfig }];`);
    await runMigration();
    const content = tree.readContent(globalConfigPath);
    expect(content).toContain(`provideYunzai({ config: yunzaiConfig })`);
  });

  it('should be use provideMockConfig instead of YelonMockModule', async () => {
    const globalConfigPath = '/projects/foo/src/environments/environment.ts';
    tryAddFile(
      tree,
      globalConfigPath,
      `import * as MOCKDATA from '@_mock';
    import { YelonMockModule } from '@yelon/mock';
    import { Environment } from '@yelon/theme';

    export const environment = {
      production: false,
      useHash: true,
      api: {
        baseUrl: './',
        refreshTokenEnabled: true,
        refreshTokenType: 'auth-refresh'
      },
      modules: [YelonMockModule.forRoot({ data: MOCKDATA })]
    } as Environment;`
    );
    await runMigration();
    const content = tree.readContent(globalConfigPath);
    expect(content).toContain(`provideMockConfig`);
  });

  it('#preloader', async () => {
    const appCompPath = '/projects/foo/src/app/app.component.ts';
    tryAddFile(
      tree,
      appCompPath,
      `import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, NavigationError, RouteConfigLoadStart, Router } from '@angular/router';
import { TitleService, VERSION as VERSION_YUNZAI } from '@yelon/theme';
import { environment } from '@env/environment';
import { NzModalService } from 'ng-zorro-antd/modal';
import { VERSION as VERSION_ZORRO } from 'ng-zorro-antd/version';

@Component({
  selector: 'app-root',
})
export class AppComponent implements OnInit {
  constructor(
    el: ElementRef,
    renderer: Renderer2,
    private router: Router,
    private titleSrv: TitleService,
    private modalSrv: NzModalService
  ) {
    renderer.setAttribute(el.nativeElement, 'ng-yunzai-version', VERSION_YUNZAI.full);
    renderer.setAttribute(el.nativeElement, 'ng-zorro-version', VERSION_ZORRO.full);
  }

  ngOnInit(): void {
    let configLoad = false;
    this.router.events.subscribe(ev => {
      if (ev instanceof RouteConfigLoadStart) {
        configLoad = true;
      }
      if (ev instanceof NavigationEnd) {
        this.titleSrv.setTitle();
        this.modalSrv.closeAll();
      }
    });
  }
}
`
    );
    await runMigration();
    const content = tree.readContent(appCompPath);
    expect(content).toContain(`private donePreloader = stepPreloader();`);
    expect(content).toContain(`this.donePreloader();`);
  });

  it('add ng-less-javascript-enabled-patch', async () => {
    const packageJsonPath = '/package.json';
    tryAddFile(
      tree,
      packageJsonPath,
      `{
        "scripts": {},
        "devDependencies": {}
      }`
    );
    await runMigration();
    const content = tree.readContent(packageJsonPath);
    expect(content).toContain(`"ng-less-javascript-enabled-patch": "^17.0.0"`);
  });
});
