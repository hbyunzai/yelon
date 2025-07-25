/* eslint-disable @angular-eslint/prefer-inject */
import { DecimalPipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Host, Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, of, map } from 'rxjs';

import type { CellOptions } from '@yelon/abc/cell';
import { DatePipe, YNPipe, _HttpClient } from '@yelon/theme';
import type { YunzaiSTConfig } from '@yelon/util/config';
import { CurrencyService } from '@yelon/util/format';
import { deepCopy, deepGet } from '@yelon/util/other';

import type {
  STColumn,
  STColumnFilter,
  STColumnFilterMenu,
  STColumnMaxMultipleButton,
  STCustomRequestOptions,
  STData,
  STIcon,
  STMultiSort,
  STMultiSortResultType,
  STOnCellResult,
  STPage,
  STReq,
  STReqReNameType,
  STRequestOptions,
  STRes,
  STRowClassName,
  STSingleSort,
  STSortMap,
  STStatistical,
  STStatisticalResult,
  STStatisticalResults,
  STStatisticalType
} from './st.interfaces';
import type { _STColumn, _STColumnButton, _STDataValue, _STHeader } from './st.types';

export interface STDataSourceOptions {
  pi: number;
  ps: number;
  paginator: boolean;
  data?: string | STData[] | Observable<STData[]>;
  total: number;
  req: STReq;
  res: STRes;
  page: STPage;
  columns: _STColumn[];
  headers: _STHeader[][];
  singleSort?: STSingleSort | null;
  multiSort?: STMultiSort;
  rowClassName?: STRowClassName | null;
  customRequest?: (options: STCustomRequestOptions) => Observable<any>;
}

export interface STDataSourceResult {
  /** 是否需要显示分页器 */
  pageShow: boolean;
  /** 新 `pi`，若返回 `undefined` 表示用户受控 */
  pi: number;
  /** 新 `ps`，若返回 `undefined` 表示用户受控 */
  ps: number;
  /** 新 `total`，若返回 `undefined` 表示用户受控 */
  total: number;
  /** 数据 */
  list: STData[];
  /** 统计数据 */
  statistical: STStatisticalResults;
}

@Injectable()
export class STDataSource {
  private cog!: YunzaiSTConfig;
  private sortTick = 0;

  constructor(
    private http: _HttpClient,
    @Host() private datePipe: DatePipe,
    @Host() private ynPipe: YNPipe,
    @Host() private numberPipe: DecimalPipe,
    private currencySrv: CurrencyService,
    private dom: DomSanitizer
  ) {}

  setCog(val: YunzaiSTConfig): void {
    this.cog = val;
  }

  process(options: STDataSourceOptions): Observable<STDataSourceResult> {
    let data$: Observable<STData[]>;
    let isRemote = false;
    const { data, res, total, page, pi, ps, paginator, columns, headers } = options;
    let retTotal: number;
    let retPs: number;
    let retList: STData[];
    let retPi: number;
    let rawData: any;
    let showPage = page.show;

    if (typeof data === 'string') {
      isRemote = true;
      data$ = this.getByRemote(data, options).pipe(
        map(result => {
          rawData = result;
          let ret: STData[];
          if (Array.isArray(result)) {
            ret = result;
            retTotal = ret.length;
            retPs = retTotal;
            showPage = false;
          } else {
            const reName = res.reName!;
            if (typeof reName === 'function') {
              const fnRes = reName(result, { pi, ps, total });
              ret = fnRes.list;
              retTotal = fnRes.total;
            } else {
              // list
              ret = deepGet(result, reName.list as string[], []);
              if (ret == null || !Array.isArray(ret)) {
                ret = [];
              }
              // total
              const resultTotal = reName.total && deepGet(result, reName.total as string[], null);
              retTotal = resultTotal == null ? total || 0 : +resultTotal;
            }
          }
          return deepCopy(ret);
        })
      );
    } else if (data == null || Array.isArray(data)) {
      data$ = of(data ?? []);
    } else {
      // a cold observable
      data$ = data;
    }

    if (!isRemote) {
      data$ = data$.pipe(
        // sort
        map((result: STData[]) => {
          rawData = result;
          let copyResult = deepCopy(result);
          const sorterFn = this.getSorterFn(headers);
          if (sorterFn) {
            copyResult = copyResult.sort(sorterFn);
          }
          return copyResult;
        }),
        // filter
        map((result: STData[]) => {
          columns
            .filter(w => w.filter)
            .forEach(c => {
              const filter = c.filter!;
              const values = this.getFilteredData(filter);
              if (values.length === 0) return;
              const onFilter = filter.fn;
              if (typeof onFilter !== 'function') {
                if (typeof ngDevMode === 'undefined' || ngDevMode) {
                  console.warn(`[st] Muse provide the fn function in filter`);
                }
                return;
              }
              result = result.filter(record => values.some(v => onFilter(v, record)));
            });
          return result;
        }),
        // paging
        map((result: STData[]) => {
          if (paginator && page.front) {
            const maxPageIndex = Math.ceil(result.length / ps);
            retPi = Math.max(1, pi > maxPageIndex ? maxPageIndex : pi);
            retTotal = result.length;
            if (page.show === true) {
              return result.slice((retPi - 1) * ps, retPi * ps);
            }
          }
          return result;
        })
      );
    }

    // pre-process
    if (typeof res.process === 'function') {
      data$ = data$.pipe(map(result => res.process!(result, rawData)));
    }

    data$ = data$.pipe(map(result => this.optimizeData({ result, columns, rowClassName: options.rowClassName })));

    return data$.pipe(
      map(result => {
        retList = result;
        const realTotal = retTotal || total;
        const realPs = retPs || ps;

        return {
          pi: retPi,
          ps: retPs,
          total: retTotal,
          list: retList,
          statistical: this.genStatistical(columns as _STColumn[], retList, rawData),
          pageShow: typeof showPage === 'undefined' ? realTotal > realPs : showPage
        } as STDataSourceResult;
      })
    );
  }

