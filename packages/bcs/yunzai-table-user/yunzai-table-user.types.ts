import {STColumn, STData} from '@yelon/abc/st';
import {SFSchema} from '@yelon/form';

export interface YunzaiTableUser {
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
  roles: YunzaiTableUserRole[];
  roleIdList: string[] | null;
  dept: YunzaiTableUserDept;
  deptId: string;
  isDelete: number;
  avatarId: string | null;
  bgimgId: string | null;
  profile: string;
  passwordStrength: string | null;
  lastLoginIp: string;
}

export interface YunzaiTableUserRole {
  createdDate: string;
  id: string;
  roleName: string;
  roleValue: string;
  status: number;
  roleDesc: string | null;
  displayIndex: number | null;
  landingPageUrl: string | null;
  roleGroups: any; // Change this type based on the actual structure if available
  thisDepartment: boolean;
  onlyOne: boolean;
  onlyDeptOne: boolean;
  systemFlag: number | null;
}

export interface YunzaiTableUserDept {
  createdDate: string;
  deptId: string;
  deptName: string;
  deptType: string;
  deptComment: string | null;
  leaf: any; // Change this type based on the actual structure if available
  displayIndex: number;
  deptCode: string;
  status: number;
  deptLevel: any; // Change this type based on the actual structure if available
  children: YunzaiTableUserDept[];
  pid: string | null;
  expand: boolean;
}

export interface YunzaiTableUserParam {
  buildId?: string;
  deptId?: string;
  floor?: string;
  friendGroupId?: string;
  idCard?: string;
  realName?: string;
  roleId?: string;
  roomId?: string;
  userCode?: string;
  userTypes?: number;
}

export interface YunzaiTableUserProps {
  wrap?: boolean;
  userIds?: string[];
  data?: YunzaiTableUser[];
  filteredColumns?: string[];
  customColumns?: STColumn[];
  additionalColumns?: STColumn[];
  page?: any;
  list?: boolean;
  scroll?: {
    x?: string | null;
    y?: string | null;
  };
  check?: {
    disable?: boolean;
    data?: YunzaiTableUser[];
    pageCheck?: boolean;
  };
}

export interface YunzaiTableUserState {
  data: YunzaiTableUser[] | string;
  dataBackup: YunzaiTableUser[] | string;
  columns: STColumn[];
  page: any;
  schema: SFSchema;
  check: {
    data: STData[];
  };
}
