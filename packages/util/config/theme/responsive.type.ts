export interface YunzaiThemeResponsiveConfig {
  rules: {
    [key: number]: {
      xs: number;
      sm?: number;
      md?: number;
      lg?: number;
      xl?: number;
      xxl?: number;
    };
  };
}
