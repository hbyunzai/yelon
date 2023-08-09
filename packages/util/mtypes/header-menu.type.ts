export interface YunzaiNavTopic {
  // 扩展项
  attribute: any;
  // 图标
  icon: any;
  // 子菜单
  children: YunzaiNavTopic[];
  // 描述
  intro: string;
  // key
  key: string;
  // 名称
  name: string;
  // 打开方式
  target: string;
  // 是否有权限打开
  auth: boolean;
  // 路径
  url: string;
  // 版本
  version: string;
}
