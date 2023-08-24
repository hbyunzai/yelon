import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';

import { YUNZAI_DEPT_TYPES } from '@yelon/bcs/yunzai-dept-tree';
import { YunzaiTableUser } from '@yelon/bcs/yunzai-table-user';
import { NzModalService } from 'ng-zorro-antd/modal';

import { YunzaiContactComponent } from './yunzai-contact.component';
import { YunzaiContactParam } from './yunzai-contact.types';

@Injectable({
  providedIn: 'root'
})
export class YunzaiContactService {
  constructor(private modal: NzModalService) {}

  create(
    nzOnOk: (users: YunzaiTableUser[]) => Observable<boolean>,
    param: YunzaiContactParam = {
      props: {
        wrap: false,
        disableFriendGroup: false,
        disableDormitoryTree: false,
        disableDeptTree: false,
        disableRoleTree: false
      },
      deptTree: {
        multiple: false,
        wrap: false,
        expand: true,
        class: true,
        historyClass: true,
        grade: true,
        types: [YUNZAI_DEPT_TYPES.DEPT, YUNZAI_DEPT_TYPES.CLASS]
      },
      dormitoryTree: {
        multiple: false,
        wrap: false,
        expand: true
      },
      roleTree: {
        wrap: false,
        expand: true,
        multiple: false
      },
      friendGroup: {
        wrap: false
      },
      tableUser: {
        wrap: false,
        filteredColumns: [],
        page: {
          pageNum: 1,
          pageSize: 20,
          pageParam: {}
        },
        customColumns: [],
        list: true,
        check: {
          pageCheck: true,
          disable: false,
          data: []
        }
      }
    }
  ): void {
    let value: YunzaiTableUser[] = [];
    const contactComponent = this.modal
      .create<YunzaiContactComponent>({
        nzTitle: '人员选择',
        nzContent: YunzaiContactComponent,
        nzClassName: 'yz-select-contacts-modal',
        nzWidth: 1200,
        nzData: param,
        nzOnOk: () => lastValueFrom(nzOnOk(value))
      })
      .getContentComponent();
    contactComponent.deptTree = param.deptTree;
    contactComponent.props = param.props;
    contactComponent.roleTree = param.roleTree;
    contactComponent.dormitoryTree = param.dormitoryTree;
    contactComponent.friendGroup = param.friendGroup;
    contactComponent.tableUser = param.tableUser;
    contactComponent.onSelect.subscribe(users => (value = users));
  }
}
