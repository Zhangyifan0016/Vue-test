<template>
  <div class="tags-view-container">
    <ul class="tags-view-list">
      <li
        class="tags-view-item"
        @click="handleSelectTag(item.path)"
        :class="{ active: $route.path === item.path }"
        v-for="(item, index) in tagsView"
        :key="index"
      >
        {{ item.title }}
        <span
          @click.stop="handleCloseTag(index)"
          v-if="$route.path === item.path"
        >
          ×
        </span>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
const route = useRoute()
const router = useRouter()
const store = useStore()
// 监听路由的变化
watch(
  () => router.currentRoute.value,
  () => {
    if (route.meta && route.meta.title && route.path) {
      const obj = {
        title: route.meta.title,
        path: route.path
      }
      store.commit('tagsview/setTagsView', obj)
    }
  },
  { immediate: true, deep: true }
)
const tagsView = computed(() => {
  return store.getters.tagsview
})

const handleSelectTag = (path) => {
  router.push(path)
}
const handleCloseTag = (index) => {
  store.commit('tagsview/removeTagItem', index)
  const tagsView = store.getters.tagsview
  const path = tagsView[index]
    ? tagsView[index].path
    : tagsView[tagsView.length - 1].path
  router.push(path)
}
</script>
<style scoped lang="scss">
.tags-view-container {
  height: 40px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  overflow-x: auto;
  .tags-view-item {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 40px;
    line-height: 40px;
    color: #495060;
    background: #fff;
    border: 1px solid #ccc;
    padding: 0 20px;
    font-size: 14px;
    &.active {
      color: #409eff;
      background-color: #fff;
      border-bottom: none !important;
    }
    &:hover {
      color: #409eff;
      background-color: #fff;
      border-bottom: none !important;
    }
  }
}
</style>
