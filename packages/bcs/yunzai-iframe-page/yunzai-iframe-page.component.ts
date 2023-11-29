import {Component, OnDestroy, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {MenuService} from "@yelon/theme";
import {LayoutDefaultService} from "@yelon/theme/layout-default";

@Component({
  selector: 'yunzai-iframe-page',
  templateUrl: './yunzai-iframe-page.component.html',
})
export class YunzaiIframePageComponent implements OnInit, OnDestroy {

  // iframe转换后的安全路径
  iframeSafeSrc!: SafeResourceUrl;

  // 是否有iframe地址
  hasIframe: boolean = false;

  iframePageHeight!: string;

  resizeHandle: any;
  constructor(private sanitizer: DomSanitizer,
              private menuSrv: MenuService,
              private layoutDefaultService: LayoutDefaultService) {
  }

  ngOnInit() {
    this.iframePageHeight = this.layoutDefaultService.options.hideHeader ? (window.innerHeight - 55 + 'px') : (window.innerHeight - 64 - 55 + 'px');

    this.resizeHandle = () => {
      this.iframePageHeight = this.layoutDefaultService.options.hideHeader ? (window.innerHeight - 55 + 'px') : (window.innerHeight - 64 - 55 + 'px');
    }
    window.addEventListener("resize", this.resizeHandle);

    this.getIframeUrl();
  }


  getIframeUrl(): void {
    this.menuSrv.getRouterLink().subscribe((url: any) => {
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

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeHandle)
  }

}
