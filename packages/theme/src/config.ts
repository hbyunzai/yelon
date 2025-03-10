import type { HttpInterceptorFn } from '@angular/common/http';
import type { EnvironmentProviders, ModuleWithProviders, Provider, Type } from '@angular/core';

export interface Environment {
  [key: string]: any;

  /**
   * Whether production environment
   *
   * 是否生产环境
   */
  production: boolean;
  /**
   * Whether uses the URL fragment instead of the history API.
   *
   * 是否启用 URL 片段（#）代替 history API
   */
  useHash: boolean;
  /**
   * API configuration
   *
   * API配置
   */
  api: ApiConfig;
  /**
   * Defined imported modules in `app-config.ts`
   *
   * 定义在 `app-config.ts` 导入的模块列表
   */
  modules?: Array<Type<any> | ModuleWithProviders<any> | any[]>;
  /**
   * Defined providers in `app-config.ts`
   *
   * 定义在 `app-config.ts` 导入的 providers 列表
   */
  providers?: Array<Provider | EnvironmentProviders>;
  /**
   * Defined interceptorFns in `app-config.ts`
   *
   * 定义在 `app-config.ts` 导入的 interceptorFns 列表
   */
  interceptorFns?: HttpInterceptorFn[];
}

export interface ApiConfig {
  [key: string]: any;

  /**
   * Specify API prefix
   *
   * 指定API前缀
   */
  baseUrl: string;
  /**
   * Whether to enable automatic refresh token
   *
   * 是否启用自动刷新Token
   */
  refreshTokenEnabled: boolean;
  /**
   * Token refresh type, `re-request` Trigger token refresh request when the detection time expires, and then re-send the original request, `auth-refresh` uses `@yelon/auth` to periodically check whether it has expired
   *
   * 刷新Token方式，`re-request` 当检测过期时间到期时先发起刷新Token请求，再重新发起原请求，`auth-refresh` 利用 `@yelon/auth` 来定期检测是否过期
   */
  refreshTokenType: 're-request' | 'auth-refresh';
  /**
   * 系统编码
   */
  systemCode: string;
  /**
   * 顶部菜单全部和我的
   */
  nav: {
    /**
     * 是否显示我的
     */
    mine: boolean;
    /**
     * 是否显示全部
     */
    all: boolean;
  };
  /**
   * 登录表单
   */
  loginForm: FormData | undefined;
}
