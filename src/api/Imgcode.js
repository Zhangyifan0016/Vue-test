import request from '../utils/request'

export const getImgCode = () => {
  return request({ url: '/captcha', method: 'GET' })
}
