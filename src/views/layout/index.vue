<template>
  <div id="app-main">
    <section class="app-layout-aside">
      <div class="sidebar-logo-container">
        <router-link to="/" class="side-logo-link">
          <img :src="require('assets/gold-logo.png')" alt="logo">
          <img :src="require('assets/gold-logo-text.png')" alt="logo-text">
        </router-link>
      </div>
      <div class="sidebar-router-wrapper">
        <img class="aside-list-bg" :src="require('assets/aside-list-bg.png')" alt="bg">
        <div class="el-menu-wrapper">
          <aside-bar />
        </div>
      </div>
    </section>
    <main-section />
  </div>
</template>

<script>
import AsideBar from './components/AsideBar'
import MainSection from './components/MainSection'
export default {
  name: 'Layout',
  components: {
    AsideBar,
    MainSection
  },
  data() {
    return {
      isCollapse: false
    }
  },
  mounted() {
    this.$store.dispatch('INCREMENT', 5)
    // console.log(this.$router)
    // async function f(name) {
    //   await new Promise(resolve => {
    //     resolve(name)
    //   }).then(v => console.log(v))
    // }
    // f('wpeach').catch(err => console.log(err)) 
  }
}
</script>
 
<style lang="scss" scoped>
.app-main {
  font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
  position: relative;
  widows: 100%;
  height: 100%;
}
.app-layout-aside {
  width: 210px;
  background-image: linear-gradient(180deg, #353438 1%, #201F22 100%);
  height: 100%;
  font-size: 0;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  overflow: hidden;
  outline: none;
  .sidebar-logo-container {
    position: relative;
    width: 100%;
    height: 60px;
    background: #2b2f3a;
    background: url(../../assets/aside-header-bg.png) no-repeat 0 0 / 100% 100%;
    text-align: center;
    overflow: hidden;
    .side-logo-link {
      display: block;
      overflow: hidden;
      text-align: center;
      height: 100%;
      img {
        vertical-align: middle;
        margin-top: 22px;
        &:first-child {
          margin-right: 5px;
        }
      }
    }
  }
  .sidebar-router-wrapper {
    position: relative;
    border-top: 1px solid rgba(228,203,155,0.61);
    .aside-list-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: -1;
    }
    .el-menu-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
  }
}
</style>