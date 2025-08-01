import {
  AfterViewInit,
  ComponentRef,
  Directive,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  TemplateRef,
  ViewContainerRef,
  inject
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import {
  YunzaiConfigService,
  YunzaiDateRangePickerShortcut,
  YunzaiDateRangePickerShortcutItem
} from '@yelon/util/config';
import { fixEndTimeOfRange, getTimeDistance } from '@yelon/util/date-time';
import { assert, deepMergeKey } from '@yelon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzDatePickerComponent, NzRangePickerComponent, type ɵDatePickerService } from 'ng-zorro-antd/date-picker';

import { RangePickerShortcutTplComponent } from './range-shortcut.component';

@Directive({
  selector: 'nz-range-picker[extend]',
  exportAs: 'extendRangePicker'
})
export class RangePickerDirective implements OnDestroy, AfterViewInit {
  static ngAcceptInputType_shortcut: YunzaiDateRangePickerShortcut | string | null;

  private readonly dom = inject(DomSanitizer);
  private readonly vcr = inject(ViewContainerRef);
  private readonly nativeComp = inject(NzRangePickerComponent, { host: true, optional: true });
  private readonly cogSrv = inject(YunzaiConfigService);

  private defaultShortcuts: YunzaiDateRangePickerShortcut;
  private _shortcut: YunzaiDateRangePickerShortcut | null = null;
  private shortcutFactory: ComponentRef<RangePickerShortcutTplComponent> | null = null;
  start: Date | null = null;
  end: Date | null = null;

  @Input()
  set shortcut(val: YunzaiDateRangePickerShortcut | null) {
    const item = deepMergeKey(
      { list: [] },
      true,
      this.defaultShortcuts,
      val == null ? {} : val
    ) as YunzaiDateRangePickerShortcut;
    if (typeof val !== 'object') {
      item.enabled = val !== false;
    }
    (item.list || []).forEach(i => {
      i._text = this.dom.bypassSecurityTrustHtml(i.text);
    });
    this._shortcut = item;
    this.refreshShortcut();
  }
  get shortcut(): YunzaiDateRangePickerShortcut | null {
    return this._shortcut;
  }
  @Input({ required: true }) ngModelEnd: NzSafeAny;
  @Output() readonly ngModelEndChange = new EventEmitter<NzSafeAny>();

  private get dp(): NzDatePickerComponent {
    return this.nativeComp!.datePicker;
  }

  private get srv(): ɵDatePickerService {
    return this.dp.datePickerService;
  }

  constructor() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      assert(
        !!this.nativeComp,
        `It should be attached to nz-range-picker component, for example: '<nz-range-picker [(ngModel)]="i.start" extend [(ngModelEnd)]="i.end" shortcut></nz-range-picker>'`
      );
    }
    const cog = this.cogSrv.merge('dataRange', {
      nzFormat: 'yyyy-MM-dd',
      nzAllowClear: true,
      nzAutoFocus: false,
      nzPopupStyle: { position: 'relative' },
      nzShowToday: true,
      shortcuts: {
        enabled: false,
        closed: true,
        list: [
          {
            text: '今天',
            fn: () => getTimeDistance('today')
          },
          {
            text: '昨天',
            fn: () => getTimeDistance('yesterday')
          },
          {
            text: '近3天',
            fn: () => getTimeDistance(-2)
          },
          {
            text: '近7天',
            fn: () => getTimeDistance(-6)
          },
          {
            text: '本周',
            fn: () => getTimeDistance('week')
          },
          {
            text: '本月',
            fn: () => getTimeDistance('month')
          },
          {
            text: '全年',
            fn: () => getTimeDistance('year')
          }
        ]
      }
    })!;
    this.defaultShortcuts = { ...cog.shortcuts } as YunzaiDateRangePickerShortcut;
    Object.assign(this, cog);
  }

  private cd(): void {
    (this.dp as NzSafeAny).cdr.markForCheck();
  }

  private overrideNative(): void {
    const dp = this.dp;
    dp.writeValue = (value: Date) => {
      const dates = (value && this.ngModelEnd ? [value, this.ngModelEnd] : []).filter(w => !!w);
      this.srv.setValue(this.srv.makeValue(dates));
      this.start = dates.length > 0 ? dates[0] : null;
      this.end = dates.length > 0 ? dates[1] : null;
      this.cd();
    };

    const oldOnChangeFn = dp.onChangeFn;
    dp.onChangeFn = (list: Array<Date | null>) => {
      let start: Date | null = null;
      let end: Date | null = null;
      if (list.length > 0 && list.filter(w => w != null).length === 2) {
        [start, end] = fixEndTimeOfRange([list[0]!, list[1]!]);
      }
      this.start = start;
      this.end = end;
      oldOnChangeFn(start);
      this.ngModelEnd = end;
      this.ngModelEndChange.emit(end);
    };
  }

  private refreshShortcut(): void {
    if (!this._shortcut) {
      return;
    }
    const { enabled, list } = this._shortcut;
    let extraFooter: TemplateRef<NzSafeAny> | undefined;
    if (!this.nativeComp || !enabled) {
      extraFooter = undefined;
    } else {
      if (!this.shortcutFactory) {
        this.shortcutFactory = this.vcr.createComponent(RangePickerShortcutTplComponent);
      }
      const { instance } = this.shortcutFactory;
      instance.list = list!;
      instance.click = (item: YunzaiDateRangePickerShortcutItem) => {
        const res = item.fn([this.start, this.end]);
        this.srv.setValue(this.srv.makeValue(res as Date[]));
        this.dp.onChangeFn(res);
        this.dp.close();
      };
      extraFooter = instance.tpl;
    }
    this.nativeComp!.datePicker.extraFooter = extraFooter;
    Promise.resolve().then(() => this.cd());
  }

  ngAfterViewInit(): void {
    this.overrideNative();
    this.refreshShortcut();
  }

  private destoryShortcut(): void {
    if (this.shortcutFactory != null) {
      this.shortcutFactory.destroy();
    }
  }

  ngOnDestroy(): void {
    this.destoryShortcut();
  }
}
