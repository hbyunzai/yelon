export default {
  $schema: './node_modules/@angular/cli/lib/config/schema.json',
  cli: {
    analytics: '1e1de97b-a744-405a-8b5a-0397bb3d01ce'
  },
  newProjectRoot: 'projects',
  projects: {
    demo: {
      architect: {
        build: {
          builder: '@angular-devkit/build-angular:application',
          configurations: {
            development: {
              extractLicenses: false,
              namedChunks: true,
              optimization: false,
              sourceMap: true
            },
            production: {
              aot: true,
              extractLicenses: true,
              namedChunks: false,
              optimization: true,
              outputHashing: 'all',
              sourceMap: false
            }
          },
          options: {
            assets: [],
            index: 'src/index.html',
            browser: 'src/main.ts',
            outputPath: 'dist/demo',
            scripts: [],
            styles: ['src/styles.css'],
            tsConfig: 'tsconfig.json'
          }
        },
        serve: {
          builder: '@angular-devkit/build-angular:dev-server',
          configurations: {
            development: {
              buildTarget: 'demo:build:development'
            },
            production: {
              buildTarget: 'demo:build:production'
            }
          },
          defaultConfiguration: 'development'
        }
      },
      prefix: 'app',
      projectType: 'application',
      root: '',
      schematics: {},
      sourceRoot: 'src'
    }
  },
  version: 1
};
