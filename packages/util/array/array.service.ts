import { inject, Injectable } from '@angular/core';

import { YunzaiConfigService, YunzaiUtilArrayConfig } from '@yelon/util/config';
import { NzTreeNode } from 'ng-zorro-antd/core/tree';

import {
  ArrayServiceArrToTreeNodeOptions,
  ArrayServiceArrToTreeOptions,
  ArrayServiceGetKeysByTreeNodeOptions,
  ArrayServiceGroupByResult,
  ArrayServiceTreeToArrOptions
} from './array-type.service';

@Injectable({ providedIn: 'root' })
export class ArrayService {
  private readonly cogSrv = inject(YunzaiConfigService);
  private c: YunzaiUtilArrayConfig;

  constructor() {
    this.c = this.cogSrv.merge('utilArray', {
      deepMapName: 'deep',
      parentMapName: 'parent',
      idMapName: 'id',
      parentIdMapName: 'parent_id',
      childrenMapName: 'children',
      titleMapName: 'title',
      checkedMapname: 'checked',
      selectedMapname: 'selected',
      expandedMapname: 'expanded',
      disabledMapname: 'disabled'
    })!;
  }

  /**
   * Convert tree structure to array structure
   *
   * 将树结构转换成数组结构
   */
  treeToArr<T extends object = any>(tree: readonly T[], options?: ArrayServiceTreeToArrOptions<T>): T[] {
    const opt = {
      deepMapName: this.c.deepMapName,
      parentMapName: this.c.parentMapName,
      childrenMapName: this.c.childrenMapName,
      clearChildren: true,
      cb: null,
      ...options
    } as ArrayServiceTreeToArrOptions;
    const result: Array<Record<string, any>> = [];
    const inFn = (list: ReadonlyArray<Record<string, any>>, parent: T | null, deep: number = 0): void => {
      for (const i of list) {
        i[opt.deepMapName!] = deep;
        i[opt.parentMapName!] = parent;
        if (opt.cb) {
          opt.cb(i, parent, deep);
        }
        result.push(i);
        const children = i[opt.childrenMapName!];
        if (children != null && Array.isArray(children) && children.length > 0) {
          inFn(children, i as T, deep + 1);
        }
        if (opt.clearChildren) {
          delete i[opt.childrenMapName!];
        }
      }
    };
    inFn(tree, null);
    return result as T[];
  }

  /**
   * Convert array structure to tree structure
   *
   * 数组转换成树数据
   */
  arrToTree<T extends object = any>(arr: readonly T[], options?: ArrayServiceArrToTreeOptions<T>): T[] {
    if (!Array.isArray(arr) || arr.length === 0) {
      return [];
    }

    const opt = {
      idMapName: this.c.idMapName,
      parentIdMapName: this.c.parentIdMapName,
      childrenMapName: this.c.childrenMapName,
      cb: null,
      ...options
    } as ArrayServiceArrToTreeOptions<T>;
    const tree: T[] = [];
    const childrenOf: Record<string, T[]> = {};
    let rootPid = opt.rootParentIdValue;
    const arrType = arr as ReadonlyArray<Record<string, any>>;
    if (!rootPid) {
      const pids = arrType.map(i => i[opt.parentIdMapName!]);
      const emptyPid = pids.findIndex(w => w == null);
      rootPid = emptyPid !== -1 ? pids[emptyPid] : pids.sort()[0];
    }
    for (const item of arrType) {
      const id = item[opt.idMapName!];
      const pid = item[opt.parentIdMapName!];
      childrenOf[id] = childrenOf[id] || [];
      item[opt.childrenMapName!] = childrenOf[id];
      if (opt.cb) {
        opt.cb(item as T);
      }
      if (pid !== rootPid) {
        childrenOf[pid] = childrenOf[pid] || [];
        childrenOf[pid].push(item as T);
      } else {
        tree.push(item as T);
      }
    }
    return tree;
  }

  /**
   * 数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项
   */
  arrToTreeNode<T extends object = any>(arr: readonly T[], options?: ArrayServiceArrToTreeNodeOptions): NzTreeNode[] {
    const opt = {
      idMapName: this.c.idMapName,
      parentIdMapName: this.c.parentIdMapName,
      titleMapName: this.c.titleMapName,
      isLeafMapName: 'isLeaf',
      checkedMapname: this.c.checkedMapname,
      selectedMapname: this.c.selectedMapname,
      expandedMapname: this.c.expandedMapname,
      disabledMapname: this.c.disabledMapname,
      cb: null,
      ...options
    } as ArrayServiceArrToTreeNodeOptions<T>;
    const tree = this.arrToTree<T>(arr, {
      idMapName: opt.idMapName,
      parentIdMapName: opt.parentIdMapName,
      childrenMapName: 'children'
    });
    this.visitTree<T>(tree, (item: Record<string, any>, parent, deep) => {
      item.key = item[opt.idMapName!];
      item.title = item[opt.titleMapName!];
      item.checked = item[opt.checkedMapname!];
      item.selected = item[opt.selectedMapname!];
      item.expanded = item[opt.expandedMapname!];
      item.disabled = item[opt.disabledMapname!];
      if (item[opt.isLeafMapName!] == null) {
        item.isLeaf = item.children.length === 0;
      } else {
        item.isLeaf = item[opt.isLeafMapName!];
      }
      if (opt.cb) {
        opt.cb(item as any, parent, deep);
      }
    });
    return tree.map(node => new NzTreeNode(node as any));
  }

