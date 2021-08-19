import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, NgZone, OnDestroy, OnInit } from '@angular/core';

import AOS from 'aos';

import { YUNZAI_I18N_TOKEN } from '@yelon/theme';
import { ZoneOutside } from '@yelon/util/decorator';

import { I18NService } from '@core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  host: {
    '[class.home-wrapper]': 'true'
  }
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  list = [
    { type: 'basic', url: 'https://ng-yunzai.github.io/ng-yunzai' },
    { type: 'pro', url: 'https://e.ng-yunzai.com/theme/pro' },
    { type: 'ms', url: 'https://e.ng-yunzai.com/theme/ms' },
    { type: 'yun', url: 'https://e.ng-yunzai.com/theme/yun' }
  ];
  themes = ['pro', 'ms', 'yun'];
  get isBrowser(): boolean {
    return this.platform.isBrowser;
  }
  constructor(
    @Inject(YUNZAI_I18N_TOKEN) public i18n: I18NService,
    public ngZone: NgZone,
    @Inject(DOCUMENT) private doc: Document,
    private platform: Platform
  ) {}

  private get body(): HTMLElement {
    return this.doc.querySelector('body') as HTMLElement;
  }

  @ZoneOutside()
  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    AOS.init();
  }

  ngOnInit(): void {
    this.body.classList.add(`index-page`);
  }

  ngOnDestroy(): void {
    this.body.classList.remove(`index-page`);
  }
}