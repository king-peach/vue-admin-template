<template>
  <div
    id="app-main"
    :class="[isCollapse ? 'close-sidebar' : 'open-sidebar', isMobile ? 'mobile' : '']"
  >
    <section class="app-layout-aside">
      <div class="sidebar-logo-container">
        <router-link to="/" class="side-logo-link">
          <img :src="require('assets/gold-logo.png')" alt="logo" />
          <img :src="require('assets/gold-logo-text.png')" alt="logo-text" />
        </router-link>
      </div>
      <div class="sidebar-router-wrapper">
        <img class="aside-list-bg" :src="require('assets/aside-list-bg.png')" alt="bg" />
        <div class="el-menu-wrapper">
          <aside-bar />
        </div>
      </div>
    </section>
    <div class="asidebar-bg" @click="handleMobileAsidebarBg"></div>
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
  computed: {
    isCollapse() {
      return this.$store.getters.isCollapse
    },
    isMobile() {
      return this.$store.getters.isMobile
    }
  },
  methods: {
    /**
     * @method 控制mobile模式下侧边栏显隐
     */
    handleMobileAsidebarBg() {
      this.$store.commit('UPDATE_COLLAPSE', true)
    }
  }
}
</script>

<style lang="scss" scoped>
#app-main {
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
  position: relative;
  widows: 100%;
  height: 100%;
  .asidebar-bg {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 99;
  }
  &.close-sidebar {
    .app-layout-aside {
      width: 60px;
    }
    .app-layout-section {
      margin-left: 60px;
    }
    &.mobile {
      .asidebar-bg {
        display: none;
      }
      .app-layout-aside {
        width: 0;
      }
      .app-layout-section {
        margin-left: 0;
      }
    }
  }
  &.open-sidebar {
    &.mobile {
      .asidebar-bg {
        display: block;
      }
      .app-layout-aside {
        width: 180px;
      }
      .app-layout-section {
        margin-left: 0;
      }
    }
  }
  .app-layout-aside {
    transition: width 0.3s;
    z-index: 999;
  }
  .app-layout-section {
    transition: margin-left 0.3s;
    z-index: 1;
  }
  .el-menu {
    border-right-color: transparent;
  }
}
.app-layout-aside {
  width: 210px;
  background-image: linear-gradient(180deg, #353438 1%, #201f22 100%);
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
    border-top: 1px solid rgba(228, 203, 155, 0.61);
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
