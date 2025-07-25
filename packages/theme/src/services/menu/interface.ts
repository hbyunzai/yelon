import { SafeHtml } from '@angular/platform-browser';

import type { ACLCanType } from '@yelon/acl';

export interface MenuIcon {
  /**
   * Type for icon
   *
   * - `img`, `svg` Size uses `14px` width and height
   */
  type: 'class' | 'icon' | 'iconfont' | 'img' | 'svg';
  /** Value for the icon, can be set Class Name, nz-icon of `nzType`, image */
  value?: string | SafeHtml;
  /** Type of the ant design icon, default: `outline` */
  theme?: 'outline' | 'twotone' | 'fill';
  /** Rotate icon with animation, default: `false` */
  spin?: boolean;
  /** Only support the two-tone icon. Specific the primary color */
  twoToneColor?: string;
  /** Type of the icon from iconfont */
  iconfont?: string;
  /** Rotate degrees */
  rotate?: number;
}

export interface Menu {
  [key: string]: any;
  /** Rendering type of menu item */
  render_type?: 'item' | 'divider';
  /** Text of menu item, can be choose one of  `text` or `i18n` (Support HTML) */
  text?: string;
  /** I18n key of menu item, can be choose one of  `text` or `i18n` (Support HTML) */
  i18n?: string;
  /** Whether to display the group name, default: `true` */
  group?: boolean;
  /** Routing for the menu item, can be choose one of `link` or `externalLink` */
  link?: string;
  /** External link for the menu item, can be choose one of `link` or `externalLink` */
  externalLink?: string;
  /** Specifies `externalLink` where to display the linked URL */
  target?: '_blank' | '_self' | '_parent' | '_top';
  /** Icon for the menu item, only valid for the first level menu */
  icon?: string | MenuIcon | null;
  /** Badget for the menu item when `group` is `true` */
  badge?: number;
  /** Whether to display a red dot instead of `badge` value */
  badgeDot?: boolean;
  /** Badge [color](https://ng.ant.design/components/badge/en#nz-badge) */
  badgeStatus?: 'success' | 'processing' | 'default' | 'error' | 'warning';
  /** Maximum count to show in badge, show `${badgeOverflowCount}+` when exceed */
  badgeOverflowCount?: number;
  /** Whether disable for the menu item */
  disabled?: boolean;
  /** Whether hidden for the menu item */
  hide?: boolean;
  /** Whether hide in breadcrumbs, which are valid when the `page-header` component automatically generates breadcrumbs */
  hideInBreadcrumb?: boolean;
  /** ACL configuration, it's equivalent to `ACLService.can(roleOrAbility: ACLCanType)` parameter value */
  acl?: ACLCanType;
  /** Whether shortcut menu item */
  shortcut?: boolean;
  /** Wheter shortcut menu root node */
  shortcutRoot?: boolean;
  /** Whether to allow reuse, need to cooperate with the `reuse-tab` component */
  reuse?: boolean;
  /**
   * Whether to expand, when `checkStrictly` is valid in `sidebar-nav` component
   */
  open?: boolean;
  /** Unique identifier of the menu item, can be used in `getItem`,` setItem` to update a menu */
  key?: string;
  /** Children menu of menu item */
  children?: Menu[];
}

/** @inner Just only inner type */
export interface MenuInner extends Menu {
  _id?: number;
  _parent?: Menu | null;
  _depth?: number;
  _hidden?: boolean;
  _selected?: boolean;
  _aclResult?: boolean;
}
