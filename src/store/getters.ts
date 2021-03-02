const getters = {
  isCollapse: (state: any) => state.app.isCollapse,
  addRouterMap: (state: any) => state.router.addRouterMap,
  breadcrumb: (state: any) => state.router.breadcrumb,
  currentPath: (state: any) => state.router.currentPath,
  isMobile: (state: any) => state.app.isMobile,
  visitedView: (state: any) => state.tagsNav.visitedView,
  token: (state: any) => state.login.token,
  role: (state: any) => state.login.role,
  avatar: (state: any) => state.user.avatar,
  name: (state: any) => state.user.name
}

export default getters
