<template>
  <div class="navbar">
    <h4 class="title">VueAdmin后台管理系统</h4>
    <div class="right">
      <div>
        <el-avatar :size="40" :src="url" />
      </div>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{ userInfo.username }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="person">个人中心</el-dropdown-item>
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
const userInfo = computed(() => {
  return store.getters.userInfo
})
const url = computed(() => {
  return store.getters.userInfo.avatar
})
// 下拉菜单点击事件
const handleCommand = (command) => {
  switch (command) {
    case 'person':
      handlePerson()
      break
    case 'logout':
      handleLogout()
      break
  }
}
const handlePerson = () => {}
// 退出登录
const handleLogout = async () => {
  try {
    await store.dispatch('user/logout')
    router.push('/login')
  } catch (error) {
    console.log(error)
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  height: 55px;
  line-height: 55px;
  overflow: hidden;
  position: relative;
  background: #17b3a3;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  padding: 0 20px;
  .title {
    text-align: center;
    display: inline-block;
  }
  .right {
    float: right;
    display: flex;
    align-items: center;
  }
  .el-icon--right {
    vertical-align: middle;
  }
  .el-avatar {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    margin-bottom: 5px;
  }
}
</style>
