<template>
  <section class="app-layout-section">
    <header id="main-header">
      <img :src="require('assets/main-header-bg.png')" alt="main-header" class="m-bg" />
      <!-- <transition name="fade"> -->
      <div @click="handleChangeAsideStatus">
        <icon-svg
          icon-class="list-show"
          :class="['aside-switch', asideIsActive ? 'is-active' : '']"
        />
      </div>
      <!-- </transition> -->
      <div class="m-breadcrumb" />
    </header>
    <div id="containe">
      <router-view />
    </div>
  </section>
</template>

<script>
export default {
  name: 'mainSection',
  data() {
    return {
      asideIsActive: true
    }
  },
  methods: {
    handleChangeAsideStatus() {
      console.log(1)
      this.asideIsActive = !this.asideIsActive
    }
  }
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
    line-height: 60px;
    border-bottom: 1px solid rgba(228, 203, 155, 0.61);
    position: relative;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    .m-bg {
      position: absolute;
      right: 0;
    }
    .aside-switch {
      cursor: pointer;
      color: #e8c998;
      margin-left: 20px;
      transition: all 1s;
      transform: rotate(0);
      &.is-active {
        transform: rotateY(180deg);
      }
    }
  }
}
</style>
