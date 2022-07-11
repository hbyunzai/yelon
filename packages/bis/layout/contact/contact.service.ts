import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { CacheService } from '@yelon/cache';
import { _HttpClient } from '@yelon/theme';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';

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

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: _HttpClient, private cache: CacheService) {}

  // TIPS: How to write an override function in typescript
  /**
   * 部门树查询
   *
   * @param clas 包含班级
   * @returns 可观察部门树
   */
  dept(clas: boolean): Observable<NzTreeNodeOptions[]>;
  /**
   * 部门树查询
   *
   * @param clas 包含班级
   * @param his 包含历史班级
   * @returns 可观察部门树
   */
  dept(clas: boolean, his: boolean): Observable<NzTreeNodeOptions[]>;
  /**
   * 部门树查询
   *
   * @param clas 包含班级
   * @param his 包含历史班级
   * @param grade 系部
   * @returns 可观察部门树
   */
  dept(clas: boolean, his: boolean, grade: boolean): Observable<NzTreeNodeOptions[]>;
  /**
   * 部门树查询
   *
   * @param clas 包含班级
   * @param his 包含历史班级
   * @param grade 系部
   * @param gradeID 系部ID
   * @returns 可观察部门树
   */
  dept(clas: boolean, his: boolean, grade: boolean, gradeID: string | null): Observable<NzTreeNodeOptions[]>;
  /**
   * 部门树查询
   *
   * @param clas 包含班级
   * @param his 包含历史班级
   * @param grade 系部
   * @param gradeID 系部ID
   * @returns 可观察部门树
   */
  dept(clas?: boolean, his?: boolean, grade?: boolean, gradeID?: string | null): Observable<NzTreeNodeOptions[]> {
    let baseUrl = `/auth/baseDepartMent/tree?debug=false`;

    if (clas) {
      baseUrl += `&includeClass=true`;
    } else {
      baseUrl += `&includeClass=false`;
    }

    if (his) {
      baseUrl += `&includeHisClass=true`;
    } else {
      baseUrl += `&includeHisClass=false`;
    }

    if (grade) {
      baseUrl += `&deptTypes=2,class`;
    }

    if (gradeID) {
      baseUrl += `&gradeId=${gradeID}`;
    }

    return this.http.get(baseUrl).pipe(
      map((response: NzSafeAny) => {
        return response.data || [];
      })
    );
  }

  page<U, T>(uri: string, page: Page<U>): Observable<PageRes<T>> {
    return this.http.post(`${uri}/queryListForPage`, page);
  }

  pageBaseUser(page: Page<BaseUserParam>): Observable<PageRes<NzSafeAny>> {
    return this.page<BaseUserParam, NzSafeAny>('/auth/baseUser', page);
  }

  getUserByIds(ids: string[]): Observable<any[]> {
    return this.http
      .post('/auth/baseUser/users', {
        userIds: ids
      })
      .pipe((response: NzSafeAny) => {
        return response.data || [];
      });
  }

  /**
   * 查询人员信息
   *
   * @param userIds[] 用户id数组,["aaa","bbb","ccc"]
   */
  getUserByUserIds(userIds: any): Observable<any[]> {
    return this.http
      .post(`/auth/baseUser/users`, {
        userIds: userIds
      })
      .pipe(
        map((response: NzSafeAny) => {
          return response.data ? response.data : [];
        })
      );
  }

  /**
   * 获取角色组角色
   *
   * @param roleGroupCode 角色组code
   */
  getGroupRole(roleGroupCode: string): Observable<NzTreeNodeOptions[]> {
    return this.http
      .post(`/auth/baseRole/findGroupRole`, {
        roleGroupCode: roleGroupCode
      })
      .pipe(
        map((response: NzSafeAny) => {
          return response.data ? response.data : [];
        })
      );
  }

  /**
   * 查询当前用户好友分组
   */
  getFriendGroup(): Observable<any[]> {
    return this.http.post(`/contact/appcontact/findGroup`, {}).pipe(
      map((response: NzSafeAny) => {
        return response.data ? response.data : [];
      })
    );
  }

  /**
   * 查询年级
   */
  getGrade(): Observable<any[]> {
    return this.http.get(`/auth/gradeYear/queryListForPage`).pipe(
      map((response: NzSafeAny) => {
        return response.data ? response.data : [];
      })
    );
  }

  /**
   * 查询人员类别列表
   */
  getRylbs(): Observable<any[]> {
    return this.http.post(`/auth/baseTeacher/queryRylbs`, {}).pipe(
      map((response: NzSafeAny) => {
        return response.data ? response.data : [];
      })
    );
  }

  /**
   * 获取学生公寓树
   *
   * @param isPower 是否带有权限，默认false
   * @param treeType 树类型 0:宿舍楼 1:宿舍楼+层 2:宿舍楼+层+房间
   */
  getDormTree(isPower: boolean, treeType: number): Observable<any[]> {
    const user = this.cache.get('_yz_user', { mode: 'none' });
    let params = {};
    if (isPower) {
      params = {
        isPower: isPower,
        userId: user.userId,
        treeType: treeType
      };
    } else {
      params = {
        isPower: isPower,
        treeType: treeType
      };
    }

    return this.http.post(`/auth/dorm/tree`, params).pipe(
      map((response: NzSafeAny) => {
        return response.data ? response.data : [];
      })
    );
  }
}
