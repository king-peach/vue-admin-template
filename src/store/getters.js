const getters = {
  isCollapse: state => state.app.isCollapse,
  asyncRouterMap: state => state.router.asyncRouterMap,
  breadcrumb: state => state.router.breadcrumb,
  currentPath: state => state.router.currentPath,
  isMobile: state => state.app.isMobile
}

export default getters
