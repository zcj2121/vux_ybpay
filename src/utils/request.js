import axios from 'axios'
import { Message } from 'element-ui'

// ************  本地环境  api的base_url  *********** //
// const changeUrl = 'hatech'

// ************  正式环境  api的base_url  *********** //
const changeUrl = process.env.BASE_API

// 创建axios实例
const service = axios.create({
  // withCredentials: true,
  baseURL: changeUrl,
  timeout: 15000, // 请求超时时间
  cache: false
})

service.interceptors.request.use(config => {
  config.headers['Cache-Control'] = 'no-cache, no-store' // 清除缓存
  config.headers['Pragma'] = 'no-cache' // 清除缓存
  return config
}, error => {
  console.log(error) // for debug
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    const msg = (msg, type) => {
      Message({
        message: msg,
        type: type,
        duration: 2 * 1000
      })
    }
    if (res.code) {
      if (res.code && res.code !== 20000 && res.code !== 200 && res.code !== 2000 && res.code !== '2000' && res.code !== '200') {
        if (res.code === 40001) {
          msg('登录失败，请检查用户名和密码是否正确！', 'error')
        } else if (res.code === 40005) {
          msg('登录失败，请重试！', 'error')
        } else {
          msg(res.msg, 'error')
        }
      } else {
        if (res.code === 200 || res.code === '200') {
          msg('操作成功！', 'success')
        }
      }
      return response.data
    } else {
      return response.data
    }
  },
  error => {
    // Message({
    //   message: '服务器响应失败，请重试！',
    //   type: 'error',
    //   duration: 2 * 1000
    // })
    return Promise.reject(error)
  }
)

export default service
// respone拦截器
