import { getImgCode } from '../../api/Imgcode'
import User from '@/api/user'
import { setItem, getItem } from '../../utils/storage'
export default {
  namespaced: true,
  state: {
    token: getItem('token') || ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    }
  },
  actions: {
    async getCaptcha({ commit }) {
      const res = await getImgCode()
      commit('setToken', res.data.token)
      return res
    },
    async login() {
      const res = await User.login()
      return res
    }
  }
}
