import request from '@/utils/request'
import Qs from 'qs'

// 查询所有借款的最近一期待还计划列表
export function latestPlansOfLoans(data) {
  return request({
    url: '/repayment/latestPlansOfLoans',
    data: Qs.stringify(data)
  })
}
