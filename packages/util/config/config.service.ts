import { inject, Injectable } from '@angular/core';
import { SIGNAL, SignalNode } from '@angular/core/primitives/signals';

import { deepMergeKey } from '@yelon/util/other';


import { YunzaiConfig, YunzaiConfigKey, YUNZAI_CONFIG } from './config.types';

@Injectable({ providedIn: 'root' })
export class YunzaiConfigService {
  private readonly config = { ...inject(YUNZAI_CONFIG, { optional: true }) };

  get<T extends YunzaiConfigKey>(componentName: T, key?: string): YunzaiConfig[T] {
    const res = ((this.config[componentName] as Record<string, unknown>) || {}) as any;
    return key ? { [key]: res[key] } : res;
  }

  merge<T extends YunzaiConfigKey>(componentName: T, ...defaultValues: Array<YunzaiConfig[T]>): YunzaiConfig[T] {
    return deepMergeKey({}, true, ...defaultValues, this.get(componentName));
  }

  /**
   * 将配置附加到当前实例中，支持 Signal 信号
   */
  attach<T extends YunzaiConfigKey>(componentThis: unknown, componentName: T, defaultValues: YunzaiConfig[T]): void {
    const data = this.merge<T>(componentName, defaultValues);
    Object.entries(data as object).forEach(([key, value]) => {
      const t = componentThis as any;
      const s = t[key]?.[SIGNAL] as SignalNode<any>;
      if (s != null) {
        s.value = value;
      } else {
        t[key] = value;
      }
    });
  }

  set<T extends YunzaiConfigKey>(componentName: T, value: YunzaiConfig[T]): void {
    this.config[componentName] = { ...this.config[componentName], ...value };
  }
}
