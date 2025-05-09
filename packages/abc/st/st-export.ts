import { Injectable, inject } from '@angular/core';

import { XlsxExportResult, XlsxService } from '@yelon/abc/xlsx';
import { deepGet } from '@yelon/util/other';

import { STColumn, STExportOptions } from './st.interfaces';
import { _STColumn } from './st.types';

@Injectable()
export class STExport {
  private readonly xlsxSrv = inject(XlsxService);

  private _stGet(item: any, col: STColumn, index: number, colIndex: number): any {
    const ret: Record<string, any> = { t: 's', v: '' };

    if (col.format) {
      ret.v = col.format(item, col, index);
    } else {
      const val = item._values ? item._values[colIndex].text : deepGet(item, col.index as string[], '');
      ret.v = val;
      if (val != null) {
        switch (col.type) {
          case 'currency':
            ret.t = 'n';
            break;
          case 'date':
            // Can't be a empty value, it will cause `#NULL!`
            // See https://github.com/SheetJS/sheetjs/blob/master/docbits/52_datatype.md
            if (`${val}`.length > 0) {
              ret.t = 'd';
              // Number Formats: https://github.com/SheetJS/sheetjs/blob/master/docbits/63_numfmt.md
              ret.z = col.dateFormat;
            }
            break;
          case 'yn': {
            const yn = col.yn!;
            ret.v = val === yn.truth ? yn.yes : yn.no;
            break;
          }
        }
      }
    }

    ret.v = ret.v ?? '';

    return ret;
  }

  private genSheet(opt: STExportOptions): Record<string, unknown> {
    const sheets: Record<string, Record<string, any>> = {};
    const sheet: Record<string, any> = (sheets[opt.sheetname || 'Sheet1'] = {});
    const dataLen = opt.data!.length;
    const columns = opt.columens! as _STColumn[];
    let validColCount = 0;
    let wpx = false;
    const invalidFn = (col: _STColumn): boolean =>
      col.exported === false || !col.index || !(!col.buttons || col.buttons.length === 0);
    for (const [idx, col] of columns.entries()) {
      if (invalidFn(col)) continue;
      if (!wpx && col._width != null) wpx = true;
      ++validColCount;
      const columnName = this.xlsxSrv!.numberToSchema(validColCount);
      sheet[`${columnName}1`] = {
        t: 's',
        v: typeof col.title === 'object' ? col.title.text : col.title
      };
      for (let dataIdx = 0; dataIdx < dataLen; dataIdx++) {
        sheet[`${columnName}${dataIdx + 2}`] = this._stGet(opt.data![dataIdx], col, dataIdx, idx);
      }
    }
    if (wpx) {
      // wpx: width in screen pixels https://github.com/SheetJS/sheetjs#column-properties
      sheet['!cols'] = columns.filter(col => !invalidFn(col)).map(col => ({ wpx: col._width }));
    }

    if (validColCount > 0 && dataLen > 0) {
      sheet['!ref'] = `A1:${this.xlsxSrv!.numberToSchema(validColCount)}${dataLen + 1}`;
    }

    return sheets;
  }

  async export(opt: STExportOptions): Promise<XlsxExportResult> {
    const sheets = this.genSheet(opt);
    return this.xlsxSrv.export({
      sheets,
      filename: opt.filename,
      callback: opt.callback
    });
  }
}
