import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from './store'

const whiteList = ['/login', '/dashboard/index']
const role = 'admin'
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (whiteList.indexOf(to.path) > -1) {
    next()
    NProgress.done()
  } else if (role === 'admin') {
    next()
    NProgress.done()
  } else {
    next('/login')
    NProgress.done()
  }
})

router.afterEach(to => {
  NProgress.done()
  console.log(to)

  // 更新面包屑数据
  let breadcrumb = []
  breadcrumb.push({ path: '/dashboard/index', name: 'dashboard' })
  if (to.name !== 'dashboard') {
    //去掉无name属性的路由
    const routeBranch = to.matched.filter(route => {
      return route.name
    })
    // 生成当前面包屑数据
    breadcrumb = breadcrumb.concat(routeBranch)
  }
  store.commit('UPDATE_BREADCRUMB', breadcrumb)

  // 更新标签导航栏数据
  const hasTagsView = store.getters.visitedView.some(route => route.name && route.name === to.name)
  if (to.name && !hasTagsView) {
    store.commit('ADD_VISITED_VIEW', to)
  }
})
