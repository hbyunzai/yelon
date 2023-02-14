export interface BaseUserParam {
  realName?: string;
  userCode?: string;
  deptId?: string;
  roleId?: string;
  friendGroupId?: string;
  userTypes?: string;
  buildId?: string;
  floor?: string;
  roomId?: string;
  // FIXME: fix that use personType or peopleType or anything type
  rylb?: string;
}

export interface Page<T> {
  pageNum: number;
  pageSize: number;
  pageParam?: T;
}

export interface PageRes<T> {
  endRow: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  list: T[];
  navigateFirstPage: number;
  navigateLastPage: number;
  navigatePages: number;
  navigatepageNums: number[];
  nextPage: number;
  pageNum: number;
  pageSize: number;
  pages: number;
  prePage: number;
  size: number;
  startRow: number;
  total: number;
}
