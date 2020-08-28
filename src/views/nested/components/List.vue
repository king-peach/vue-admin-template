<template>
  <div class="nest-parent">
    <div v-for="item in list" :key="item.name" class="nest-label">
      <div v-if="item.children">
        <div>{{ item.label }}</div>
        <list :list="item.children" />
      </div>
      <div v-else>{{ item.label }}</div>
    </div>
  </div>
</template>

<script>
import List from '@/views/nested/components/List'
export default {
  name: 'List',
  components: {
    List
  },
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>
