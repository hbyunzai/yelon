import { NgTemplateOutlet } from '@angular/common';
import { Component, input, output, ViewEncapsulation } from '@angular/core';

import { LocaleData } from '@yelon/theme';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import { NzListComponent, NzListItemComponent, NzListItemMetaComponent } from 'ng-zorro-antd/list';
import { NzTagComponent } from 'ng-zorro-antd/tag';

import { NoticeIconSelect, NoticeItem } from './notice-icon.types';

@Component({
  selector: 'notice-icon-tab',
  exportAs: 'noticeIconTab',
  templateUrl: './notice-icon-tab.component.html',

  encapsulation: ViewEncapsulation.None,
  imports: [
    NgTemplateOutlet,
    NzStringTemplateOutletDirective,
    NzListComponent,
    NzListItemComponent,
    NzListItemMetaComponent,
    NzTagComponent
  ]
})
export class NoticeIconTabComponent {
  locale = input.required<LocaleData>();
  item = input.required<NoticeItem>();
  readonly select = output<NoticeIconSelect>();
  readonly clear = output<string>();

  onClick(item: NoticeItem, event: Event): void {
    this.select.emit({ title: this.item().title, item, event });
  }

  onClear(): void {
    this.clear.emit(this.item().title);
  }
}
