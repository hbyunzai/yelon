import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { YunzaiDeptTree, YunzaiDeptTreeProps } from '@yelon/bcs/yunzai-dept-tree';
import { YunzaiDormitoryTree, YunzaiDormitoryTreeProps } from '@yelon/bcs/yunzai-dormitory-tree';
import { YunzaiFriendGroup, YunzaiFriendGroupProps } from '@yelon/bcs/yunzai-friend-group';
import { YunzaiRoleTree, YunzaiRoleTreeProps } from '@yelon/bcs/yunzai-role-tree';
import { YunzaiTableUser, YunzaiTableUserComponent, YunzaiTableUserProps } from '@yelon/bcs/yunzai-table-user';

import { YunzaiContactProps, YunzaiContactState } from './yunzai-contact.types';

@Component({
  selector: `yunzai-contact`,
  template: `
    <nz-card *ngIf="isWarp">
      <ng-container [ngTemplateOutlet]="content"></ng-container>
    </nz-card>

    <ng-container *ngIf="!isWarp" [ngTemplateOutlet]="content"></ng-container>

    <ng-template #content>
      <nz-row>
        <nz-col [nzSpan]="6">

          <div class="yz-select-contacts-modal-type">
            <nz-radio-group [(ngModel)]="state.cursor">
              <label *ngIf="!disableDeptTree" nz-radio-button
                     nzValue="deptTree">{{'deptTree'|i18n}}</label>
              <label *ngIf="!disableRoleTree" nz-radio-button
                     nzValue="roleTree">{{'roleTree'|i18n}}</label>
              <label *ngIf="!disableDormitoryTree" nz-radio-button
                     nzValue="dormitoryTree">{{'dormitoryTree'|i18n}}</label>
              <label *ngIf="!disableFriendGroup" nz-radio-button
                     nzValue="friendGroup">{{'friendGroup'|i18n}}</label>
            </nz-radio-group>
          </div>

          <nz-row class="yz-select-contacts-modal-tree">
            <nz-col [nzSpan]="24" [ngSwitch]="state.cursor">
              <yunzai-dept-tree *ngSwitchCase="'deptTree'" [props]="deptTree"
                             (onSelect)="onDeptSelect($event)"></yunzai-dept-tree>
              <yunzai-dormitory-tree *ngSwitchCase="'dormitoryTree'" [props]="dormitoryTree"
                                  (onSelect)="onDormTreeSelect($event)"></yunzai-dormitory-tree>
              <yunzai-role-tree *ngSwitchCase="'roleTree'" [props]="roleTree"
                             (onSelect)="onRoleTreeSelect($event)"></yunzai-role-tree>
              <yunzai-friend-group *ngSwitchCase="'friendGroup'" [props]="friendGroup"
                                (onSelect)="onFriendSelect($event)"></yunzai-friend-group>
            </nz-col>
          </nz-row>
        </nz-col>
        <nz-col [nzSpan]="18">
          <yunzai-table-user #table [props]="tableUserProps"
                          (onChecked)="onTableUserChecked($event)"></yunzai-table-user>
        </nz-col>
      </nz-row>
    </ng-template>
  `
})
export class YunzaiContactComponent {
  @Input() deptTree?: YunzaiDeptTreeProps;
  @Input() dormitoryTree?: YunzaiDormitoryTreeProps;
  @Input() friendGroup?: YunzaiFriendGroupProps;
  @Input() roleTree?: YunzaiRoleTreeProps;
  @Input() tableUser?: YunzaiTableUserProps;
  @Input() props?: YunzaiContactProps;

  @Output() onSelect: EventEmitter<YunzaiTableUser[]> = new EventEmitter<YunzaiTableUser[]>();
  @Output() onSelectDept: EventEmitter<YunzaiDeptTree[]> = new EventEmitter<YunzaiDeptTree[]>();
  @Output() onSelectRole: EventEmitter<YunzaiRoleTree[]> = new EventEmitter<YunzaiRoleTree[]>();
  @Output() onSelectDormitory: EventEmitter<YunzaiDormitoryTree[]> = new EventEmitter<YunzaiDormitoryTree[]>();
  @Output() onSelectGroup: EventEmitter<YunzaiFriendGroup> = new EventEmitter<YunzaiFriendGroup>();

  @ViewChild('table') table!: YunzaiTableUserComponent;

  state: YunzaiContactState = {
    cursor: 'deptTree'
  };

  get tableUserProps(): YunzaiTableUserProps {
    if (this.tableUser) {
      return this.tableUser;
    }
    return {
      wrap: false,
      page: {
        pageNum: 1,
        pageSize: 20
      },
      userIds:[],
      list: true,
      check: {
        pageCheck: true,
        disable: false,
        data: []
      }
    };
  }

  get disableDeptTree(): boolean {
    return !!this.props?.disableDeptTree;
  }

  get disableRoleTree(): boolean {
    return !!this.props?.disableRoleTree;
  }

  get disableDormitoryTree(): boolean {
    return !!this.props?.disableDormitoryTree;
  }

  get disableFriendGroup(): boolean {
    return !!this.props?.disableFriendGroup;
  }

  get isWarp(): boolean {
    return !!this.props?.wrap;
  }

  constructor() {}

  onDeptSelect(depts: YunzaiDeptTree[]): void {
    this.table.setTableParam({ deptId: depts[0].key });
    this.onSelectDept.emit(depts);
  }

  onRoleTreeSelect(roles: YunzaiRoleTree[]): void {
    this.table.setTableParam({ roleId: roles[0].key });
    this.onSelectRole.emit(roles);
  }

  onDormTreeSelect(dorm: YunzaiDormitoryTree[]): void {
    if (dorm[0].type === 'building') {
      this.table.setTableParam({ buildId: dorm[0].key });
    } else if (dorm[0].type === 'floor') {
      this.table.setTableParam({ buildId: dorm[0].buildPid, floor: dorm[0].key });
    } else if (dorm[0].type === 'room') {
      this.table.setTableParam({ buildId: dorm[0].buildPid, floor: dorm[0].floorPid, roomId: dorm[0].key });
    }
    this.onSelectDormitory.emit(dorm);
  }

  onFriendSelect(group: YunzaiFriendGroup): void {
    this.table.setTableParam({ friendGroupId: group.id });
    this.onSelectGroup.emit(group);
  }

  onTableUserChecked(users: YunzaiTableUser[]): void {
    this.tableUserProps.check!.data = users;
    this.onSelect.emit(users);
  }
}
