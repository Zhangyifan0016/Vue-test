import { createRouter, createWebHashHistory } from 'vue-router'

import Manage from './modules/Manage'
import Tools from './modules/Tools'
// 用户管理
import UserList from './modules/UserList'
// 角色管理
import RoleList from './modules/RoleList'
// 菜单管理
import MenuList from './modules/MenuList'
// 数字字典
import DictList from './modules/DictList'

export const publicrouting = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    component: () => import('../layout'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
          icon: 'el-icon-s-home'
        },
        component: () => import('../views/home')
      }
    ]
  }
]

export const privaterouting = [
  Manage,
  Tools,
  UserList,
  RoleList,
  MenuList,
  DictList
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicrouting
})

export default router