  private get(item: STData, col: _STColumn, idx: number): _STDataValue {
    try {
      const safeHtml = col.safeType === 'safeHtml';
      if (col.format) {
        const formatRes = col.format(item, col, idx) || '';
        return {
          text: formatRes,
          _text: safeHtml ? this.dom.bypassSecurityTrustHtml(formatRes) : formatRes,
          org: formatRes,
          safeType: col.safeType!
        };
      }

      const value = deepGet(item, col.index as string[], col.default);

      let text = value;
      let color: string | undefined;
      let tooltip: string | undefined;
      switch (col.type) {
        case 'no':
          text = this.getNoIndex(item, col, idx);
          break;
        case 'img':
          text = value ? `<img src="${value}" class="img">` : '';
          break;
        case 'number':
          text = this.numberPipe.transform(value, col.numberDigits);
          break;
        case 'currency':
          text = this.currencySrv.format(value, col.currency?.format);
          break;
        case 'date':
          text =
            value == null || value === col.default || (typeof value === 'number' && value <= 0)
              ? col.default
              : this.datePipe.transform(value, col.dateFormat);
          break;
        case 'yn':
          text = this.ynPipe.transform(value === col.yn!.truth, col.yn!.yes!, col.yn!.no!, col.yn!.mode!, false);
          break;
        case 'enum':
          text = col.enum![value];
          break;
        case 'tag':
        case 'badge': {
          const data = col.type === 'tag' ? col.tag : col.badge;
          if (data && data[text]) {
            const dataItem = data[text];
            text = dataItem.text;
            color = dataItem.color;
            tooltip = dataItem.tooltip;
          } else {
            text = '';
          }
          break;
        }
      }
      if (text == null) text = '';
      return {
        text,
        _text: safeHtml ? this.dom.bypassSecurityTrustHtml(text) : text,
        org: value,
        color,
        tooltip,
        safeType: col.safeType!,
        buttons: []
      };
    } catch (ex) {
      const text = `INVALID DATA`;
      console.error(`Failed to get data`, item, col, ex);
      return { text, _text: text, org: text, buttons: [], safeType: 'text' };
    }
  }

  private getByRemote(url: string, options: STDataSourceOptions): Observable<unknown> {
    const { req, page, paginator, pi, ps, singleSort, multiSort, columns, headers } = options;
    const method = (req.method || 'GET').toUpperCase();

    let params: Record<string, any> = {};
    const reName = req.reName as STReqReNameType;
    if (paginator) {
      if (req.type === 'page') {
        params = {
          [reName.pi as string]: page.zeroIndexed ? pi - 1 : pi,
          [reName.ps as string]: ps
        };
      } else {
        params = {
          [reName.skip as string]: (pi - 1) * ps,
          [reName.limit as string]: ps
        };
      }
    }
    params = {
      ...params,
      ...req.params,
      ...this.getReqSortMap(singleSort, multiSort, headers),
      ...this.getReqFilterMap(columns)
    };
    if (options.req.ignoreParamNull == true) {
      Object.keys(params).forEach(key => {
        if (params[key] == null) delete params[key];
      });
    }

    let reqOptions: STRequestOptions = {
      params,
      body: req.body,
      headers: req.headers
    };
    if (method === 'POST' && req.allInBody === true) {
      reqOptions = {
        body: { ...req.body, ...params },
        headers: req.headers
      };
    }
    if (typeof req.process === 'function') {
      reqOptions = req.process(reqOptions);
    }
    if (!(reqOptions.params instanceof HttpParams)) {
      reqOptions.params = new HttpParams({ fromObject: reqOptions.params });
    }
    if (typeof options.customRequest === 'function') {
      return options.customRequest({ method, url, options: reqOptions });
    }
    return this.http.request(method, url, reqOptions);
  }

