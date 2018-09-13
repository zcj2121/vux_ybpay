import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'

let changeUrl
if (process.env.NODE_ENV === 'development') {
  changeUrl = '/yeepay'
} else {
  changeUrl = process.env.BASE_API
}
// 创建axios实例
const service = axios.create({
  // withCredentials: true,
  baseURL: changeUrl,
  method: 'post',
  timeout: 15000
})

service.interceptors.request.use(config => {
  // if (store.getters.token) {
  //   config.headers['X-Token'] = getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  // }
  store.commit('loadingStar')
  return config
}, error => {
  store.commit('loadingEnd')
  console.log(error) // for debug
})

// respone拦截器
service.interceptors.response.use(
  response => {
    store.commit('loadingEnd')
    const res = response.data
    // if (res.returnCode) {
    //   if (res.returnCode === 'SUCCESS') {
    //     return response.data
    //   } else {
    //     if (res.returnCode === 'ERROR') {
    //       ToastPlugin.$vux.toast.text('请求失败', 'center')
    //     }
    //   }
    // } else {
    //   return Promise.reject('error')
    // }
    return res
  },
  error => {
    store.commit('loadingEnd')
    return Promise.reject(error)
  }
)

export default service
// respone拦截器
