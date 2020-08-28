import {
  constantRouterMap
} from '@/router/index'
import {
  judgementType
} from '@/utils/index'

const state = {
  asyncRouterMap: [],
  breadcrumb: [{
    path: '/dashboard/index',
    name: 'dashboard'
  }],
  currentPath: '/dashboard/index'
}

/**
 * @method 侧边栏router路径处理
 * @param {Array} routers 静态路由表
 * @param {String} parentPath 父级路由路径
 */
function addRouterAsidePath(routers, parentPath) {
  routers.map(item => {
    item.asidePath = parentPath ? (parentPath === '/' ? `/${item.path}` : `${parentPath}/${item.path}`) : item.path
    if (item.children) {
      addRouterAsidePath(item.children, item.asidePath)
    }
  })
}

addRouterAsidePath(constantRouterMap, '')

const mutations = {
  UPDATE_BREADCRUMB: (state, value) => {
    if (judgementType.isArray(value) && value.length) {
      return (state.breadcrumb = value)
    }
  },
  UPDATE_CURRENTPATH: (state, value) => {
    state.currentPath = value
  }
}

const actions = {}

export default {
  state,
  mutations,
  actions
}
