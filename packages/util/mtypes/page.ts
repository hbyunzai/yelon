export interface YunzaiPageParam<T> {
  pageNum?: number;
  pageSize?: number;
  pageParam?: T;
}

const YUNZAI_PAGE = {
  PAGE_NUM: 1,
  PAGE_SIZE: 1000
};

export interface Pageable {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  sort: PageableSort;
  unpaged: boolean;
}

export interface PageableSort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface YunzaiPageResult<T> {
  content: T[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable;
  size: number;
  sort: PageableSort;
  totalElements: number;
  totalPages: number;
}

export class YunzaiPageBuilder<T extends any | unknown> {
  private page: YunzaiPageParam<T> = {};

  public pageNum(pageNum: number): this {
    this.page.pageNum = pageNum;
    return this;
  }

  public pageSize(pageSize: number): this {
    this.page.pageSize = pageSize;
    return this;
  }

  public pageParam(param: T): this {
    this.page.pageParam = param;
    return this;
  }

  public default(): this {
    this.page.pageNum = YUNZAI_PAGE.PAGE_NUM;
    this.page.pageSize = YUNZAI_PAGE.PAGE_SIZE;
    return this;
  }

  public build(): YunzaiPageParam<T> {
    return this.page;
  }
}

export class Page<T> {
  pageNum = 1;
  pageSize = 30;
  param?: Partial<T>;

  private constructor(pageNum: number, pageSize: number, param?: Partial<T>) {
    this.pageNum = pageNum;
    this.pageSize = pageSize;
    this.param = param;
  }

  static create<T>(): Page<T> {
    return new Page<T>(1, 30);
  }
}
