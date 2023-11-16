import { LayoutDefaultOptions } from '@yelon/theme/layout-default';
import { LayoutBasicAside, LayoutBasicDisplay, NavType } from '@yelon/util';

export interface LayoutBasicState {
  options: LayoutDefaultOptions;
  aside: LayoutBasicAside;
  display: LayoutBasicDisplay;
  navType: NavType;
}
