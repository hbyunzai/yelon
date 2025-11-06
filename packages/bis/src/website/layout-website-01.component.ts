import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { I18nPipe } from '@yelon/theme';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { YunzaiLayoutWebsiteBase } from './layout-website-base';

@Component({
  selector: 'yunzai-layout-website-01',
  template: `
    <div class="yz-layout-website-01">
      <div class="yz-layout-website-01-nav__user">
        @if (isLogin) {
          <a class="yz-layout-website-01-link" nz-dropdown [nzDropdownMenu]="menu" [nzOverlayStyle]="{ width: '120px' }">
            <span nz-icon nzType="user" nzTheme="outline"></span>{{ _username }}<span nz-icon nzType="down"></span>
          </a>
          <nz-dropdown-menu #menu="nzDropdownMenu">
            <ul nz-menu [nzSelectable]="true">
              @for (link of _links; track $index) {
                <li nz-menu-item class="yz-layout-website-01-link__li" (click)="to(link.url)">{{ link.name }}</li>
              }
              <li nz-menu-item [nzDanger]="true" class="yz-layout-website-01-link__li" (click)="logout()">{{ 'menu.account.logout' | i18n }} </li>
            </ul>
          </nz-dropdown-menu>
        } @else {
          <a class="yz-layout-website-01-link" (click)="login()"> <span nz-icon nzType="login" nzTheme="outline"></span>{{ 'app.login.login' | i18n }}</a>
        }
      </div>

      <header class="yz-layout-website-01-nav">
        @if (_logoSrc) {
          <img [alt]="_logoAlt" class="yz-layout-website-01-nav__logo" [src]="_logoSrc" />
        } @else {
          <div class="yz-layout-website-01-nav__logo__full">LOGO</div>
        }

        <div class="yz-layout-website-01-nav__content">
          <ng-template *ngTemplateOutlet="_contentTpl" />
        </div>
        <div class="yz-layout-website-01-nav__slogan">
          {{ _slogan }}
        </div>
      </header>
      <main class="yz-layout-website-01-container">
        <router-outlet />
      </main>
    </div>
  `,

  imports: [RouterOutlet, I18nPipe, NzI18nModule, NgFor, NgIf, NzDropDownModule, NzIconModule, NgTemplateOutlet]
})
export class YunzaiLayoutWebsite01Component extends YunzaiLayoutWebsiteBase {
  @Input() logoSrc?: string | any;
  @Input() logoAlt?: string = 'logo';
  @Input() slogan?: string = '';
  @Input() contentTpl?: TemplateRef<void> | any;

  get _logoSrc(): string | any {
    return this.logoSrc;
  }

  get _logoAlt(): string {
    return this.logoAlt || 'logo';
  }

  get _slogan(): string {
    return this.slogan || '';
  }

  get _contentTpl(): TemplateRef<void> | any {
    return this.contentTpl;
  }
}
