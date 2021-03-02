<template>
  <div id="container">
    <list :list="nestedRouter" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import List from './components/List.vue'
@Component({
  components: {
    List
  }
})

export default class Nested extends Vue {
  nestedRouter: Array<any> = [
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
</script>
