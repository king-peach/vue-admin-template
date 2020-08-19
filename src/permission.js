import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from './store'

const whiteList = ['/login', '/dashboard']
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
  // 更新面包屑数据
  let breadcrumb = []
  breadcrumb.push({ path: '/dashboard/index', name: 'dashboard' })
  if (to.name !== 'dashboard') {
    breadcrumb = breadcrumb.concat(to.matched)
  }
  store.commit('UPDATE_BREADCRUMB', breadcrumb)
})
