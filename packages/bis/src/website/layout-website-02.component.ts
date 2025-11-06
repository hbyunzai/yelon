import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { I18nPipe } from '@yelon/theme';
import { useLocalStorageUser } from '@yelon/util';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { YunzaiLayoutWebsiteBase } from './layout-website-base';

@Component({
  selector: 'yunzai-layout-website-02',
  template: `
    <div class="yz-layout-website-02">
      <header class="yz-layout-website-02-nav">
        <div class="yz-layout-website-02-inner-content">
          @if (_logoSrc) {
            <img [alt]="_logoAlt" class="yz-layout-website-02-nav__logo" [src]="_logoSrc" />
          } @else {
            <div class="yz-layout-website-02-nav__logo__full">LOGO</div>
          }

          <div class="yz-layout-website-02-nav__content">
            <ng-template *ngTemplateOutlet="_contentTpl" />
          </div>

          <div class="yz-layout-website-02-nav-right">
            <div class="yz-layout-website-02-nav__slogan">
              <ng-template *ngTemplateOutlet="_slogan" />
            </div>
            @if (isLogin) {
              <a class="yz-layout-website-02-link" nz-dropdown [nzDropdownMenu]="menu" [nzDisabled]="!_userMenuShow" [nzPlacement]="'bottomRight'">
                <nz-avatar nzIcon="user" [nzSrc]="_avatar" /><b>欢迎访问：{{ _username }}</b>
                <span nz-icon nzType="down" *ngIf="_userMenuShow"></span>
              </a>
              <nz-dropdown-menu #menu="nzDropdownMenu">
                <ul nz-menu nzSelectable>
                  @for (link of _links; track $index) {
                    <li nz-menu-item class="yz-layout-website-02-link__li" (click)="to(link.url)">{{ link.name }}</li>
                  }
                  <li nz-menu-item nzDanger class="yz-layout-website-02-link__li" (click)="logout()">{{ 'menu.account.logout' | i18n }}</li>
                </ul>
              </nz-dropdown-menu>
            } @else {
              <a class="yz-layout-website-02-link" (click)="login()"> <span nz-icon nzType="login" nzTheme="outline"></span>{{ 'app.login.login' | i18n }}</a>
            }
          </div>
        </div>
      </header>
      <main class="yz-layout-website-02-container">
        <router-outlet />
      </main>
    </div>
  `,

  imports: [RouterOutlet, I18nPipe, NzI18nModule, NgFor, NgIf, NzDropDownModule, NzIconModule, NgTemplateOutlet, NzAvatarModule]
})
export class YunzaiLayoutWebsite02Component extends YunzaiLayoutWebsiteBase {
  @Input() logoSrc?: string | any;
  @Input() logoAlt?: string = 'logo';
  @Input() userMenuShow?: boolean = false;
  @Input() slogan?: TemplateRef<void> | any;
  @Input() contentTpl?: TemplateRef<void> | any;

  get _logoSrc(): string | any {
    return this.logoSrc;
  }

  get _logoAlt(): string {
    return this.logoAlt || 'logo';
  }

  get _userMenuShow(): boolean {
    return this.userMenuShow || false;
  }

  get _slogan(): TemplateRef<void> | any {
    return this.slogan;
  }

  get _contentTpl(): TemplateRef<void> | any {
    return this.contentTpl;
  }

  get _avatar(): string | undefined {
    const [, getUser] = useLocalStorageUser();
    const baseUrl: string = this.configService.get('bis')?.baseUrl || '/backstage';
    const avatarUrl = getUser()?.avatarId ? `${baseUrl}/filecenter/file/${getUser()?.avatarId}` : undefined;
    return avatarUrl;
  }
}
