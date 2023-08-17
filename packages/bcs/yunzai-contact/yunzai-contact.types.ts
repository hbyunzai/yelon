import { YunzaiDeptTreeProps } from '@yelon/bcs/yunzai-dept-tree';
import { YunzaiDormitoryTreeProps } from '@yelon/bcs/yunzai-dormitory-tree';
import { YunzaiFriendGroupProps } from '@yelon/bcs/yunzai-friend-group';
import { YunzaiRoleTreeProps } from '@yelon/bcs/yunzai-role-tree';
import { YunzaiTableUserProps } from '@yelon/bcs/yunzai-table-user';

export interface YunzaiContactProps {
  disableDeptTree?: boolean;
  disableRoleTree?: boolean;
  disableDormitoryTree?: boolean;
  disableFriendGroup?: boolean;
  wrap?: boolean;
}

export interface YunzaiContactState {
  cursor: 'deptTree' | 'dormitoryTree' | 'roleTree' | 'friendGroup';
}

export interface YunzaiContactParam {
  props?: YunzaiContactProps;
  friendGroup?: YunzaiFriendGroupProps;
  tableUser?: YunzaiTableUserProps;
  roleTree?: YunzaiRoleTreeProps;
  dormitoryTree?: YunzaiDormitoryTreeProps;
  deptTree?: YunzaiDeptTreeProps;
}
