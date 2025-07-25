import { inject, Injectable, OnDestroy } from '@angular/core';

import { YunzaiConfigService, YunzaiMockConfig } from '@yelon/util/config';

import { MockCachedRule, MockRule } from './interface';
import { MOCK_DEFAULT_CONFIG } from './mock.config';
import { YELON_MOCK_CONFIG } from './provide';

@Injectable({ providedIn: 'root' })
export class MockService implements OnDestroy {
  private readonly cogSrv = inject(YunzaiConfigService);
  private readonly options = inject(YELON_MOCK_CONFIG, { optional: true });
  private cached: MockCachedRule[] = [];
  readonly config: YunzaiMockConfig;

  constructor() {
    this.config = this.cogSrv.merge('mock', MOCK_DEFAULT_CONFIG)!;
    this.setData(this.options?.data);
  }

  /**
   * Reset request data
   *
   * 重新设置请求数据
   */
  setData(data: any): void {
    this.applyMock(data);
  }

  // #region parse rule

  private applyMock(data: any): void {
    this.cached = [];
    try {
      this.realApplyMock(data);
    } catch (e) {
      this.outputError(e);
    }
  }

  private realApplyMock(data: any): void {
    if (!data) return;
    Object.keys(data).forEach((key: string) => {
      const rules = data[key];
      if (!rules) return;
      Object.keys(rules).forEach((ruleKey: string) => {
        const value = rules[ruleKey];
        if (!(typeof value === 'function' || typeof value === 'object' || typeof value === 'string')) {
          throw Error(
            `mock value of [${key}-${ruleKey}] should be function or object or string, but got ${typeof value}`
          );
        }
        const rule = this.genRule(ruleKey, value);
        if (['GET', 'POST', 'PUT', 'HEAD', 'DELETE', 'PATCH', 'OPTIONS'].indexOf(rule.method) === -1) {
          throw Error(`method of ${key}-${ruleKey} is not valid`);
        }
        const item = this.cached.find(w => w.url === rule.url && w.method === rule.method);
        if (item) {
          item.callback = rule.callback;
        } else {
          this.cached.push(rule);
        }
      });
    });
    // regular ordering
    this.cached.sort((a, b) => (b.martcher || '').toString().length - (a.martcher || '').toString().length);
  }

  private genRule(key: string, callback: any): MockCachedRule {
    let method = 'GET';
    let url = key;

    if (key.indexOf(' ') > -1) {
      const splited = key.split(' ');
      method = splited[0].toLowerCase();
      url = splited[1];
    }

    let martcher: RegExp | null = null;
    let segments: string[] = [];
    if (~url.indexOf(':')) {
      segments = url!
        .split('/')
        .filter(segment => segment.startsWith(':'))
        .map(v => v.substring(1));
      const reStr = url!
        .split('/')
        .map(segment => (segment.startsWith(':') ? `([^/]+)` : segment))
        .join('/');
      martcher = new RegExp(`^${reStr}`, 'i');
    } else if (/(\([^)]+\))/i.test(url)) {
      martcher = new RegExp(url, 'i');
    }

    return {
      url,
      martcher,
      segments,
      callback,
      method: method.toUpperCase()
    };
  }

  private outputError(error: any): void {
    const filePath = error.message.split(': ')[0];
    const errors = (error.stack as string)
      .split('\n')
      .filter(line => line.trim().indexOf('at ') !== 0)
      .map(line => line.replace(`${filePath}: `, ''));
    errors.splice(1, 0, '');

    console.group();
    console.warn(`==========Failed to parse mock config.==========`);
    console.log(errors.join('\n'));
    console.groupEnd();

    throw error;
  }

  // #endregion

  getRule(method: string, url: string): MockRule | null {
    method = (method || 'GET').toUpperCase();
    const params: any = {};
    const list = this.cached.filter(w => w.method === method && (w.martcher ? w.martcher.test(url) : w.url === url));
    if (list.length === 0) return null;
    const ret = list.find(w => w.url === url) || list[0];
    if (ret.martcher) {
      const execArr = ret.martcher.exec(url);
      execArr!.slice(1).map((value: string, index: number) => {
        params[ret.segments[index]] = value;
      });
    }
    return {
      url,
      method: ret.method,
      params,
      callback: ret.callback
    };
  }

  clearCache(): void {
    this.cached = [];
  }

  get rules(): MockCachedRule[] {
    return this.cached;
  }

  ngOnDestroy(): void {
    this.clearCache();
  }
}
