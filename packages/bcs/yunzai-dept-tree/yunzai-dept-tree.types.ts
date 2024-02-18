import { SFSchema } from '@yelon/form';

export interface YunzaiDeptTree {
  children: YunzaiDeptTree[];
  icon: string;
  key: string;
  title: string;
  value: string;
}

export interface YunzaiDeptTreeProps {
  multiple?: boolean;
  // has nzcard
  wrap?: boolean;
  // expand
  expand?: boolean;
  // deptTypes = []
  types?: YUNZAI_DEPT_TYPES[];
  // grade
  grade?: boolean;
  gradeId?: string;
  // includeClass
  class?: boolean;
  // includeHistoryClass
  historyClass?: boolean;
  data?: YunzaiDeptTree[];
}

export interface YunzaiDeptTreeState {
  loading: boolean;
  schema: SFSchema;
  data: YunzaiDeptTree[];
  dataBackup: YunzaiDeptTree[];
  expandKeys: string[];
}

export enum YUNZAI_DEPT_TYPES {
  DEPT = 2,
  CLASS = 'class'
}
