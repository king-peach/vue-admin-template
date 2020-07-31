import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'

/* 解决Element-UI导航栏中的vue-router在3.0+版本重复点击菜单报错问题 */
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)



export const constantRouterMap = [{
  path: '/login',
  component: () => import('@/views/login/index')
}, {
  path: '/dashboard',
  component: Layout,
  children: [{
    path: 'index',
    name: 'dashboard',
    component: () => import('@/views/dashboard/index'),
    meta: { title: 'dashboard', icon: 'dashboard' }
  }]
}, {
  path: '/',
  name: 'index',
  component: Layout,
  meta: { title: 'index', icon: 'dashboard' },
  children: [{
      path: 'nested',
      name: 'nested',
      component: () => import('@/views/nested/index'),
      meta: { title: 'nested', icon: 'nav-list' }
    }, {
      path: 'render',
      name: 'render',
      component: () => import('@/views/render/index'),
      meta: { title: 'render', icon: 'list-show' },
      children: [{
        path: 'test1',
        name: 'test1',
        component: () => import('@/views/render/index'),
        meta: { title: 'test1', icon: 'list-hide' }
      }]
    }
  ]
}, {
  path: '/base',
  name: 'base',
  component: Layout,
  meta: { title: 'base', icon: 'list-show' },
  children: [{
    path: 'index1',
    name: 'index1',
    component: () => import('@/views/base/index1/index'),
    meta: { title: 'index1', icon: 'category' }
  }]
}]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
