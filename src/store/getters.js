const getters = {
  isCollapse: state => state.app.isCollapse,
  addRouterMap: state => state.router.addRouterMap,
  breadcrumb: state => state.router.breadcrumb,
  currentPath: state => state.router.currentPath,
  isMobile: state => state.app.isMobile,
  visitedView: state => state.tagsNav.visitedView,
  token: state => state.login.token,
  role: state => state.login.role
}

export default getters
