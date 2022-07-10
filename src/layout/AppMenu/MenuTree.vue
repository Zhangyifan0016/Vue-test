<template>
  <el-menu
    active-text-color="#ffd04b"
    :default-active="$route.path"
    background-color="#545c64"
    text-color="#bfcbd9"
    unique-opened
    router
  >
    <ItemTree v-for="item in menuList" :menuList="item" :key="item"></ItemTree>
  </el-menu>
</template>
<script setup>
import ItemTree from './ItemTree'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { filterMenuData } from '../../utils/menu'
import { filterRoutes, generateMenus } from '../../utils/router'
const router = useRouter()

const menuList = computed(() => {
  const routes = filterRoutes(router.getRoutes())
  return filterMenuData(generateMenus(routes))
})
</script>
<style lang="scss" scoped></style>
