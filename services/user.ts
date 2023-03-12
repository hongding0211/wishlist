import useMutation from './hooks/useMutation'
import { GET_USER_INFO, GET_USER_LOGIN } from './types/API'
import { IGetUserInfo, IGetUserLogin } from './types/interface'

export function useLogin(params?: IGetUserLogin['request'], shouldFetch = true) {
  return useMutation<IGetUserLogin>('GET', GET_USER_LOGIN)
}

export function useUserInfo() {
  return useMutation<IGetUserInfo>('GET', GET_USER_INFO)
}