  getCell(c: STColumn, item: STData, idx: number): STOnCellResult {
    const onCellResult = typeof c.onCell === 'function' ? c.onCell(item, idx) : null;
    const mergedColSpan = onCellResult?.colSpan ?? 1;
    const mergedRowSpan = onCellResult?.rowSpan ?? 1;
    return {
      colSpan: mergedColSpan <= 0 ? null : mergedColSpan,
      rowSpan: mergedRowSpan <= 0 ? null : mergedRowSpan
    } as STOnCellResult;
  }

  optimizeData(options: { columns: _STColumn[]; result: STData[]; rowClassName?: STRowClassName | null }): STData[] {
    const { result, columns, rowClassName } = options;
    for (let i = 0, len = result.length; i < len; i++) {
      result[i]._values = columns.map(c => {
        const props = this.getCell(c, result[i], i);

        if (Array.isArray(c.buttons) && c.buttons.length > 0) {
          return { buttons: this.genButtons(c.buttons, result[i], c), _text: '', props };
        }

        let cell: CellOptions | undefined;
        if (typeof c.cell === 'function') {
          cell = c.cell(result[i], c);
        }
        return { ...this.get(result[i], c, i), props, cell };
      });
      result[i]._rowClassName = [rowClassName ? rowClassName(result[i], i) : null, result[i].className]
        .filter(w => !!w)
        .join(' ');
    }
    return result;
  }

  getNoIndex(item: STData, col: _STColumn, idx: number): number {
    return typeof col.noIndex === 'function' ? col.noIndex(item, col, idx) : col.noIndex! + idx;
  }

  private genButtons(_btns: _STColumnButton[], item: STData, col: STColumn): _STColumnButton[] {
    const fn = (btns: _STColumnButton[]): _STColumnButton[] => {
      return deepCopy(btns).filter(btn => {
        const result = typeof btn.iif === 'function' ? btn.iif(item, btn, col) : true;
        const isRenderDisabled = btn.iifBehavior === 'disabled';
        btn._result = result;
        btn._disabled = !result && isRenderDisabled;
        if (btn.children?.length) {
          btn.children = fn(btn.children!);
        }
        return result || isRenderDisabled;
      });
    };

    const res = fn(_btns);

    const fnText = (btns: _STColumnButton[]): _STColumnButton[] => {
      for (const btn of btns) {
        btn._text = typeof btn.text === 'function' ? btn.text(item, btn) : btn.text || '';
        btn._className = typeof btn.className === 'function' ? btn.className(item, btn) : btn.className;
        btn._icon = typeof btn.icon === 'function' ? btn.icon(item, btn) : (btn.icon as STIcon);
        if (btn.children?.length) {
          btn.children = fnText(btn.children!);
        }
      }
      return btns;
    };

    return this.fixMaxMultiple(fnText(res), col);
  }

  private fixMaxMultiple(btns: _STColumnButton[], col: STColumn): _STColumnButton[] {
    const curCog = col.maxMultipleButton;
    const btnSize = btns.length;
    if (curCog == null || btnSize <= 0) return btns;

    const cog: STColumnMaxMultipleButton = {
      ...this.cog.maxMultipleButton,
      ...(typeof curCog === 'number' ? { count: curCog } : curCog)
    };

    if (cog.count! >= btnSize) return btns;

    const newBtns: _STColumnButton[] = btns.slice(0, cog.count);
    newBtns.push({ _text: cog.text, children: btns.slice(cog.count) });
    return newBtns;
  }

  // #region sort

  private getValidSort(headers: _STHeader[][]): STSortMap[] {
    return headers.reduce((a, header) => {
      const ls = header
        .map(i => i.column)
        .filter(item => item._sort && item._sort.enabled && item._sort.default)
        .map(item => item._sort!);
      return a.concat(...ls);
    }, [] as STSortMap[]);
  }

  private getSorterFn(headers: _STHeader[][]): ((a: STData, b: STData) => number) | void {
    const sortList = this.getValidSort(headers);
    if (sortList.length === 0) {
      return;
    }
    const sortItem = sortList[0];
    if (sortItem.compare === null) {
      return;
    }
    if (typeof sortItem.compare !== 'function') {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        console.warn(`[st] Muse provide the compare function in sort`);
      }
      return;
    }

