import { publicrouting, privaterouting } from '../../router'
export default {
  namespaced: true,
  state: {
    routes: publicrouting
  },
  mutations: {
    setRoutes(state, newRoutes) {
      state.routes = [...publicrouting, ...newRoutes]
    }
  },
  actions: {
    filterRoutes({ commit }, menus) {
      const routes = []
      menus.forEach((name) => {
        const data = privaterouting.filter((item) => {
          return item.name === name
          // if (item.children) {
          //   return item.children.name === name
          // }
        })

        routes.push(...data)
      })
      console.log(menus)
      commit('setRoutes', routes)
      return routes
    }
  }
}
