import {YunzaiProjectInfo, YunzaiUser} from "@yelon/cache";
import {LayoutBasicAside, NavType} from "@yelon/bis/layout/layout-basic";
import {YunzaiI18NType} from "@yelon/theme";

export const YZ_USER_KEY = '_yz_user';
export const YZ_PROJECT_INFO_KEY = '_yz_project_info';
export const YZ_CURRENT_KEY = '_yz_current';
export const YZ_HEADER_TYPE_KEY = '_yz_header_type';
export const YZ_DEFAULT_ROUTE_KEY = '_yz_default_route';
export const YZ_TENANT_KEY = '_yz_tenant';
export const YZ_LANGS_KEY = '_yz_langs';
export const YZ_LANG_KEY = '_yz_lang'

function get<T>(key: string): T | null {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key))
  } else {
    return null
  }
}

function set<T>(key: string, data: T): void {
  localStorage.setItem(YZ_USER_KEY, JSON.stringify(data))
}

type returnSet<T> = (data: T) => void
type returnGet<T> = () => T | null

export function useLocalStorageUser(): [returnSet<YunzaiUser>, returnGet<YunzaiUser>] {
  const a = (user: YunzaiUser) => set(YZ_USER_KEY, user)
  const b = (): YunzaiUser | null => get<YunzaiUser>(YZ_USER_KEY)
  return [a, b]
}

export function useLocalStorageProjectInfo(): [returnSet<YunzaiProjectInfo>, returnGet<YunzaiProjectInfo>] {
  const a = (data: YunzaiProjectInfo) => set(YZ_PROJECT_INFO_KEY, data)
  const b = (): YunzaiProjectInfo | null => get(YZ_PROJECT_INFO_KEY)
  return [a, b]
}

export function useLocalStorageCurrent(): [returnSet<LayoutBasicAside>, returnGet<LayoutBasicAside>] {
  const a = (data: LayoutBasicAside) => set(YZ_CURRENT_KEY, data)
  const b = (): LayoutBasicAside | null => get(YZ_CURRENT_KEY)
  return [a, b]
}


export function useLocalStorageHeaderType(): [returnSet<NavType>, returnGet<NavType>] {
  const a = (data: NavType) => set(YZ_HEADER_TYPE_KEY, data)
  const b = (): NavType | null => get(YZ_HEADER_TYPE_KEY)
  return [a, b]
}

export function useLocalStorageDefaultRoute(): [returnSet<string>, returnGet<string>] {
  const a = (data: string) => set(YZ_DEFAULT_ROUTE_KEY, data)
  const b = (): string | null => get(YZ_DEFAULT_ROUTE_KEY)
  return [a, b]
}

export function useLocalStorageTenant(): [returnSet<string>, returnGet<string>] {
  const a = (data: string) => set(YZ_TENANT_KEY, data)
  const b = (): string | null => get(YZ_TENANT_KEY)
  return [a, b]
}

export function useLocalStorageLangs(): [returnSet<YunzaiI18NType[]>, returnGet<YunzaiI18NType[]>] {
  const a = (data: YunzaiI18NType[]) => set(YZ_LANGS_KEY, data)
  const b = (): YunzaiI18NType[] | null => get(YZ_LANGS_KEY)
  return [a, b]
}

export function useLocalStorageLang(): [any, any] {
  const a = (key: string, data: Record<string, unknown>) => set(`${YZ_LANG_KEY}_${key}`, data)
  const b = (key: string): Record<string, unknown> => get(`${YZ_LANG_KEY}_${key}`)
  return [a, b]
}
