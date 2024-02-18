import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, Subject, takeUntil } from 'rxjs';

import { STColumn, STComponent, STData, STModule, STRequestOptions } from '@yelon/abc/st';
import { SFComponent, SFSchema, SFValue, YelonFormModule } from '@yelon/form';
import { YunzaiThemeModule } from '@yelon/theme';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { YunzaiTableUserService } from './yunzai-table-user.service';
import {
  YunzaiTableUser,
  YunzaiTableUserParam,
  YunzaiTableUserProps,
  YunzaiTableUserRole,
  YunzaiTableUserState
} from './yunzai-table-user.types';

@Component({
  selector: `yunzai-table-user`,
  template: `
    <nz-card *ngIf="wrapped">
      <ng-container [ngTemplateOutlet]="tableTpl" />
    </nz-card>

    <ng-container *ngIf="!wrapped" [ngTemplateOutlet]="tableTpl" />

    <ng-template #tableTpl>
      <div class="yz-select-contacts-modal-right" style="width:67%">
        <ng-container [ngTemplateOutlet]="form" />
        <st #st [scroll]="scroll" [size]="'small'" [bordered]="true">
          <ng-template st-row="checkbox_all" let-item type="title">
            <label
              *ngIf="!disableCheck"
              nz-checkbox
              (change)="onCheckedAll($event)"
              [nzChecked]="isAllChecked()"
            ></label>
          </ng-template>
          <ng-template st-row="checkbox" let-item let-index="index">
            <label
              *ngIf="!disableCheck"
              nz-checkbox
              (change)="onCheckedItem(item)"
              [nzChecked]="isChecked(item)"
            ></label>
          </ng-template>
          <ng-template st-row="rolesName" let-item let-index="index">{{ renderRoles(item.roles) }}</ng-template>
        </st>
      </div>
      <div class="yz-select-contacts-modal-right" style="width:33%">
        <ng-container *ngIf="list" [ngTemplateOutlet]="listTpl" />
      </div>
    </ng-template>

    <ng-template #listTpl>
      <div class="right-list-title">
        <h3>{{ 'table-user.checked' | i18n }}</h3>
        <div *ngIf="hasCheck">
          <a style="cursor: default;">{{ checked.length }} </a>
          <nz-divider nzType="vertical" />
          <a style="cursor: pointer" href="javascript:;" (click)="unCheckAll()">{{ 'table-user.clear' | i18n }}</a>
        </div>
      </div>

      <div class="yz-selected-contacts">
        <nz-empty *ngIf="!hasCheck" style="margin: 90px auto;" />
        <ul nz-menu nzMode="inline" class="yz-role-contacts">
          <li nz-menu-item *ngFor="let item of checked; let i = index" class="people-item">
            <div class="people-item-right">{{ item?.realName || '--' }}</div>
            <span class="del-btn" (click)="unCheck(item)">
              <i nz-icon nzType="close" nzTheme="outline"></i>
            </span>
          </li>
        </ul>
      </div>
    </ng-template>

    <ng-template #form>
      <sf layout="inline" #sf [schema]="schema" button="none" />
      <button nz-button nzType="primary" (click)="onReset()">{{ 'reset' | i18n }}</button>
    </ng-template>
  `,
  standalone: true,
  imports: [
    CommonModule,
    YelonFormModule,
    NzEmptyModule,
    NzDividerModule,
    NzMenuModule,
    NzIconModule,
    NzButtonModule,
    NzCheckboxModule,
    STModule,
    YunzaiThemeModule,
    NzCardModule
  ]
})
export class YunzaiTableUserComponent implements OnInit, AfterViewInit {
  @ViewChild('st') st!: STComponent;
  @ViewChild('sf') sf!: SFComponent;
  @Input() props?: YunzaiTableUserProps;
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() readonly onChecked: EventEmitter<YunzaiTableUser[]> = new EventEmitter<YunzaiTableUser[]>();
  private $destroy = new Subject();

  state: YunzaiTableUserState = {
    columns: [
      { index: 'checkbox', render: 'checkbox', renderTitle: 'checkbox_all', width: 20, fixed: 'left' },
      { index: 'no', type: 'no', title: { i18n: 'table-user.no' }, width: 50 },
      { index: 'realName', title: { i18n: 'table-user.realName' }, width: 100 },
      { index: 'userCode', title: { i18n: 'table-user.usercode' }, width: 100 },
      { index: 'dept.deptName', title: { i18n: 'table-user.deptName' }, width: 100 },
      { index: 'rolesName', render: 'rolesName', title: { i18n: 'table-user.roleName' }, width: 100 },
      { index: 'idCard', title: { i18n: 'table-user.idcard' }, width: 100 }
    ],
    data: [],
    dataBackup: [],
    page: {
      pageNum: 1,
      pageSize: 30,
      pageParam: {}
    },
    schema: {
      properties: {
        realName: {
          type: 'string',
          ui: {
            widget: 'string',
            i18n: 'realName'
          }
        },
        userCode: {
          type: 'string',
          ui: {
            i18n: 'userCode'
          }
        },
        idCard: {
          type: 'string',
          ui: {
            i18n: 'idCard'
          }
        }
      }
    },
    check: {
      data: []
    }
  };

