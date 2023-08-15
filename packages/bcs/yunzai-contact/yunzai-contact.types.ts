import {YunzaiFriendGroupProps} from "@yelon/bcs/yunzai-friend-group";
import {YunzaiTableUserProps} from "@yelon/bcs/yunzai-table-user";
import {YunzaiRoleTreeProps} from "@yelon/bcs/yunzai-role-tree";
import {YunzaiDormitoryTreeProps} from "@yelon/bcs/yunzai-dormitory-tree";
import {YunzaiDeptTreeProps} from "@yelon/bcs/yunzai-dept-tree";

export interface YunzaiContactProps {
  disableDeptTree?: boolean
  disableRoleTree?: boolean
  disableDormitoryTree?: boolean
  disableFriendGroup?: boolean
  wrap?: boolean
}

export interface YunzaiContactState {
  cursor: "deptTree" | "dormitoryTree" | "roleTree" | "friendGroup"
}


export type YunzaiContactParam = {
  props?: YunzaiContactProps
  friendGroup?: YunzaiFriendGroupProps
  tableUser?: YunzaiTableUserProps
  roleTree?: YunzaiRoleTreeProps
  dormitoryTree?: YunzaiDormitoryTreeProps
  deptTree?: YunzaiDeptTreeProps
}
