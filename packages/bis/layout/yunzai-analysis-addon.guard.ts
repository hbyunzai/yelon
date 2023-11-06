import {Inject, inject, Injectable} from "@angular/core";
import {CanActivateChildFn, CanActivateFn} from "@angular/router";
import {
  deepCopy,
  PathToRegexpService,
  useLocalStorageUser,
  YunzaiBusinessConfig,
  YunzaiConfigService,
  YunzaiUser
} from "@yelon/util";
import {Menu} from "@yelon/theme";
import {BUSINESS_DEFAULT_CONFIG, mergeBisConfig} from "./bis.config";
import {NzSafeAny} from "ng-zorro-antd/core/types";
import {AnalysisAddon} from "./analysis.addon";
import {ITokenService, YA_SERVICE_TOKEN} from "@yelon/auth";

@Injectable({
  providedIn: 'root'
})
export class YunzaiAnalysisAddonGuardService {

  private bis: YunzaiBusinessConfig = BUSINESS_DEFAULT_CONFIG;
  private menus: NzSafeAny[] = [];
  private links: Array<{ title: string, link: string }> = [];


  constructor(
    private configService: YunzaiConfigService,
    private pathToRegexp: PathToRegexpService,
    @Inject(YA_SERVICE_TOKEN) private tokenService: ITokenService,
  ) {
    this.bis = mergeBisConfig(this.configService);
    const [, getUser] = useLocalStorageUser();
    const user: YunzaiUser = getUser()!;
    // @ts-ignore
    this.menus = deepCopy((user.menu as any) || []).filter((m: Menu) => m.systemCode && m.systemCode === this.bis.systemCode) as Menu[];
    if (user) {
      AnalysisAddon.putValueInAnalysis({
        userid: user.id,
        realname: user.realname,
        usertype: user.userType,
        usercode: user.userCode,
        username: user.username,
        account: user.username,
        deptid: user.deptId,
        deptname: user.deptName,
        token: this.tokenService.get()?.access_token
      })
    }
    if (this.menus && this.menus.length > 0) {
      AnalysisAddon.putValueInAnalysis({system: (this.menus[0] as Menu).text})
    }
    this.getAllLinks(this.menus, this.links);
  }


  process(url: string): boolean {
    let flag = false;
    this.links.forEach((link) => {
      const regexp: RegExp = this.pathToRegexp.stringToRegexp(link, null, null);
      if (regexp.test(url.split('?')[0])) {
        flag = true
        AnalysisAddon.putValueInAnalysis({
          routename: link.title,
          routeurl: link.link
        })
        return;
      }
    });
    if (!flag) {
      AnalysisAddon.putValueInAnalysis({
        routename: url,
        routeurl: url
      })
    }
    return true
  }

  getAllLinks(menu: Menu[], links: Array<{ title: string, link: string }>): void {
    menu.forEach((sider: Menu) => {
      if (sider.link) {
        links.push({title: sider.text ? sider.text : sider.link, link: sider.link});
      }
      if (sider.children && sider.children.length > 0) {
        this.getAllLinks(sider.children, links);
      }
    });
  }
}


export const analysisAddonCanActive: CanActivateFn = (_, state) => inject(YunzaiAnalysisAddonGuardService).process(state.url)
export const analysisAddonCanActiveChild: CanActivateChildFn = (_, state) => inject(YunzaiAnalysisAddonGuardService).process(state.url)
