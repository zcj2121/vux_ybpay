import request from '@/utils/request'
import Qs from 'qs'

// 查询所有借款的最近一期待还计划列表
export function latestPlansOfLoans(data) {
  return request({
    url: '/repayment/latestPlansOfLoans',
    data: Qs.stringify(data)
  })
}

// 获取用户主银行卡后四位
export function getEnd4OfMainCard(data) {
  return request({
    url: '/repayment/getEnd4OfMainCard',
    data: Qs.stringify(data)
  })
}

// 查询某笔借款的最近一期的各项待还金额
export function latestOnePlanOfLoan(data) {
  return request({
    url: '/repayment/latestOnePlanOfLoan',
    data: Qs.stringify(data)
  })
}

// 用户绑卡列表
export function queryUserBindCardList(data) {
  return request({
    url: '/card/queryUserBindCardList',
    data: Qs.stringify(data)
  })
}

// 哆啦宝发起还款(绑卡支付)接口
export function bindingPayActive(data) {
  return request({
    url: '/repayment/bindingPayActive',
    data: Qs.stringify(data)
  })
}

// 哆啦宝确认支付
export function confirmPayActive(data) {
  return request({
    url: '/repayment/confirmPayActive',
    data: Qs.stringify(data)
  })
}

// 代扣短信发送接口
export function smsResend(data) {
  return request({
    url: '/repayment/smsResend',
    data: Qs.stringify(data)
  })
}
