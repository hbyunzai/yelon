import { Injectable, Injector, OnDestroy, inject } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  NavigationEnd,
  NavigationStart,
  Router,
  ROUTER_CONFIGURATION
} from '@angular/router';
import { BehaviorSubject, Observable, take, timer, Unsubscribable } from 'rxjs';

import { Menu, MenuService } from '@yelon/theme';
import { ScrollService } from '@yelon/util/browser';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { REUSE_TAB_CACHED_MANAGER } from './reuse-tab.cache';
import {
  ReuseComponentRef,
  ReuseHookOnReuseInitType,
  ReuseHookTypes,
  ReuseTabCached,
  ReuseTabMatchMode,
  ReuseTabNotify,
  ReuseTabRouteParamMatchMode,
  ReuseTitle
} from './reuse-tab.interfaces';
import { REUSE_TAB_STORAGE_KEY, REUSE_TAB_STORAGE_STATE } from './reuse-tab.state';

@Injectable()
export class ReuseTabService implements OnDestroy {
  private readonly injector = inject(Injector);
  private readonly menuService = inject(MenuService);
  private readonly cached = inject(REUSE_TAB_CACHED_MANAGER);
  private readonly stateKey = inject(REUSE_TAB_STORAGE_KEY);
  private readonly stateSrv = inject(REUSE_TAB_STORAGE_STATE);

  private _inited = false;
  private _max = 10;
  private _keepingScroll = false;
  private _cachedChange = new BehaviorSubject<ReuseTabNotify | null>(null);
  private _router$?: Unsubscribable;
  private removeUrlBuffer: string | null = null;
  private positionBuffer: Record<string, [number, number]> = {};
  componentRef?: ReuseComponentRef;
  debug = false;
  routeParamMatchMode: ReuseTabRouteParamMatchMode = 'strict';
  mode = ReuseTabMatchMode.Menu;
  /** 排除规则，限 `mode=URL` */
  excludes: RegExp[] = [];
  storageState = false;

  private get snapshot(): ActivatedRouteSnapshot {
    return this.injector.get(ActivatedRoute).snapshot;
  }

  // #region public

  /**
   * Get init status
   *
   * 是否已经初始化完成
   */
  get inited(): boolean {
    return this._inited;
  }

  /**
   * Current routing address
   *
   * 当前路由地址
   */
  get curUrl(): string {
    return this.getUrl(this.snapshot);
  }

