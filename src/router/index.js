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
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: {
          title: 'dashboard',
          icon: 'dashboard',
          affix: true
        }
      }
    ]
  }
]

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    redirect: '/dashboard',
    meta: {
      title: 'index',
      icon: 'dashboard',
      roles: ['admin', 'user'],
      btnPermission: ['admin', 'user']
    },
    children: [
      {
        path: 'nested',
        name: 'nested',
        component: () => import('@/views/nested/index'),
        meta: {
          title: 'nested',
          icon: 'nav-list',
          roles: ['admin', 'user'],
          btnPermission: ['admin', 'user']
        }
      },
      {
        path: 'render',
        name: 'render',
        component: () => import('@/views/render/index'),
        meta: {
          title: 'render',
          icon: 'list-show',
          roles: ['admin', 'user'],
          btnPermission: ['admin']
        },
        children: [
          {
            path: 'test1',
            name: 'test1',
            component: () => import('@/views/render/index'),
            meta: {
              title: 'test1',
              icon: 'list-hide',
              roles: ['admin'],
              btnPermission: ['admin']
            }
          }
        ]
      }
    ]
  },
  {
    path: '/base',
    name: 'base',
    component: Layout,
    alwaysShow: true,
    meta: {
      title: 'base',
      icon: 'list-show'
    },
    children: [
      {
        path: 'index1',
        name: 'index1',
        component: () => import('@/views/base/index1/index'),
        meta: {
          title: 'index1',
          icon: 'category'
        }
      }
    ]
  }
]

export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  base: process.env.BASE_URL,
  routes: constantRouterMap
})

// 解决开发环境下路由重复警告的问题

export const createRouter = () =>
  new Router({
    base: process.env.BASE_URL,
    routes: constantRouterMap
  })
