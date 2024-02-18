/* eslint-disable @typescript-eslint/no-explicit-any */
import { Inject, Injectable, Optional } from '@angular/core';

import { deepMergeKey } from '@yelon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { YunzaiConfig, YunzaiConfigKey, YUNZAI_CONFIG } from './config.types';

@Injectable({ providedIn: 'root' })
export class YunzaiConfigService {
  private config: YunzaiConfig;

  constructor(@Optional() @Inject(YUNZAI_CONFIG) defaultConfig?: YunzaiConfig) {
    this.config = { ...defaultConfig };
  }

  get<T extends YunzaiConfigKey>(componentName: T, key?: string): YunzaiConfig[T] {
    const res = ((this.config[componentName] as { [key: string]: unknown }) || {}) as NzSafeAny;
    return key ? { [key]: res[key] } : res;
  }

  merge<T extends YunzaiConfigKey>(componentName: T, ...defaultValues: Array<YunzaiConfig[T]>): YunzaiConfig[T] {
    return deepMergeKey({}, true, ...defaultValues, this.get(componentName));
  }

  attach<T extends YunzaiConfigKey>(componentThis: unknown, componentName: T, defaultValues: YunzaiConfig[T]): void {
    Object.assign(componentThis as any, this.merge(componentName, defaultValues));
  }

  attachKey<T extends YunzaiConfigKey>(componentThis: unknown, componentName: T, key: string): void {
    Object.assign(componentThis as any, this.get(componentName, key));
  }

  set<T extends YunzaiConfigKey>(componentName: T, value: YunzaiConfig[T]): void {
    this.config[componentName] = { ...this.config[componentName], ...value };
  }
}
