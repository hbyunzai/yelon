import { YunzaiNavTopic } from './header-menu.type';

export enum NavType {
  APPLICATION = 'application',
  GROUP = 'group',
  TILE = 'tile'
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
