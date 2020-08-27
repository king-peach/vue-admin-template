import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'

/* 解决Element-UI导航栏中的vue-router在3.0+版本重复点击菜单报错问题 */
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

/**
 * alwaysShow: true         如果设置为true, 则始终展示该目录，无论子路有多少
 * name: 'router-name'      路由标识字段且作为<keep-alive>的key, 当不需要展示目录时可不设置, 其他任何时候应该设置
 * meta: {
 *   title: 'name',         侧边栏和标签栏菜单名称
 *   icon: 'svg-icon',      侧边栏菜单图标
 *   affix: true            如果设置为true, 则固定在标签导航栏，不可删除
 * }
 */

export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/dashboard',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: 'dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/',
    name: 'index',
    component: Layout,
    redirect: '/nested',
    meta: { title: 'index', icon: 'dashboard' },
    children: [
      {
        path: 'nested',
        name: 'nested',
        component: () => import('@/views/nested/index'),
        meta: { title: 'nested', icon: 'nav-list' }
      },
      {
        path: 'render',
        name: 'render',
        component: () => import('@/views/render/index'),
        meta: { title: 'render', icon: 'list-show' },
        children: [
          {
            path: 'test1',
            name: 'test1',
            component: () => import('@/views/render/index'),
            meta: { title: 'test1', icon: 'list-hide' }
          }
        ]
      }
    ]
  },
  {
    path: '/base',
    name: 'base',
    component: Layout,
    meta: { title: 'base', icon: 'list-show' },
    children: [
      {
        path: 'index1',
        name: 'index1',
        component: () => import('@/views/base/index1/index'),
        meta: { title: 'index1', icon: 'category' }
      }
    ]
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
