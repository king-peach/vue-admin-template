import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

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

router.afterEach(() => {
  NProgress.done()
})