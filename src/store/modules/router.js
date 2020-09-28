import { constantRouterMap, asyncRouterMap } from '@/router/index'
import { judgementType } from '@/utils/index'
import { treeFlattening, listToTree } from '@/utils/tree'

const state = {
  addRouterMap: [],
  breadcrumb: [
    {
      path: '/dashboard',
      name: 'dashboard'
    }
  ],
  currentPath: '/dashboard'
}

/**
 * @method 侧边栏router路径处理
 * @param {Array} routers 静态路由表
 * @param {String} parentPath 父级路由路径
 */
function addRouterAsidePath(routers, parentPath) {
  routers.map(item => {
    item.asidePath = parentPath ? (parentPath === '/' ? `/${item.path}` : `${parentPath}/${item.path}`) : item.path
    if (item.children && item.children.length) {
      addRouterAsidePath(item.children, item.asidePath)
    }
  })
}

const mutations = {
  UPDATE_BREADCRUMB: (state, value) => {
    if (judgementType.isArray(value) && value.length) {
      return (state.breadcrumb = value)
    }
  },
  UPDATE_CURRENTPATH: (state, value) => {
    state.currentPath = value
  },
  UPDATE_ADDROUTERMAP: (state, value) => {
    state.addRouterMap = value
  }
}

const actions = {
  GET_ASYNCROUTER: ({ commit }) => {
    const temp = treeFlattening(asyncRouterMap)

    const routerMap = temp.filter(item => {
      return item.meta && item.meta.roles && item.meta.roles.indexOf(localStorage.getItem('role')) > -1
    })

    routerMap.forEach(element => {
      if (element.children) delete element.children
    })

    const addRouterMap = constantRouterMap.concat(listToTree(routerMap, false, '0'))

    addRouterAsidePath(addRouterMap, '')

    commit('UPDATE_ADDROUTERMAP', addRouterMap)

    return Promise.resolve()
  }
}

export default {
  state,
  mutations,
  actions
}
