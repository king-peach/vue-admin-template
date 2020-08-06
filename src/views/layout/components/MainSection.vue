<template>
  <section class="app-layout-section">
    <header id="main-header">
      <img :src="require('assets/main-header-bg.png')" alt="main-header" class="m-bg">
      <svg-icon icon-class="caytegory" />
      <div class="m-breadcrumb" />
    </header>
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
    background-image: linear-gradient(
      90deg,
      #323034 0%,
      rgba(53, 52, 55, 0.99) 99%
    );
    height: 60px;
    border-bottom: 1px solid rgba(228, 203, 155, 0.61);
    position: relative;
    .m-bg {
      position: absolute;
      right: 0;
    }
  }
}
</style>
