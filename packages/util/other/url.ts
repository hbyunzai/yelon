import { NzSafeAny } from 'ng-zorro-antd/core/types';

export function getUrlParam(url: NzSafeAny, name: string): string | null {
  try {
    var reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
    var r = url.split('?')[1].match(reg);
    if (r != null) return unescape(r[2]);
  } catch (e) {
    return null;
  }
  return null;
}
