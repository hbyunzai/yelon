import { Component, NgModule } from '@angular/core';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { YelonAuthModule } from '../../auth.module';
import { YA_SERVICE_TOKEN, ITokenService } from '../interface';
import { JWTGuard } from './jwt.guard';

describe('auth: JWTGuard', () => {
  let srv: ITokenService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockComponent],
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: 'home',
            component: MockComponent,
            canActivate: [JWTGuard]
          },
          {
            path: 'my',
            canActivateChild: [JWTGuard],
            children: [{ path: 'profile', component: MockComponent }]
          },
          {
            path: 'lazy',
            canLoad: [JWTGuard],
            loadChildren: () => AModule
          },
          {
            path: 'login',
            component: MockComponent
          }
        ]),
        YelonAuthModule
      ]
    });
    srv = TestBed.inject(YA_SERVICE_TOKEN);
    router = TestBed.inject<Router>(Router);
    srv.set({
      token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6ImRldmN1aSIsImFkbWluIjp0cnVlLCJleHAiOjQ2NzA0MDk2MDB9.shHyoX0bx_ArosYG28D2iwuKyIBtG-lq1yEMvF8Y7tE`
    });
  });

  it(`should be activated when token valid`, (done: () => void) => {
    router.navigateByUrl('/home').then(res => {
      expect(res).toBe(true);
      done();
    });
  });

  it(`should be activated when not guard route`, (done: () => void) => {
    srv.set({ token: `` });
    router.navigateByUrl('/login').then(res => {
      expect(res).toBe(true);
      done();
    });
  });

  it(`should be go to login when token invalid`, (done: () => void) => {
    srv.set({ token: `` });
    router.navigateByUrl('/home').then(res => {
      expect(res).toBe(false);
      spyOn(router, 'navigateByUrl');
      expect(router.navigateByUrl).not.toHaveBeenCalled();
      setTimeout(() => {
        expect(router.navigateByUrl).toHaveBeenCalled();
        done();
      }, 2);
    });
  });

  it(`should be support children route`, (done: () => void) => {
    router.navigateByUrl('/my/profile').then(res => {
      expect(res).toBe(true);
      done();
    });
  });

  it(`should be support lazy module route`, fakeAsync(() => {
    router.navigateByUrl('/lazy').then(res => {
      expect(res).toBe(true);
    });
  }));
});

@Component({ template: '' })
class MockComponent {}

@NgModule({})
class AModule {}
