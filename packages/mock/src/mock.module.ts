import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { MockOptions } from './interface';
import { MockInterceptor } from './mock.interceptor';

@NgModule({})
export class YelonMockModule {
  static forRoot(options?: MockOptions): ModuleWithProviders<YelonMockModule> {
    return {
      ngModule: YelonMockModule,
      providers: [
        { provide: MockOptions, useValue: options },
        { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }
      ]
    };
  }

  static forChild(): ModuleWithProviders<YelonMockModule> {
    return {
      ngModule: YelonMockModule,
      providers: [{ provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }]
    };
  }
}
