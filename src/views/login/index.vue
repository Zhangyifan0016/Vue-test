<template>
  <el-row class="content">
    <el-col :span="11">
      <div class="title">
        <h2>欢迎来到VueAdmin管理系统</h2>
      </div>
    </el-col>
    <el-col :span="2" class="divider">
      <el-divider direction="vertical" />
    </el-col>
    <el-col :span="11">
      <el-form
        label-width="120px"
        ref="loginRef"
        :model="loginForm"
        :rules="loginRules"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" type="password" />
        </el-form-item>
        <el-form-item label="验证码" prop="captcha">
          <el-input class="code" v-model="loginForm.code" />
          <el-image class="imgcode" @click="resetImgcode" :src="url" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script setup>
// 引入消息提示
import { ElMessage } from 'element-plus'
import { getImgCode } from '../../api/Imgcode'
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
const url = ref(null)

const getCaptcha = async () => {
  const res = await store.dispatch('user/getCaptcha')
  console.log(res)
  url.value = res.data.data.captchaImg
  loginForm.token = res.data.data.token
}
getCaptcha()
// 点击图片刷新验证码
const resetImgcode = () => {
  getCaptcha()
}
const loginForm = reactive({
  username: 'test',
  password: '',
  code: '',
  token: ''
})
// 表单校验
const loginRules = reactive({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名必填'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      message: '请输入密码'
    }
  ],
  code: [
    {
      required: true,
      trigger: 'blur',
      message: '请输入验证码'
    }
  ]
})

const loginRef = ref(null)
const submitForm = () => {
  loginRef.value.validate(async (valid) => {
    if (!valid) return
    if (valid) {
      const res = await store.dispatch('user/login', loginForm)
      console.log(res)
      if (res.data.code === 200) {
        router.push('/')
        ElMessage({
          type: 'success',
          message: '登陆成功'
        })
      }
    }
  })
}
</script>
<style scoped lang="scss">
.title {
  text-align: center;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .divider {
    text-align: center;
    font-size: 200px;
  }
  .el-form {
    width: 400px;
    .el-input {
      width: 300px;
      height: 40px;
    }
    .imgcode {
      margin-left: 15px;
      border-radius: 5%;
    }
    .code {
      width: 130px;
    }
  }
}
</style>
