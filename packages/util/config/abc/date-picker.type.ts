import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import type { DisabledTimeFn, NzDateMode, PresetRanges, SupportTimeOptions } from 'ng-zorro-antd/date-picker';

export interface YunzaiDateRangePickerConfig {
  /**
   * 默认：`yyyy-MM-dd`
   */
  nzFormat?: string;
  nzClassName?: string;
  nzSize?: string;
  nzStyle?: string;
  /**
   * 默认：`true`
   */
  nzAllowClear?: boolean;
  /**
   * 默认：`false`
   */
  nzAutoFocus?: boolean;
  nzDisabledDate?: (d: Date) => boolean;
  nzDisabledTime?: DisabledTimeFn;
  /**
   * 默认：`{ position: 'relative' }`
   */
  nzPopupStyle?: { [klass: string]: unknown };
  nzDropdownClassName?: string;
  nzRenderExtraFooter?: string;
  nzShowTime?: SupportTimeOptions | boolean;
  /**
   * 默认：`true`
   */
  nzShowToday?: boolean;
  nzMode?: NzDateMode | NzDateMode[];
  nzRanges?: PresetRanges;
  shortcuts?: YunzaiDateRangePickerShortcut;
}

export interface YunzaiDateRangePickerShortcut {
  /** Whether to enable, default: `false` */
  enabled?: boolean;
  /** Whether to close the panel after clicking, default: `true` */
  closed?: boolean;
  /**
   * Shortcut list, default: `今天`, `昨天`, `近3天`, `近7天`, `本周`, `本月`, `全年`
   */
  list?: YunzaiDateRangePickerShortcutItem[];
}

export interface YunzaiDateRangePickerShortcutItem {
  [key: string]: NzSafeAny;

  text: string;
  fn: (value: Array<Date | null>) => [Date | null, Date | null];
}
