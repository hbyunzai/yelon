import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, inject, Input, TemplateRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { YA_SERVICE_TOKEN } from '@yelon/auth';
import { I18nPipe } from '@yelon/theme';
import {
  useLocalStorageProjectInfo,
  useLocalStorageUser,
  WINDOW,
  YunzaiConfigService,
  YunzaiProfile
} from '@yelon/util';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { YunzaiStartupService } from '../startup.service';

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
              <a
                class="yz-layout-website-02-link"
                nz-dropdown
                [nzDropdownMenu]="menu"
                [nzDisabled]="!_userMenuShow"
                [nzPlacement]="'bottomRight'"
              >
                <nz-avatar nzIcon="user" [nzSrc]="_avatar" /><b>欢迎访问：{{ _username }}</b>
                <span nz-icon nzType="down" *ngIf="_userMenuShow"></span>
              </a>
              <nz-dropdown-menu #menu="nzDropdownMenu">
                <ul nz-menu nzSelectable>
                  @for (link of _links; track $index) {
                    <li nz-menu-item class="yz-layout-website-02-link__li" (click)="to(link.url)">{{ link.name }}</li>
                  }
                  <li nz-menu-item nzDanger class="yz-layout-website-02-link__li" (click)="logout()">{{
                    'menu.account.logout' | i18n
                  }}</li>
                </ul>
              </nz-dropdown-menu>
            } @else {
              <a class="yz-layout-website-02-link" (click)="login()">
                <span nz-icon nzType="login" nzTheme="outline"></span>{{ 'app.login.login' | i18n }}</a
              >
            }
          </div>
        </div>
      </header>
      <main class="yz-layout-website-02-container">
        <router-outlet />
      </main>
    </div>
  `,

  imports: [
    RouterOutlet,
    I18nPipe,
    NzI18nModule,
    NgFor,
    NgIf,
    NzDropDownModule,
    NzIconModule,
    NgTemplateOutlet,
    NzAvatarModule
  ]
})
export class YunzaiLayoutWebsite02Component {
  @Input() logoSrc?: string | any;
  @Input() logoAlt?: string = 'logo';
  @Input() userMenuShow?: boolean = false;
  @Input() slogan?: TemplateRef<void> | any;
  @Input() contentTpl?: TemplateRef<void> | any;

  private readonly tokenService = inject(YA_SERVICE_TOKEN);
  private readonly configService = inject(YunzaiConfigService);
  private readonly startupSrv = inject(YunzaiStartupService);
  private readonly win = inject(WINDOW);

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

  get _username(): string {
    const [, getUser] = useLocalStorageUser();
    return getUser()?.realname || '';
  }

  get _avatar(): string | undefined {
    const [, getUser] = useLocalStorageUser();
    const baseUrl: string = this.configService.get('bis')?.baseUrl || '/backstage';
    const avatarUrl = getUser()?.avatarId ? `${baseUrl}/filecenter/file/${getUser()?.avatarId}` : undefined;
    return avatarUrl;
  }

  get isLogin(): boolean {
    const [, getUser] = useLocalStorageUser();
    return !!this.tokenService.get()?.access_token && !!getUser();
  }

  get _links(): YunzaiProfile[] {
    const [, getProjectInfo] = useLocalStorageProjectInfo();
    return getProjectInfo()?.profileList || [];
  }

  login(): void {
    this.startupSrv.load({ force: true }).subscribe(() => {});
  }

  logout(): void {
    const baseUrl = this.configService.get('bis')?.baseUrl || '/backstage';
    this.win.location.href = `${baseUrl}/cas-proxy/app/logout?callback=` + encodeURIComponent(this.win.location.href);
  }

  to(url?: string): void {
    if (url) this.win.location.href = url;
  }
}