  /**
   * 允许最多复用多少个页面，取值范围 `2-100`，值发生变更时会强制关闭且忽略可关闭条件
   */
  set max(value: number) {
    this._max = Math.min(Math.max(value, 2), 100);
    for (let i = this.cached.list.length; i > this._max; i--) {
      this.cached.list.pop();
    }
  }
  set keepingScroll(value: boolean) {
    this._keepingScroll = value;
    this.initScroll();
  }
  get keepingScroll(): boolean {
    return this._keepingScroll;
  }
  keepingScrollContainer?: Element | null;
  /** 获取已缓存的路由 */
  get items(): ReuseTabCached[] {
    return this.cached.list;
  }
  /** 获取当前缓存的路由总数 */
  get count(): number {
    return this.cached.list.length;
  }
  /** 订阅缓存变更通知 */
  get change(): Observable<ReuseTabNotify | null> {
    return this._cachedChange.asObservable(); // .pipe(filter(w => w !== null));
  }
  /** 自定义当前标题 */
  set title(value: string | ReuseTitle) {
    const url = this.curUrl;
    if (typeof value === 'string') value = { text: value };
    this.cached.title[url] = value;
    this.di('update current tag title: ', value);
    this._cachedChange.next({
      active: 'title',
      url,
      title: value,
      list: this.cached.list
    });
  }
  /** 获取指定路径缓存所在位置，`-1` 表示无缓存 */
  index(url: string): number {
    return this.cached.list.findIndex(w => w.url === url);
  }
  /** 获取指定路径缓存是否存在 */
  exists(url: string): boolean {
    return this.index(url) !== -1;
  }
  /** 获取指定路径缓存 */
  get(url?: string): ReuseTabCached | null {
    return url ? this.cached.list.find(w => w.url === url) || null : null;
  }
  private remove(url: string | number, includeNonCloseable: boolean): boolean {
    const idx = typeof url === 'string' ? this.index(url) : url;
    const item = idx !== -1 ? this.cached.list[idx] : null;
    if (!item || (!includeNonCloseable && !item.closable)) return false;

    this.destroy(item._handle);

    this.cached.list.splice(idx, 1);
    delete this.cached.title[url];
    return true;
  }
  /**
   * 根据URL移除标签
   *
   * @param [includeNonCloseable=false] 是否强制包含不可关闭
   */
  close(url: string, includeNonCloseable: boolean = false): boolean {
    this.removeUrlBuffer = url;

    this.remove(url, includeNonCloseable);

    this._cachedChange.next({ active: 'close', url, list: this.cached.list });

    this.di('close tag', url);
    return true;
  }
  /**
   * 清除右边
   *
   * @param [includeNonCloseable=false] 是否强制包含不可关闭
   */
  closeRight(url: string, includeNonCloseable: boolean = false): boolean {
    const start = this.index(url);
    for (let i = this.count - 1; i > start; i--) {
      this.remove(i, includeNonCloseable);
    }

    this.removeUrlBuffer = null;

    this._cachedChange.next({ active: 'closeRight', url, list: this.cached.list });

    this.di('close right tages', url);
    return true;
  }
  /**
   * 清除所有缓存
   *
   * @param [includeNonCloseable=false] 是否强制包含不可关闭
   */
  clear(includeNonCloseable: boolean = false): void {
    this.cached.list.forEach(w => {
      if (!includeNonCloseable && w.closable) this.destroy(w._handle);
    });
    this.cached.list = this.cached.list.filter(w => !includeNonCloseable && !w.closable);

    this.removeUrlBuffer = null;

    this._cachedChange.next({ active: 'clear', list: this.cached.list });

    this.di('clear all catch');
  }
  /**
   * 移动缓存数据
   *
   * @param url 要移动的URL地址
   * @param position 新位置，下标从 `0` 开始
   *
   * @example
   * ```
   * // source
   * [ '/a/1', '/a/2', '/a/3', '/a/4', '/a/5' ]
   * move('/a/1', 2);
   * // output
   * [ '/a/2', '/a/3', '/a/1', '/a/4', '/a/5' ]
   * move('/a/1', -1);
   * // output
   * [ '/a/2', '/a/3', '/a/4', '/a/5', '/a/1' ]
   * ```
   */
  move(url: string, position: number): void {
    const start = this.cached.list.findIndex(w => w.url === url);
    if (start === -1) return;
    const data = this.cached.list.slice();
    data.splice(position < 0 ? data.length + position : position, 0, data.splice(start, 1)[0]);
    this.cached.list = data;
    this._cachedChange.next({
      active: 'move',
      url,
      position,
      list: this.cached.list
    });
  }
  /**
   * 强制关闭当前路由（包含不可关闭状态），并重新导航至 `newUrl` 路由
   */
  replace(newUrl: string): void {
    const url = this.curUrl;
    this.injector
      .get(Router)
      .navigateByUrl(newUrl)
      .then(() => {
        if (this.exists(url)) {
          this.close(url, true);
        } else {
          this.removeUrlBuffer = url;
        }
      });
  }
  /**
   * 获取标题，顺序如下：
   *
   * 1. 组件内使用 `ReuseTabService.title = 'new title'` 重新指定文本
   * 2. 路由配置中 data 属性中包含 titleI18n > title
   * 3. 菜单数据中 text 属性
   *
   * @param url 指定URL
   * @param route 指定路由快照
   */
  getTitle(url: string, route?: ActivatedRouteSnapshot): ReuseTitle {
    if (this.cached.title[url]) {
      return this.cached.title[url];
    }

    if (route && route.data && (route.data.titleI18n || route.data.title)) {
      return {
        text: route.data.title,
        i18n: route.data.titleI18n
      } as ReuseTitle;
    }

    const menu = this.getMenu(url);
    return menu ? { text: menu.text, i18n: menu.i18n } : { text: url };
  }

  /**
   * 清除标题缓存
   */
  clearTitleCached(): void {
    this.cached.title = {};
  }
  /** 自定义当前 `closable` 状态 */
  set closable(value: boolean) {
    const url = this.curUrl;
    this.cached.closable[url] = value;
    this.di('update current tag closable: ', value);
    this._cachedChange.next({
      active: 'closable',
      closable: value,
      list: this.cached.list
    });
  }
  /**
   * 获取 `closable` 状态，顺序如下：
   *
   * 1. 组件内使用 `ReuseTabService.closable = true` 重新指定 `closable` 状态
   * 2. 路由配置中 data 属性中包含 `reuseClosable`
   * 3. 菜单数据中 `reuseClosable` 属性
   *
   * @param url 指定URL
   * @param route 指定路由快照
   */
  getClosable(url: string, route?: ActivatedRouteSnapshot): boolean {
    if (typeof this.cached.closable[url] !== 'undefined') return this.cached.closable[url];

    if (route && route.data && typeof route.data.reuseClosable === 'boolean') return route.data.reuseClosable;

    const menu = this.mode !== ReuseTabMatchMode.URL ? this.getMenu(url) : null;
    if (menu && typeof menu.reuseClosable === 'boolean') return menu.reuseClosable;

    return true;
  }
  /**
   * 清空 `closable` 缓存
   */
  clearClosableCached(): void {
    this.cached.closable = {};
  }
  getTruthRoute(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    let next = route;
    while (next.firstChild) next = next.firstChild;
    return next;
  }
  /**
   * 根据快照获取URL地址
   */
  getUrl(route: ActivatedRouteSnapshot): string {
    let next = this.getTruthRoute(route);
    const segments: string[] = [];
    while (next) {
      segments.push(next.url.join('/'));
      next = next.parent!;
    }
    const url = `/${segments
      .filter(i => i)
      .reverse()
      .join('/')}`;
    return url;
  }
  /**
   * 检查快照是否允许被复用
   */
  can(route: ActivatedRouteSnapshot): boolean {
    const url = this.getUrl(route);
    if (url === this.removeUrlBuffer) return false;

    if (route.data && typeof route.data.reuse === 'boolean') return route.data.reuse;

    if (this.mode !== ReuseTabMatchMode.URL) {
      const menu = this.getMenu(url);
      if (!menu) return false;
      if (this.mode === ReuseTabMatchMode.Menu) {
        if (menu.reuse === false) return false;
      } else {
        if (!menu.reuse || menu.reuse !== true) return false;
      }
      return true;
    }
    return !this.isExclude(url);
  }

