import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { YunzaiChartConfig, YunzaiConfigService } from '@yelon/util/config';
import { LazyService } from '@yelon/util/other';

@Injectable({ providedIn: 'root' })
export class G2Service implements OnDestroy {
  private _cog: YunzaiChartConfig;
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
        libs: [
          'https://gw.alipayobjects.com/os/lib/antv/g2/4.1.14/dist/g2.min.js',
          'https://gw.alipayobjects.com/os/lib/antv/data-set/0.11.8/dist/data-set.js'
        ]
      } as YunzaiChartConfig,
      val
    )!;
  }

  constructor(private cogSrv: YunzaiConfigService, private lazySrv: LazyService) {
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
    this.lazySrv.load(this.cog.libs!).then(() => {
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