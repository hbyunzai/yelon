import { Pipe, PipeTransform } from '@angular/core';

/**
 * Filter array
 *
 * 过滤数组
 */
// eslint-disable-next-line @angular-eslint/no-pipe-impure
@Pipe({ name: 'filter', pure: false })
export class FilterPipe implements PipeTransform {
  transform<T>(array: readonly T[], matcher: (item: T, ...args: any[]) => boolean, ...args: any[]): T[] {
    return array.filter(i => matcher(i, ...args));
  }
}
