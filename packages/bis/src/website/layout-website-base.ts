import { Directive, inject } from '@angular/core';

import { YA_SERVICE_TOKEN } from '@yelon/auth';
import { useLocalStorageProjectInfo, useLocalStorageUser, WINDOW, YunzaiConfigService, YunzaiProfile } from '@yelon/util';

import { YunzaiStartupService } from '../startup.service';

/**
 * Base class for website layout components to share common authentication and navigation logic
 */
@Directive()
export abstract class YunzaiLayoutWebsiteBase {
  protected readonly tokenService = inject(YA_SERVICE_TOKEN);
  protected readonly configService = inject(YunzaiConfigService);
  protected readonly startupSrv = inject(YunzaiStartupService);
  protected readonly win = inject(WINDOW);

  get _username(): string {
    const [, getUser] = useLocalStorageUser();
    return getUser()?.realname || '';
  }

  get isLogin(): boolean {
    const [, getUser] = useLocalStorageUser();
    return !!this.tokenService.get()?.access_token && !!getUser();
  }

  get _links(): YunzaiProfile[] {
    const [, getProjectInfo] = useLocalStorageProjectInfo();
    return getProjectInfo()?.profileList || [];
  }

  login(): void {
    this.startupSrv.load({ force: true }).subscribe(() => {});
  }

  logout(): void {
    const baseUrl = this.configService.get('bis')?.baseUrl || '/backstage';
    this.win.location.href = `${baseUrl}/cas-proxy/app/logout?callback=${encodeURIComponent(this.win.location.href)}`;
  }

  to(url?: string): void {
    if (url) this.win.location.href = url;
  }
}
