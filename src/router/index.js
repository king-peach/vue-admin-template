import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'

Vue.use(Router)



export const constantRouterMap = [{
  path: '/login',
  component: () => import('@/views/login/index')
}, {
  path: '/',
  name: 'index',
  component: Layout,
  redirect: '/dashboard',
  children: [{
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }, {
      path: 'nested',
      name: 'nested',
      component: () => import('@/views/nested/index')
    }, {
      path: 'render',
      name: 'render',
      component: () => import('@/views/render/index')
    }
  ]
}, {
  path: '/base',
  name: 'base',
  component: Layout,
  children: [{
    path: 'index1',
    name: 'index1',
    component: () => import('@/views/base/index1/index')
  }]
}]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
