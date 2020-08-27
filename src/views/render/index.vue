<script>
export default {
  name: 'render',
  render: function(createElement) {
    return createElement(
      'el-menu',
      {
        props: {
          backgroundColor: 'white',
          textColor: '#333',
          activeTextColor: '#409EFF',
          collapse: false
        }
      },
      this.element(this.tree, createElement)
    )
  },
  data() {
    return {
      tree: [
        {
          label: '节点1',
          value: 'node1'
        },
        {
          label: '节点2',
          value: 'node2',
          children: [
            {
              label: '节点2-1',
              value: 'node2-1'
            },
            {
              label: '节点2-2',
              value: 'node2-2'
            }
          ]
        },
        {
          label: '节点3',
          value: 'node3',
          children: [
            {
              label: '节点3-1',
              value: 'node3-1',
              children: [
                {
                  label: '节点3-1-1',
                  value: 'node3-1-1'
                }
              ]
            },
            {
              label: '节点3-2',
              value: 'node3-2'
            }
          ]
        }
      ]
    }
  },
  methods: {
    clickHandle(e) {
      console.log(e)
    },
    element(list, c) {
      return list
        .map(item => {
          if (item.children && item.children.length) {
            return c(
              'el-submenu',
              {
                props: {
                  index: item.value
                }
              },
              [c('span', { slot: 'title' }, item.label), this.element(item.children, c)]
            )
          } else if (item.label && item.value) {
            return c(
              'el-menu-item',
              {
                props: {
                  index: item.value
                },
                on: {
                  click: this.clickHandle
                }
              },
              item.label
            )
          } else {
            return null
          }
        })
        .filter(item => item)
    }
  }
}
</script>
