import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

import sdk from '@stackblitz/sdk';
import { getParameters } from 'codesandbox/lib/api/define';

import { deepCopy } from '@yelon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import pkg from '../../../../package.json';
import { AppService } from '../app.service';
import angularJSON from './files/angular.json';
import appModuleTS from './files/app.module';
import yelonABCModuleTS from './files/yelon-abc.module';
import yelonChartModuleTS from './files/yelon-chart.module';
import environmentTS from './files/environment';
import globalConfigTS from './files/global-config.module';
import mainTS from './files/main';
import mainCliTS from './files/main-cli';
import nzZorroAntdModuleTS from './files/ng-zorro-antd.module';
import packageJSON from './files/package.json';
import polyfillTS from './files/polyfill';
import readme from './files/readme-cli';
import startupServiceTS from './files/startup.service';
import tsconfigJSON from './files/tsconfig.json';

@Injectable({ providedIn: 'root' })
export class CodeService {
  private document: Document;

  private get themePath(): string {
    return `node_modules/@yelon/theme/${this.appSrv.theme}.css`;
  }

  private genPackage({
    dependencies = [],
    devDependencies = [],
    includeCli = false
  }: {
    dependencies: string[];
    devDependencies: string[];
    includeCli: boolean;
  }): Record<string, string | Record<string, string>> {
    const ngCoreVersion = pkg.dependencies['@angular/core'];
    const mainVersion = ngCoreVersion.substring(1).split('.').shift();
    const res = packageJSON as Record<string, NzSafeAny>;
    [
      'ng-zorro-antd',
      'date-fns',
      '@yelon/theme',
      '@yelon/abc',
      '@yelon/chart',
      '@yelon/acl',
      '@yelon/auth',
      '@yelon/cache',
      '@yelon/mock',
      '@yelon/form',
      '@yelon/util',
      '@yelon/bis',
      'ajv',
      'ajv-formats',
      ...dependencies
    ].forEach(k => (res.dependencies[k] = '*'));
    if (includeCli) {
      devDependencies = [
        ...devDependencies,
        'ng-yunzai',
        'ng-yunzai-plugin-theme',
        '@angular/cli',
        '@angular/compiler-cli',
        '@angular-devkit/build-angular'
      ];
    }
    devDependencies.forEach(k => (res.devDependencies[k] = '*'));

    const fullLibs: Record<string, string> = { ...pkg.dependencies, ...pkg.devDependencies };
    ['dependencies', 'devDependencies'].forEach(type => {
      Object.keys(res[type]).forEach(key => {
        res[type][key] = key.startsWith('@yelon') ? `~${pkg.version}` : fullLibs[key] || '*';
      });
    });
    res.dependencies['@angular/core'] = ngCoreVersion;
    ['@angular/cdk', '@ant-design/icons-angular', 'ngx-countdown'].forEach(type => {
      res.dependencies[type] = mainVersion;
    });
    if (!includeCli) res;

    return res;
  }

  constructor(private appSrv: AppService, @Inject(DOCUMENT) document: NzSafeAny) {
    this.document = document;
  }

  private get genStartupService(): string {
    return startupServiceTS({ ajvVersion: pkg.dependencies.ajv.substring(1) });
  }

  private get genMock(): { [key: string]: string } {
    return {
      '_mock/user.ts': require('!!raw-loader!../../../../_mock/user.ts').default,
      '_mock/index.ts': `export * from './user';`
    };
  }

