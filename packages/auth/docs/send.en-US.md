---
order: 20
title: 
  zh-CN: 发送Token
  en-US: Send Token
type: Documents
---

## Authentication style

It is better to add the corresponding authentication information to each request through the HTTP interceptor. `@yelon/auth` implements two separate HTTP interceptors based on two different authentication styles.

### authSimpleInterceptor

The parameter name and its sending location can be specified via `YelonAuthConfig`, for example:

```ts
token_send_key = 'access_token';
token_send_template = 'Bearer ${token}';
token_send_place = 'header';
```

Indicates the `{ token: 'Bearer token_string' }` data in the `header` of each request.

### authJWTInterceptor

It is a standard JWT sending rule that automatically adds `{ Authorization: 'Bearer token_string' }` to `header`.

### How to choose?

`authSimpleInterceptor` is a very liberal style, you can put `token` in the request body, request header, etc.

`authJWTInterceptor` is a JWT standard, which needs to ensure that the backend also uses such standards.

## How to load

In `app.config.ts` file:

```ts
providers: [
  provideHttpClient(withInterceptors([...(environment.interceptorFns ?? []), authSimpleInterceptor, defaultInterceptor])),
  // Or JWT
  provideHttpClient(withInterceptors([...(environment.interceptorFns ?? []), authJWTInterceptor, defaultInterceptor])),
]
```

## Example

[DEMO](//hbyunzai.github.io/ng-yunzai/#/passport/login), login or other login method, and observe the changes in the browser localStorage storage data.
