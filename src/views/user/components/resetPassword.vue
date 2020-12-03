<template>
  <el-dialog :visible.sync="resetPasswordVisible" width="560px" title="修改密码" @close="handleCancel('resetPassForm')">
    <el-form ref="resetPassForm" :rules="resetPassRules" :model="resetPasswordForm" label-width="100px" label-suffix=":">
      <el-form-item label="原始密码" prop="oldPass">
        <el-input v-model="resetPasswordForm.oldPass" />
      </el-form-item>
      <el-form-item label="新密码" prop="newPass">
        <el-input v-model="resetPasswordForm.newPass" type="password" />
      </el-form-item>
      <el-form-item label="确认密码" prop="comfirmPass">
        <el-input v-model="resetPasswordForm.comfirmPass" type="password" />
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button size="medium" @click="handleCancel('resetPassForm')">取消</el-button>
      <el-button type="primary" size="medium" @click="handleComfirm('resetPassForm')">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { editPassword } from '@/api/personCenter'
export default {
  name: 'resetPassword',
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  data() {
    const comfirmPassValid = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请重复新密码!'))
      } else if (value !== this.resetPasswordForm.newPass) {
        callback(new Error('确认密码与新密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      resetPasswordVisible: false,
      resetPasswordForm: {
        oldPass: '',
        newPass: '',
        comfirmPass: ''
      },
      resetPassRules: {
        oldPass: [{ required: true, message: '请输入原始密码', trigger: 'blur' }],
        newPass: [{ required: true, message: '请输入新密码', trigger: 'blur' }],
        comfirmPass: [{ validator: comfirmPassValid, trigger: 'blur' }]
      }
    }
  },
  watch: {
    show(val) {
      this.resetPasswordVisible = val
    }
  },
  methods: {
    /**
     * @method 点击确认回调
     * @param {String} formName ref标识
     */
    handleComfirm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          editPassword(this.resetPasswordForm)
            .then(res => {
              this.$emit('comfirm')
              this.$refs[formName].resetFields()
              if (process.env.NODE_ENV === 'development') {
                this.$notify({
                  type: 'error',
                  title: '修改失败',
                  message: '开发环境下不支持修改密码！'
                })
              } else {
                this.$notify({
                  type: 'success',
                  title: '修改成功',
                  message: res.message
                })
              }
            })
            .catch(err => console.log(err))
        } else {
          return false
        }
      })
    },
    /**
     * @method 点击取消回调
     * @param {String} formName ref标识
     */
    handleCancel(formName) {
      this.$emit('cancel')
      this.$refs[formName].resetFields()
    }
  }
}
</script>
