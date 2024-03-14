import { DOCUMENT } from '@angular/common';
import { DestroyRef, Injectable, Injector, OnDestroy, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, map, delay, isObservable, switchMap, Subscription } from 'rxjs';

import {
  deepCopy,
  useLocalStorageProjectInfo,
  useLocalStorageUser,
  YUNZAI_CONFIG,
  YunzaiBusinessConfig,
  YunzaiConfig,
  YunzaiMenu,
  YunzaiProjectInfo
} from '@yelon/util';

import { YUNZAI_I18N_TOKEN } from '../i18n/i18n';
import { MenuService } from '../menu/menu.service';

export interface RouteTitle {
  title?: string | Observable<string>;
  titleI18n?: string;
}

@Injectable({ providedIn: 'root' })
export class TitleService implements OnDestroy {
  private destroy$ = inject(DestroyRef);
  private _prefix: string = '';
  private _suffix: string = '';
  private _separator: string = ' - ';
  private _reverse: boolean = false;
  private tit$?: Subscription;
  private config!: YunzaiBusinessConfig;

  readonly DELAY_TIME = 25;

  private readonly doc = inject(DOCUMENT);
  private readonly injector = inject(Injector);
  private readonly title = inject(Title);
  private readonly menuSrv = inject(MenuService);
  private readonly i18nSrv = inject(YUNZAI_I18N_TOKEN, { optional: true });

  private readonly conf: YunzaiConfig = inject(YUNZAI_CONFIG);

  constructor() {
    this.i18nSrv?.change.pipe(takeUntilDestroyed()).subscribe(() => this.setTitle());
    this.config = this.conf.bis!;
  }

  /**
   * Set separator
   *
   * 设置分隔符
   */
  set separator(value: string) {
    this._separator = value;
  }

  /**
   * Set prefix
   *
   * 设置前缀
   */
  set prefix(value: string) {
    this._prefix = value;
  }

  /**
   * Set suffix
   *
   * 设置后缀
   */
  set suffix(value: string) {
    this._suffix = value;
  }

  /**
   * Set whether to reverse
   *
   * 设置是否反转
   */
  set reverse(value: boolean) {
    this._reverse = value;
  }

  /**
   * Set the default CSS selector string
   *
   * 设置默认CSS选择器字符串
   */
  selector?: string | null;

  /**
   * Set default title name
   *
   * 设置默认标题名
   */
  default = `Not Page Name`;

  private getByElement(): Observable<string> {
    return of('').pipe(
      delay(this.DELAY_TIME),
      map(() => {
        const el = ((this.selector != null ? this.doc.querySelector(this.selector) : null) ||
          this.doc.querySelector('.yunzai-default__content-title h1') ||
          this.doc.querySelector('.page-header__title')) as HTMLElement;
        if (el) {
          let text = '';
          el.childNodes.forEach(val => {
            if (!text && val.nodeType === 3) {
              text = val.textContent!.trim();
            }
          });
          return text || el.firstChild!.textContent!.trim();
        }
        return '';
      })
    );
  }

  private getByRoute(): Observable<string> {
    let next = this.injector.get(ActivatedRoute);
    while (next.firstChild) next = next.firstChild;
    const data: RouteTitle = (next.snapshot && next.snapshot.data) || {};
    if (data.titleI18n && this.i18nSrv) data.title = this.i18nSrv.fanyi(data.titleI18n);
    return isObservable(data.title) ? data.title : of(data.title!);
  }

  private getByMenu(): Observable<string> {
    const menus = this.menuSrv.getPathByUrl(this.injector.get<Router>(Router).url);
    if (!menus || menus.length <= 0) return of('');

    const item = menus[menus.length - 1];
    let title;
    if (item.i18n && this.i18nSrv) title = this.i18nSrv.fanyi(item.i18n);
    return of(title || item.text!);
  }

  private getBySystemSet(): Observable<string> {
    if (!this.config || !this.config.systemCode) return of('');
    let title = '';
    const [, getUser] = useLocalStorageUser();
    const yunzaiUser = getUser()!;
    const yunzaiMenus: YunzaiMenu[] = deepCopy(yunzaiUser.menu).filter(
      m => m.systemCode && m.systemCode === this.config.systemCode
    );
    if (!yunzaiMenus || yunzaiMenus.length === 0) return of('');
    let systemName = '';
    const currentMenu = yunzaiMenus.pop();
    if (currentMenu) {
      systemName = currentMenu.text;
    }
    const [, getProjectInfo] = useLocalStorageProjectInfo();
    const projectInfo: YunzaiProjectInfo = getProjectInfo()!;
    if (!projectInfo) return of('');
    const pageTitlePattern = projectInfo.pageTitlePattern;
    if (!pageTitlePattern) return of('');
    if (pageTitlePattern) {
      title = pageTitlePattern.replace(`$\{systemName}`, systemName);
    } else {
      title = systemName;
    }
    return of(title);
  }

  /**
   * Set the document title
   */
  setTitle(title?: string | string[]): void {
    this.tit$?.unsubscribe();
    this.tit$ = of(title)
      .pipe(
        switchMap(tit => (tit ? of(tit) : this.getByRoute())),
        switchMap(tit => (tit ? of(tit) : this.getBySystemSet())),
        switchMap(tit => (tit ? of(tit) : this.getByMenu())),
        switchMap(tit => (tit ? of(tit) : this.getByElement())),
        map(tit => tit || this.default),
        map(title => (!Array.isArray(title) ? [title] : title)),
        takeUntilDestroyed(this.destroy$)
      )
      .subscribe(titles => {
        let newTitles: string[] = [];
        if (this._prefix) {
          newTitles.push(this._prefix);
        }
        newTitles.push(...titles.filter(title => !!title));
        if (this._suffix) {
          newTitles.push(this._suffix);
        }
        if (this._reverse) {
          newTitles = newTitles.reverse();
        }
        this.title.setTitle(newTitles.join(this._separator));
      });
  }

  /**
   * Set i18n key of the document title
   */
  setTitleByI18n(key: string, params?: unknown): void {
    this.setTitle(this.i18nSrv?.fanyi(key, params));
  }

  ngOnDestroy(): void {
    this.tit$?.unsubscribe();
  }
}
