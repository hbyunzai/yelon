import { DOCUMENT } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { YUNZAI_I18N_TOKEN, RTLService } from '@yelon/theme';
import { copy } from '@yelon/util/browser';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';

import { I18NService, MobileService } from '@core';

import { MetaSearchGroupItem } from '../../interfaces';
import { LayoutComponent } from '../layout.component';

const pkg = require('../../../../package.json');
const minimumVersion = 12;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  host: {
    '[attr.id]': '"header"',
    '[class.clearfix]': `true`
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements AfterViewInit {
  private inited = false;
  isMobile!: boolean;
  oldVersionList = [14, 13, 12];
  currentVersion = pkg.version;
  yelonLibs: Array<{ name: string; default?: string; selected?: boolean }> = [
    { name: 'theme' },
    { name: 'auth' },
    { name: 'acl' },
    { name: 'form' },
    { name: 'cache' },
    { name: 'chart' },
    { name: 'mock' },
    { name: 'util' },
    { name: 'cli' },
    { name: 'bis' },
    { name: 'bcs' },
    { name: 'socket' }
  ];
  menuVisible = false;
  regexs = {
    docs: { regex: /^\/docs/ },
    components: { regex: /^\/components/ },
    cli: { regex: /^\/cli/ },
    yelon: { regex: /^\/(theme|auth|acl|form|cache|chart|mock|util|bis|bcs|socket)/ }
  };
  yelonType?: string;

  private get win(): Window {
    return (this.doc as Document).defaultView || window;
  }

  constructor(
    @Inject(YUNZAI_I18N_TOKEN) public i18n: I18NService,
    private router: Router,
    private msg: NzMessageService,
    private mobileSrv: MobileService,
    @Inject(DOCUMENT) private doc: NzSafeAny,
    private cdr: ChangeDetectorRef,
    public rtl: RTLService,
    private layout: LayoutComponent
  ) {
    router.events.pipe(filter(evt => evt instanceof NavigationEnd)).subscribe(() => {
      this.menuVisible = false;
      this.genYelonType();
    });
    this.mobileSrv.change.subscribe(res => {
      this.isMobile = res;
      if (this.inited) {
        this.cdr.detectChanges();
      }
    });
  }

  private genYelonType(): void {
    if (!this.inited) return;

    // yelonType
    const match = this.router.url.match(this.regexs.yelon.regex);
    this.yelonType = match == null ? undefined : match[1];
    this.cdr.detectChanges();
  }

  ngAfterViewInit(): void {
    this.inited = true;
    this.genYelonType();
  }

  toVersion(version: number): void {
    if (version == this.currentVersion) return;
    if (version >= minimumVersion) {
      this.win.location.href = `https://ng.yunzainfo.com/version/${version}.x/`;
      return;
    }
    this.win.open(`https://github.com/hbyunzai/archive-docs/blob/master/README.md`);
  }

  langChange(language: 'en' | 'zh'): void {
    this.router.navigateByUrl(`${this.i18n.getRealUrl(this.router.url)}/${language}`).then(() => {
      this.layout.render = false;
      setTimeout(() => {
        this.layout.render = true;
      }, 25);
    });
  }

  onCopy(value: string): void {
    copy(value).then(() => this.msg.success(this.i18n.fanyi('app.demo.copied')));
  }

  to(item: MetaSearchGroupItem): void {
    if (item.url) {
      this.router.navigateByUrl(item.url);
    }
  }

  toViaMobile(url: string): void {
    if (url.indexOf('/') === -1) {
      url = `/${url}/getting-started`;
    }
    this.router.navigateByUrl(`${url}/${this.i18n.zone}`).then(() => {
      this.menuVisible = false;
      this.cdr.detectChanges();
    });
  }
}
