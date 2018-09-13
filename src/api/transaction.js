import request from '@/utils/request'
import Qs from 'qs'

/*
    还款部分
**/

// 查询还款订单状态  query: orderNo（还款订单号）,sign
export function queryOrderStatus(data) {
  return request({
    url: '/repayment/orderStatusForC',
    data: Qs.stringify(data)
  })
}
// 还款记录列表  query: userId（用户ID）,sign
export function queryRepaymentList(data) {
  return request({
    url: '/repayment/repaymentList',
    data: Qs.stringify(data)
  })
}
// 还款详情  query: orderNo（还款订单号）,sign
export function queryRepaymentInfo(data) {
  return request({
    url: '/repayment/repaymentInfo',
    data: Qs.stringify(data)
  })
}
// 某笔借款的还款金额汇总及还款明细  query: loanOrderNo（借款订单号）,sign
export function queryLoanInfo(data) {
  return request({
    url: '/repayment/loanInfo',
    data: Qs.stringify(data)
  })
}
// 某笔借款的待还款计划列表  query: loanOrderNo（借款订单号）,sign
export function queryPlansToRepay(data) {
  return request({
    url: '/repayment/plansToRepay',
    data: Qs.stringify(data)
  })
}
// 银行卡尾号  query: userId（用户ID）,sign
export function queryBankNum(data) {
  return request({
    url: '/repayment/getEnd4OfMainCard',
    data: Qs.stringify(data)
  })
}
// 查询所有借款的最近一期待还计划列表  query: userId（用户ID）,sign
export function queryLatestPlansOfLoans(data) {
  return request({
    url: '/repayment/latestPlansOfLoans',
    data: Qs.stringify(data)
  })
}
// 查询某笔借款的最近一期的各项待还金额  query: loanOrderNo（借款订单号）,sign
export function queryLatestOnePlanOfLoan(data) {
  return request({
    url: '/repayment/latestOnePlanOfLoan',
    data: Qs.stringify(data)
  })
}
// 查询借款记录表
export function getOrderApplyLoanList(data) {
  return request({
    url: '/orderApplyLoan/getOrderApplyLoanList',
    data: Qs.stringify(data)
  })
}
