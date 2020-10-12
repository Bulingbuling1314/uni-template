import service from '@/utils/service.js'

export function getZtList (param) {
  return service({
    url: '/carrier/web/api/carrierBasicInfo/pageList',
    method: 'POST',
    data: param
  })
}

export function getZtInfo (param) {
  return service({
    url: '/carrier/web/api/carrierBasicInfo/get',
    method: 'POST',
    data: param
  })
}

// 认证服务机构
export function getSupermarketList (param) {
  return service({
    url: '/supermarket/web/api/advisory/body/list/type',
    method: 'POST',
    data: param
  })
}
