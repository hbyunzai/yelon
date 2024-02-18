import { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface TableUser {
  userId: string;
  account: string;
  realName: string;
  userType: number;
  userCode: string;
  sex: number;
  email: string | null;
  mobile: string;
  officePhone: string | null;
  readNumber: number | null;
  status: number;
  displayIndex: number;
  idCard: string;
  lastDate: string;
  operUser: string | null;
  lastLoginTime: string;
  remark: string | null;
  errorCount: number;
  question: string | null;
  answer: string | null;
  theme: string | null;
  roles: TableUserRole[];
  roleIdList: string[] | null;
  dept: TableUserDept;
  deptId: string;
  isDelete: number;
  avatarId: string | null;
  bgimgId: string | null;
  profile: string;
  passwordStrength: string | null;
  lastLoginIp: string;
}

export interface TableUserRole {
  createdDate: string;
  id: string;
  roleName: string;
  roleValue: string;
  status: number;
  roleDesc: string | null;
  displayIndex: number | null;
  landingPageUrl: string | null;
  // @ts-ignore no-explicit-NzSafeAny
  roleGroups: NzSafeAny;
  thisDepartment: boolean;
  onlyOne: boolean;
  onlyDeptOne: boolean;
  systemFlag: number | null;
}

export interface TableUserDept {
  createdDate: string;
  deptId: string;
  deptName: string;
  deptType: string;
  deptComment: string | null;
  leaf: NzSafeAny; // Change this type based on the actual structure if available
  displayIndex: number;
  deptCode: string;
  status: number;
  deptLevel: NzSafeAny; // Change this type based on the actual structure if available
  children: TableUserDept[];
  pid: string | null;
  expand: boolean;
}
