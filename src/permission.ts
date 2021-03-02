// import router, { createRouter } from './router'
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from './store'
import { Message } from 'element-ui'
import storage from '@/utils/storage'

const whiteList = ['/login']
router.beforeEach((to, from, next: Function) => {
  NProgress.start()
  if (storage.getItem('token')) {
    if (to.path.indexOf('/login') > -1) {
      next()
      NProgress.done()
    } else {
      // 获取用户信息if
      if (!storage.getItem('role')) {
        next(`login?redirect=${to.fullPath}`)
        NProgress.done()
      } else if (!store.getters.addRouterMap.length) {
        store
          .dispatch('GET_INFO')
          .then(() => {
            return store.dispatch('GET_ASYNCROUTER').then(() => {
              // 动态添加可访问路由表
              // const newRouter: any = createRouter()
              // router.matcher = newRouter.matcher
              router.addRoutes(store.getters.addRouterMap)
              // hack方法，确保addRoutes已经完成，replace设置未true，导航不会留下历史记录
              // console.log(store.getters.addRouterMap)
              next({
                ...to,
                replace: true
              })

              NProgress.done()
            })
          })
          .catch(err => {
            Message.error(err || `验证失败, 请重新登陆！`)
            NProgress.done()
          })
      } else {
        next()
        NProgress.done()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) > -1) {
      next()
      NProgress.done()
    } else {
      next(`/login?redirect=${to.query.redirect}`)
      NProgress.done()
    }
  }
})

router.afterEach(to => {
  NProgress.done()

  // 更新面包屑数据
  let breadcrumb = []
  breadcrumb.push({
    path: '/dashboard',
    name: 'dashboard'
  })

  if (to.name !== 'dashboard') {
    // 去掉无name属性的路由
    const routeBranch: any = to.matched.filter(route => {
      return route.name
    })
    // 生成当前面包屑数据
    breadcrumb = breadcrumb.concat(routeBranch)
  }
  store.commit('UPDATE_BREADCRUMB', breadcrumb)

  // 更新标签导航栏数据
  const hasTagsView = store.getters.visitedView.some((route: any) => route.name && route.name === to.name)
  if (to.name && !hasTagsView) {
    store.commit('ADD_VISITED_VIEW', to)
  }

  // 更新当前路由信息
  store.commit('UPDATE_CURRENTPATH', to.fullPath)
})
