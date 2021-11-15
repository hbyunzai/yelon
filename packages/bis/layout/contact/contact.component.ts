import {
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
  AfterViewInit,
  Optional,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';
import { Subscription } from 'rxjs';

import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzTreeNodeOptions, NzFormatEmitEvent } from 'ng-zorro-antd/tree';

import { STComponent } from '@yelon/abc/st';

import { ContactService } from './contact.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit, OnDestroy, AfterViewInit {
  subs: Subscription[] = [];

  /**
   * tabset
   */
  @Optional() @Input() nzTabsetSearch: string | null = null;
  @Optional() @Input() nzTabsetLoading: boolean = false;

  /**
   * 树展开状态
   */
  @Optional() @Input() nzExpandAll: boolean = true;

  /**
   * 部门树和部门查询的一些选项/可传可不传
   */
  @Optional() @Input() nzDepts: NzTreeNodeOptions[] = [];
  private _nzDeptsCopy: NzTreeNodeOptions[] = [];
  @Optional() @Input() nzDeptTreeVirtualHeight: string | null = null;
  @Optional() @Input() nzDeptClass: boolean = true;
  @Optional() @Input() nzDeptClassHistory: boolean = true;
  @Optional() @Input() nzDeptGrade: boolean = false;
  @Optional() @Input() nzDeptGradeID: string;

  /**
   * 角色树
   */
  @Optional() @Input() nzRoles: NzTreeNodeOptions[] = [];
  private _nzRolesCopy: NzTreeNodeOptions[] = [];
  @Optional() @Input() nzRoleTreeVirtualHeight: string | null = null;

  /**
   * 好友分组
   */
  @Optional() @Input() nzFriendGroups: NzSafeAny[] = [];
  _nzFriendGroupsCopy: NzSafeAny[] = [];

  /**
   * table组件，帮助文档: https://ng.yunzainfo.com/components/st/zh?#API
   */
  @ViewChild('st', { static: false }) st: STComponent;

  /**
   * 联系人
   */
  @Optional() @Input() defaultContacts: string[] = [];
  @Optional() @Input() nzContacts: NzSafeAny[] = [];
  @Optional() @Input() nzContactLoading: boolean = false;

  /**
   * 提交和提交按钮
   */
  @Optional() @Input() button: boolean = true;
  @Output() readonly confirmed: EventEmitter<NzSafeAny[]> = new EventEmitter();

  constructor(private contact: ContactService, private changeDetectorRef: ChangeDetectorRef) {}

  /**
   * 初始化，首先加载部门树和默认选中的人的数据
   */
  ngOnInit(): void {
    this.onTabsetDept();
    this.onContactsInit();
  }

  /**
   * 视图初始化完毕后进行table初始化
   */
  ngAfterViewInit(): void {
    this.onTableInit();
  }

  /**
   * 初始化默认选中联系人
   */
  onContactsInit(): void {
    if (this.defaultContacts && this.defaultContacts.length > 0) {
      this.nzContactLoading = true;
      this.subs.push(
        this.contact.getUserByUserIds(this.defaultContacts).subscribe(contacts => {
          this.nzContacts = contacts;
          this.nzContactLoading = false;
          this.refresh();
        })
      );
    }
  }

  /**
   * table初始化
   */
  onTableInit(): void {
    // 设置表头
    this.st.resetColumns({
      columns: [
        { title: '选择', type: 'checkbox' },
        { title: '序号', type: 'no' },
        { title: '姓名', index: 'realName' },
        { title: '学号/工号', index: 'userCode' },
        { title: '部门', index: 'dept.deptName' }
      ]
    });
    // 订阅table点击checkbox事件变化
    this.subs.push(
      this.st.change.subscribe(e => {
        if (e.type === 'checkbox') {
          // 点击checkbox新增联系人
          const contactIds = this.nzContacts.map(c => c.userId);
          this.nzContacts = this.nzContacts.concat(e.checkbox!.filter(c => !contactIds.includes(c.userId)));
          // 取消checkbox取消联系人
          const cancelIds = this.st.list.filter(d => !d.checked).map(d => d.userId);
          this.nzContacts = this.nzContacts.filter(d => !cancelIds.includes(d.userId));
        }
      })
    );
  }

  /**
   * tabset进入加载状态
   */
  onTabsetLoadStart(): void {
    this.nzTabsetLoading = true;
  }

  /**
   * tabset取消加载状态
   */
  onTabsetLoadEnd(): void {
    this.nzTabsetLoading = false;
  }

  /**
   * tabset搜索框清除
   */
  onTabsetSearchClean(): void {
    this.nzDepts = this._nzDeptsCopy;
    this.nzRoles = this._nzRolesCopy;
    this.nzFriendGroups = this._nzFriendGroupsCopy;
    this.nzTabsetSearch = null;
  }

  /**
   * tabset搜索框输入
   *
   * @param type 类型
   * @param value 值
   */
  onTabsetSearchChange(type: 'dept' | 'role' | 'friendGroup', value: string): void {
    this.onTabsetLoadStart();
    if (!value || value === '') {
      this.nzDepts = this._nzDeptsCopy;
      this.nzRoles = this._nzRolesCopy;
      this.nzFriendGroups = this._nzFriendGroupsCopy;
    } else {
      const trees: NzTreeNodeOptions[] = [];
      if (type === 'dept') {
        this.searchTree(value, this._nzDeptsCopy, trees);
        this.nzDepts = trees;
      }
      if (type === 'role') {
        this.searchTree(value, this._nzRolesCopy, trees);
        this.nzRoles = trees;
      }
      if (type === 'friendGroup') {
        this.nzFriendGroups = this._nzFriendGroupsCopy.filter(f => {
          return !f.name.indexOf(value);
        });
      }
    }
    this.onTabsetLoadEnd();
    this.refresh();
  }

  /**
   * tabset切换到部门
   */
  onTabsetDept(): void {
    this.onTabsetSearchClean();
    if (!this.nzDepts || this.nzDepts.length === 0) {
      this.onTabsetDeptFlush();
    }
  }

  /**
   * tabset切换到角色
   */
  onTabsetRole(): void {
    this.onTabsetSearchClean();
    if (!this.nzRoles || this.nzRoles.length === 0) {
      this.onTabsetRoleFlush(null as NzSafeAny);
    }
  }

  /**
   * tabset切换到好友分组
   */
  onTabsetFriendGroup(): void {
    this.onTabsetSearchClean();
    if (!this.nzFriendGroups || this.nzFriendGroups.length === 0) {
      this.onTabsetFriendGroupFlush();
    }
  }

  /**
   * 获取部门树
   */
  onTabsetDeptFlush(): void {
    this.onTabsetLoadStart();
    this.subs.push(
      this.contact
        .dept(this.nzDeptClass, this.nzDeptClassHistory, this.nzDeptGrade, this.nzDeptGradeID)
        .subscribe((trees: NzTreeNodeOptions[]) => {
          this.expandTree(trees);
          this.nzDepts = trees;
          this._nzDeptsCopy = trees;
          this.onTabsetLoadEnd();
          this.refresh();
        })
    );
  }

  // 获取角色树
  onTabsetRoleFlush(groupRoleCode: string): void {
    this.onTabsetLoadStart();
    this.subs.push(
      this.contact.getGroupRole(groupRoleCode).subscribe((roles: NzTreeNodeOptions[]) => {
        this.expandTree(roles);
        this.nzRoles = roles;
        this._nzRolesCopy = roles;
        this.onTabsetLoadEnd();
        this.refresh();
      })
    );
  }

  // 获取好友分组列表
  onTabsetFriendGroupFlush(): void {
    this.onTabsetLoadStart();
    this.subs.push(
      this.contact.getFriendGroup().subscribe((group: NzSafeAny[]) => {
        this.nzFriendGroups = group;
        this._nzFriendGroupsCopy = group;
        this.onTabsetLoadEnd();
        this.refresh();
      })
    );
  }

  /**
   * 部门树点击
   *
   * @param e 节点
   */
  onDeptClick(e: NzFormatEmitEvent): void {
    // 构造分页请求，直接传入stTable组件，剩下的所有交给组件自己完成
    this.st.data = '/auth/baseUser/queryListForPage';
    this.st.req = {
      allInBody: true,
      method: 'POST',
      type: 'page',
      reName: {
        pi: 'pageNum',
        ps: 'pageSize'
      },
      body: {
        pageParam: {
          deptId: e.keys?.pop()
        }
      }
    };
    // table数据预处理
    this.st.res = {
      process: data => {
        this.onTableCheck(data);
        return data;
      }
    };
    // 加载第一页
    this.st.load(1);
  }

  /**
   * 角色树点击
   *
   * @param e 节点
   */
  onRoleClick(e: NzFormatEmitEvent): void {
    // 构造分页请求，直接传入stTable组件，剩下的所有交给组件自己完成
    this.st.data = '/auth/baseUser/queryListForPage';
    this.st.req = {
      allInBody: true,
      method: 'POST',
      type: 'page',
      reName: {
        pi: 'pageNum',
        ps: 'pageSize'
      },
      body: {
        pageParam: {
          roleId: e.keys?.pop()
        }
      }
    };
    // table数据预处理
    this.st.res = {
      process: data => {
        this.onTableCheck(data);
        return data;
      }
    };
    // 加载第一页
    this.st.load(1);
  }

  /**
   * 好友分组点击
   *
   * @param e 分组
   */
  onFriendGroupClick(e: NzSafeAny): void {
    // 构造分页请求，直接传入stTable组件，剩下的所有交给组件自己完成
    this.st.data = '/auth/baseUser/queryListForPage';
    this.st.req = {
      allInBody: true,
      method: 'POST',
      type: 'page',
      reName: {
        pi: 'pageNum',
        ps: 'pageSize'
      },
      body: {
        pageParam: {
          friendGroupId: e.id
        }
      }
    };
    // table数据预处理
    this.st.res = {
      process: data => {
        this.onTableCheck(data);
        return data;
      }
    };
    // 加载第一页
    this.st.load(1);
  }

  /**
   * 点击右侧联系人进行删除
   *
   * @param c 点击的联系人
   */
  onContactRemove(c: NzSafeAny): void {
    this.nzContacts = this.nzContacts.filter(contact => {
      return contact.userId != c.userId;
    });
    this.st.reload();
  }

  /**
   * 预处理table当前页数据，和nzContat对比，确定checkbox状态
   *
   * @param data 预处理数据
   */
  onTableCheck(data: NzSafeAny[]): void {
    const ids = this.nzContacts.map(u => u.userId);
    data.forEach(d => {
      if (ids.includes(d.userId)) {
        d.checked = true;
      } else {
        d.checked = false;
      }
    });
  }

  /**
   * 递归树寻找name相同节点
   *
   * @param name 名称
   * @param trees 需要递归的树
   * @param list 搜索结果
   */
  searchTree(name: string, trees: NzTreeNodeOptions[], list: NzTreeNodeOptions[]): void {
    if (trees && trees.length && trees.length > 0) {
      trees.forEach((tree: NzTreeNodeOptions) => {
        if (tree.title.indexOf(name) != -1) {
          list.push(tree);
        }
        if (tree.children) {
          this.searchTree(name, tree.children, list);
        }
      });
    }
  }

  /**
   * 递归树展开所有有子节点的节点
   *
   * @param trees 需要展开的树
   */
  expandTree(trees: NzTreeNodeOptions[]): void {
    if (trees && trees.length && trees.length > 0) {
      trees.forEach(tree => {
        if (!tree.children || tree.children.length === 0) {
          tree.expanded = false;
          tree.isLeaf = true;
        }
        if (tree.children) {
          tree.expanded = this.nzExpandAll;
          tree.isLeaf = false;
          this.expandTree(tree.children);
        }
      });
    }
  }

  /**
   * 刷新当前页面
   */
  refresh(): void {
    this.changeDetectorRef.detectChanges();
  }

  /**
   * 确认按钮output数据
   */
  confirm(): void {
    this.confirmed.next(this.nzContacts);
  }

  /**
   * 销毁函数
   */
  ngOnDestroy(): void {
    this.nzDepts = [];
    this.nzRoles = [];
    this.nzContacts = [];
    this.subs.forEach(s => s.unsubscribe());
  }
}
