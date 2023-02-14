export interface YunzaiHeaderStyle {
  label: string;
  value: string;
}

export interface YunzaiProfile {
  name: string;
  url: string;
}

export interface YunzaiProjectInfo {
  colorfulLogoUrl: string;
  copyright: string;
  faviconUrl: string;
  gateway: string;
  headerStyle: YunzaiHeaderStyle[];
  maxLogoUrl: string;
  miniLogoUrl: string;
  profileList: YunzaiProfile[];
  projectName: string;
  showAllMenu: boolean;
  tucaoUrl: string;
}
