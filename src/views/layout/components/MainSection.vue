<template>
  <section class="app-layout-section">
    <header id="main-header">
      <img :src="require('assets/main-header-bg.png')" alt="main-header" class="m-bg" />
      <div class="aside-switch-wrapper" @click="handleChangeAsideStatus">
        <icon-svg icon-class="list-show" :class="['aside-switch', asideIsActive ? 'is-active' : '']" />
      </div>
      <div class="m-breadcrumb">
        <el-breadcrumb separator="/">
          <template v-for="item in breadcrumbList">
            <el-breadcrumb-item v-if="item.name === 'dashboard'" :key="item.path" :to="{ path: item.path }">
              <span @click="handleLink(item.path)">{{ item.name }}</span>
            </el-breadcrumb-item>
            <el-breadcrumb-item v-else-if="item.redirect" :key="item.path" :to="{ path: item.redirect }">
              <span @click="handleLink(item.redirect)">{{ item.name }}</span>
            </el-breadcrumb-item>
            <el-breadcrumb-item v-else :key="item.path">{{ item.name }}</el-breadcrumb-item>
          </template>
        </el-breadcrumb>
      </div>
    </header>
    <tags-nav />
    <div id="containe">
      <transition name="fade">
        <keep-alive :include="visitedView">
          <router-view :key="key" />
        </keep-alive>
      </transition>
    </div>
  </section>
</template>

<script>
import TagsNav from './TagsNav'
export default {
  name: 'mainSection',
  components: {
    TagsNav
  },
  computed: {
    breadcrumbList() {
      return this.$store.getters.breadcrumb
    },
    asideIsActive() {
      return this.$store.getters.isCollapse
    },
    key() {
      return this.$route.fullPath
    },
    visitedView() {
      return this.$store.getters.visitedView
    }
  },
  methods: {
    /**
     * @method 点击切换侧边栏显隐
     */
    handleChangeAsideStatus() {
      this.$store.commit('UPDATE_COLLAPSE', !this.asideIsActive)
    },
    /**
     * @method 点击面包屑路由跳转
     * @param {String} path 路由path
     */
    handleLink(path) {
      this.$store.commit('UPDATE_CURRENTPATH', path)
      console.log(this.$store.getters.currentPath)
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
    background-image: linear-gradient(90deg, #323034 0%, rgba(53, 52, 55, 0.99) 99%);
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
    .aside-switch-wrapper {
      display: inline-block;
      margin: 0 20px 0 20px;
      height: 100%;
      width: 20px;
      position: relative;
      vertical-align: middle;
      .aside-switch {
        position: absolute;
        top: 34%;
        cursor: pointer;
        color: #e8c998;
        transition: all 1s;
        transform: rotate(0);
        &.is-active {
          transform: rotateY(180deg);
        }
      }
    }
  }
  .m-breadcrumb {
    display: inline-block;
    vertical-align: middle;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-enter-to {
  opacity: 0;
  transform: translateX(0);
}
.fade-leave {
  opacity: 1;
  transform: translateX(0);
}
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(20%);
}
</style>

<style>
.m-breadcrumb .el-breadcrumb__inner {
  color: rgb(224, 207, 174, 0.5);
}
.m-breadcrumb .el-breadcrumb__inner a,
.m-breadcrumb .el-breadcrumb__inner.is-link {
  color: rgba(224, 207, 174, 0.8);
}
.m-breadcrumb .el-breadcrumb__inner a:hover,
.m-breadcrumb .el-breadcrumb__inner.is-link:hover {
  color: rgba(224, 207, 174, 1);
}
.m-breadcrumb .el-breadcrumb__item:last-child .el-breadcrumb__inner,
.m-breadcrumb .el-breadcrumb__item:last-child .el-breadcrumb__inner a,
.m-breadcrumb .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
.m-breadcrumb .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
  color: rgba(224, 207, 174, 0.5);
}
</style>
