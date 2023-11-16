import { LayoutBasicAside, NavType, YunzaiNavTopic, YunzaiProjectInfo, YunzaiUser } from '@yelon/util/mtypes';

export const YZ_USER_KEY = '_yz_user';
export const YZ_PROJECT_INFO_KEY = '_yz_project_info';
export const YZ_CURRENT_KEY = '_yz_current';
export const YZ_HEADER_KEY = '_yz_header';
export const YZ_HEADER_TYPE_KEY = '_yz_header_type';
export const YZ_DEFAULT_ROUTE_KEY = '_yz_default_route';
export const YZ_TENANT_KEY = '_yz_tenant';
// export const YZ_LANGS_KEY = '_yz_langs';
// export const YZ_LANG_KEY = '_yz_lang';

function get<T>(key: string): T | null {
  if (key === YZ_HEADER_TYPE_KEY) {
    return localStorage.getItem(key) as any;
  }
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}

function set<T>(key: string, data: T): void {
  if (key === YZ_HEADER_TYPE_KEY) {
    localStorage.setItem(YZ_HEADER_TYPE_KEY, data as string);
    return;
  }
  localStorage.setItem(key, JSON.stringify(data));
}

type returnSet<T> = (data: T) => void;
type returnGet<T> = () => T | null;

export function useLocalStorageUser(): [returnSet<YunzaiUser>, returnGet<YunzaiUser>] {
  const setFn: returnSet<YunzaiUser> = user => set(YZ_USER_KEY, user);
  const getFn: returnGet<YunzaiUser> = () => get<YunzaiUser>(YZ_USER_KEY);
  return [setFn, getFn];
}

export function useLocalStorageProjectInfo(): [returnSet<YunzaiProjectInfo>, returnGet<YunzaiProjectInfo>] {
  const setFn: returnSet<YunzaiProjectInfo> = data => set(YZ_PROJECT_INFO_KEY, data);
  const getFn: returnGet<YunzaiProjectInfo> = () => get<YunzaiProjectInfo>(YZ_PROJECT_INFO_KEY);
  return [setFn, getFn];
}

export function useLocalStorageCurrent(): [returnSet<LayoutBasicAside>, returnGet<LayoutBasicAside>] {
  const setFn: returnSet<LayoutBasicAside> = data => set(YZ_CURRENT_KEY, data);
  const getFn: returnGet<LayoutBasicAside> = () => get<LayoutBasicAside>(YZ_CURRENT_KEY);
  return [setFn, getFn];
}

export function useLocalStorageHeaderType(): [returnSet<NavType>, returnGet<NavType>] {
  const setFn: returnSet<NavType> = data => set(YZ_HEADER_TYPE_KEY, data);
  const getFn: returnGet<NavType> = () => get<NavType>(YZ_HEADER_TYPE_KEY);
  return [setFn, getFn];
}

export function useLocalStorageHeader(): [returnSet<YunzaiNavTopic[]>, returnGet<YunzaiNavTopic[]>] {
  const setFn: returnSet<YunzaiNavTopic[]> = data => set(YZ_HEADER_KEY, data);
  const getFn: returnGet<YunzaiNavTopic[]> = () => get<YunzaiNavTopic[]>(YZ_HEADER_KEY);
  return [setFn, getFn];
}

export function useLocalStorageDefaultRoute(): [returnSet<string>, returnGet<string>] {
  const setFn: returnSet<string> = data => set(YZ_DEFAULT_ROUTE_KEY, data);
  const getFn: returnGet<string> = () => get<string>(YZ_DEFAULT_ROUTE_KEY);
  return [setFn, getFn];
}

export function useLocalStorageTenant(): [returnSet<string>, returnGet<string>] {
  const setFn: returnSet<string> = data => set(YZ_TENANT_KEY, data);
  const getFn: returnGet<string> = () => get<string>(YZ_TENANT_KEY);
  return [setFn, getFn];
}
