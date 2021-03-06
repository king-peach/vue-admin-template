import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/index.vue'

/* 解决Element-UI导航栏中的vue-router在3.0+版本重复点击菜单报错问题 */
const originalPush: any = Router.prototype.push
Router.prototype.push = function push (location: any) {
  return originalPush.call(this, location).catch((err: string) => err)
}

Vue.use(Router)

/**
 * alwaysShow: true         如果设置为true, 则始终展示该目录，无论子路有多少
 * name: 'router-name'      路由标识字段且作为<keep-alive>的key, 当不需要展示目录时可不设置, 其他任何时候应该设置
 * hidden: false            默认为false, 设置为true时, 侧边导航栏不展示, 此时必须带上meta属性, 否则报错
 * meta: {
 *   title: 'name',         侧边栏和标签栏菜单名称
 *   icon: 'svg-icon',      侧边栏菜单图标
 *   affix: true            如果设置为true, 则固定在标签导航栏，不可删除
 * }
 */

export const constantRouterMap: Array<any> = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: 'dashboard',
          icon: 'dashboard',
          affix: true
        }
      },
      {
        path: 'personCenter',
        name: 'personCenter',
        hidden: true,
        component: () => import('@/views/user/personCenter.vue'),
        meta: {
          title: '个人中心',
          icon: 'account-fill'
        }
      }
    ]
  }
]

export const asyncRouterMap: Array<any> = [
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
        component: () => import('@/views/nested/index.vue'),
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
        component: () => import('@/views/render/index.vue'),
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
            component: () => import('@/views/render/index.vue'),
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
      icon: 'list-show',
      roles: ['admin'],
      btnPermission: ['admin']
    },
    children: [
      {
        path: 'index1',
        name: 'index1',
        component: () => import('@/views/base/index1/index.vue'),
        meta: {
          title: 'index1',
          icon: 'category',
          roles: ['admin'],
          btnPermission: ['admin']
        }
      }
    ]
  }
]

export default new Router({
  scrollBehavior: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 1 })
      }, 0)
    })
  },
  base: process.env.BASE_URL,
  routes: constantRouterMap
})

// 解决开发环境下路由重复警告的问题

export const createRouter = () =>
  new Router({
    base: process.env.BASE_URL,
    routes: constantRouterMap
  })
