import type { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface YunzaiACLConfig {
  /**
   * Router URL when guard fail, default: `/403`
   */
  guard_url?: string;

  /**
   * `can` before execution callback
   */
  preCan?: ((roleOrAbility: number | number[] | string | string[] | YunzaiACLType) => YunzaiACLType | null) | null;
}

export interface YunzaiACLType {
  /**
   * 角色
   */
  role?: string[];
  /**
   * 权限点
   */
  ability?: number[] | string[];

  /**
   * Validated against, default: `oneOf`
   * - `allOf` the value validates against all the roles or abilities
   * - `oneOf` the value validates against exactly one of the roles or abilities
   */
  mode?: 'allOf' | 'oneOf';

  /**
   * 是否取反，即结果为 `true` 时表示未授权
   */
  except?: boolean;

  [key: string]: NzSafeAny;
}
