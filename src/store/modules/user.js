import { getImgCode } from '../../api/Imgcode'
import User from '@/api/user'
import { setItem, getItem, removeItem } from '../../utils/storage'
import { resetRouter } from '../../utils/removeRouter'
export default {
  namespaced: true,
  state: {
    token: getItem('token') || '',
    userInfo: {},
    menus: []
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    setMenus(state, menus) {
      state.menus = menus
    }
  },
  actions: {
    async getCaptcha() {
      const res = await getImgCode()
      return res
    },
    async login({ commit }, payload) {
      const res = await User.login(payload)
      commit('setToken', res.headers.authorization)
      return res
    },
    async getUserInfo({ commit }) {
      const response = await User.getUserInfo()
      commit('setUserInfo', response.data.data)
      return response
    },
    async getMenus({ commit }) {
      const res = await User.getMenus()
      commit('setMenus', res.data.data.authoritys)
      return res
    },
    async logout({ commit }) {
      await User.logout()
      resetRouter()
      // commit('setMenus', [])
      commit('setToken', '')
      commit('setUserInfo', {})
      removeItem('token')
    }
  }
}