    return (a: STData, b: STData) => {
      const result = sortItem.compare!(a, b);
      if (result !== 0) {
        return sortItem.default === 'descend' ? -result : result;
      }
      return 0;
    };
  }

  get nextSortTick(): number {
    return ++this.sortTick;
  }

  getReqSortMap(
    singleSort: STSingleSort | undefined | null,
    multiSort: STMultiSort | undefined,
    headers: _STHeader[][]
  ): STMultiSortResultType {
    let ret: STMultiSortResultType = {};
    const sortList = this.getValidSort(headers);

    if (multiSort) {
      const ms: STMultiSort = {
        key: 'sort',
        separator: '-',
        nameSeparator: '.',
        keepEmptyKey: true,
        arrayParam: false,
        ...multiSort
      };

      const sortMap = sortList
        .sort((a, b) => a.tick - b.tick)
        .map(item => item.key! + ms.nameSeparator + ((item.reName || {})[item.default!] || item.default));

      ret = { [ms.key!]: ms.arrayParam ? sortMap : sortMap.join(ms.separator) };

      return sortMap.length === 0 && ms.keepEmptyKey === false ? {} : ret;
    }

    if (sortList.length === 0) return ret;

    const mapData = sortList[0];
    let sortFiled = mapData.key;
    let sortValue = (sortList[0].reName || {})[mapData.default!] || mapData.default;
    if (singleSort) {
      sortValue = sortFiled + (singleSort.nameSeparator || '.') + sortValue;
      sortFiled = singleSort.key || 'sort';
    }
    ret[sortFiled as string] = sortValue as string;
    return ret;
  }

  // #endregion

  // #region filter

  private getFilteredData(filter: STColumnFilter): STColumnFilterMenu[] {
    return filter.type === 'default' ? filter.menus!.filter(f => f.checked === true) : filter.menus!.slice(0, 1);
  }

  private getReqFilterMap(columns: _STColumn[]): Record<string, string> {
    let ret = {};
    columns
      .filter(w => w.filter && w.filter.default === true)
      .forEach(col => {
        const filter = col.filter!;
        const values = this.getFilteredData(filter);
        let obj: Record<string, any> = {};
        if (filter.reName) {
          obj = filter.reName!(filter.menus!, col);
        } else {
          obj[filter.key!] = values.map(i => i.value).join(',');
        }
        ret = { ...ret, ...obj };
      });
    return ret;
  }

  // #endregion

  // #region statistical

  private genStatistical(columns: _STColumn[], list: STData[], rawData: any): STStatisticalResults {
    const res: Record<string, any> = {};
    columns.forEach((col, index) => {
      res[col.key || col.indexKey || index] =
        col.statistical == null ? {} : this.getStatistical(col, index, list, rawData);
    });
    return res;
  }

  private getStatistical(col: _STColumn, index: number, list: STData[], rawData: any): STStatisticalResult {
    const val = col.statistical;
    const item: STStatistical = {
      digits: 2,
      currency: undefined,
      ...(typeof val === 'string' ? { type: val as STStatisticalType } : (val as STStatistical))
    };
    let res: STStatisticalResult = { value: 0 };
    let currency = false;
    if (typeof item.type === 'function') {
      res = item.type(this.getValues(index, list), col, list, rawData);
      currency = true;
    } else {
      switch (item.type) {
        case 'count':
          res.value = list.length;
          break;
        case 'distinctCount':
          res.value = this.getValues(index, list).filter((value, idx, self) => self.indexOf(value) === idx).length;
          break;
        case 'sum':
          res.value = this.toFixed(this.getSum(index, list), item.digits!);
          currency = true;
          break;
        case 'average':
          res.value = this.toFixed(this.getSum(index, list) / list.length, item.digits!);
          currency = true;
          break;
        case 'max':
          res.value = Math.max(...this.getValues(index, list));
          currency = true;
          break;
        case 'min':
          res.value = Math.min(...this.getValues(index, list));
          currency = true;
          break;
      }
    }
    if (item.currency === true || (item.currency == null && currency === true)) {
      res.text = this.currencySrv.format(res.value, col.currency?.format) as string;
    } else {
      res.text = String(res.value);
    }
    return res;
  }

  private toFixed(val: number, digits: number): number {
    if (isNaN(val) || !isFinite(val)) {
      return 0;
    }
    return parseFloat(val.toFixed(digits));
  }

  private getValues(index: number, list: STData[]): number[] {
    return list.map(i => i._values[index].org).map(i => (i === '' || i == null ? 0 : i));
  }

  private getSum(index: number, list: STData[]): number {
    return this.getValues(index, list).reduce((p, i) => (p += parseFloat(String(i))), 0);
  }

  // #endregion
}
