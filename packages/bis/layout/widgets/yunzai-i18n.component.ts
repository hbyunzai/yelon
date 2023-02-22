import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { YUNZAI_I18N_TOKEN, SettingsService, YunzaiI18NType } from '@yelon/theme';
import { BooleanInput, InputBoolean } from '@yelon/util/decorator';

import { YunzaiI18NService } from '../yunzai-i18n.service';

@Component({
  selector: 'yunzai-i18n',
  template: `
    <div *ngIf="showLangText" nz-dropdown [nzDropdownMenu]="langMenu" nzPlacement="bottomRight">
      <i nz-icon nzType="global"></i>
      {{ 'lang.nav' | i18n }}
      <i nz-icon nzType="down"></i>
    </div>
    <i
      *ngIf="!showLangText"
      nz-dropdown
      [nzDropdownMenu]="langMenu"
      nzPlacement="bottomRight"
      nz-icon
      nzType="global"
    ></i>
    <nz-dropdown-menu #langMenu="nzDropdownMenu">
      <ul nz-menu>
        <li
          nz-menu-item
          *ngFor="let item of langs"
          [nzSelected]="item.code === curLangCode"
          (click)="change(item.code)"
        >
          <template *ngIf="!item.icon">
            <span role="img" [attr.aria-label]="item.text" class="pr-xs">{{ item.abbr }}</span>
          </template>
          <template *ngIf="item.icon">
            <img [src]="'data:image/png;base64,' + item.icon" [alt]="item.abbr" class="pr-xs" />
          </template>
          {{ item.text }}
        </li>
      </ul>
    </nz-dropdown-menu>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YunzaiI18NComponent implements OnDestroy {
  static ngAcceptInputType_showLangText: BooleanInput;
  private destroy$: Subject<any> = new Subject();
  /** Whether to display language text */
  @Input() @InputBoolean() showLangText = true;

  langs: YunzaiI18NType[] = [];

  get curLangCode(): string {
    return this.settings.layout.lang;
  }

  constructor(
    private settings: SettingsService,
    @Inject(YUNZAI_I18N_TOKEN) private i18n: YunzaiI18NService,
    @Inject(DOCUMENT) private doc: any
  ) {
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
