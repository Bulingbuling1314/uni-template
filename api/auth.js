import service from '@/utils/service.js'

// 登陆
export function login (param) {
  return service({
    url: '/system/web/api/auth/userLogin',
    method: 'POST',
    data: params
  })
}