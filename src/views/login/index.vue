<template>
  <div id="login-page">
    <el-form class="login-form" :model="loginForm" :rules="loginRules">
      <h1 class="title">vue-admin-element</h1>
      <el-form-item prop="username">
        <span class="svg-container">
          <icon-svg icon-class="account-fill" />
        </span>
        <el-input v-model="loginForm.username" placeholder="用户名" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <icon-svg icon-class="password" />
        </span>
        <el-input v-model="loginForm.password" :type="pwdIsShow ? 'string' : 'password'" placeholder="密码" />
        <span class="eye-wrapper" @click="pwdIsShow = !pwdIsShow">
          <icon-svg :icon-class="pwdIsShow ? 'eye-fill' : 'eye-close-fill'" />
        </span>
      </el-form-item>
      <el-form-item>
        <div class="submit">登录</div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      pwdIsShow: true,
      loginRules: {
        username: [{ require: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ require: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  }
}
</script>

<style lang="scss">
.el-input {
  input {
    background-color: transparent;
    border: none;
    color: #ffffff;
  }
}
</style>

<style lang="scss" scoped>
#login-page {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(180deg, #353438 1%, #201f22 100%);
  overflow: hidden;
  position: relative;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 500px;
    max-width: 100%;
    margin: 200px auto;
    // border-radius: 5px;
    // background-color: rgba(255, 255, 255, 0.2);
    padding: 20px 50px;
    box-sizing: border-box;
    .title {
      color: #e0cfae;
      text-align: center;
    }
    .el-form-item {
      position: relative;
      width: 100%;
      height: 50px;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0.2);
      overflow: hidden;
      .svg-container {
        line-height: 50px;
        color: rgba(224, 207, 174, 0.8);
        padding: 2px 5px 2px 15px;
        font-size: 24px;
        display: inline-block;
        vertical-align: middle;
      }
      .el-input {
        width: 80%;
        height: 100%;
        color: #e0cfae;
      }
      .eye-wrapper {
        color: rgba(224, 207, 174, 0.8);
        cursor: pointer;
      }
      .submit {
        width: 100%;
        height: 100%;
        letter-spacing: 6px;
        text-align: center;
        line-height: 50px;
        cursor: pointer;
        background-color: rgba(224, 207, 174, 0.8);
        color: #000;
        &:hover {
          opacity: 0.9;
        }
      }
    }
  }
}
</style>
