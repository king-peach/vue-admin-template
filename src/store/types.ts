export interface RouterType {
  name?: string
  path?: string
  fullPath?: string
  alwaysShow?: boolean
  redirect?: string | undefined
  meta?: {
    icon?: string
    title?: string
    btnPermission?: string[]
    affix?: boolean
    [propName: string]: any
  }
  [propName: string]: any
}

export interface RouterState {
  addRouterMap?: RouterType[]
  breadcrumb?: RouterType[]
  currentPath?: string | undefined
  [propName: string]: any
}

export interface AppState {
  isCollapse?: boolean
  isMobile?: boolean
  [propName: string]: any
}

export interface LoginState {
  token: string | undefined
  role: string | undefined
  login?: any
}

export interface ViewState {
  visitedView: RouterType[]
  tagsNav?: any
}

export interface UserState {
  avatar?: string
  name?: string
  asyncRouterMap?: RouterState[]
  [proName: string]: any
}
