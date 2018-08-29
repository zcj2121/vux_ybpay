import request from '@/utils/request'

// 切换流程执行 API execute
// export function getExecutionProcess(params) { // 切换流程执行 列表
//   return request({
//     url: '/rs/dr/drmProcessExecution/getExecutionProcess',
//     method: 'get',
//     params
//   })
// }

export function getExecutionProcess(params) { // 切换流程执行 列表
  return request({
    url: 'dr/switchingProcess/getExecutionProcess.do',
    method: 'get',
    params
  })
}

export function getAll(params) { // 查看详情
  return request({
    url: '/rs/dr/drmProcessExecution/getAll',
    method: 'get',
    params
  })
}

export function bigScreen(params) { // 查看大屏数据
  return request({
    url: '/rs/dr/drmProcessExecution/getAll',
    method: 'get',
    params
  })
}

export function showStage(params) { // 一键回退 阶段选择
  return request({
    url: '/rs/dr/drmProcessExecution/showStage',
    method: 'get',
    params
  })
}

export function showStep(params) { // 一键回退 步骤选择
  return request({
    url: '/rs/dr/drmProcessExecution/showStep',
    method: 'get',
    params
  })
}

export function backConfirm(params) { // 一键回退
  return request({
    url: '/rs/dr/drmProcessExecution/backConfirm',
    method: 'get',
    params
  })
}
// 切换流程执行 API execute
