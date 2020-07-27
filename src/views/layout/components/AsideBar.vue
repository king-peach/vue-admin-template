<script>
import { constantRouterMap } from '@/router/index'
export default {
  name: 'asideBar',
  render: function(createElement) {
    return createElement(
      'el-menu',
      {
        props: {
          backgroundColor: '#304156',
          textColor: '#ffffff',
          activeTextColor: '#409EFF',
          collapse: false,
          router: true
        }
      },
      this.element(constantRouterMap, createElement)
    );
  },
  mounted() {
    console.log(constantRouterMap)
  },
  methods: {
    clickHandle(e) {
      console.log(e);
    },
    element(routers, c) {
      return routers.map(route => {
        if (!route.paths) route.paths = [];
        if (route.children && route.children.length) {
          return c(
            'el-submenu',
            {
              props: {
                index: route.asidePath
              }
            },
            [
              c('span', { slot: 'title' }, [ c('icon-svg', {
                props: {
                  iconClass: 'category'
                },
                style: {
                  marginRight: '10px'
                }
              }), route.name ]),
              this.element(route.children, c)
            ]
          );
        } else if (route.path && route.name) {
          return c(
            'el-menu-item',
            {
              props: {
                index: route.asidePath
              },
              on: {
                click: this.clickHandle
              }
            },
            [ c('icon-svg', {
              props: {
                iconClass: 'category'
              },
              style: {
                marginRight: '10px'
              }
            }), route.name ]
          );
        } else {
          return null;
        }
      }).filter(item => item)
    }
  }
};
</script>
