import { CommonModule, DOCUMENT } from '@angular/common';
import { booleanAttribute, ChangeDetectionStrategy, Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { I18nPipe, SettingsService, YUNZAI_I18N_TOKEN, YunzaiHttpI18NService, YunzaiI18NType } from '@yelon/theme';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: `yunzai-header-i18n`,
  template: `
    @if (showLangText) {
      <div nz-dropdown [nzDropdownMenu]="langMenu" nzPlacement="bottomRight">
        <nz-icon nzType="global" nzTheme="outline"></nz-icon>
        {{ 'lang.nav' | i18n }}
        <nz-icon nzType="down" nzTheme="outline"></nz-icon>
      </div>
    } @else {
      <i nz-dropdown [nzDropdownMenu]="langMenu" nzPlacement="bottomRight" nz-icon nzType="global" nzTheme="outline"></i>
    }
    <nz-dropdown-menu data-event-id="_nav_lang" #langMenu="nzDropdownMenu">
      <ul nz-menu>
        @for (item of langs; track item) {
          <li data-event-id="_nav_lang" [attr.data-text]="item.text" nz-menu-item [nzSelected]="item.code === curLangCode" (click)="change(item.code)">
            @if (!item.icon) {
              <span role="img" [attr.aria-label]="item.text" class="pr-xs">{{ item.abbr }}</span>
            } @else {
              <img style="margin-right:4px" width="50px" height="30px" [src]="'data:image/png;base64,' + item.icon" [alt]="item.abbr" class="pr-xs" />
            }
            {{ item.text }}
          </li>
        }
      </ul>
    </nz-dropdown-menu>
  `,
  host: {
    '[class.flex-1]': 'true'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NzDropDownModule, NzIconModule, I18nPipe, CommonModule]
})
export class YunzaiHeaderI18nComponent implements OnInit, OnDestroy {
  private readonly settings = inject(SettingsService);
  private readonly i18n = inject<YunzaiHttpI18NService>(YUNZAI_I18N_TOKEN);
  private readonly doc = inject(DOCUMENT);
  langs: YunzaiI18NType[] = [];
  private destroy$: Subject<any> = new Subject<any>();
  /** Whether to display language text */
  @Input({ transform: booleanAttribute }) showLangText = true;

  get curLangCode(): string {
    return this.settings.layout.lang;
  }
  ngOnInit(): void {
    this.i18n
      .getLangs()
      .pipe(takeUntil(this.destroy$))
      .subscribe(langs => {
        this.langs = langs;
      });
  }

  change(lang: string): void {
    const spinEl = this.doc.createElement('div');
    spinEl.setAttribute('class', `page-loading ant-spin ant-spin-lg ant-spin-spinning`);
    spinEl.innerHTML = `<span class="ant-spin-dot ant-spin-dot-spin"><i></i><i></i><i></i><i></i></span>`;
    this.doc.body.appendChild(spinEl);

    this.i18n.loadLangData(lang).subscribe(res => {
      this.i18n.use(lang, res);
      this.settings.setLayout('lang', lang);
      setTimeout(() => this.doc.location.reload());
    });
  }
  ngOnDestroy(): void {
    this.destroy$.complete();
  }
}
