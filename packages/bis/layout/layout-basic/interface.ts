import { Subject } from 'rxjs';

import { LayoutDefaultOptions } from '@yelon/theme/layout-default';

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

export interface LayoutBasicState {
  options: LayoutDefaultOptions;
  aside: LayoutBasicAside;
  display: LayoutBasicDisplay;
  navType: NavType;
  destroy$: Subject<unknown>;
}