  /**
   * 递归访问整个树
   */
  visitTree<T extends object = any>(
    tree: readonly T[],
    cb: (item: T, parent: T | null, deep: number) => void,
    options?: {
      /** 子项名，默认：`'children'` */
      childrenMapName?: string;
    }
  ): void {
    options = {
      childrenMapName: this.c.childrenMapName,
      ...options
    };
    const inFn = (data: readonly T[], parent: T | null, deep: number): void => {
      for (const item of data) {
        cb(item, parent, deep);
        const childrenVal = (item as Record<string, any>)[options!.childrenMapName!];
        if (Array.isArray(childrenVal) && childrenVal.length > 0) {
          inFn(childrenVal, item, deep + 1);
        }
      }
    };
    inFn(tree, null, 1);
  }

  /**
   * Return the value of the first tree value in the tree where predicate is true, and `undefined` otherwise
   *
   * 根据条件返回树的第一个值，否则返回 `undefined`
   */
  findTree<T extends object = any>(
    tree: readonly T[],
    predicate: (item: T) => boolean,
    options?: {
      /** 子项名，默认：`'children'` */
      childrenMapName?: string;
    }
  ): T | undefined {
    let res: T | undefined;
    this.visitTree<T>(
      tree,
      item => {
        if (res === undefined && predicate(item)) {
          res = item;
        }
      },
      options
    );
    return res;
  }

  /**
   * 获取所有已经选中的 `key` 值
   */
  getKeysByTreeNode(tree: NzTreeNode[], options?: ArrayServiceGetKeysByTreeNodeOptions): any[] {
    const opt = {
      includeHalfChecked: true,
      ...options
    } as ArrayServiceGetKeysByTreeNodeOptions;
    const keys: any[] = [];
    this.visitTree<NzTreeNode>(tree, (item, parent, deep) => {
      if (item.isChecked || (opt.includeHalfChecked && item.isHalfChecked)) {
        keys.push(opt.cb ? opt.cb(item, parent, deep) : opt.keyMapName ? item.origin[opt.keyMapName] : item.key);
      }
    });
    return keys;
  }
  private baseFlat(array: any[], depth: number, result: any[] = []): any[] {
    let index = -1;
    while (++index < array.length) {
      const value = array[index];
      if (depth > 0 && Array.isArray(value)) {
        if (depth > 1) {
          this.baseFlat(value, depth - 1, result);
        } else {
          let pushIndex = -1;
          const offset = result.length;

          while (++pushIndex < value.length) {
            result[offset + pushIndex] = value[pushIndex];
          }
        }
      } else {
        result[result.length] = value;
      }
    }
    return result;
  }
  /**
   * Recursively flattens array
   *
   * 递归扁平数组
   * ```ts
   * srv.flat([1, [2, 3, [4, 5, [6]]]]) => [1,2,3,4,5,6]
   * srv.flat([1, [2, 3, [4, 5, [6]]]], 1) => [1,2,3,[4, 5, [6]]]
   * ```
   */
  flat<T>(array: readonly T[], depth: number = 1 / 0): T[] {
    return Array.isArray(array) ? this.baseFlat(array as any[], depth) : (array as T[]);
  }
  /**
   * Group the array
   *
   * 对数组进行分组
   * ```ts
   * srv.groupBy([6.1, 4.2, 6.3], Math.floor) => {"4":[4.2],"6":[6.1,6.3]}
   * srv.groupBy(['one', 'two', 'three'], v => v.length) => {"3":["one","two"],"5":["three"]}
   * ```
   */
  groupBy<T>(array: readonly T[], iteratee: (value: T) => string | number): ArrayServiceGroupByResult {
    if (!Array.isArray(array)) {
      return {};
    }
    return array.reduce((result, value) => {
      const key = iteratee(value);
      if (Object.prototype.hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        result[key] = [value];
      }
      return result;
    }, {} as ArrayServiceGroupByResult);
  }
  /**
   * Creates a duplicate-free version of an array
   *
   * 创建去重后的数组
   * ```ts
   * uniq([1, 2, 2, 3, 1]) => [1,2,3]
   * uniq([{ a: 1 }, { a: 1 }, { a: 2 }], 'a') => [{"a":1},{"a":2}]
   * uniq([{ a: 1 }, { a: 1 }, { a: 2 }], i => (i.a === 1 ? 'a' : 'b')) => [{"a":1},{"a":2}]
   * ```
   */
  uniq<T>(array: readonly T[], predicate?: string | ((value: T) => string | number | boolean)): T[] {
    return Array.from(
      array
        .reduce((map, value) => {
          const key = predicate
            ? typeof predicate === 'string'
              ? (value as any)[predicate]
              : predicate!(value)
            : value;
          if (!map.has(key)) {
            map.set(key, value);
          }
          return map;
        }, new Map<string | number | boolean, T>())
        .values()
    );
  }
}
