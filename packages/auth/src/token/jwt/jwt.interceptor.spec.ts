import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { Component, Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of, catchError } from 'rxjs';

import { YunzaiAuthConfig, YUNZAI_CONFIG } from '@yelon/util/config';

import { YelonAuthModule } from '../../auth.module';
import { YA_SERVICE_TOKEN } from '../interface';
import { JWTInterceptor } from './jwt.interceptor';
import { JWTTokenModel } from './jwt.model';

function genModel(
  token:
    | string
    | null = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6ImRldmN1aSIsImFkbWluIjp0cnVlLCJleHAiOjQ2NzA0MDk2MDB9.shHyoX0bx_ArosYG28D2iwuKyIBtG-lq1yEMvF8Y7tE`
): JWTTokenModel {
  const model = new JWTTokenModel();
  // from: https://jwt.io/
  model.token = token;
  return model;
}

describe('auth: jwt.interceptor', () => {
  let http: HttpClient;
  let httpBed: HttpTestingController;

  function genModule(options: YunzaiAuthConfig, tokenData?: JWTTokenModel): void {
    TestBed.configureTestingModule({
      declarations: [MockComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          {
            path: 'login',
            component: MockComponent
          }
        ]),
        YelonAuthModule
      ],
      providers: [
        { provide: YUNZAI_CONFIG, useValue: { auth: options } },
        { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true }
      ]
    });
    if (tokenData) TestBed.inject(YA_SERVICE_TOKEN).set(tokenData);
    http = TestBed.inject<HttpClient>(HttpClient);
    httpBed = TestBed.inject(HttpTestingController as Type<HttpTestingController>);
  }

  it('should be add token', (done: () => void) => {
    const basicModel = genModel();
    genModule({}, basicModel);
    http.get('/test', { responseType: 'text' }).subscribe(() => {
      done();
    });
    const req = httpBed.expectOne('/test') as TestRequest;
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${basicModel.token}`);
    req.flush('ok!');
  });

  it('should be invalid token', (done: () => void) => {
    genModule({}, genModel(null));
    http
      .get('/test')
      .pipe(
        catchError(err => {
          expect(err.status).toBe(401);
          done();
          return of(err);
        })
      )
      .subscribe();
  });
});

@Component({ template: '' })
class MockComponent {}
