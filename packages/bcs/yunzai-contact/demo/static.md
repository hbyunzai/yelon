---
order: 0
title:
  zh-CN: 组件方式
  en-US: use component
---

 使用组件方式

```ts
import {Component} from "@angular/core";
import {YunzaiDeptTreeProps,YunzaiDeptTree} from "@yelon/bcs/yunzai-dept-tree";
import {YunzaiDormitoryTreeProps,YunzaiDormitoryTree} from "@yelon/bcs/yunzai-dormitory-tree";
import {YunzaiFriendGroupProps,YunzaiFriendGroup} from "@yelon/bcs/yunzai-friend-group";
import {YunzaiRoleTreeProps,YunzaiRoleTree} from "@yelon/bcs/yunzai-role-tree";
import {YunzaiTableUserProps,YunzaiTableUser} from "@yelon/bcs/yunzai-table-user";
import {YunzaiContactProps} from "@yelon/bcs/yunzai-contact";
import {YunzaiContactModule} from "@yelon/bcs/yunzai-contact";


@Component({
    selector: `app-demo`,
    template: `
    <yunzai-contact
        [deptTree]="deptTree"
        [dormitoryTree]="dormitoryTree"
        [friendGroup]="friendGroup"
        [roleTree]="roleTree"
        [tableUser]="tableUser"
        [props]="props"
        (onSelect)="onSelect($event)"
        (onSelectDept)="onSelectDept($event)"
        (onSelectRole)="onSelectRole($event)"
        (onSelectDormitory)="onSelectDormitory($event)"
        (onSelectGroup)="onSelectGroup($event)"
    >
    </yunzai-contact>
    `,
  standalone:true,
  imports:[YunzaiContactModule]
})
export class DemoComponent {
    deptTree: YunzaiDeptTreeProps = {
        multiple: true,
        wrap: true,
        expand: true,
        data: [
            {
                title: "一级部门", key: '1', value: '1', icon: '',
                children: [
                    {title: "二级部门", key: '21', value: '21', icon: '', children: []},
                    {title: "二级部门", key: '22', value: '22', icon: '', children: []},
                    {title: "二级部门", key: '23', value: '23', icon: '', children: []},
                    {
                        title: "二级部门", key: '24', value: '24', icon: '', children: [
                            {title: "三级部门", key: '31', value: '31', icon: '', children: []},
                        ]
                    },
                ]
            }
        ]
    }
    dormitoryTree: YunzaiDormitoryTreeProps = {
        multiple: true,
        wrap: true,
        expand: true,
        data: [
            {
                buildPid: "",
                expanded: true,
                floorPid: "",
                isExpanded: true,
                isLeaf: false,
                key: '1',
                selected: false,
                title: "1号楼",
                type: "0",
                children: [
                    {
                        buildPid: "1",
                        expanded: true,
                        floorPid: "",
                        isExpanded: true,
                        isLeaf: false,
                        key: '11',
                        selected: false,
                        title: "1号楼1单元",
                        type: "1",
                        children: [
                            {
                                buildPid: "1",
                                expanded: true,
                                floorPid: "11",
                                isExpanded: true,
                                isLeaf: true,
                                key: '111',
                                selected: false,
                                title: "1号楼1单元101",
                                type: "2",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]
    }
    friendGroup: YunzaiFriendGroupProps = {
        wrap: true,
        data: [{
            id: "1",
            name: "好友一组",
            userAccount: "account",
            data: [{
                userId: "1",
                account: "11",
                realName: "测试分页",
                userType: 1,
                userCode: "242424234",
                sex: 0,
                email: null,
                mobile: "******",
                officePhone: null,
                readNumber: null,
                status: 1,
                displayIndex: 0,
                idCard: "******",
                lastDate: "2023-07-06T09:02:20.699+00:00",
                operUser: null,
                lastLoginTime: "2023-07-12T06:31:47.000+00:00",
                remark: null,
                errorCount: 0,
                question: null,
                answer: null,
                theme: null,
                roles: []
            }] as any
        }]
    }
    roleTree: YunzaiRoleTreeProps = {
        multiple: true,
        wrap: true,
        expand: true,
        data: [
            {
                title: "角色组", key: '1', code: "1", leaf: false, type: 'dept',
                children: [
                    {title: "角色1", key: '21', code: "21", leaf: true, type: '', children: []},
                ]
            }
        ]
    }
    tableUser: YunzaiTableUserProps = {
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
            data: [],
        }
    }
    props: YunzaiContactProps = {
        disableDeptTree: false,
        disableRoleTree: false,
        disableDormitoryTree: false,
        disableFriendGroup: false,
        wrap: true
    }

    onSelect(user: YunzaiTableUser[]): void {
        console.log(user)
    }

    onSelectDept(dept: YunzaiDeptTree[]): void {
        console.log(dept)
    }

    onSelectRole(role: YunzaiRoleTree[]): void {
        console.log(role)
    }

    onSelectDormitory(dorm: YunzaiDormitoryTree[]): void {
        console.log(dorm)
    }

    onSelectGroup(group: YunzaiFriendGroup): void {
        console.log(group)
    }
}
```


