export default `import { ModuleWithProviders, NgModule } from '@angular/core';
import { YelonMockModule } from '@yelon/mock';
import { YunzaiThemeModule } from '@yelon/theme';
import { YunzaiConfig, YUNZAI_CONFIG, YunzaiConfigService } from '@yelon/util/config';

// Please refer to: https://ng.yunzainfo.com/docs/global-config
// #region NG-YUNZAI Config

import { YelonACLModule } from '@yelon/acl';
import * as MOCKDATA from '../../_mock';

const yunzaiConfig: YunzaiConfig = { };

const yunzaiModules = [YunzaiThemeModule.forRoot(), YelonACLModule.forRoot(), YelonMockModule.forRoot({ data: MOCKDATA })];
const yunzaiProvides = [{ provide: YUNZAI_CONFIG, useValue: yunzaiConfig }];

// #region reuse-tab

import { RouteReuseStrategy } from '@angular/router';
import { ReuseTabService, ReuseTabStrategy } from '@yelon/abc/reuse-tab';
yunzaiProvides.push({
  provide: RouteReuseStrategy,
  useClass: ReuseTabStrategy,
  deps: [ReuseTabService],
} as any);

// #endregion

// fix
yunzaiProvides.push(YunzaiConfigService as any);

// #endregion

// Please refer to: https://ng.ant.design/docs/global-config/en#how-to-use
// #region NG-ZORRO Config

import { NzConfig, provideNzConfig } from 'ng-zorro-antd/core/config';

const ngZorroConfig: NzConfig = {};

const zorroProvides = [provideNzConfig(ngZorroConfig)];


// #endregion

@NgModule({
  imports: [...yunzaiModules],
})
export class GlobalConfigModule {
  static forRoot(): ModuleWithProviders<GlobalConfigModule> {
    return {
      ngModule: GlobalConfigModule,
      providers: [...yunzaiProvides, ...zorroProvides],
    };
  }
}
`;
