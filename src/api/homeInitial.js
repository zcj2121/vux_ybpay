import request from '@/utils/request'
import Qs from 'qs'

// 验证身份证 上传
export function ocrIdCard(data) {
  return request({
    url: '/facePlus/certificate/ocrIdCard',
    data,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}

// 验证 银行卡
export function queryCardBin(data) {
  return request({
    url: '/card/queryCardBin',
    data: Qs.stringify(data)
  })
}

// 用户授权 身份认证 发送验证码
export function authUserIdentityBindCard(data) {
  return request({
    url: '/card/authUserIdentityBindCard',
    data: Qs.stringify(data)
  })
}

// 用户授权 身份认证 重新 发送验证码
export function bindCardResend(data) {
  return request({
    url: '/card/bindCardResend',
    data: Qs.stringify(data)
  })
}

// 用户授权 身份证
export function authUserIdentity(data) {
  return request({
    url: '/user/authUserIdentity',
    data: Qs.stringify(data)
  })
}

// 获取授权书html内容
export function getCreditAuthHtmlContract(data) {
  return request({
    url: '/credit/getCreditAuthHtmlContract',
    data: Qs.stringify(data)
  })
}

// 签署授权书
export function signCreditAgreement(data) {
  return request({
    url: '/credit/signCreditAgreement',
    data: Qs.stringify(data)
  })
}

// 设置交易密码
export function setTradePwd(data) {
  return request({
    url: '/user/setTradePwd',
    data: Qs.stringify(data)
  })
}

// 运营商 认证
export function creditMobileCertificate(data) {
  return request({
    url: '/credit/creditMobileCertificate',
    data: Qs.stringify(data)
  })
}

// 公信宝 获取token
export function getGxbToken(data) {
  return request({
    url: '/credit/getGxbToken',
    data: Qs.stringify(data)
  })
}

// 商户 认证
export function creditDsCertificate(data) {
  return request({
    url: '/credit/creditDsCertificate',
    data: Qs.stringify(data)
  })
}

// 刷脸验证 H5-Lite方式获取token
export function liteGetToken(data) {
  return request({
    url: '/facePlus/lite/getToken',
    data: Qs.stringify(data)
  })
}

// 刷脸验证 H5-Lite获取face++结果(face++跳回项目调用)
export function liteGetResult(data) {
  return request({
    url: '/facePlus/lite/getResult',
    data: Qs.stringify(data)
  })
}
