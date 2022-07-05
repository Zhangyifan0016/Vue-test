import request from '@/utils/request'

const login = (data) => {
  return request({
    url: `/login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`,
    method: 'POST'
  })
}
const getUserInfo = () => {
  return request({ url: '/sys/userInfo', method: 'GET' })
}

const getMenus = () => {
  return request({ url: '/sys/menu/nav', method: 'GET' })
}

const logout = () => {
  return request({ url: '/logout', method: 'POST' })
}

export default {
  login,
  getUserInfo,
  getMenus,
  logout
}
