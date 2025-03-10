---
type: Basic
title: down-file
subtitle: Download file
cols: 1
module: import { DownFileModule } from '@yelon/abc/down-file';
---

A file download based on `blob`.

## API

### [down-file]

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[http-data]` | Parameter of request | `{}` | - |
| `[http-body]` | Body of request | `{}` | - |
| `[http-method]` | Method of request | `'POST','GET','HEAD','PUT','PATCH','DELETE'` | `'GET'` |
| `[http-url]` | Url of request | `string` | - |
| `[file-name]` | Specify a file name | `string, (rep: HttpResponse<Blob>) => string` | - |
| `[pre]` | Callback of download | `(ev: MouseEvent) => Promise<boolean>` | - |
| `(success)` | Success callback | `EventEmitter<HttpResponse<Blob>>` | - |
| `(error)` | Error callback | `EventEmitter<any>` | - |

## FAQ

### File name order

1. `file-name`
2. `filename*`, `filename` of `content-disposition`
3. `filename`, `x-filename` of `headers`

### Supported Browsers

Use `new Blob()` to verify [Browser Compatible](https://github.com/eligrey/FileSaver.js/#supported-browsers), The `down-file__not-support` style is added to the target element when not compatible.

> The default incompatible processing behavior is hidden. You can set the Less variable to `@down-file-not-support-behavior: 'disabled'` to can't be click.
