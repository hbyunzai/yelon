export default {
  name: 'ng-yunzai',
  tags: ['NG-YUNZAI'],
  version: '0.0.0',
  scripts: {
    ng: 'ng',
    start: 'ng serve --disable-host-check',
    build: 'ng build',
    test: 'ng test',
    lint: 'ng lint',
    e2e: 'ng e2e'
  },
  private: true,
  dependencies: {
    '@angular/animations': '~13.1.0',
    '@angular/common': '~13.1.0',
    '@angular/compiler': '~13.1.0',
    '@angular/core': '~13.1.0',
    '@angular/forms': '~13.1.0',
    '@angular/platform-browser': '~13.1.0',
    '@angular/platform-browser-dynamic': '~13.1.0',
    '@angular/router': '~13.1.0',
    rxjs: '~7.4.0',
    tslib: '^2.3.0',
    'zone.js': '~0.11.4'
  },
  devDependencies: {
    '@angular-devkit/build-angular': '~13.1.2',
    '@angular/cli': '~13.1.2',
    '@angular/compiler-cli': '~13.1.0',
    '@types/jasmine': '~3.10.0',
    '@types/node': '^12.11.1',
    'jasmine-core': '~3.10.0',
    karma: '~6.3.0',
    'karma-chrome-launcher': '~3.1.0',
    'karma-coverage': '~2.1.0',
    'karma-jasmine': '~4.0.0',
    'karma-jasmine-html-reporter': '~1.7.0',
    typescript: '~4.5.2'
  }
};
