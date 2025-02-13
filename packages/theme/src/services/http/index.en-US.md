---
order: 1
title: _HttpClient
type: Service
---

[\_HttpClient](https://github.com/hbyunzai/yelon/blob/master/packages/theme/src/services/http/http.client.ts) service is based on Angular `HttpClient`.

## Features

- More friendly call methods
- Maintain `loading` attribute
- Handling null values
- Unified time format is timestamp
- Support decorator @GET, @POST etc

## DEMO

Network requests are generally used with Object as arguments, such as a `get` request:

```ts
HttpClient.get(url, { params: { pi: 1 } });
```

For `_HttpClient`:

```ts
_HttpClient.get(url, { pi: 1 });
```

## YunzaiThemeConfig

Common configuration, such as unifying null and time processing for `_HttpClient`.

```ts
import { YunzaiThemeConfig } from '@yelon/theme';
export function fnYunzaiThemeConfig(): YunzaiThemeConfig {
  return Object.assign(new YunzaiThemeConfig(), <YunzaiThemeConfig>{
    http: {
      nullValueHandling: 'ignore',
    },
  });
}

@NgModule({})
export class YelonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: YelonModule,
      providers: [
        { provide: YunzaiThemeConfig, useFactory: fnYunzaiThemeConfig },
      ],
    };
  }
}
```

### API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `nullValueHandling` | Null processing | `include,ignore` | `include` |
| `dateValueHandling` | Time processing | `timestamp,ignore` | `timestamp` |

## Decorators

The target service must inherit `BaseApi` abstract class.

### Usage

```ts
@BaseUrl('/user')
@BaseHeaders({ bh: 'a' })
class RestService extends BaseApi {
  @GET()
  query(@Query('pi') pi: number, @Query('ps') ps: number): Observable<any> {
    return;
  }

  @GET(':id')
  get(@Path('id') id: number): Observable<any> {
    return;
  }

  @GET()
  get(@Payload data: {}): Observable<any> {
    return;
  }

  // Use `::id` to indicate escaping, and should be will be ignored when `id` value is `undefined`, like this:
  // When `id` is `10` => 10:type
  // When `id` is `undefined` => :id:type
  @GET(':id::type')
  get(@Path('id') id: number): Observable<any> {
    return;
  }

  @POST(':id')
  save(@Path('id') id: number, @Body data: Object): Observable<any> {
    return;
  }

  @POST()
  save(@Payload data: {}): Observable<any> {
    return;
  }

  @FORM()
  save(@Payload data: {}): Observable<any> {
    return;
  }
  
  // If authorization is invalid, will be thrown directly `401` error and will not be sent.
  @GET('', { acl: 'admin' })
  ACL(): Observable<any> {
    return;
  }
}
```

### Class decorators

- `@BaseUrl(url: string)`
- `@BaseHeaders(headers: HttpHeaders | { [header: string]: string | string[] })`

### Method decorators

- `@GET(url: string = '', options?: HttpOptions)`
- `@POST(url: string = '', options?: HttpOptions)`
- `@DELETE(url: string = '', options?: HttpOptions)`
- `@PUT(url: string = '', options?: HttpOptions)`
- `@HEAD(url: string = '', options?: HttpOptions)`
- `@PATCH(url: string = '', options?: HttpOptions)`
- `@JSONP(url: string = '', options?: HttpOptions)`
- `@OPTIONS(url: string = '', options?: HttpOptions)`

#### HttpOptions

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `acl` | ACL config, depends on `@yelon/acl` | `any` | - |
| `observe` | Specify response content | `body,events,response` | - |
| `responseType` | Specify content format | `arraybuffer,blob,json,text` | - |
| `reportProgress` | Whether monitor progress events | `boolean` | - |
| `withCredentials` | Set withCredentials | `boolean` | - |

### Parameter decorators

- `@Path(key?: string)` URL path parameters
- `@Query(key?: string)` QueryString of URL
- `@Body` Body of URL
- `@Headers(key?: string)` Headers of URL
- `@Payload` Request Payload
  - Supported body (like`POST`, `PUT`) as a body data, equivalent to `@Body`
  - Not supported body (like `GET`, `DELETE` etc) as a `QueryString`

### CUSTOM_ERROR

Whether to customize the handling of exception messages.

```ts
this.http.post(`login`, {
 name: 'cipchk', pwd: '123456'
}, {
 context: new HttpContext()
             .set(ALLOW_ANONYMOUS, true)
             .set(CUSTOM_ERROR, true)
}).subscribe({
 next: console.log,
 error: console.log
});
```

### IGNORE_BASE_URL

Whether to ignore API prefixes.

```ts
// When environment.api.baseUrl set '/api'

this.http.get(`/path`) // Request Url: /api/path
this.http.get(`/path`, { context: new HttpContext().set(IGNORE_BASE_URL, true) }) // Request Url: /path
```

### RAW_BODY

Whether to return raw response body.
