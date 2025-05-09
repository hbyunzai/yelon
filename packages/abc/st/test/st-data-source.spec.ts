import { DecimalPipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom, of, throwError } from 'rxjs';

import { DatePipe, YNPipe } from '@yelon/theme';
import { CurrencyService } from '@yelon/util/format';
import { deepCopy } from '@yelon/util/other';

import { STDataSource, STDataSourceOptions } from '../st-data-source';
import { ST_DEFAULT_CONFIG } from '../st.config';
import { STColumnButton, STColumnFilterMenu, STData, STReq } from '../st.interfaces';
import { _STColumn, _STDataValue } from '../st.types';

const DEFAULT = {
  pi: 1,
  ps: 3,
  total: 10,
  maxPi: 0
};
DEFAULT.maxPi = Math.ceil(DEFAULT.total / DEFAULT.ps);

function genData(count: number = DEFAULT.total, whetherRandom: boolean = false): any[] {
  return Array(count)
    .fill({})
    .map((_item: any, idx: number) => {
      return {
        id: whetherRandom ? Math.ceil(Math.random() * 1) + count : idx + 1,
        name: `name ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20
      };
    });
}

describe('abc: table: data-souce', () => {
  let srv: STDataSource;
  let options: STDataSourceOptions;
  let http: MockHttpClient;
  let datePipe: DatePipe;
  let ynPipe: YNPipe;
  let decimalPipe: DecimalPipe;
  let currencySrv: CurrencyService;
  let httpResponse: any;
  let mockDomSanitizer: MockDomSanitizer;

  class MockHttpClient {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    request(_method: string, _url: string, _opt: any): any {
      return of(httpResponse);
    }
  }

  class MockDomSanitizer {
    bypassSecurityTrustHtml(val: any): any {
      return val;
    }
  }

  function genModule(): void {
    options = {
      pi: DEFAULT.pi,
      ps: DEFAULT.ps,
      data: [],
      total: DEFAULT.total,
      req: deepCopy(ST_DEFAULT_CONFIG.req as unknown as STReq),
      res: deepCopy(ST_DEFAULT_CONFIG.res),
      page: deepCopy(ST_DEFAULT_CONFIG.page),
      columns: [{ title: '', index: 'id' }] as _STColumn[],
      headers: [[{ colSpan: 1, rowSpan: 1, hasSubColumns: false, column: { title: '', index: 'id' } as _STColumn }]],
      paginator: true
    };
    TestBed.configureTestingModule({
      providers: [DatePipe, YNPipe, DecimalPipe, CurrencyService]
    });
    mockDomSanitizer = new MockDomSanitizer() as any;
    datePipe = TestBed.inject(DatePipe);
    ynPipe = TestBed.inject(YNPipe);
    decimalPipe = TestBed.inject(DecimalPipe);
    http = new MockHttpClient();
    currencySrv = TestBed.inject(CurrencyService);
    srv = new STDataSource(http as any, datePipe, ynPipe, decimalPipe, currencySrv, mockDomSanitizer as any);
    srv.setCog(ST_DEFAULT_CONFIG);
  }

  describe('[local data]', () => {
    beforeEach(() => genModule());
    describe('[paging]', () => {
      describe('with front', () => {
        beforeEach(() => {
          options.page.front = true;
          options.data = genData();
        });
        it(`should return ${DEFAULT.ps} rows of data`, done => {
          srv.process(options).subscribe(res => {
            expect(res.list!.length).toBe(DEFAULT.ps);
            done();
          });
        });
        it('should return second page of data', done => {
          options.pi = 2;
          srv.process(options).subscribe(res => {
            expect(res.list![0].id).toBe(DEFAULT.ps + 1);
            expect(res.pi).toBe(2);
            done();
          });
        });
        it('should limit the maximum page', done => {
          options.pi = DEFAULT.maxPi + 1;
          srv.process(options).subscribe(res => {
            expect(res.pi).toBe(DEFAULT.maxPi);
            done();
          });
        });
        it('should return all data when page.show is false', done => {
          options.page.show = false;
          srv.process(options).subscribe(res => {
            expect(res.pageShow).toBe(false);
            expect(res.list!.length).toBe(DEFAULT.total);
            done();
          });
        });
      });
      describe('without front', () => {
        beforeEach(() => {
          options.page.front = false;
          options.data = genData();
        });
        it('should not handle pi & total', done => {
          srv.process(options).subscribe(res => {
            expect(res.pi as any).toBe(undefined);
            expect(res.total as any).toBe(undefined);
            done();
          });
        });
        it('should auto show when ps less than total and page.show is undefined', done => {
          options.page.show = undefined;
          options.total = DEFAULT.ps + 1;
          options.data = genData(options.total);
          srv.process(options).subscribe(res => {
            expect(res.pageShow).toBe(true);
            done();
          });
        });
      });
      describe('#page.show', () => {
        describe('is undefined', () => {
          beforeEach(() => {
            options.page.show = undefined;
          });
          it('should auto hide when total less than ps', done => {
            options.data = genData(DEFAULT.ps);
            srv.process(options).subscribe(res => {
              expect(res.pageShow).toBe(false);
              done();
            });
          });
          it('should auto show when ps less than total', done => {
            options.data = genData(DEFAULT.ps + 1);
            srv.process(options).subscribe(res => {
              expect(res.pageShow).toBe(true);
              done();
            });
          });
        });
      });
    });
    describe('[sort]', () => {
      beforeEach(() => {
        options.data = genData(DEFAULT.total, true);
        options.headers[0][0].column._sort = {
          enabled: true,
          compare: (a: any, b: any) => a.id - b.id
        };
      });
      it(`should be decremented`, done => {
        (options.data as STData[])[1].id = 100000;
        options.headers[0][0].column._sort.default = 'descend';
        srv.process(options).subscribe(res => {
          expect(res.list[0].id).toBe(100000);
          done();
        });
      });
      it(`should be incremented`, done => {
        (options.data as STData[])[1].id = -100000;
        options.headers[0][0].column._sort.default = 'ascend';
        srv.process(options).subscribe(res => {
          expect(res.list[0].id).toBe(-100000);
          done();
        });
      });
      it('should be null, muse be ignore sort processing', done => {
        options.headers[0][0].column._sort = {
          enabled: true,
          compare: null,
          default: 'descend'
        };
        (options.data as STData[])[1].id = 100000;
        srv.process(options).subscribe(res => {
          expect(res.list[0].id).toBe(11);
          done();
        });
      });
    });
    describe('[filter]', () => {
      beforeEach(() => {
        options.data = genData();
        options.columns[0].filter = {
          type: 'default',
          menus: [{ text: '', value: '1', checked: true }],
          fn: (filter, record) => record.name.includes(filter.value)
        };
      });
      it(`should be filter [1] in name`, done => {
        const expectCount = (options.data as STData[]).filter(w => w.name.includes(`1`)).length;
        srv.process(options).subscribe(res => {
          expect(res.list.length).toBe(expectCount);
          done();
        });
      });
      it(`should be clean filtered`, done => {
        const expectCount = (options.data as STData[]).filter(w => w.name.includes(`1`)).length;
        firstValueFrom(srv.process(options))
          .then(res => {
            expect(res.list.length).toBe(expectCount);
          })
          .then(() => {
            options.columns[0].filter!.menus![0].checked = false;
            return firstValueFrom(srv.process(options));
          })
          .then(res => {
            expect(res.list.length).toBe(DEFAULT.ps);
            done();
          });
      });
    });
    describe('with observable data', () => {
      it(`should be running`, done => {
        options.data = of(genData(2));
        srv.process(options).subscribe(res => {
          expect(res.list.length).toBe(2);
          done();
        });
      });
    });
    describe('[filteredData]', () => {
      beforeEach(() => {
        options.paginator = false;
        options.data = genData(20);
      });
      it('should be always return full data when include filter', done => {
        options.columns[0].filter = {
          menus: [{ text: '', value: '1', checked: true }],
          fn: (filter, record) => record.name.includes(filter.value)
        };
        const expectCount = (options.data as STData[]).filter(w => w.name.includes(`1`)).length;
        srv.process(options).subscribe(res => {
          expect(res.list.length).toBe(expectCount);
          done();
        });
      });
    });
  });

  describe('[remote data]', () => {
    describe('[request params]', () => {
      beforeEach(() => {
        genModule();
        options.data = '/mockurl';
      });
      it('should be default method to GET', done => {
        options.req.method = undefined;
        let resMethod = '';
        spyOn(http, 'request').and.callFake((method: string) => {
          resMethod = method;
          return of([]);
        });
        srv.process(options).subscribe(() => {
          expect(resMethod).toBe('GET');
          done();
        });
      });
      it('should be re-name pi & ps', done => {
        options.req.reName = { pi: 'PI', ps: 'PS' };
        let resParams: HttpParams;
        spyOn(http, 'request').and.callFake((_method: string, _url: string, opt: any) => {
          resParams = opt.params;
          return of([]);
        });
        srv.process(options).subscribe(() => {
          expect(+resParams.get('PI')!).toBe(options.pi);
          expect(+resParams.get('PS')!).toBe(options.ps);
          done();
        });
      });
      it('should be zero indexed of start index', done => {
        options.page.zeroIndexed = true;
        let resParams: HttpParams;
        spyOn(http, 'request').and.callFake((_method: string, _url: string, opt: any) => {
          resParams = opt.params;
          return of([]);
        });
        srv.process(options).subscribe(() => {
          expect(+resParams.get('pi')!).toBe(options.pi - 1);
          done();
        });
      });
      it('should be all in body when method is post', done => {
        options.req.allInBody = true;
        options.req.method = 'post';
        let resBody: any = {};
        spyOn(http, 'request').and.callFake((_method: string, _url: string, opt: any) => {
          resBody = opt.body;
          return of([]);
        });
        srv.process(options).subscribe(() => {
          expect(resBody.pi).toBe(options.pi);
          done();
        });
      });
      it('should be process', done => {
        options.req.process = a => {
          (a.params as any)!.pi = 2;
          return a;
        };
        let resParams!: HttpParams;
        spyOn(http, 'request').and.callFake((_method: string, _url: string, opt: any) => {
          resParams = opt.params;
          return of([]);
        });
        srv.process(options).subscribe(() => {
          expect(resParams.get('pi')?.toString()).toBe('2');
          done();
        });
      });
      describe('type is skip', () => {
        beforeEach(() => (options.req.type = 'skip'));
        it('should be re-name skip & limit', done => {
          options.req.reName = { skip: 'SKIP', limit: 'LIMIT' };
          let resParams: HttpParams;
          spyOn(http, 'request').and.callFake((_method: string, _url: string, opt: any) => {
            resParams = opt.params;
            return of([]);
          });
          srv.process(options).subscribe(() => {
            expect(+resParams.get('SKIP')!).toBe(0);
            expect(+resParams.get('LIMIT')!).toBe(options.ps);
            done();
          });
        });
        it('should be changed next page', done => {
          options.pi = 2;
          let resParams: HttpParams;
          spyOn(http, 'request').and.callFake((_method: string, _url: string, opt: any) => {
            resParams = opt.params;
            return of([]);
          });
          srv.process(options).subscribe(() => {
            expect(+resParams.get('skip')!).toBe(options.ps);
            expect(+resParams.get('limit')!).toBe(options.ps);
            done();
          });
        });
      });
      it('should be ignoreParamNull', done => {
        options.req.ignoreParamNull = true;
        options.req.params = { a: null, b: 1 };
        options.req.process = res => {
          expect(Object.keys(res.params!)).not.toContain(`a`);
          expect(Object.keys(res.params!)).toContain(`b`);
          return res;
        };
        srv.process(options).subscribe(() => done());
      });
    });
    describe('[response]', () => {
      beforeEach(() => {
        genModule();
        options.data = '/mockurl';
      });
      it('should be re-name total & list', done => {
        options.res.reName = { total: 'T', list: 'L' };
        spyOn(http, 'request').and.callFake(() => {
          return of({ L: genData(DEFAULT.ps), T: DEFAULT.ps });
        });
        srv.process(options).subscribe(res => {
          expect(res.total).toBe(DEFAULT.ps);
          expect(res.list.length).toBe(DEFAULT.ps);
          done();
        });
      });
      it('should be invalid re-name config', done => {
        options.res.reName = { total: 'T', list: 'L1' };
        spyOn(http, 'request').and.callFake(() => of({ L: genData(DEFAULT.ps), T: DEFAULT.ps }));
        srv.process(options).subscribe(res => {
          expect(res.total).toBe(DEFAULT.ps);
          expect(res.list.length).toBe(0);
          done();
        });
      });
      it('should be function re-name config', done => {
        options.res.reName = () => ({ total: 1, list: [{ a: 'L1' }] });
        spyOn(http, 'request').and.callFake(() => of({ L: genData(DEFAULT.ps), T: DEFAULT.ps }));
        srv.process(options).subscribe(res => {
          expect(res.total).toBe(1);
          expect(res.list.length).toBe(1);
          expect(res.list[0].a).toBe('L1');
          done();
        });
      });
      it('should be return empty when result is not array', done => {
        options.res.reName = { total: 'T', list: 'L' };
        spyOn(http, 'request').and.callFake(() => of({ L: 1, T: DEFAULT.ps }));
        srv.process(options).subscribe(res => {
          expect(res.total).toBe(DEFAULT.ps);
          expect(res.list.length).toBe(0);
          done();
        });
      });
      it('should be keep total when total invalid config', done => {
        options.res.reName = { total: 'T1', list: '1L' };
        options.total = 4;
        spyOn(http, 'request').and.callFake(() => of({ L: 1, T: DEFAULT.ps }));
        srv.process(options).subscribe(res => {
          expect(res.total).toBe(options.total);
          expect(res.list.length).toBe(0);
          done();
        });
      });
      it('should be return 0 when total invalid config and unspecified total', done => {
        options.res.reName = { total: 'T1', list: '1L' };
        options.total = undefined!;
        spyOn(http, 'request').and.callFake(() => of({ L: 1, T: DEFAULT.ps }));
        srv.process(options).subscribe(res => {
          expect(res.total).toBe(0);
          expect(res.list.length).toBe(0);
          done();
        });
      });
      it('should be catch response error', done => {
        spyOn(http, 'request').and.callFake(() => throwError(() => new Error('aa')));
        srv.process(options).subscribe({
          next: () => {
            expect(false).toBe(true);
            done();
          },
          error: (err: Error) => {
            expect(err.message).toBe('aa');
            done();
          }
        });
      });
      it('should be support array data', done => {
        spyOn(http, 'request').and.callFake(() => of(genData(DEFAULT.ps)));
        srv.process(options).subscribe(res => {
          expect(res.total).toBe(DEFAULT.ps);
          expect(res.list.length).toBe(DEFAULT.ps);
          expect(res.ps).toBe(res.total);
          done();
        });
      });
    });
    describe('[sort]', () => {
      let resParams: HttpParams;
      beforeEach(() => {
        genModule();
        options.data = '/mockurl';
        options.headers[0][0].column._sort = {
          enabled: true,
          key: 'id'
        };
        spyOn(http, 'request').and.callFake((_method: string, _url: string, opt: any) => {
          resParams = opt.params;
          return of([]);
        });
      });
      it(`should be decremented`, done => {
        options.headers[0][0].column._sort.default = 'descend';
        srv.process(options).subscribe(() => {
          expect(resParams.get('id')!).toBe('descend');
          done();
        });
      });
      it(`should be incremented`, done => {
        options.headers[0][0].column._sort.default = 'ascend';
        srv.process(options).subscribe(() => {
          expect(resParams.get('id')!).toBe('ascend');
          done();
        });
      });
      it(`should be re-name`, done => {
        options.headers[0][0].column._sort.default = 'ascend';
        options.headers[0][0].column._sort.reName = { ascend: 'A', descend: 'D' };
        srv.process(options).subscribe(() => {
          expect(resParams.get('id')!).toBe('A');
          done();
        });
      });
      it(`should be used default key when invalid re-name paraments`, done => {
        options.headers[0][0].column._sort.default = 'ascend';
        options.headers[0][0].column._sort.reName = {};
        srv.process(options).subscribe(() => {
          expect(resParams.get('id')!).toBe('ascend');
          done();
        });
      });
      describe('#multi sort', () => {
        beforeEach(() => {
          options.multiSort = {
            key: 'SORT',
            separator: '-',
            nameSeparator: '.'
          };
          options.columns = [
            {
              title: '',
              index: 'id1',
              _sort: { enabled: true, default: 'descend', key: 'id1' },
              _left: false,
              _right: false
            },
            {
              title: '',
              index: 'id2',
              _sort: { enabled: true, default: 'ascend', key: 'id2' },
              _left: false,
              _right: false
            }
          ];
          options.headers = [
            [
              { colSpan: 1, rowSpan: 1, hasSubColumns: false, column: options.columns[0] },
              { colSpan: 1, rowSpan: 1, hasSubColumns: false, column: options.columns[1] }
            ]
          ];
        });
        it(`should be`, done => {
          srv.process(options).subscribe(() => {
            expect(resParams.get('SORT')).toBe('id1.descend-id2.ascend');
            done();
          });
        });
        it(`should be re-name`, done => {
          options.columns[0]._sort.reName = { ascend: 'A', descend: 'D' };
          srv.process(options).subscribe(() => {
            expect(resParams.get('SORT')).toBe('id1.D-id2.ascend');
            done();
          });
        });
        it(`should be removed key when no any sort of keepEmptyKey is false`, done => {
          options.multiSort = {
            ...options.multiSort,
            keepEmptyKey: false
          };
          options.columns = [
            {
              title: '',
              index: 'id1',
              sort: true
            },
            {
              title: '',
              index: 'id2',
              sort: true
            }
          ] as _STColumn[];
          options.headers = [
            [
              { colSpan: 1, rowSpan: 1, hasSubColumns: false, column: options.columns[0] },
              { colSpan: 1, rowSpan: 1, hasSubColumns: false, column: options.columns[1] }
            ]
          ];
          srv.process(options).subscribe(() => {
            expect(resParams.has('SORT')).toBe(false);
            done();
          });
        });
        it(`should be used default key when invalid re-name paraments`, done => {
          options.columns[0]._sort.reName = {};
          srv.process(options).subscribe(() => {
            expect(resParams.get('SORT')).toBe('id1.descend-id2.ascend');
            done();
          });
        });
        it(`should be in user order`, done => {
          options.columns[1]._sort.tick = srv.nextSortTick;
          options.columns[0]._sort.tick = srv.nextSortTick;
          srv.process(options).subscribe(() => {
            expect(resParams.get('SORT')).toBe('id2.ascend-id1.descend');
            done();
          });
        });
        it(`#arrayParam`, done => {
          options.multiSort = {
            ...options.multiSort,
            arrayParam: true
          };
          srv.process(options).subscribe(() => {
            expect(resParams.toString()).toContain(`SORT=id1.descend&SORT=id2.ascend`);
            done();
          });
        });
      });
      describe('[singleSort]', () => {
        it(`should working`, done => {
          options.headers[0][0].column._sort.default = 'ascend';
          options.singleSort = {};
          srv.process(options).subscribe(() => {
            expect(resParams.get('sort')).toBe('id.ascend');
            done();
          });
        });
        it(`should specify options`, done => {
          options.headers[0][0].column._sort.default = 'ascend';
          options.singleSort = { key: 'SORT', nameSeparator: '-' };
          srv.process(options).subscribe(() => {
            expect(resParams.get('SORT')).toBe('id-ascend');
            done();
          });
        });
      });
    });
    describe('[filter]', () => {
      let resParams: HttpParams;
      beforeEach(() => {
        genModule();
        options.data = '/mockurl';
        options.columns[0].filter = {
          type: 'default',
          default: true,
          key: 'id',
          menus: [
            { text: '', value: 'a', checked: true },
            { text: '', value: 'b', checked: true }
          ]
        };
        spyOn(http, 'request').and.callFake((_method: string, _url: string, opt: any) => {
          resParams = opt.params;
          return of([]);
        });
      });
      it(`should be mulit field`, done => {
        srv.process(options).subscribe(() => {
          expect(resParams.get('id')).toBe('a,b');
          done();
        });
      });
      it(`should be re-name`, done => {
        options.columns[0].filter!.reName = (list: STColumnFilterMenu[]) => {
          return { id: list.map(i => `${i.value}1`).join(',') };
        };
        srv.process(options).subscribe(() => {
          expect(resParams.get('id')).toBe('a1,b1');
          done();
        });
      });
      it('should be always return first value when type with keyword', done => {
        options.columns[0].filter!.type = 'keyword';
        srv.process(options).subscribe(() => {
          expect(resParams.get('id')).toBe('a');
          done();
        });
      });
    });
    describe('[filteredData]', () => {
      beforeEach(() => {
        genModule();
        options.paginator = false;
        options.data = '/mockurl';
      });
      it(`should be include [pi] & [ps] request params`, done => {
        let params: any;
        spyOn(http, 'request').and.callFake((_method: string, _url: string, opt: any) => {
          params = opt.params;
          return of([]);
        });
        srv.process(options).subscribe(() => {
          expect(params.pi).toBeUndefined();
          expect(params.ps).toBeUndefined();
          done();
        });
      });
    });
  });

  describe('[data process]', () => {
    beforeEach(() => genModule());
    describe('#pre-process', () => {
      it('should run', done => {
        options.res.process = jasmine.createSpy().and.returnValue([]);
        srv.process(options).subscribe(() => {
          expect(options.res.process).toHaveBeenCalled();
          done();
        });
      });
    });
    describe('#accelerator', () => {
      beforeEach(() => (options.data = genData()));
      describe('via format', () => {
        it('should be working', done => {
          options.columns[0].format = jasmine.createSpy().and.returnValue('');
          srv.process(options).subscribe(() => {
            expect(options.columns[0].format).toHaveBeenCalled();
            done();
          });
        });
        it('should be return empty string when is null or undefined', done => {
          options.columns[0].format = jasmine.createSpy().and.returnValue(null);
          srv.process(options).subscribe(res => {
            expect(res.list[0]._values[0].text).toBe(``);
            done();
          });
        });
      });
      it('via index', done => {
        options.columns[0].index = 'name';
        srv.process(options).subscribe(res => {
          expect(res.list[0]._values[0].text).toBe(`name 1`);
          done();
        });
      });
      describe('via no', () => {
        it('with start 1', done => {
          options.columns[0].type = 'no';
          options.columns[0].noIndex = 1;
          srv.process(options).subscribe(res => {
            expect(res.list[0]._values[0].text).toBe(1);
            done();
          });
        });
        it('with start 0', done => {
          options.columns[0].type = 'no';
          options.columns[0].noIndex = 0;
          srv.process(options).subscribe(res => {
            expect(res.list[0]._values[0].text).toBe(0);
            done();
          });
        });
        it('with function', done => {
          options.columns[0].type = 'no';
          options.columns[0].noIndex = () => 10;
          srv.process(options).subscribe(res => {
            expect(res.list[0]._values[0].text).toBe(10);
            done();
          });
        });
      });
      describe('via img', () => {
        it('with value', done => {
          options.columns[0].type = 'img';
          srv.process(options).subscribe(res => {
            expect(res.list[0]._values[0].text).toContain(`class="img"`);
            done();
          });
        });
        it('without value', done => {
          options.columns[0].type = 'img';
          (options.data as STData[])[0].id = '';
          srv.process(options).subscribe(res => {
            expect(res.list[0]._values[0].text).toBe(``);
            done();
          });
        });
      });
      it('via number', done => {
        options.columns[0].type = 'number';
        spyOn(decimalPipe, 'transform');
        srv.process(options).subscribe(() => {
          expect(decimalPipe.transform).toHaveBeenCalled();
          done();
        });
      });
      it('via currency', done => {
        options.columns[0].type = 'currency';
        spyOn(currencySrv, 'format');
        srv.process(options).subscribe(() => {
          expect(currencySrv.format).toHaveBeenCalled();
          done();
        });
      });
      describe('via date', () => {
        it('should be working', done => {
          options.columns[0].type = 'date';
          spyOn(datePipe, 'transform');
          srv.process(options).subscribe(() => {
            expect(datePipe.transform).toHaveBeenCalled();
            done();
          });
        });
        it('should be return default value', done => {
          options.columns[0] = { index: 'date', type: 'date', default: '-' } as _STColumn;
          options.data = [{}, { date: new Date() }];
          srv.process(options).subscribe(res => {
            expect(res.list[0]._values[0].text).toBe('-');
            done();
          });
        });
        it('should be return default value when is 0 timestamp', done => {
          options.columns[0] = { index: 'date', type: 'date', default: '-' } as _STColumn;
          options.data = [{ date: 0 }, { date: new Date() }];
          srv.process(options).subscribe(res => {
            expect(res.list[0]._values[0].text).toBe('-');
            done();
          });
        });
      });
      it('via yn', done => {
        options.columns[0].type = 'yn';
        options.columns[0].yn = {};
        spyOn(ynPipe, 'transform');
        srv.process(options).subscribe(() => {
          expect(ynPipe.transform).toHaveBeenCalled();
          done();
        });
      });
      it('via tag', done => {
        options.columns[0].type = 'tag';
        options.columns[0].tag = {
          1: { text: '一' }
        };
        srv.process(options).subscribe(res => {
          expect(res.list[0]._values[0].text).toBe('一');
          expect(res.list[1]._values[0].text).toBe('');
          done();
        });
      });
      it('via badge', done => {
        options.columns[0].type = 'badge';
        options.columns[0].badge = {
          1: { text: '一' }
        };
        srv.process(options).subscribe(res => {
          expect(res.list[0]._values[0].text).toBe('一');
          expect(res.list[1]._values[0].text).toBe('');
          done();
        });
      });
      it('via enum', done => {
        options.columns[0].type = 'enum';
        options.columns[0].enum = {
          1: '一'
        };
        srv.process(options).subscribe(res => {
          expect(res.list[0]._values[0].text).toBe('一');
          expect(res.list[1]._values[0].text).toBe('');
          done();
        });
      });
      describe('#safeType', () => {
        beforeEach(() => {
          spyOn(mockDomSanitizer, 'bypassSecurityTrustHtml');
        });
        it('with safeHtml', done => {
          options.columns[0].safeType = 'safeHtml';
          srv.process(options).subscribe(() => {
            expect(mockDomSanitizer.bypassSecurityTrustHtml).toHaveBeenCalled();
            done();
          });
        });
        it('with safeHtml in format', done => {
          options.columns[0].safeType = 'safeHtml';
          options.columns[0].format = () => 'a';
          srv.process(options).subscribe(() => {
            expect(mockDomSanitizer.bypassSecurityTrustHtml).toHaveBeenCalled();
            done();
          });
        });
        it('with html', done => {
          options.columns[0].safeType = 'html';
          srv.process(options).subscribe(() => {
            expect(mockDomSanitizer.bypassSecurityTrustHtml).not.toHaveBeenCalled();
            done();
          });
        });
        it('with text', done => {
          options.columns[0].safeType = 'text';
          srv.process(options).subscribe(() => {
            expect(mockDomSanitizer.bypassSecurityTrustHtml).not.toHaveBeenCalled();
            done();
          });
        });
      });
    });
    it('#rowClassName', done => {
      options.rowClassName = () => `aaa`;
      options.data = genData();
      srv.process(options).subscribe(res => {
        expect(res.list[0]._rowClassName).toBe('aaa');
        done();
      });
    });
    it('should be return empty string when is null or undefined', done => {
      options.data = genData(1);
      options.columns = [{ title: '', index: 'aa' }] as _STColumn[];
      srv.process(options).subscribe(res => {
        expect(res.list[0]._values[0].text).toBe('');
        done();
      });
    });
    it('should be throw error when is invalid data', done => {
      options.data = [{ age: 'invalid-number' }];
      options.columns = [{ title: '', index: 'age', type: 'number' }] as _STColumn[];
      spyOn(console, 'error');
      srv.process(options).subscribe(res => {
        expect(console.error).toHaveBeenCalled();
        expect(res.list[0]._values[0].text).toBe('INVALID DATA');
        done();
      });
    });
    it('should be buttons', done => {
      options.data = [{ id: 1 }];
      options.columns = [
        { title: '', index: 'id' },
        {
          title: 'btn',
          iif: () => true,
          buttons: [
            { text: 'btn1', iif: () => true, children: [] },
            { text: 'btn2', iif: () => true, children: [{ text: 'btn2-1', iif: () => true, children: [] }] }
          ]
        }
      ] as _STColumn[];
      srv.process(options).subscribe(res => {
        const btns = res.list[0]._values[1].buttons;
        expect(Array.isArray(btns)).toBe(true);
        expect(btns.length).toBe(2);
        done();
      });
    });
    describe('#onCell', () => {
      it('should be working', done => {
        const index = 1;
        options.data = genData();
        options.columns = [
          { index: 'a', onCell: (_, idx) => ({ colSpan: idx === index ? 2 : 1 }) },
          { index: 'b', onCell: (_, idx) => ({ rowSpan: idx === index ? 2 : 1 }) }
        ] as _STColumn[];
        srv.process(options).subscribe(res => {
          const values = res.list[index]._values as _STDataValue[];
          expect(values[0].props?.colSpan).toBe(2);
          expect(values[0].props?.rowSpan).toBe(1);

          expect(values[1].props?.colSpan).toBe(1);
          expect(values[1].props?.rowSpan).toBe(2);
          done();
        });
      });
      it('should be ignore when set 0', done => {
        const index = 1;
        options.data = genData();
        options.columns = [
          { index: 'a', onCell: (_, idx) => ({ colSpan: idx === index ? 0 : 1 }) },
          { index: 'b', onCell: (_, idx) => ({ rowSpan: idx === index ? 0 : 1 }) }
        ] as _STColumn[];
        srv.process(options).subscribe(res => {
          const values = res.list[index]._values as _STDataValue[];
          expect(values[0].props?.colSpan).toBeNull();
          expect(values[0].props?.rowSpan).toBe(1);

          expect(values[1].props?.colSpan).toBe(1);
          expect(values[1].props?.rowSpan).toBeNull();
          done();
        });
      });
    });
  });

  describe('[buttons]', () => {
    beforeEach(() => genModule());

    it('text with function', done => {
      options.data = [{ id: 1 }];
      options.columns = [
        {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          buttons: [{ text: (_, __) => `fn` }]
        }
      ] as _STColumn[];
      srv.process(options).subscribe(res => {
        const btns: STColumnButton[] = res.list[0]._values[0].buttons;
        expect(btns.length).toBe(1);
        expect(btns[0]._text).toBe('fn');
        done();
      });
    });

    it('text with null value', done => {
      options.data = [{ id: 1 }];
      options.columns = [
        {
          buttons: [{ text: undefined }]
        }
      ] as _STColumn[];
      srv.process(options).subscribe(res => {
        const btns: STColumnButton[] = res.list[0]._values[0].buttons;
        expect(btns.length).toBe(1);
        expect(btns[0]._text).toBe('');
        done();
      });
    });

    describe('#maxMultipleButton', () => {
      it('with number', done => {
        options.data = [{ id: 1 }];
        options.columns = [
          {
            maxMultipleButton: 1,
            buttons: [{ text: 'btn1' }, { text: 'btn2' }, { text: 'btn3' }]
          }
        ] as _STColumn[];
        srv.process(options).subscribe(res => {
          const btns: STColumnButton[] = res.list[0]._values[0].buttons;
          expect(btns.length).toBe(2);
          expect(btns[1].children?.length).toBe(2);
          done();
        });
      });

      it('with object', done => {
        options.data = [{ id: 1 }];
        options.columns = [
          {
            maxMultipleButton: { text: 'More', count: 2 },
            buttons: [{ text: 'btn1' }, { text: 'btn2' }, { text: 'btn3' }]
          }
        ] as _STColumn[];
        srv.process(options).subscribe(res => {
          const btns: STColumnButton[] = res.list[0]._values[0].buttons;
          expect(btns.length).toBe(3);
          expect(btns[2]._text).toBe('More');
          expect(btns[2].children?.length).toBe(1);
          done();
        });
      });

      it('when the number is less than count', done => {
        options.data = [{ id: 1 }];
        options.columns = [
          { maxMultipleButton: 4, buttons: [{ text: 'btn1' }, { text: 'btn2' }, { text: 'btn3' }] }
        ] as _STColumn[];
        srv.process(options).subscribe(res => {
          const btns: STColumnButton[] = res.list[0]._values[0].buttons;
          expect(btns.length).toBe(3);
          done();
        });
      });
    });
  });

  describe('[statistical]', () => {
    beforeEach(() => {
      genModule();
      options.pi = 1;
      options.ps = 100;
      spyOn(currencySrv, 'format');
    });

    it('should be use key instead of index as result key', done => {
      options.columns = [{ title: '', index: 'a', key: 'a', statistical: { type: 'sum' } }] as _STColumn[];
      options.data = [{ a: 1 }, { a: 2 }];

      srv.process(options).subscribe(res => {
        expect(res.statistical.a.value).toBe(3);
        done();
      });
    });

    it('should be use indexKey instead of key when not spcify key', done => {
      options.columns = [{ title: '', index: 'a', indexKey: 'a', statistical: { type: 'sum' } }] as _STColumn[];
      options.data = [{ a: 1 }, { a: 2 }];

      srv.process(options).subscribe(res => {
        expect(res.statistical.a.value).toBe(3);
        done();
      });
    });

    it('should be custom function', done => {
      let callbackRawData: any = null;
      options.columns = [
        {
          title: '',
          statistical: {
            type: (_values, _col, _list, rawData) => {
              callbackRawData = rawData;
              return { value: 10 };
            }
          }
        }
      ] as _STColumn[];
      options.data = [{ a: 1 }, { a: 2 }];

      srv.process(options).subscribe(res => {
        expect(res.statistical[0].value).toBe(10);
        expect(Array.isArray(callbackRawData)).toBe(true);
        done();
      });
    });

    it('should be 3 digits', done => {
      options.columns = [{ title: '', index: 'a', statistical: { type: 'sum', digits: 3 } }] as _STColumn[];
      options.data = [{ a: 1 }, { a: 2.5666 }];

      srv.process(options).subscribe(res => {
        expect(res.statistical[0].value).toBe(3.567);
        done();
      });
    });

    it('should be return 0 when invalid type', done => {
      options.columns = [{ title: '', index: 'a', statistical: { type: 'invalid-type' as any } }] as _STColumn[];
      options.data = [{ a: 1 }, { a: 2 }];

      srv.process(options).subscribe(res => {
        expect(res.statistical[0].value).toBe(0);
        done();
      });
    });

    describe('#currency', () => {
      it('should working', done => {
        options.columns = [{ title: '', index: 'a', statistical: { type: 'sum', currency: true } }] as _STColumn[];
        options.data = [{ a: 1 }, { a: 2 }, { a: 0.1 }];
        expect(currencySrv.format).not.toHaveBeenCalled();

        srv.process(options).subscribe(() => {
          expect(currencySrv.format).toHaveBeenCalled();
          done();
        });
      });
      it('should be ignore currency', done => {
        options.columns = [{ title: '', index: 'a', statistical: { type: 'sum', currency: false } }] as _STColumn[];
        options.data = [{ a: 1 }, { a: 2 }, { a: 0.1 }];

        srv.process(options).subscribe(res => {
          expect(res.statistical[0].text).toBe('3.1');
          done();
        });
      });
    });

    describe('#type', () => {
      it('with count', done => {
        options.columns = [{ title: '', index: 'a', statistical: 'count' }] as _STColumn[];
        options.data = [{ a: 1 }, { a: 1 }, { a: 1 }];

        srv.process(options).subscribe(res => {
          expect(res.statistical[0].value).toBe(3);
          done();
        });
      });

      describe('with distinctCount', () => {
        it('should working', done => {
          options.columns = [{ title: '', index: 'a', statistical: 'distinctCount' }] as _STColumn[];
          options.data = [{ a: 1 }, { a: 2 }, { a: 1 }];

          srv.process(options).subscribe(res => {
            expect(res.statistical[0].value).toBe(2);
            done();
          });
        });
        it('when include null or undefined', done => {
          options.columns = [{ title: '', index: 'a', statistical: 'distinctCount' }] as _STColumn[];
          options.data = [{ a: 1 }, { a: null }, { a: 1 }];

          srv.process(options).subscribe(res => {
            expect(res.statistical[0].value).toBe(2);
            done();
          });
        });
      });

      describe('with sum', () => {
        it('should working', done => {
          options.columns = [{ title: '', index: 'a', statistical: 'sum' }] as _STColumn[];
          options.data = [{ a: 1 }, { a: 2 }, { a: null }, { a: undefined }, { a: 0.1 }];

          srv.process(options).subscribe(res => {
            expect(res.statistical[0].value).toBe(3.1);
            done();
          });
        });
        it('should be return 0 when the value > MAX_VALUE', done => {
          options.columns = [{ title: '', index: 'a', statistical: 'sum' }] as _STColumn[];
          options.data = [{ a: Number.MAX_VALUE }, { a: Number.MAX_VALUE }];

          srv.process(options).subscribe(res => {
            expect(res.statistical[0].value).toBe(0);
            done();
          });
        });
        it('should be return 0 when data is empty', done => {
          options.columns = [{ title: '', index: 'a', statistical: 'sum' }] as _STColumn[];
          options.data = [];

          srv.process(options).subscribe(res => {
            expect(res.statistical[0].value).toBe(0);
            done();
          });
        });
      });

      describe('with average', () => {
        it('should working', done => {
          options.columns = [{ title: '', index: 'a', statistical: 'average' }] as _STColumn[];
          options.data = [{ a: 1 }, { a: 2 }, { a: null }, { a: undefined }, { a: 0.1 }];

          srv.process(options).subscribe(res => {
            expect(res.statistical[0].value).toBe(0.62);
            done();
          });
        });
        it('should be return 0 when the value > MAX_VALUE', done => {
          options.columns = [{ title: '', index: 'a', statistical: 'average' }] as _STColumn[];
          options.data = [{ a: Number.MAX_VALUE }, { a: Number.MAX_VALUE }];

          srv.process(options).subscribe(res => {
            expect(res.statistical[0].value).toBe(0);
            done();
          });
        });
        it('should be return 0 when data is empty', done => {
          options.columns = [{ title: '', index: 'a', statistical: 'average' }] as _STColumn[];
          options.data = [];

          srv.process(options).subscribe(res => {
            expect(res.statistical[0].value).toBe(0);
            done();
          });
        });
      });

      describe('with max', () => {
        it('should working', done => {
          options.columns = [{ title: '', index: 'a', statistical: 'max' }] as _STColumn[];
          options.data = [{ a: 1 }, { a: 2 }, { a: null }, { a: undefined }, { a: 0.1 }];

          srv.process(options).subscribe(res => {
            expect(res.statistical[0].value).toBe(2);
            done();
          });
        });
      });

      describe('with min', () => {
        it('should working', done => {
          options.columns = [{ title: '', index: 'a', statistical: 'min' }] as _STColumn[];
          options.data = [{ a: 1 }, { a: 2 }, { a: 0.1 }];

          srv.process(options).subscribe(res => {
            expect(res.statistical[0].value).toBe(0.1);
            done();
          });
        });
        it('should be return 0 when include null or undefined value', done => {
          options.columns = [{ title: '', index: 'a', statistical: 'min' }] as _STColumn[];
          options.data = [{ a: 1 }, { a: 2 }, { a: null }, { a: undefined }, { a: 0.1 }];

          srv.process(options).subscribe(res => {
            expect(res.statistical[0].value).toBe(0);
            done();
          });
        });
      });
    });
  });
});
