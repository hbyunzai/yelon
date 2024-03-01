import { YunzaiNavTopic } from './header-menu.type';

export enum NavType {
  APPLICATION = 'application', // 应用与服务
  GROUP = 'group', // 分组
  TILE = 'tiled', // 平铺
  BLANK = 'blank', // 空
  TABS = 'tabs' // 选项卡
}

export interface LayoutBasicAside {
  name: string;
  intro: string;
  icon: string;
}

export interface LayoutBasicDisplay {
  nav: boolean;
  reusetab: boolean;
  aside: boolean;
}

export interface LayoutNavApplicationState {
  active: boolean;
  type: 'all' | 'mine' | 'other';
  topic?: YunzaiNavTopic;
  topics: YunzaiNavTopic[];
  list: YunzaiNavTopic[];
  search: string | null;
}

export interface LayoutNavGroupState {
  topics: YunzaiNavTopic[];
}
