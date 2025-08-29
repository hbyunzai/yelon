import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, TestRequest, provideHttpClientTesting } from '@angular/common/http/testing';
import { Component, Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of, catchError } from 'rxjs';

import { YunzaiAuthConfig, provideYunzaiConfig } from '@yelon/util/config';

import { provideAuth } from '../../provide';
import { YA_SERVICE_TOKEN } from '../interface';
import { authJWTInterceptor } from './jwt.interceptor';
import { JWTTokenModel } from './jwt.model';

function genModel(
  token: string | null = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6Inl1bnphaS1ib3QiLCJhZG1pbiI6dHJ1ZSwiZXhwIjo0NjcwNDA5NjAwfQ.VfRGUDLkemgGmbWFg5ofZzhM4mxHnFiYaxsztbPDICQ`
): JWTTokenModel {
  const model = new JWTTokenModel();
  // from: https://jwt.io/
  model.access_token = token!;
  return model;
}

describe('auth: jwt.interceptor', () => {
  let http: HttpClient;
  let httpBed: HttpTestingController;

  function genModule(options: YunzaiAuthConfig, tokenData?: JWTTokenModel): void {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([
          {
            path: 'login',
            component: MockComponent
          }
        ]),
        provideHttpClient(withInterceptors([authJWTInterceptor])),
        provideHttpClientTesting(),
        provideYunzaiConfig({ auth: options }),
        provideAuth()
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
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${basicModel.access_token}`);
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

@Component({
  template: ''
})
class MockComponent {}
