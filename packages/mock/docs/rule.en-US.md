---
order: 2
title: Rule Data
type: Documents
---

## Foreword

The Mock rule data is an `Object` object, Key is request declaration, and Value is response data, for example:

```ts
export const USERS = {
  'GET /users': { users: [1, 2], total: 2 },
}
```

When send requesting `/users` via `HttpClient`, it will directly response `{ users: [1, 2], total: 2 }`, and will not send any HTTP requests in `Network` panel.

## Key

Use `' '`space to separate the request method and URL, the request method can be ignored, the default is `GET`; the URL supports routing parameters and regular expressions. E.g:

```ts
export const USERS = {
  'GET /users': null,
  // GET: can be ignored
  '/users/1': null,
  // POST
  'POST /users/1': null,
  // Routing parameters
  '/users/:id': null,
  // Regular expressions need to be wrapped with `()`
  '/data/(.*)': null
};
```

## Value

Supports three types: `Object`, `Array`, `(req: MockRequest) => any | Observable<any> | Promise<any>`.

```ts
import { MockStatusError } from '@yelon/mock';

export const USERS = {
  // Array
  '/users': [ { uid: 1 }, { uid: 2 } ],
  // Object
  '/users': { uid: 1 },
  // Function
  '/qs': (req: MockRequest) => req.queryString.pi,
  // Support HttpResponse
  '/http': (req: MockRequest) => new HttpResponse({ body: 'Body', headers: new HttpHeaders({ 'access_token': '1' }) }),
  // Send Status Error
  '/404': () => { throw new MockStatusError(404); },
  // Support Observable
  '/obs': () => of(1),
  // Support Promise
  '/promise': async () => {
    await delay(10);
    return 1;
  }
};
```

### MockRequest

Name        | Type               | Description
------------|--------------------|------------------------------------------------------------------
`[params]`      | `any`              | Routing parameter, `/:id` then `params.id`
`[queryString]` | `any`              | URL parameter, `/users?pi=1&ps=10` then `queryString.pi`, `queryString.ps`
`[headers]`     | `any`              | Headers
`[body]`        | `any`              | Body
`[original]`    | `HttpRequest<any>` | `HttpRequest`

### MockStatusError

When you want to respond to a `404` http status.

## Demo

```ts
import { MockStatusError } from '@yelon/mock';

export const USERS = {
  // Support object or array values
  'GET /users': { users: [1, 2], total: 2 },
  // GET: can be ignored
  '/users/1': { users: [1, 2], total: 2 },
  // POST
  'POST /users/1': { uid: 1 },
  // Get request parameters: queryString、headers、body
  '/qs': (req: MockRequest) => req.queryString.pi,
  // Routing parameters
  '/users/:id': (req: MockRequest) => req.params, // /users/100, output: { id: 100 }
  // Send Status Error
  '/404': () => { throw new MockStatusError(404); },
  // Regular expressions need to be wrapped with `()`
  '/data/(.*)': (req: MockRequest) => req,
  // Support Observable
  '/obs': () => of(1),
  // Support Promise
  '/promise': async () => {
    await delay(10);
    return 1;
  }
};
```

## Storage rule

In general, Mock is required during development, so recommended to create `_mock` directory in the project root directory and create `index.ts` file to export all data rules. See [ng-yunzai/_mock]( Https://github.com/ng-yunzai/ng-yunzai/tree/master/_mock).
