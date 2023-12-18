import request from '@/utils/request'
import type { loginFormData, ResponseData } from './type'

// mock 请求实例
export function feachMock(data: loginFormData) {
  return request<ResponseData>({
    url: '/user/login',
    method: 'POST',
    data,
  })
}
