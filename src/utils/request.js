// 引入axios
import axios from 'axios'
// 引入store
import store from '../store'
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
// 请求拦截器
instance.interceptors.request.use(
  function (config) {
    const token = store.getters.token
    if (token) {
      config.headers.authorization = token
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  function (response) {
    // const res = response.data
    // if (res.code === 200) {
    //   return res
    // } else if (res.code === 400) {
    //   return res
    // }
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)
// 封装 处理get请求方式的参数问题
function request(options) {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data
  }
  return instance(options)
}

export default request
