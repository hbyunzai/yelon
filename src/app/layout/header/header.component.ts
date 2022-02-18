import {DOCUMENT} from '@angular/common';
import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

import {YUNZAI_I18N_TOKEN, RTLService} from '@yelon/theme';
import {copy} from '@yelon/util/browser';
import type {NzSafeAny} from 'ng-zorro-antd/core/types';
import {NzMessageService} from 'ng-zorro-antd/message';

import {I18NService, MobileService} from '@core';

import {MetaSearchGroupItem} from '../../interfaces';
import {LayoutComponent} from '../layout.component';

const pkg = require('../../../../package.json');

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
  oldVersionList = [`12.x`, `11.x`];
  currentVersion = pkg.version;
  yelonLibs: Array<{ name: string; default?: string; selected?: boolean }> = [
    {name: 'theme'},
    {name: 'auth'},
    {name: 'acl'},
    {name: 'form'},
    {name: 'cache'},
    {name: 'chart'},
    {name: 'mock'},
    {name: 'util'},
    {name: 'cli'},
    {name: 'bis'}
  ];
  menuVisible = false;
  showGitee = false;
  regexs = {
    docs: {regex: /^\/docs/},
    components: {regex: /^\/components/},
    cli: {regex: /^\/cli/},
    yelon: {regex: /^\/(theme|auth|acl|form|cache|chart|mock|util|bis)/}
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
      this.genYunzaiType();
    });
    this.mobileSrv.change.subscribe(res => {
      this.isMobile = res;
      if (this.inited) {
        this.cdr.detectChanges();
      }
    });
  }

  private updateGitee(): void {
    this.showGitee = this.i18n.currentLang === 'zh-CN' && this.win.location.host.indexOf('gitee') === -1;
    this.cdr.detectChanges();
  }

  private genYunzaiType(): void {
    if (!this.inited) return;

    // yelonType
    const match = (this.doc.location.pathname as string).match(this.regexs.yelon.regex);
    this.yelonType = match == null ? undefined : match[1];
    this.cdr.detectChanges();
  }

  ngAfterViewInit(): void {
    this.inited = true;
    this.updateGitee();
    this.genYunzaiType();
  }

  toVersion(version: string): void {
    if (version !== this.currentVersion) {
      this.win.location.href = `https://ng.yunzainfo.com/version/${version}/`;
    }
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
