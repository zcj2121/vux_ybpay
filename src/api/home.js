import request from '@/utils/request'
import Qs from 'qs'

// 查询某产品的授信总额度 可用余额 是否逾期：主页的三种情况
export function queryMyAccount(data) {
  return request({
    url: '/orderApplyLoan/queryMyAccount',
    data: Qs.stringify(data)
  })
}

// 借款
export function applyLoan(data) {
  return request({
    url: '/orderApplyLoan/applyLoan',
    data: Qs.stringify(data)
  })
}

// 还款计划
export function testRepaymentPlan(data) {
  return request({
    url: '/orderApplyLoan/testRepaymentPlan',
    data: Qs.stringify(data)
  })
}

// 已绑 银行卡 列表
export function queryUserBindCardList(data) {
  return request({
    url: '/card/queryUserBindCardList',
    data: Qs.stringify(data)
  })
}

// 验证交易密码
export function validTradePwd(data) {
  return request({
    url: '/user/validTradePwd',
    data: Qs.stringify(data)
  })
}

// 借款结果
export function queryLoanResult(data) {
  return request({
    url: '/orderApplyLoan/queryLoanResult',
    data: Qs.stringify(data)
  })
}

