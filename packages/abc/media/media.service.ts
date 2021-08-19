import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { YunzaiConfigService, YunzaiMediaConfig } from '@yelon/util/config';
import { LazyService } from '@yelon/util/other';

@Injectable({ providedIn: 'root' })
export class MediaService {
  private _cog: YunzaiMediaConfig;
  private loading = false;
  private loaded = false;
  private notify$ = new Subject<void>();

  get cog(): YunzaiMediaConfig {
    return this._cog;
  }
  set cog(val: YunzaiMediaConfig) {
    this._cog = this.cogSrv.merge(
      'media',
      {
        urls: [
          'https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.min.js',
          'https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.css'
        ]
      },
      val
    )!;
  }

  constructor(private cogSrv: YunzaiConfigService, private lazySrv: LazyService) {}

  load(): this {
    if (this.loading) {
      if (this.loaded) {
        this.notify$.next();
      }
      return this;
    }
    this.loading = true;
    this.lazySrv.load(this.cog.urls!).then(() => {
      this.loaded = true;
      this.notify$.next();
    });
    return this;
  }

  notify(): Observable<void> {
    return this.notify$.asObservable();
  }
}