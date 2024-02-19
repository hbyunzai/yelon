import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { MenuService } from '@yelon/theme';
import { LayoutDefaultService } from '@yelon/theme/layout-default';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@Component({
  selector: `yunzai-iframe-page`,
  template: `
    @if (hasIframe && iframePageHeight) {
      <div class="yunzai-iframe-page" [style.height]="iframePageHeight">
        <iframe [src]="iframeSafeSrc">
          <p>您的浏览器不支持 iframe 标签。</p>
        </iframe>
      </div>
    } @else {
      <nz-spin nzSpinning="true" />
    }
  `,
  standalone: true,
  imports: [NzSpinModule]
})
export class YunzaiIframePageComponent implements OnInit, OnDestroy {
  private readonly sanitizer: DomSanitizer = inject(DomSanitizer);
  private readonly menuService: MenuService = inject(MenuService);
  private readonly layoutService: LayoutDefaultService = inject(LayoutDefaultService);

  iframeSafeSrc?: SafeResourceUrl;
  iframePageHeight?: string;
  hasIframe: boolean = false;
  resizeHandle: NzSafeAny;

  ngOnInit(): void {
    this.iframePageHeight = this.layoutService.options.hideHeader
      ? `${window.innerHeight - 55}px`
      : `${window.innerHeight - 64 - 55}px`;

    this.resizeHandle = () => {
      this.iframePageHeight = this.layoutService.options.hideHeader
        ? `${window.innerHeight - 55}px`
        : `${window.innerHeight - 64 - 55}px`;
    };
    window.addEventListener('resize', this.resizeHandle);
    this.getIframeUrl();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeHandle);
  }

  getIframeUrl(): void {
    this.menuService.getRouterLink().subscribe((url: NzSafeAny) => {
      if (url) {
        this.hasIframe = true;
        this.iframeSafeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      } else {
        if (localStorage.getItem('iframeSrc')) {
          this.hasIframe = true;
          const url: string = localStorage.getItem('iframeSrc') as string;
          this.iframeSafeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        } else {
          this.hasIframe = false;
        }
      }
    });
  }
}
