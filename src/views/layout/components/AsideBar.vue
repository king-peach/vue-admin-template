<script>
import { constantRouterMap } from '@/router/index'
export default {
  name: 'asideBar',
  render: function(createElement) {
    return createElement(
      'el-menu',
      {
        props: {
          backgroundColor: 'transparent',
          textColor: 'rgba(224, 207, 174, .7)',
          activeTextColor: '#E8C897',
          collapse: false,
          router: true
        },
        style: {
          width: '100%'
        }
      },
      this.element(constantRouterMap, createElement, 0)
    );
  },
  mounted() {
    console.log(constantRouterMap)
  },
  methods: {
    clickHandle(e) {
      console.log(e);
    },
    element(routers, c, level) {
      return routers.map(route => {
        if (route.hidden) return null
        if (route.path && route.children) {
            if (route.name) {
              return c('el-submenu', {
                props: {
                  index: route.asidePath
                },
                attrs: {
                  'level': level
                }
              }, [
                  c('span', { slot: 'title' }, [ c('icon-svg', {
                      props: {
                        iconClass: route.meta.icon
                      },
                      style: {
                        marginRight: '10px'
                      }
                    }), route.meta.title
                  ]),
                  this.element(route.children, c, level + 1)
                ]
              )
            } else {
              return c('el-menu-item', {
                props: {
                  index: route.asidePath
                },
                'class': {
                  'root-menu-item': true
                },
                style: {
                  color: 'rgba(224, 207, 174, .7)'
                }
              }, [
                c('icon-svg', {
                  props: {
                    iconClass: route.children[0].meta.icon
                  },
                  style: {
                    marginRight: '10px'
                  }
                }), route.children[0].meta.title
              ])
            }
        } else if (route.path && route.name && route.meta) {
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
            }, [ c('icon-svg', {
              props: {
                iconClass: route.meta.icon
              },
              style: {
                marginRight: '10px'
              }
            }), route.meta.title ]
          );
        } else {
          return null;
        }
      }).filter(item => item)
    }
  }
};
</script>

<style lang="scss">
.sidebar-router-wrapper {
  font-size: 14px;
  .el-submenu__title {
    padding-right: 0;
    &:hover, &:focus {
      background-color: transparent!important;
      color: rgb(224, 207, 174)!important;
    }
  }
  .el-menu-item {
    padding-right: 0;
    &:hover, &:focus {
      background-color: transparent!important;
      color: rgb(224, 207, 174)!important;
    }
  }
  .root-menu-item {
    &.is-active {
      background-image: linear-gradient(90deg, #E6D6B5 0%, #E9C58F 100%);
      font-size: 14px;
      color: #383430!important;
    }
  }
  .el-submenu {
    &[level="0"] {
      &.is-active {
        &>.el-submenu__title {
          background-image: linear-gradient(90deg, #E6D6B5 0%, #E9C58F 100%);
          font-size: 14px;
          color: #383430!important;
        }  
      }
    }
    .el-menu--inline {
      background-color: #121213!important;
      .el-submenu.is-active {
        background-image: linear-gradient(90deg, rgba(233,197,143,0.22) 0%, rgba(255,255,255,0.09) 99%)!important;
      }
    }
  }
}
</style>
