<template>
  <div id="container">
    <list :list="nestedRouter" />
  </div>
</template>

<script>
import List from './components/List'
export default {
  name: 'nested',
  components: {
    List
  },
  data() {
    return {
      nestedRouter: [
        {
          label: '根节点',
          name: 'root',
          children: [
            {
              label: '节点1',
              name: 'node1'
            },
            {
              label: '节点2',
              name: 'node2',
              children: [
                {
                  label: '节点2-1',
                  name: 'node2-1'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>