  isExclude(url: string): boolean {
    return this.excludes.findIndex(r => r.test(url)) !== -1;
  }

  /**
   * 刷新，触发一个 refresh 类型事件
   */
  refresh(data?: any): void {
    this._cachedChange.next({ active: 'refresh', data });
  }
  // #endregion

  // #region privates

  private destroy(_handle: any): void {
    if (_handle && _handle.componentRef && _handle.componentRef.destroy) _handle.componentRef.destroy();
  }

  private di(...args: any[]): void {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this.debug) return;
      console.warn(...args);
    }
  }

  // #endregion

  constructor() {
    if (this.cached == null) {
      this.cached = { list: [], title: {}, closable: {} };
    }
  }

  init(): void {
    this.initScroll();
    this._inited = true;
    this.loadState();
  }

  private loadState(): void {
    if (!this.storageState) return;

    this.cached.list = this.stateSrv.get(this.stateKey).map(v => ({
      ...v,
      title: { text: v.title },
      url: v.url,
      position: v.position
    }));
    this._cachedChange.next({ active: 'loadState' });
  }

  private getMenu(url: string): Menu | null | undefined {
    const menus = this.menuService.getPathByUrl(url);
    if (!menus || menus.length === 0) return null;
    return menus.pop();
  }

  runHook(
    method: ReuseHookTypes,
    comp: ReuseComponentRef | number | undefined,
    type: ReuseHookOnReuseInitType = 'init'
  ): void {
    if (typeof comp === 'number') {
      const item = this.cached.list[comp];
      comp = item._handle?.componentRef;
    }
    if (comp == null || !comp.instance) {
      return;
    }
    const compThis = comp.instance;
    const fn = compThis[method];
    if (typeof fn !== 'function') {
      return;
    }
    if (method === '_onReuseInit') {
      fn.call(compThis, type);
    } else {
      (fn as () => void).call(compThis);
    }
  }

  private hasInValidRoute(route: ActivatedRouteSnapshot): boolean {
    return !route.routeConfig || !!route.routeConfig.loadChildren || !!route.routeConfig.children;
  }

  /**
   * 决定是否允许路由复用，若 `true` 会触发 `store`
   */
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    if (this.hasInValidRoute(route)) return false;
    this.di('#shouldDetach', this.can(route), this.getUrl(route));
    return this.can(route);
  }

  saveCache(snapshot: ActivatedRouteSnapshot, _handle?: any, pos?: number): void {
    const snapshotTrue = this.getTruthRoute(snapshot);
    const url = this.getUrl(snapshot);
    const idx = this.index(url);
    const item: ReuseTabCached = {
      title: this.getTitle(url, snapshotTrue),
      url,
      closable: this.getClosable(url, snapshot),
      _snapshot: snapshot,
      _handle
    };
    if (idx < 0) {
      this.items.splice(pos ?? this.items.length, 0, item);
      if (this.count > this._max) {
        // Get the oldest closable location
        const closeIdx = this.items.findIndex(w => w.url !== url && w.closable!);
        if (closeIdx !== -1) {
          const closeItem = this.items[closeIdx];
          this.remove(closeIdx, false);
          timer(1)
            .pipe(take(1))
            .subscribe(() => this._cachedChange.next({ active: 'close', url: closeItem.url, list: this.cached.list }));
        }
      }
    } else {
      this.items[idx] = item;
    }
  }

  /**
   * 存储
   */
  store(_snapshot: ActivatedRouteSnapshot, _handle: any): void {
    const url = this.getUrl(_snapshot);

    if (_handle != null) {
      this.saveCache(_snapshot, _handle);
    }

    const list = this.cached.list;

    const item: ReuseTabCached = {
      title: this.getTitle(url, _snapshot),
      closable: this.getClosable(url, _snapshot),
      position: this.getKeepingScroll(url, _snapshot) ? this.positionBuffer[url] : null,
      url,
      _snapshot,
      _handle
    };

    const idx = this.index(url);
    // Current handler is null when activate routes
    // For better reliability, we need to wait for the component to be attached before call _onReuseInit
    const cahcedComponentRef = list[idx]?._handle?.componentRef;
    if (_handle == null && cahcedComponentRef != null) {
      timer(100)
        .pipe(take(1))
        .subscribe(() => this.runHook('_onReuseInit', cahcedComponentRef));
    }
    list[idx] = item;
    this.removeUrlBuffer = null;

    this.di('#store', '[override]', url);

    if (_handle && _handle.componentRef) {
      this.runHook('_onReuseDestroy', _handle.componentRef);
    }

    this._cachedChange.next({ active: 'override', item, list });
  }

  /**
   * 决定是否允许应用缓存数据
   */
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    if (this.hasInValidRoute(route)) return false;
    const url = this.getUrl(route);
    const data = this.get(url);
    const ret = !!(data && data._handle);
    this.di('#shouldAttach', ret, url);
    if (!ret) {
      this._cachedChange.next({ active: 'add', url, list: this.cached.list });
    }
    return ret;
  }

  /**
   * 提取复用数据
   */
  retrieve(route: ActivatedRouteSnapshot): any | null {
    if (this.hasInValidRoute(route)) return null;
    const url = this.getUrl(route);
    const data = this.get(url);
    const ret = (data && data._handle) || null;
    this.di('#retrieve', url, ret);
    return ret;
  }

  /**
   * 决定是否应该进行复用路由处理
   */
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    let ret = future.routeConfig === curr.routeConfig;
    if (!ret) return false;

    const path = ((future.routeConfig && future.routeConfig.path) || '') as string;
    if (path.length > 0 && ~path.indexOf(':')) {
      if (this.routeParamMatchMode === 'strict') {
        ret = this.getUrl(future) === this.getUrl(curr);
      } else {
        ret = path === ((curr.routeConfig && curr.routeConfig.path) || '');
      }
    }
    this.di('=====================');
    this.di('#shouldReuseRoute', ret, `${this.getUrl(curr)}=>${this.getUrl(future)}`, future, curr);
    return ret;
  }

  // #region scroll

  /**
   * 获取 `keepingScroll` 状态，顺序如下：
   *
   * 1. 路由配置中 data 属性中包含 `keepingScroll`
   * 2. 菜单数据中 `keepingScroll` 属性
   * 3. 组件 `keepingScroll` 值
   */
  getKeepingScroll(url: string, route?: ActivatedRouteSnapshot): boolean {
    if (route && route.data && typeof route.data.keepingScroll === 'boolean') return route.data.keepingScroll;

    const menu = this.mode !== ReuseTabMatchMode.URL ? this.getMenu(url) : null;
    if (menu && typeof menu.keepingScroll === 'boolean') return menu.keepingScroll;

    return this.keepingScroll;
  }

  private get isDisabledInRouter(): boolean {
    const routerConfig = this.injector.get(ROUTER_CONFIGURATION, {} as NzSafeAny);
    return routerConfig.scrollPositionRestoration === 'disabled';
  }

  private get ss(): ScrollService {
    return this.injector.get(ScrollService);
  }

  private initScroll(): void {
    if (this._router$) {
      this._router$.unsubscribe();
    }

    this._router$ = this.injector.get<Router>(Router).events.subscribe(e => {
      if (e instanceof NavigationStart) {
        const url = this.curUrl;
        if (this.getKeepingScroll(url, this.getTruthRoute(this.snapshot))) {
          this.positionBuffer[url] = this.ss.getScrollPosition(this.keepingScrollContainer);
        } else {
          delete this.positionBuffer[url];
        }
      } else if (e instanceof NavigationEnd) {
        const url = this.curUrl;
        const item = this.get(url);
        if (item && item.position && this.getKeepingScroll(url, this.getTruthRoute(this.snapshot))) {
          if (this.isDisabledInRouter) {
            this.ss.scrollToPosition(this.keepingScrollContainer, item.position);
          } else {
            setTimeout(() => this.ss.scrollToPosition(this.keepingScrollContainer, item.position!), 1);
          }
        }
      }
    });
  }

  // #endregion

  ngOnDestroy(): void {
    const { _cachedChange, _router$ } = this;
    this.clear();
    this.cached.list = [];
    _cachedChange.complete();

    if (_router$) {
      _router$.unsubscribe();
    }
  }
}
