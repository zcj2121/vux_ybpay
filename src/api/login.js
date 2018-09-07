import request from '@/utils/request'
import Qs from 'qs'

// 验证用户是否存在
export function isUserExist(data) {
  return request({
    url: '/login/isUserExist',
    data: Qs.stringify(data)
  })
}

// 注册
export function register(data) {
  return request({
    url: '/login/register',
    data: Qs.stringify(data)
  })
}

// 注册 发送短信验证码
export function sendVerifyCode(data) {
  return request({
    url: '/login/sendVerifyCode',
    data: Qs.stringify(data)
  })
}

// 登陆
export function signIn(data) {
  return request({
    url: '/login/signIn',
    data: Qs.stringify(data)
  })
}

// 重置密码
export function resetPassword(data) {
  return request({
    url: '/login/resetPassword',
    data: Qs.stringify(data)
  })
}

// 验证 验证码是否正确
export function checkCode(data) {
  return request({
    url: '/login/checkCode',
    data: Qs.stringify(data)
  })
}
