import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { YunzaiChartConfig, YunzaiConfigService } from '@yelon/util/config';
import { LazyService } from '@yelon/util/other';

@Injectable({ providedIn: 'root' })
export class ChartEChartsService implements OnDestroy {
  private _cog!: YunzaiChartConfig;
  private loading = false;
  private loaded = false;
  private notify$ = new Subject<void>();

  get cog(): YunzaiChartConfig {
    return this._cog;
  }
  set cog(val: YunzaiChartConfig) {
    this._cog = this.cogSrv.merge(
      'chart',
      {
        theme: '',
        echartsLib: 'https://cdnjs.cloudflare.com/ajax/libs/echarts/5.1.0/echarts.min.js'
      } as YunzaiChartConfig,
      val
    )!;
  }

  constructor(
    private cogSrv: YunzaiConfigService,
    private lazySrv: LazyService
  ) {
    this.cog = { theme: '' };
  }

  libLoad(): this {
    if (this.loading) {
      if (this.loaded) {
        this.notify$.next();
      }
      return this;
    }
    this.loading = true;
    this.lazySrv
      .load(this.cog.echartsLib!)
      .then(() => {
        const extensions = this.cog.echartsExtensions;
        if (Array.isArray(extensions) && extensions.length > 0) {
          return this.lazySrv.load(extensions).then(() => true);
        }
        return Promise.resolve(true);
      })
      .then(() => {
        this.loaded = true;
        this.notify$.next();
      });
    return this;
  }

  get notify(): Observable<void> {
    return this.notify$.asObservable();
  }

  ngOnDestroy(): void {
    this.notify$.unsubscribe();
  }
}
