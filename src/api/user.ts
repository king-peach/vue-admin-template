import request from '@/utils/request'
import { AxiosPromise } from 'axios'

export function getInfo (): AxiosPromise {
  return request({
    url: '/user/info'
  })
}