  private parseCode(code: string): { selector: string; componentName: string; html: string } {
    let selector = '';
    let componentName = '';
    const selectorRe = /selector:[ ]?(['|"|`])([^'"`]+)/g.exec(code);
    if (selectorRe) {
      selector = selectorRe[2];
    }
    const componentNameRe = /export class ([^ {]+)/g.exec(code);
    if (componentNameRe) {
      componentName = componentNameRe[1];
    }
    return {
      selector,
      componentName,
      html: [
        `<base href="/">`,
        `<${selector}>loading</${selector}>`,
        `<div id="VERSION" style="position: fixed; bottom: 8px; right: 8px; z-index: 8888;"></div>`
      ].join('\n')
    };
  }

  openOnStackBlitz(appComponentCode: string): void {
    const res = this.parseCode(appComponentCode);
    const json = deepCopy(angularJSON);
    json.projects.demo.architect.build.options.styles.splice(0, 0, this.themePath);
    const packageJson = this.genPackage({ dependencies: [], devDependencies: [], includeCli: false });
    sdk.openProject(
      {
        title: 'NG-YUNZAI',
        description: 'NG-ZORRO  admin panel front-end framework',
        tags: ['ng-yunzai', '@yelon', 'NG-ZORRO', 'ng-zorro-antd', 'Ant Design', 'Angular', 'ng'],
        dependencies: {
          ...(packageJson.dependencies as Record<string, string>),
          ...(packageJson.devDependencies as Record<string, string>)
        },
        files: {
          'angular.json': `${JSON.stringify(json, null, 2)}`,
          'tsconfig.json': `${JSON.stringify(tsconfigJSON, null, 2)}`,
          'package.json': `${JSON.stringify(packageJson, null, 2)}`,
          'src/environments/environment.ts': environmentTS,
          'src/index.html': res.html,
          'src/main.ts': mainTS,
          'src/polyfills.ts': polyfillTS,
          'src/app/app.component.ts': appComponentCode,
          'src/app/app.module.ts': appModuleTS(res.componentName),
          'src/app/global-config.module.ts': globalConfigTS,
          'src/app/ng-zorro-antd.module.ts': nzZorroAntdModuleTS,
          'src/app/yelon-abc.module.ts': yelonABCModuleTS,
          'src/app/yelon-chart.module.ts': yelonChartModuleTS,
          'src/app/startup.service.ts': this.genStartupService,
          'src/styles.css': ``,
          ...this.genMock
        },
        template: 'angular-cli'
      },
      {
        openFile: `src/app/app.component.ts`
      }
    );
  }

  openOnCodeSandbox(appComponentCode: string, includeCli: boolean = false): void {
    const res = this.parseCode(appComponentCode);
    const mockObj = this.genMock;
    const json = deepCopy(angularJSON);
    json.projects.demo.architect.build.options.styles.splice(0, 0, this.themePath);
    const packageJson = this.genPackage({ dependencies: [], devDependencies: [], includeCli });
    const files: {
      [key: string]: {
        content: string;
        isBinary: boolean;
      };
    } = {
      'package.json': {
        content: JSON.stringify(packageJson, null, 2),
        isBinary: false
      },
      'angular.json': {
        content: `${JSON.stringify(json, null, 2)}`,
        isBinary: false
      },
      'tsconfig.json': {
        content: `${JSON.stringify(tsconfigJSON, null, 2)}`,
        isBinary: false
      },
      'src/environments/environment.ts': {
        content: environmentTS,
        isBinary: false
      },
      'src/index.html': {
        content: res.html,
        isBinary: false
      },
      'src/main.ts': {
        content: includeCli ? mainCliTS : mainTS,
        isBinary: false
      },
      'src/polyfills.ts': {
        content: polyfillTS,
        isBinary: false
      },
      'src/app/app.module.ts': {
        content: appModuleTS(res.componentName),
        isBinary: false
      },
      'src/app/global-config.module.ts': {
        content: globalConfigTS,
        isBinary: false
      },
      'src/app/app.component.ts': {
        content: appComponentCode,
        isBinary: false
      },
      'src/app/ng-zorro-antd.module.ts': {
        content: nzZorroAntdModuleTS,
        isBinary: false
      },
      'src/app/yelon-abc.module.ts': {
        content: yelonABCModuleTS,
        isBinary: false
      },
      'src/app/yelon-chart.module.ts': {
        content: yelonChartModuleTS,
        isBinary: false
      },
      'src/app/startup.service.ts': {
        content: this.genStartupService,
        isBinary: false
      },
      'src/styles.css': {
        content: ``,
        isBinary: false
      },
      '_mock/user.ts': {
        content: mockObj['_mock/user.ts'],
        isBinary: false
      },
      '_mock/index.ts': {
        content: mockObj['_mock/index.ts'],
        isBinary: false
      }
    };
    if (includeCli) {
      files['README.md'] = {
        content: readme,
        isBinary: false
      };
      files['sandbox.config.json'] = {
        content: JSON.stringify(
          {
            template: 'node',
            container: {
              node: 14
            }
          },
          null,
          2
        ),
        isBinary: false
      };
    }
    const parameters = getParameters({
      files
    });

    const form = this.document.createElement('form');
    const parametersInput = this.document.createElement('input');
    form.method = 'POST';
    form.action = 'https://codesandbox.io/api/v1/sandboxes/define';
    form.target = '_blank';
    parametersInput.name = 'parameters';
    parametersInput.value = parameters;
    form.appendChild(parametersInput);
    this.document.body.append(form);
    form.submit();
    this.document.body.removeChild(form);
  }
}
