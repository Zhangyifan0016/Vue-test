import { createRouter, createWebHashHistory } from 'vue-router'

const publicrouting = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicrouting
})

export default router
