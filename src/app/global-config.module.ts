/* eslint-disable import/order */
import { ModuleWithProviders, NgModule } from '@angular/core';

import { YelonACLModule } from '@yelon/acl';
import { YelonMockModule } from '@yelon/mock';
import { YunzaiThemeModule } from '@yelon/theme';
import { YunzaiConfig, YUNZAI_CONFIG } from '@yelon/util/config';

// Please refer to: https://ng.yunzainfo.com/docs/global-config
// #region NG-YUNZAI Config

import * as MOCKDATA from '../../_mock';

const yunzaiConfig: YunzaiConfig = {
  st: { ps: 3 },
  lodop: {
    license: `A59B099A586B3851E0F0D7FDBF37B603`,
    licenseA: `C94CEE276DB2187AE6B65D56B3FC2848`
  },
  chart: {
    echartsExtensions: ['https://cdnjs.cloudflare.com/ajax/libs/echarts/5.1.0/theme/dark.min.js']
  },
  themeI18n: {
    paramNameOfUrlGuard: 'lang'
  },
  xlsx: {
    url: '/assets/xlsx/xlsx.full.min.js',
    modules: [`/assets/xlsx/cpexcel.js`]
  },
  zip: {
    url: '/assets/jszip/jszip.min.js'
  },
  qr: {
    lib: '/assets/qrious/qrious.min.js'
  },
  // pdf: {
  //   lib: '/assets/pdfjs/'
  // },
  media: {
    urls: ['assets/plyr/plyr.min.js', 'assets/plyr/plyr.css'],
    options: {
      iconUrl: 'assets/plyr/plyr.svg',
      blankVideo: 'https://cdn.plyr.io/static/blank.mp4'
    }
  }
};

const yunzaiProvides = [{ provide: YUNZAI_CONFIG, useValue: yunzaiConfig }];

// #endregion

// Please refer to: https://ng.ant.design/docs/global-config/en#how-to-use
// #region NG-ZORRO Config

import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';

const ngZorroConfig: NzConfig = {};

const zorroProvides = [{ provide: NZ_CONFIG, useValue: ngZorroConfig }];

// #endregion

// #region reuse-tab

// import { RouteReuseStrategy } from '@angular/router';
// import { ReuseTabService, ReuseTabStrategy } from '@yelon/abc/reuse-tab';
// yunzaiProvides.push({
//   provide: RouteReuseStrategy,
//   useClass: ReuseTabStrategy,
//   deps: [ReuseTabService],
// } as any);

// #endregion

@NgModule({
  imports: [YunzaiThemeModule.forRoot(), YelonACLModule.forRoot(), YelonMockModule.forRoot({ data: MOCKDATA })]
})
export class GlobalConfigModule {
  static forRoot(): ModuleWithProviders<GlobalConfigModule> {
    return {
      ngModule: GlobalConfigModule,
      providers: [...yunzaiProvides, ...zorroProvides]
    };
  }
}
