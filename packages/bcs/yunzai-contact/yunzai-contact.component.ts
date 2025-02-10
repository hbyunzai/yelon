import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { YunzaiDeptTree, YunzaiDeptTreeModule, YunzaiDeptTreeProps } from '@yelon/bcs/yunzai-dept-tree';
import {
  YunzaiDormitoryTree,
  YunzaiDormitoryTreeModule,
  YunzaiDormitoryTreeProps
} from '@yelon/bcs/yunzai-dormitory-tree';
import { YunzaiFriendGroup, YunzaiFriendGroupModule, YunzaiFriendGroupProps } from '@yelon/bcs/yunzai-friend-group';
import { YunzaiRoleTree, YunzaiRoleTreeModule, YunzaiRoleTreeProps } from '@yelon/bcs/yunzai-role-tree';
import {
  YunzaiTableUser,
  YunzaiTableUserComponent,
  YunzaiTableUserModule,
  YunzaiTableUserProps
} from '@yelon/bcs/yunzai-table-user';
import { I18nPipe } from '@yelon/theme';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzRadioModule } from 'ng-zorro-antd/radio';

import { YunzaiContactProps, YunzaiContactState } from './yunzai-contact.types';

@Component({
  selector: `yunzai-contact`,
  template: `
    @if (isWarp) {
      <nz-card>
        <ng-container [ngTemplateOutlet]="content" />
      </nz-card>
    } @else {
      <ng-container [ngTemplateOutlet]="content" />
    }

    <ng-template #content>
      <nz-row>
        <nz-col [nzSpan]="6">
          <div class="yz-select-contacts-modal-type">
            <nz-radio-group [(ngModel)]="state.cursor">
              @if (!disableDeptTree) {
                <label nz-radio-button nzValue="deptTree">{{ 'deptTree' | i18n }}</label>
              }
              @if (!disableRoleTree) {
                <label nz-radio-button nzValue="roleTree">{{ 'roleTree' | i18n }}</label>
              }
              @if (!disableDormitoryTree) {
                <label nz-radio-button nzValue="dormitoryTree">{{ 'dormitoryTree' | i18n }}</label>
              }
              @if (!disableFriendGroup) {
                <label nz-radio-button nzValue="friendGroup">{{ 'friendGroup' | i18n }}</label>
              }
            </nz-radio-group>
          </div>

          <nz-row class="yz-select-contacts-modal-tree">
            <nz-col [nzSpan]="24">
              @switch (state.cursor) {
                @case ('deptTree') {
                  <yunzai-dept-tree [props]="deptTree" (onSelect)="onDeptSelect($event)" />
                }
                @case ('dormitoryTree') {
                  <yunzai-dormitory-tree [props]="dormitoryTree" (onSelect)="onDormTreeSelect($event)" />
                }
                @case ('roleTree') {
                  <yunzai-role-tree [props]="roleTree" (onSelect)="onRoleTreeSelect($event)" />
                }
                @case ('friendGroup') {
                  <yunzai-friend-group [props]="friendGroup" (onSelect)="onFriendSelect($event)" />
                }
              }
            </nz-col>
          </nz-row>
        </nz-col>
        <nz-col [nzSpan]="18">
          <yunzai-table-user #table [props]="tableUserProps" (onChecked)="onTableUserChecked($event)" />
        </nz-col>
      </nz-row>
    </ng-template>
  `,
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    I18nPipe,
    NzRadioModule,
    NzGridModule,
    NzCardModule,
    YunzaiRoleTreeModule,
    YunzaiDeptTreeModule,
    YunzaiDormitoryTreeModule,
    YunzaiFriendGroupModule,
    YunzaiTableUserModule
  ]
})
export class YunzaiContactComponent {
  @Input() deptTree?: YunzaiDeptTreeProps;
  @Input() dormitoryTree?: YunzaiDormitoryTreeProps;
  @Input() friendGroup?: YunzaiFriendGroupProps;
  @Input() roleTree?: YunzaiRoleTreeProps;
  @Input() tableUser?: YunzaiTableUserProps;
  @Input() props?: YunzaiContactProps;

  @Output() readonly onSelect: EventEmitter<YunzaiTableUser[]> = new EventEmitter<YunzaiTableUser[]>();
  @Output() readonly onSelectDept: EventEmitter<YunzaiDeptTree[]> = new EventEmitter<YunzaiDeptTree[]>();
  @Output() readonly onSelectRole: EventEmitter<YunzaiRoleTree[]> = new EventEmitter<YunzaiRoleTree[]>();
  @Output() readonly onSelectDormitory: EventEmitter<YunzaiDormitoryTree[]> = new EventEmitter<YunzaiDormitoryTree[]>();
  @Output() readonly onSelectGroup: EventEmitter<YunzaiFriendGroup> = new EventEmitter<YunzaiFriendGroup>();

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
      userIds: [],
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
