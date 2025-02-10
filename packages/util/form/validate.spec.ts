import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';



import { _Validators } from './validators';
import { TEST_DATA } from '../format/validate.spec';

describe('utils: form-validate', () => {
  function process(methodName: keyof typeof _Validators, data: Array<{ k: string; v: boolean }>): void {
    for (const item of data) {
      const ctr = new FormControl(item.k);
      const fn = _Validators[methodName] as (control: AbstractControl) => ValidationErrors | null;
      const res = fn(ctr);
      if (item.v) {
        expect(res).toBeNull();
      } else {
        expect(res).not.toBeNull();
        expect((res as any)[methodName]).toEqual(true);
      }
    }
  }

  it('#num', () => process('num', TEST_DATA.num as any[]));
  it('#int', () => process('int', TEST_DATA.int as any[]));
  it('#decimal', () => process('decimal', TEST_DATA.decimal as any[]));
  it('#idCard', () => process('idCard', TEST_DATA.idCard as any[]));
  it('#mobile', () => process('mobile', TEST_DATA.mobile as any[]));
  it('#url', () => process('url', TEST_DATA.url as any[]));
  it('#ip', () => process('ip', TEST_DATA.ip as any[]));
  it('#color', () => process('color', TEST_DATA.color as any[]));
  it('#chinese', () => process('chinese', TEST_DATA.chinese as any[]));
});
