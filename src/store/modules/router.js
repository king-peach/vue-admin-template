import { constantRouterMap } from '@/router/index'

const state = {
  asyncRouterMap: []
}

/**
 * @method 侧边栏router路径处理
 * @param {Array} routers 静态路由表
 * @param {String} parentPath 父级路由路径
 */
function addRouterAsidePath(routers, parentPath) {
  routers.map(item => {
    item.asidePath = parentPath ? parentPath === '/' ? `/${ item.path }` : `${ parentPath }/${ item.path }` : item.path
    if (item.children) {
      addRouterAsidePath(item.children, item.asidePath)
    }
  })
}

addRouterAsidePath(constantRouterMap, '')

const mutations = {}

const actions = {}

export default {
  state,
  mutations,
  actions
}