<template>
  <div class="tag-nav-wrapper">
    <ul class="tags-list">
      <li class="tags-item" v-for="(item, index) in tagsView" :key="index">
        {{ item.name }}
        <i class="el-icon-close ic-close"></i>
      </li>
    </ul>
    <div class="operate-dropdown">
      <el-dropdown class="arrow-down-box">
        <i class="el-icon-arrow-down"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>刷新当前页</el-dropdown-item>
          <el-dropdown-item>关闭当前页</el-dropdown-item>
          <el-dropdown-item>关闭其他页</el-dropdown-item>
          <el-dropdown-item>关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tagsNav',
  computed: {
    tagsView() {
      return this.$store.getters.visitedView
    }
  }
}
</script>

<style lang="scss" scoped>
.tag-nav-wrapper {
  height: 56px;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.07);
  z-index: 99;
  .tags-list {
    cursor: pointer;
    height: 100%;
    list-style: none;
    margin: 0;
    padding-right: 50px;
    line-height: 56px;
    /* 隐藏滚动条 */
    white-space: nowrap;
    overflow: scroll;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
    .tags-item {
      display: inline-block;
      position: relative;
      text-align: center;
      padding: 0 5px 0 8px;
      height: 30px;
      line-height: 30px;
      font-size: 12px;
      color: #868686;
      border-radius: 23px;
      border: 1px solid #d7d7d7;
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
      margin: 12px 0 12px 0;
      &.active {
        border-color: #e8c998;
        background-color: #e8c998;
        color: #383430;
        padding-left: 15px;
        &.ic-close {
          background-color: #d7d7d7;
        }
        &::before {
          content: '';
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: #383430;
          left: 5px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      &:not(:last-child) {
        margin-right: 10px;
      }
      .ic-close {
        border-radius: 50%;
        &:hover {
          color: #383430;
          cursor: pointer;
          background-color: #d7d7d7;
        }
      }
    }
  }
  .operate-dropdown {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 100%;
    line-height: 56px;
    text-align: center;
    background-color: #ffffff;
    .arrow-down-box {
      cursor: pointer;
      display: inline-block;
      width: 18px;
      height: 20px;
      border: 1px solid #333;
      line-height: 20px;
      border-radius: 3px;
      box-sizing: border-box;
      box-shadow: 1px 1px 2px 1px #999;
    }
  }
}
@media screen and (max-width: 1000px) {
  .tag-nav-wrapper {
    display: none;
  }
}
</style>
