// 引入router
import router from './router'
// 引入vuex
import store from './store'
// 设置白名单
const whiteList = ['/login']

// 挂载路由守卫
router.beforeEach(async (to, from, next) => {
  // 获取token
  const token = store.getters.token
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      if (!store.getters.hasUserInfo) {
        // 调取用户信息接口
        const res = await store.dispatch('user/getUserInfo')
        console.log(res)
        if (res) {
          const response = await store.dispatch('user/getMenus')
          // 获取用户所拥有的路由权限
          console.log(response)
          const authoritys = response.data.data.authoritys
          console.log(authoritys)
          const filterRoutes = await store.dispatch(
            'permission/filterRoutes',
            authoritys
          )
          filterRoutes.forEach((item) => {
            router.addRoute(item)
          })
          return next(to.path)
        } else {
          next('/login')
        }
      }
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
