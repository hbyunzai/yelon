import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';

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

  describe('#attach', () => {
    it('support signal', () => {
      class MockSignal {
        guard_url = signal<string>('a');

        constructor() {
          srv.attach(this, 'acl', { guard_url: 'override' });
        }
      }
      const obj = new MockSignal();
      expect(obj.guard_url()).toBe('override');
    });
  });
});
