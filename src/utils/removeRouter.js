import store from '../store'
import router from '../router'
export function resetRouter() {
  if (store.getters.menus) {
    const menus = store.getters.menus
    menus.forEach((menu) => {
      router.removeRoute(menu)
    })
  }
}
