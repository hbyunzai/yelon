
import { SFSchema } from '@yelon/form';

export enum YunzaiDormitoryTreeType {
  BUILDING = 0,
  BUILDING_FLOOR = 1,
  BUILDING_FLOORS_ROOMS = 2
}

export interface YunzaiDormitoryTreeParam {
  isPower?: boolean;
  userId?: string;
  treeType: YunzaiDormitoryTreeType;
}

export interface YunzaiDormitoryTree {
  buildPid: string;
  children: YunzaiDormitoryTree[];
  expanded: boolean;
  floorPid: string;
  isExpanded: boolean;
  isLeaf: boolean;
  key: string;
  selected: boolean;
  title: string;
  type: string;
}

export interface YunzaiDormitoryTreeState {
  loading: boolean;
  schema: SFSchema;
  data: YunzaiDormitoryTree[];
  dataBackup: YunzaiDormitoryTree[];
  expandKeys: string[];
}

export interface YunzaiDormitoryTreeProps {
  wrap?: boolean;
  expand?: boolean;
  multiple?: boolean;
  param?: YunzaiDormitoryTreeParam;
  data?: YunzaiDormitoryTree[];
}
