<template>
  <div>
    <el-form
      ref="ruleFormRef"
      :model="loginForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="username">
        <el-input v-model="loginForm.password" type="password" />
      </el-form-item>
      <el-form-item label="验证码" prop="captcha">
        <el-input v-model="loginForm.captcha" />
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
const loginForm = reactive({
  username: 'test',
  password: '',
  captcha: ''
})
</script>
<style scoped lang="scss"></style>
