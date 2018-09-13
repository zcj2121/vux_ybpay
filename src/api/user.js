import request from '@/utils/request'
import Qs from 'qs'

// 用户绑卡列表
export function queryUserBindCardList(data) {
  return request({
    url: '/card/queryUserBindCardList',
    data: Qs.stringify(data)
  })
}

// 修改交易密码
export function modifyTradePwd(data) {
  return request({
    url: '/user/modifyTradePwd',
    data: Qs.stringify(data)
  })
}

// 重置交易密码
export function resetTradePwd(data) {
  return request({
    url: '/user/resetTradePwd',
    data: Qs.stringify(data)
  })
}

// 修改密码验证姓名、身份证、银行卡、手机号信息
export function validUserIdentity(data) {
  return request({
    url: '/user/validUserIdentity',
    data: Qs.stringify(data)
  })
}

// 个人中心-用户信息
export function queryUserPersonalInfo(data) {
  return request({
    url: '/user/queryUserPersonalInfo',
    data: Qs.stringify(data)
  })
}
