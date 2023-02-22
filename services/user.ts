import { IGetUserInfo, IGetUserLogin } from './types/interface'
import { GET_USER_INFO, GET_USER_LOGIN } from './utils/API'
import useFetch from './utils/useFetch'

export function useLogin(params: IGetUserLogin['request']) {
  return useFetch<IGetUserLogin>('GET', GET_USER_LOGIN, params)
}

export function useUserInfo(params: IGetUserInfo['request']) {
  return useFetch<IGetUserInfo>('GET', GET_USER_INFO, params)
}
