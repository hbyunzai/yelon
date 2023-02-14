import { YunzaiAuthority } from './authority.type';
import { YunzaiMenu } from './menu.type';
import { YunzaiRole } from './role.type';

export interface YunzaiUser {
  email: string;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  authorities: YunzaiAuthority[];
  avatarId: string;
  credentialsNonExpired: boolean;
  deptId: string;
  deptName: string;
  enabled: boolean;
  id: string;
  menu: YunzaiMenu[];
  realname: string;
  roles: YunzaiRole[];
  userCode: string;
  userId: string;
  userType: number;
  username: string;
}