  get wrapped(): boolean {
    return !!this.props?.wrap;
  }

  get schema(): SFSchema {
    return this.state.schema;
  }

  get disableCheck(): boolean {
    return !!this.props?.check?.disable;
  }

  get pageCheck(): boolean {
    return !!this.props?.check?.pageCheck;
  }

  get hasCheck(): boolean {
    return this.state.check.data.length > 0;
  }

  get list(): boolean {
    return !!this.props?.list;
  }

  get checked(): YunzaiTableUser[] {
    return this.state.check.data as YunzaiTableUser[];
  }

  get scroll(): {
    x?: string | null;
    y?: string | null;
  } {
    if (this.props && this.props.scroll) return this.props.scroll;
    return { x: '1200px', y: '600px' };
  }

  get inSearch(): boolean {
    const value = this.sf.value;
    return Object.keys(value).length > 0;
  }

  get userIds(): string[] {
    return this.props?.userIds || [];
  }

  constructor(private service: YunzaiTableUserService) {}

  ngOnInit(): void {
    this.setupPropsToState();
  }

  ngAfterViewInit(): void {
    this.setupTable();
    this.hookSearch();
  }

  setupPropsToState(): void {
    if (!this.props) return;
    this.setupPropsData();
    this.setupPropsPage();
    this.setupPropsColumns();
    this.setupPropsFilteredColumns();
    this.setupPropsCustomColumns();
    this.setupPropsChecked();
  }

  setupTable(): void {
    if (!this.st) return;
    this.setupTableData();
    this.setupTablePage();
    this.setupTableColumn();
    this.setupTableRequest();
    this.setupTableResponse();
    this.onQuery();
  }

  setupPropsData(): void {
    if (!this.props) return;
    if (this.props.data && this.props.data.length > 0) {
      this.state.data = this.props.data;
      this.state.dataBackup = this.props.data;
    } else {
      this.state.data = '/auth/baseUser/queryListForPage';
    }
  }

  setupPropsPage(): void {
    if (!this.props || !this.props.page) return;
    this.state.page = JSON.parse(JSON.stringify(this.props.page));
  }

  setupPropsColumns(): void {
    if (!this.props || !this.props.additionalColumns) return;
    let columns: STColumn[] = [];
    if (this.props && this.props.additionalColumns) {
      columns = columns.concat(this.props.additionalColumns);
    }
    columns = columns.concat(this.state.columns);
    this.state.columns = columns;
  }

  setupPropsFilteredColumns(): void {
    if (!this.props || !this.props.filteredColumns || this.props.filteredColumns.length === 0) return;
    this.state.columns = this.state.columns.filter(col => !this.props?.filteredColumns?.includes(col.index as string));
  }

  setupPropsCustomColumns(): void {
    if (!this.props || !this.props.customColumns || this.props.customColumns.length === 0) return;
    const temp: STColumn[] = [];
    this.state.columns.forEach(stateColumn => {
      this.props?.customColumns?.forEach((customColumn: STColumn) => {
        if (stateColumn.index === customColumn.index) {
          temp.push(customColumn);
        } else {
          temp.push(stateColumn);
        }
      });
    });
    this.state.columns = [...temp];
  }

  setupPropsChecked(): void {
    if (!this.props || !this.props.check || !this.props.check.data) return;
    this.state.check.data = this.props.check.data;
    if (this.userIds.length > 0) {
      this.service.usersByIds(this.userIds).subscribe(users => {
        this.state.check.data = this.state.check.data.concat(users);
        this.onChecked.emit(this.state.check.data as NzSafeAny);
      });
    } else {
      this.onChecked.emit(this.state.check.data as NzSafeAny);
    }
  }

  setupTableData(): void {
    if (!this.st) return;
    this.st.data = this.state.data;
  }

  setupTablePage(): void {
    if (!this.st) return;
    this.st.pi = this.state.page.pageNum;
    this.st.ps = this.state.page.pageSize;
  }

