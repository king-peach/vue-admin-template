<template>
  <div id="container">
    index,测试页面
    <nested />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Nested from '../../nested/index.vue'
@Component({
  components: {
    Nested
  }
})
export default class NestedIndex extends Vue {}
</script>
