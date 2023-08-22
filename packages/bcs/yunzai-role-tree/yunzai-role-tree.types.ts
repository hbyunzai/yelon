
import { SFSchema } from '@yelon/form';

export interface YunzaiRoleTreeState {
  loading: boolean;
  schema: SFSchema;
  data: YunzaiRoleTree[];
  dataBackup: YunzaiRoleTree[];
  expandKeys: string[];
}

export interface YunzaiRoleTreeProps {
  wrap?: boolean;
  expand?: boolean;
  multiple?: boolean;
  roleGroupCode?: string;
  data?: YunzaiRoleTree[];
}

export interface YunzaiRoleTree {
  children: YunzaiRoleTree[];
  code: string;
  key: string;
  leaf: boolean;
  title: string;
  type: string;
}
