<script>
import { constantRouterMap } from '@/router/index'
export default {
  name: 'asideBar',
  mounted() {
    console.log(constantRouterMap)
  },
  methods: {
    clickHandle(e) {
      console.log(e)
    },
    element(routers, c, level) {
      return routers
        .map((route) => {
          // 路由表hidden字段控制显隐
          if (route.hidden) return null
          // 嵌套路由递归处理
          if (route.path && route.children) {
            if (route.name) {
              return c(
                'el-submenu',
                {
                  props: {
                    index: route.asidePath
                  },
                  attrs: {
                    level: level
                  }
                },
                [
                  c('template', { slot: 'title' }, [
                    c('icon-svg', {
                      props: {
                        iconClass: route.meta.icon
                      },
                      style: {
                        marginRight: '10px'
                      }
                    }),
                    c('span', { slot: 'title' }, route.meta.title)
                  ]),
                  this.element(route.children, c, level + 1)
                ]
              )
            } else {
              // 只有一个子路由且父元素不展示时
              return c(
                'el-menu-item',
                {
                  props: {
                    index: route.asidePath
                  },
                  class: {
                    'root-menu-item': true
                  },
                  style: {
                    color: 'rgba(224, 207, 174, .7)'
                  }
                },
                [
                  c('icon-svg', {
                    props: {
                      iconClass: route.children[0].meta.icon
                    },
                    style: {
                      marginRight: '10px'
                    }
                  }),
                  c('span', { slot: 'title' }, route.children[0].meta.title)
                ]
              )
            }
          } else if (route.path && route.name && route.meta) {
            // 菜单信息渲染
            return c(
              'el-menu-item',
              {
                props: {
                  index: route.asidePath
                },
                style: {
                  color: 'rgba(224, 207, 174, .7)'
                },
                on: {
                  click: this.clickHandle
                }
              },
              [
                c('icon-svg', {
                  props: {
                    iconClass: route.meta.icon
                  },
                  style: {
                    marginRight: '10px'
                  }
                }),
                route.meta.title
              ]
            )
          } else {
            return null
          }
        })
        .filter((item) => item)
    }
  },
  render: function (createElement) {
    const isCollapse = false
    return createElement(
      'el-menu',
      {
        props: {
          backgroundColor: isCollapse ? '#303133' : 'transparent',
          textColor: 'rgba(224, 207, 174, .7)',
          activeTextColor: '#E8C897',
          collapse: isCollapse,
          'default-active': '/nested',
          router: true
        }
      },
      this.element(constantRouterMap, createElement, 0)
    )
  }
}
</script>

<style lang="scss">
.sidebar-router-wrapper {
  font-size: 14px;
  .el-menu {
    width: 100%;
    .el-submenu__title {
      padding-right: 0;
      &:hover,
      &:focus {
        background-color: transparent !important;
        color: rgb(224, 207, 174) !important;
      }
    }
    .el-menu-item {
      padding-right: 0;
      &:hover,
      &:focus,
      &.is-active {
        background-color: transparent !important;
        color: rgb(224, 207, 174) !important;
      }
    }
    .root-menu-item {
      &.is-active {
        background-image: linear-gradient(90deg, #e6d6b5 0%, #e9c58f 100%);
        font-size: 14px;
        color: #383430 !important;
      }
    }
    .el-submenu {
      &[level='0'] {
        &.is-active {
          & > .el-submenu__title {
            background-image: linear-gradient(90deg, #e6d6b5 0%, #e9c58f 100%);
            font-size: 14px;
            color: #383430 !important;
          }
        }
      }
      .el-menu--inline {
        background-color: #121213 !important;
        .el-submenu.is-active {
          background-image: linear-gradient(
            90deg,
            rgba(233, 197, 143, 0.22) 0%,
            rgba(255, 255, 255, 0.09) 99%
          ) !important;
        }
      }
    }
  }
}
</style>
