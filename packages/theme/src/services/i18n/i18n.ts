import { inject, Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject, Observable, filter } from 'rxjs';

import { YunzaiConfigService, YunzaiThemeI18nConfig } from '@yelon/util/config';

export interface YunzaiI18NService {
  [key: string]: any;

  /**
   * Call `use` to trigger change notification
   *
   * 调用 `use` 触发变更通知
   */
  readonly change: Observable<string>;

  /**
   * Get the default language
   *
   * 获取默认语言
   */
  readonly defaultLang: string;

  /**
   * Get current language
   *
   * 获取当前语言
   */
  readonly currentLang: string;

  /**
   * Change language
   *
   * 变更语言
   *
   * @param emit 是否触发 `change`，默认：true ; Should be removed, please use `change` event instead.
   */
  use(lang: string, data?: Record<string, unknown>): void;

  /**
   * Return to the current language list
   *
   * 返回当前语言列表
   */
  getLangs(): any[];

  /**
   * Translate 翻译
   *
   * @param params 模板所需要的参数对象
   * @param isSafe 是否返回安全字符，自动调用 `bypassSecurityTrustHtml`; Should be removed, If you need SafeHtml support, please use `| html` pipe instead.
   */
  fanyi(path: string, params?: unknown | unknown[]): string;
}

export const YUNZAI_I18N_TOKEN = new InjectionToken<YunzaiI18NService>('yunzaiI18nToken', {
  providedIn: 'root',
  factory: () => new YunzaiI18NServiceFake()
});

@Injectable()
export abstract class YunzaiI18nBaseService implements YunzaiI18NService {
  protected readonly cogSrv = inject(YunzaiConfigService);
  private cog: YunzaiThemeI18nConfig;
  protected _change$ = new BehaviorSubject<string | null>(null);
  protected _currentLang: string = '';
  protected _defaultLang: string = '';
  protected _data: Record<string, string> = {};
  get change(): Observable<string> {
    return this._change$.asObservable().pipe(filter(w => w != null)) as Observable<string>;
  }
  get defaultLang(): string {
    return this._defaultLang;
  }
  get currentLang(): string {
    return this._currentLang;
  }
  get data(): Record<string, string> {
    return this._data;
  }

  constructor() {
    this.cog = this.cogSrv.merge('themeI18n', {
      interpolation: ['{{', '}}']
    })!;
  }

  /**
   * Flattened data source
   *
   * @example
   * {
   *   "name": "Name",
   *   "sys": {
   *     "": "System",
   *     "title": "Title"
   *   }
   * }
   * =>
   * {
   *   "name": "Name",
   *   "sys": "System",
   *   "sys.title": "Title"
   * }
   */
  flatData(data: Record<string, unknown>, parentKey: string[]): Record<string, string> {
    const res: Record<string, string> = {};
    for (const key of Object.keys(data)) {
      const value = data[key];
      if (typeof value === 'object') {
        const child = this.flatData(value as Record<string, unknown>, parentKey.concat(key));
        Object.keys(child).forEach(childKey => (res[childKey] = child[childKey]));
      } else {
        res[(key ? parentKey.concat(key) : parentKey).join('.')] = `${value}`;
      }
    }
    return res;
  }

  abstract use(lang: string, data?: Record<string, unknown>): void;

  abstract getLangs(): any;

  fanyi(path: string, params?: unknown | unknown[]): string {
    let content = this._data[path] || '';
    if (!content) return path;

    if (!params) return content;

    if (typeof params === 'object') {
      const interpolation = this.cog.interpolation!;
      const objParams = params as Record<string, unknown>;
      Object.keys(objParams).forEach(key => {
        content = content.replace(
          new RegExp(`${interpolation[0]}\\s?${key}\\s?${interpolation[1]}`, 'g'),
          `${objParams[key]}`
        );
      });
    }

    (Array.isArray(params) ? params : [params]).forEach(
      (item, index) => (content = content.replace(new RegExp(`\\{\\s?${index}\\s?\\}`, 'g'), `${item}`))
    );
    return content;
  }
}

@Injectable({ providedIn: 'root' })
export class YunzaiI18NServiceFake extends YunzaiI18nBaseService {
  use(lang: string, data: Record<string, unknown>): void {
    this._data = this.flatData(data ?? {}, []);
    this._currentLang = lang;
    this._change$.next(lang);
  }

  getLangs(): any[] {
    return [];
  }
}