  setupTableColumn(): void {
    if (!this.st) return;
    this.st.resetColumns({ columns: this.state.columns });
  }

  setupTableRequest(): void {
    if (!this.st) return;
    this.st.req = {
      allInBody: true,
      method: 'POST',
      reName: {
        pi: 'pageNum',
        ps: 'pageSize'
      },
      process: (requestOptions: STRequestOptions) => {
        requestOptions.body.pageParam = this.state.page.pageParam;
        return requestOptions;
      }
    };
  }

  setupTableResponse(): void {
    if (!this.st) return;
    this.st.res = {
      reName: {
        list: 'list',
        total: 'total'
      },
      process: (data: STData[]) => {
        if (!this.pageCheck) this.resetChecked();
        return data;
      }
    };
  }

  resetChecked(): void {
    if (!this.props || !this.props.check || !this.props.check.data) return;
    this.state.check.data = this.props.check.data.map(id => {
      return { userId: id };
    });
  }

  onCheckedItem(data: YunzaiTableUser): void {
    // remove
    if (this.isChecked(data)) {
      this.state.check.data = this.state.check.data.filter(u => u['userId'] !== data.userId);
    }
    // add
    else if (!this.isChecked(data)) {
      this.state.check.data = this.state.check.data.concat([data]);
    }
    this.onChecked.emit(this.state.check.data as YunzaiTableUser[]);
  }

  onCheckedAll(e: NzSafeAny): void {
    const checkedAll = e.target.labels[0].innerHTML.includes('checked');
    if (checkedAll) {
      const data = this.st._data.filter(
        std =>
          !this.state.check.data.find(scd => {
            return std['userId'] === scd['userId'];
          })
      );
      this.state.check.data = this.state.check.data.concat(data);
    } else {
      this.state.check.data = this.state.check.data.filter(s => {
        return !this.st._data.find(std => std['userId'] === s['userId']);
      });
    }
    this.onChecked.emit(this.state.check.data as YunzaiTableUser[]);
  }

  isChecked(data: STData): boolean {
    return !!this.state.check.data.find(u => u['userId'] === data['userId']);
  }

  isAllChecked(): boolean {
    if (this.st._data.length > 0) {
      return this.isArraySubset(this.st._data, this.state.check.data);
    }
    return false;
  }

  isArraySubset(subset: NzSafeAny[], superset: NzSafeAny[]): boolean {
    return subset.every(item => superset.some(superItem => superItem.userId === item.userId));
  }

  renderRoles(roles: YunzaiTableUserRole[]): string {
    return roles.map(r => r.roleName).join(',');
  }

  unCheck(user: YunzaiTableUser): void {
    this.state.check.data = this.state.check.data.filter(d => d['userId'] != user.userId);
    this.onChecked.emit(this.state.check.data as YunzaiTableUser[]);
  }

  unCheckAll(): void {
    this.state.check.data = [];
    this.onChecked.emit(this.state.check.data as YunzaiTableUser[]);
  }

  hookSearch(): void {
    this.sf.formValueChange.pipe(takeUntil(this.$destroy), debounceTime(1000)).subscribe(event => {
      const { value } = event;
      this.onSearch(value);
    });
  }

  onSearch(value: SFValue = {}): void {
    if (!this.inSearch) return;
    if (Array.isArray(this.state.data) && Array.isArray(this.state.dataBackup)) {
      let tempData = this.state.dataBackup;
      if (value['realName']) tempData = tempData.filter(d => d.realName.includes(value['realName']));
      if (value['idCard']) tempData = this.state.dataBackup.filter(d => (d.idCard = value['idCard']));
      if (value['userCode']) tempData = this.state.dataBackup.filter(d => (d.userCode = value['userCode']));
      this.st.data = tempData;
      this.st.reload();
    }
    if (typeof this.state.data === 'string') {
      this.state.page.pageParam = { ...this.state.page.pageParam, ...value };
      this.onQuery();
    }
  }

  onReset(): void {
    this.sf.reset();
    this.state.page.pageParam = {};
    this.onQuery();
  }

  public onQuery(): void {
    if (!this.st) return;
    if (Array.isArray(this.state.data) && Array.isArray(this.state.dataBackup)) {
      this.st.data = this.state.dataBackup;
    }
    this.st.reload();
  }

  public setTableParam(param: YunzaiTableUserParam): void {
    if (this.inSearch) {
      this.state.page.pageParam = { ...param, ...this.sf.value };
      this.onSearch(this.sf.value);
    }
    if (!this.inSearch) {
      this.state.page.pageParam = param;
      this.setupTable();
    }
  }
}
