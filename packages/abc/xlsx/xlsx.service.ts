import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone, inject } from '@angular/core';

import isUtf8 from 'isutf8';

import { YunzaiConfigService, YunzaiXlsxConfig } from '@yelon/util/config';
import { ZoneOutside } from '@yelon/util/decorator';
import { LazyResult, LazyService } from '@yelon/util/other';

import { XlsxExportOptions, XlsxExportResult, XlsxExportSheet } from './xlsx.types';

declare const XLSX: any;
declare const cptable: any;

@Injectable({ providedIn: 'root' })
export class XlsxService {
  private readonly http = inject(HttpClient);
  private readonly lazy = inject(LazyService);
  private readonly ngZone = inject(NgZone);
  private readonly cogSrv = inject(YunzaiConfigService);

  private cog: YunzaiXlsxConfig;

  constructor() {
    this.cog = this.cogSrv.merge('xlsx', {
      url: 'https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js',
      modules: [`https://cdn.jsdelivr.net/npm/xlsx/dist/cpexcel.js`]
    })!;
  }

  private init(): Promise<LazyResult[]> {
    return typeof XLSX !== 'undefined'
      ? Promise.resolve([])
      : this.lazy.load([this.cog.url!].concat(this.cog.modules!));
  }

  @ZoneOutside()
  private read(data: any): Record<string, any[][]> {
    const {
      read,
      utils: { sheet_to_json }
    } = XLSX;
    const ret: any = {};
    const buf = new Uint8Array(data);
    let type = 'array';
    if (!isUtf8(buf)) {
      try {
        data = cptable.utils.decode(936, buf);
        type = 'string';
      } catch {}
    }
    const wb = read(data, { type });
    wb.SheetNames.forEach((name: string) => {
      const sheet: any = wb.Sheets[name];
      ret[name] = sheet_to_json(sheet, { header: 1 });
    });
    return ret;
  }

  /**
   * 导入Excel并输出JSON，支持 `<input type="file">`、URL 形式
   */
  import(fileOrUrl: File | string): Promise<Record<string, any[][]>> {
    return new Promise<Record<string, any[][]>>((resolve, reject) => {
      const r = (data: any): void => this.ngZone.run(() => resolve(this.read(data)));
      this.init()
        .then(() => {
          // from url
          if (typeof fileOrUrl === 'string') {
            this.http.request('GET', fileOrUrl, { responseType: 'arraybuffer' }).subscribe({
              next: (res: ArrayBuffer) => r(new Uint8Array(res)),
              error: (err: any) => reject(err)
            });
            return;
          }
          // from file
          const reader: FileReader = new FileReader();
          reader.onload = (e: any) => r(e.target.result);
          reader.onerror = (e: any) => reject(e);
          reader.readAsArrayBuffer(fileOrUrl);
        })
        .catch(() => reject(`Unable to load xlsx.js`));
    });
  }

  @ZoneOutside()
  async export(options: XlsxExportOptions): Promise<XlsxExportResult> {
    return new Promise<XlsxExportResult>((resolve, reject) => {
      this.init()
        .then(() => {
          options = { format: 'xlsx', ...options };
          const {
            writeFile,
            utils: { book_new, aoa_to_sheet, book_append_sheet }
          } = XLSX;
          const wb: any = book_new();
          if (Array.isArray(options.sheets)) {
            (options.sheets as XlsxExportSheet[]).forEach((value: XlsxExportSheet, index: number) => {
              const ws: any = aoa_to_sheet(value.data);
              book_append_sheet(wb, ws, value.name || `Sheet${index + 1}`);
            });
          } else {
            wb.SheetNames = Object.keys(options.sheets);
            wb.Sheets = options.sheets;
          }

          if (options.callback) options.callback(wb);

          const filename = options.filename || `export.${options.format}`;
          writeFile(wb, filename, {
            bookType: options.format,
            bookSST: false,
            type: 'array',
            ...options.opts
          });

          resolve({ filename, wb });
        })
        .catch(err => reject(err));
    });
  }

  /**
   * 数据转符号名
   * - `1` => `A`
   * - `27` => `AA`
   * - `703` => `AAA`
   */
  numberToSchema(val: number): string {
    const startCode = 'A'.charCodeAt(0);
    let res = '';

    do {
      --val;
      res = String.fromCharCode(startCode + (val % 26)) + res;
      val = (val / 26) >> 0;
    } while (val > 0);

    return res;
  }
}
