<template>
  <section class="app-layout-section">
      <header id="main-header">页面头部</header>
      <div id="containe">
        <router-view />
      </div>
  </section>
</template>

<script>
export default {
  name: 'mainSection'
}
</script>

<style lang="scss" scoped>
.app-layout-section {
  margin-left: 210px;
  height: 100vh;
  #container {
    padding: 20px;
  }
  #main-header {
    height: 50px;
    border-bottom: 1px solid #eee;
  }
}
</style>
