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
