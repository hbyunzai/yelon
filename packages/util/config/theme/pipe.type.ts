export interface YunzaiThemePipeConfig {
  dateFormat?: string;
  dateFormatCustom?: YunzaiThemePipeDateFormatCustom;
}

export type YunzaiThemePipeDateFormatCustom = (
  value: Date,
  formatString?: string | null,
  options?: { locale?: Locale }
) => string;
