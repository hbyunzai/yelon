import { TestBed } from '@angular/core/testing';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import type { YunzaiChartConfig } from './chart/chart.type';
import { YunzaiConfigService } from './config.service';

describe('util: config', () => {
  let srv: YunzaiConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YunzaiConfigService]
    });
    srv = TestBed.inject(YunzaiConfigService);
  });

  it('#set', () => {
    expect(srv.get('chart')?.theme).toBeUndefined();
    srv.set('chart', { theme: 'dark' } as YunzaiChartConfig);
    expect(srv.get('chart')?.theme).toBe('dark');
  });

  it('#attachKey', () => {
    const res: NzSafeAny = {};
    srv.set('chart', { theme: 'a' });
    srv.attachKey(res, 'chart', 'theme');
    expect(res.theme).toBe('a');
  });
});
