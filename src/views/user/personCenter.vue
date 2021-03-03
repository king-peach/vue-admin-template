<template>
  <div id="main">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>个人信息</span>
      </div>
      <div class="user-info-wrapper">
        <div class="avatar-wrapper">
          <img :src="avatar ? avatar : require('@/assets/avatar_default.png')" alt="" />
        </div>
        <ul class="user-info-list">
          <li v-for="(item, index) in userList" :key="index" class="user-info-item">
            <icon-svg :icon-class="item.icon" class="u-icon" />
            <span class="u-name">{{ item.key }}</span>
            <span v-if="item.key === '安全设置'" class="u-value u-button" @click="handleResetPassword">{{ item.value }}</span>
            <span v-else class="u-value">{{ item.value }}</span>
          </li>
        </ul>
      </div>
    </el-card>

    <reset-password :show="resetPasswordVisible" @comfirm="comfirmReset" @cancel="cancelReset" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ResetPassword from './components/resetPassword.vue'
@Component({
  components: {
    ResetPassword
  }
})
export default class PersonCenter extends Vue {
  resetPasswordVisible: boolean = false
  userList: Array<Object> = [
    {
      key: '用户名',
      value: this.$store.getters.role,
      icon: 'account'
    },
    {
      key: '姓名1',
      value: this.$store.getters.name,
      icon: 'account'
    },
    {
      key: '安全设置',
      value: '修改密码',
      icon: 'password-fill'
    },
    {
      key: '邮箱',
      value: 'xxxxxx@qq.com',
      icon: 'email'
    }
  ]
  // computed
  get avatar (): string {
    return this.$store.getters.avatar
  }
  // methods
  handleResetPassword (): void {
    this.resetPasswordVisible = true
  }
  comfirmReset (): void {
    this.resetPasswordVisible = false
  }
  cancelReset (): void {
    this.resetPasswordVisible = false
  }
}
</script>

<style lang="scss" scoped>
.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 380px;
}
.user-info-wrapper {
  .avatar-wrapper {
    height: 80px;
    text-align: center;
    line-height: 80px;
    img {
      width: 65px;
      height: 65px;
      border-radius: 50%;
    }
  }
  .user-info-list {
    list-style: none;
    font-size: 14px;
    padding: 0;
    .user-info-item {
      height: 40px;
      line-height: 40px;
      overflow: hidden;
      border-bottom: 1px solid #e1e1e1;
      .u-icon {
        margin-right: 10px;
        fill: #999;
      }
      .u-value {
        float: right;
      }
      .u-button {
        color: #4098ff;
        &:hover {
          font-weight: bold;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
