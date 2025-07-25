import { Injectable, TemplateRef, Type, inject } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { deepMerge } from '@yelon/util/other';
import { NzDrawerOptions, NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

export interface DrawerHelperOptions {
  /**
   * 大小，若值为数值类型，则根据 `nzPlacement` 自动转化为 `nzHeight` 或 `nzWidth`；例如：lg、600，默认：`md`
   *
   * | 类型 | 默认大小 |
   * | --- | ------ |
   * | `sm` | `300` |
   * | `md` | `600` |
   * | `lg` | `900` |
   * | `xl` | `1200` |
   *
   * > 以上值，可通过覆盖相应的LESS参数自行调整
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  /**
   * 是否包含底部工具条，默认：`true`
   */
  footer?: boolean;
  /**
   * 底部工具条高度，默认：`55`
   */
  footerHeight?: number;
  /** 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误 */
  exact?: boolean;
  /** 抽屉 [NzDrawerOptions](https://ng.ant.design/components/drawer/zh#nzdraweroptions) 参数 */
  drawerOptions?: NzDrawerOptions;
}

/**
 * 抽屉辅助类
 *
 * **注意：** 构建结果都可被订阅，但永远都不会触发 `observer.error`
 *
 * @example
 * this.drawerHelper.create('Edit', FormEditComponent, { i }).subscribe(res => this.load());
 * // 对于组件的成功&关闭的处理说明
 * // 成功
 * this.NzDrawerRef.close(data);
 * this.NzDrawerRef.close(true);
 * // 关闭
 * this.NzDrawerRef.close();
 * this.NzDrawerRef.close(false);
 */
@Injectable({ providedIn: 'root' })
export class DrawerHelper {
  private readonly srv = inject(NzDrawerService);
  private readonly parentDrawer = inject(DrawerHelper, { optional: true, skipSelf: true });
  private openDrawersAtThisLevel: NzDrawerRef[] = [];
  get openDrawers(): NzDrawerRef[] {
    return this.parentDrawer ? this.parentDrawer.openDrawers : this.openDrawersAtThisLevel;
  }

  /**
   * 构建一个抽屉
   */
  create(
    title: string | TemplateRef<any> | undefined | null,
    comp:
      | TemplateRef<{
          $implicit: any;
          drawerRef: NzDrawerRef;
        }>
      | Type<any>,
    params?: any,
    options?: DrawerHelperOptions
  ): Observable<any> {
    options = deepMerge(
      {
        size: 'md',
        footer: true,
        footerHeight: 50,
        exact: true,
        drawerOptions: {
          nzPlacement: 'right',
          nzWrapClassName: ''
        }
      },
      options
    );
    return new Observable((observer: Observer<any>) => {
      const { size, footer, footerHeight, drawerOptions } = options as DrawerHelperOptions;
      const defaultOptions: NzDrawerOptions = {
        nzContent: comp,
        nzContentParams: params,
        nzTitle: title as any
      };

      if (typeof size === 'number') {
        defaultOptions[
          drawerOptions!.nzPlacement === 'top' || drawerOptions!.nzPlacement === 'bottom' ? 'nzHeight' : 'nzWidth'
        ] = options!.size;
      } else if (!drawerOptions!.nzWidth) {
        defaultOptions.nzWrapClassName = `${drawerOptions!.nzWrapClassName} drawer-${options!.size}`.trim();
        delete drawerOptions!.nzWrapClassName;
      }

      if (footer) {
        // The 24 value is @drawer-body-padding
        defaultOptions.nzBodyStyle = {
          'padding-bottom': `${footerHeight! + 24}px`
        };
      }

      const ref = this.srv.create({ ...defaultOptions, ...drawerOptions });
      this.openDrawers.push(ref);
      const afterClose$ = ref.afterClose.subscribe((res: any) => {
        if (options!.exact === true) {
          if (res != null) {
            observer.next(res);
          }
        } else {
          observer.next(res);
        }
        observer.complete();
        afterClose$.unsubscribe();
        this.close(ref);
      });
    });
  }

  private close(ref: NzDrawerRef): void {
    const idx = this.openDrawers.indexOf(ref);
    if (idx === -1) return;
    this.openDrawers.splice(idx, 1);
  }

  closeAll(): void {
    let i = this.openDrawers.length;
    while (i--) {
      this.openDrawers[i].close();
    }
  }

  /**
   * 构建一个抽屉，点击蒙层不允许关闭
   */
  static(
    title: string | TemplateRef<any> | undefined | null,
    comp:
      | TemplateRef<{
          $implicit: any;
          drawerRef: NzDrawerRef;
        }>
      | Type<any>,
    params?: any,
    options?: DrawerHelperOptions
  ): Observable<any> {
    const drawerOptions = {
      nzMaskClosable: false,
      ...(options && options.drawerOptions)
    };
    return this.create(title, comp, params, { ...options, drawerOptions });
  }
}
