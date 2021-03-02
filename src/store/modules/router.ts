import { constantRouterMap, asyncRouterMap } from '@/router/index'
import { judgementType } from '@/utils/index'
import { treeFlattening, listToTree } from '@/utils/tree'
import storage from '@/utils/storage'

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
function addRouterAsidePath (routers: Array<any>, parentPath: string) {
  routers.map((item: any) => {
    item.asidePath = parentPath ? (parentPath === '/' ? `/${item.path}` : `${parentPath}/${item.path}`) : item.path
    if (item.children && item.children.length) {
      addRouterAsidePath(item.children, item.asidePath)
    }
  })
}

const mutations = {
  UPDATE_BREADCRUMB: (state: any, value: string) => {
    if (judgementType.isArray(value) && value.length) {
      return (state.breadcrumb = value)
    }
  },
  UPDATE_CURRENTPATH: (state: any, value: string) => {
    state.currentPath = value
  },
  UPDATE_ADDROUTERMAP: (state: any, value: []) => {
    state.addRouterMap = value
  },
  REMOVE_ADDROUTERMAP: (state: any) => {
    state.addRouterMap = []
  }
}

const actions = {
  GET_ASYNCROUTER: (context: any) => {
    const temp = treeFlattening(asyncRouterMap)

    const routerMap = temp.filter((item: any) => {
      return item.meta && item.meta.roles && item.meta.roles.indexOf(storage.getItem('role')) > -1
    })

    routerMap.forEach((element: any) => {
      if (element.children) delete element.children
    })

    const addRouterMap = constantRouterMap.concat(listToTree(routerMap, false, 0))

    addRouterAsidePath(addRouterMap, '')

    context.commit('UPDATE_ADDROUTERMAP', addRouterMap)

    return Promise.resolve()
  }
}

export default {
  state,
  mutations,
  actions
}
