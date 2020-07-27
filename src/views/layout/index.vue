<template>
  <div id="app-main">
    <section class="app-layout-aside">
      <div class="sidebar-logo-container">
        <router-link to="/" class="side-logo-link">
          <img class="m-logo" :src="require('assets/logo.png')" alt="logo">
          <h1 class="sidebar-title">通用后台模板</h1>
        </router-link>
      </div>
      <div class="sidebar-router-wrapper">
        <!-- <el-menu
          default-active="1-1"
          background-color="#304156"
          text-color="#ffffff"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          style="width:100%;"
          :router="true"
        >
          <el-submenu index="base">
            <template slot="title">
              <span slot="title"><icon-svg icon-class="category" />导航一</span>
            </template>
            <el-menu-item  index="/nested"><icon-svg icon-class="category"/>nested</el-menu-item>
            <el-menu-item index="/render"><icon-svg icon-class="category" />render</el-menu-item>
            <el-submenu index="1-3">
              <span slot="title"><icon-svg icon-class="category" />选项4</span>
              <el-menu-item index="1-3-1"><icon-svg icon-class="category" />选项5</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu> -->
        <aside-bar />
      </div>
    </section>
    <section class="app-layout-section"> 
      <router-view />
    </section>
  </div>
</template>

<script>
import AsideBar from './components/AsideBar'
export default {
  name: 'Layout',
  components: {
    AsideBar
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
}
.app-layout-aside {
  width: 210px;
  background-color: #304156;
  height: 100%;
  font-size: 0;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  overflow: hidden;
  .sidebar-logo-container {
    position: relative;
    width: 100%;
    height: 50px;
    background: #2b2f3a;
    text-align: center;
    overflow: hidden;
    .side-logo-link {
      display: block;
      overflow: hidden;
      text-align: center;
      .m-logo {
        display: inline-block;
        height: 28px;
        vertical-align: middle;
        margin-right: 10px;
      }
      .sidebar-title {
        display: inline-block;
        margin: 0;
        color: #fff;
        font-weight: 600;
        line-height: 50px;
        font-size: 14px;
        vertical-align: middle;
      }
    }
  }
  .sidebar-router-wrapper {
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
    .svg-icon {
      margin-right: 10px;
    }
  }
}
.app-layout-section {
  margin-left: 210px;
  height: 100%;
  #container {
    padding: 20px;
  }
}
</style>