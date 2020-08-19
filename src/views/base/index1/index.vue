<template>
  <div id="container">
    index,测试页面
    <nested />
  </div>
</template>

<script>
import Nested from '@/views/nested/index'
export default {
  name: 'index',
  components: {
    Nested
  },
  methods: {}
}
</script>
