import {Injectable} from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    Router,
    RouterStateSnapshot,
    UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';

import {Menu} from '@yelon/theme';
import {
    deepCopy,
    log,
    YunzaiBusinessConfig,
    YunzaiConfigService,
    PathToRegexpService,
    useLocalStorageUser, YunzaiUser
} from '@yelon/util';
import {NzSafeAny} from 'ng-zorro-antd/core/types';

import {BUSINESS_DEFAULT_CONFIG, mergeBisConfig} from './bis.config';

@Injectable({
    providedIn: 'root'
})
export class ActGuard implements CanActivate, CanActivateChild {
    private bis: YunzaiBusinessConfig = BUSINESS_DEFAULT_CONFIG;
    private menus: NzSafeAny[] = [];
    private links: string[] = [];

    constructor(
        private configService: YunzaiConfigService,
        private pathToRegexp: PathToRegexpService,
        private router: Router
    ) {
        log('act: ');
        this.bis = mergeBisConfig(this.configService);
        log('act: config ', this.bis);
        const [, getUser] = useLocalStorageUser()
        const user: YunzaiUser = getUser()!;
        log('act: user ', user);
        // @ts-ignore
        this.menus = deepCopy(user.menu as any || []).filter(
            (m: Menu) => m.systemCode && m.systemCode === this.bis.systemCode
        ) as Menu[];
        log('act: menus ', this.menus);
        this.getAllLinks(this.menus, this.links);
        log('act: links ', this.links);
    }

    canActivate(
        _: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        log('act: can activate ', state);
        if (this.preHandle(state)) {
            return true;
        }
        log('act: can activate child prehandle success');
        let canactivate = false;
        this.links.forEach((link: string) => {
            const regexp: RegExp = this.pathToRegexp.stringToRegexp(link, null, null);
            log(`act: ${link} test ${state.url.split('?')[0]}`);
            if (regexp.test(state.url.split('?')[0])) {
                canactivate = true;
                log(`act: test value ${canactivate}`);
                return;
            }
        });
        if (canactivate) {
            log(`act: test sucess`);
            return true;
        } else {
            log(`act: test error`);
            this.router.navigate(['displayIndex']);
            return false;
        }
    }

    canActivateChild(
        _: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        log('act: can activate child ', state);
        if (this.preHandle(state)) {
            return true;
        }
        log('act: can activate child prehandle success');

        let canactivate = false;
        this.links.forEach((link: string) => {
            const regexp: RegExp = this.pathToRegexp.stringToRegexp(link, null, null);
            if (regexp.test(state.url.split('?')[0])) {
                log(`act: ${link} test ${state.url.split('?')[0]}`);
                canactivate = true;
                log(`act: test value ${canactivate}`);
                return;
            }
        });
        if (canactivate) {
            log(`act: test sucess`);
            return true;
        } else {
            log(`act: test error`);
            this.router.navigate(['displayIndex']);
            return false;
        }
    }

    preHandle(state: RouterStateSnapshot): boolean {
        return (
            state.url.includes('error') ||
            state.url.includes('exception') ||
            state.url.includes('displayIndex') ||
            state.url === '' ||
            state.url === null ||
            state.url === '/' ||
            state.url.includes('iframePage')
        );
    }

    getAllLinks(menu: Menu[], links: string[]): void {
        menu.forEach((sider: Menu) => {
            if (sider.link) {
                links.push(sider.link);
            }
            if (sider.children && sider.children.length > 0) {
                this.getAllLinks(sider.children, links);
            }
        });
    }
}
