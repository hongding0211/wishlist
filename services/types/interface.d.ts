interface IRequest<
  T extends Record<string, any> | undefined,
  P extends Record<string, any> | undefined
> {
  params: { token?: string; page?: number; size?: number } & {
    [K in keyof T]: T[K]
  }
  body?: P
}

interface IResponse<
  T extends Record<string, any> | Record<string, any>[] | undefined
> {
  success: boolean
  data?: T
  pagination?: {
    page: number
    size: number
    total: number
  }
  msg?: string
}

interface IApi {
  request: IRequest<any, any>
  response: IResponse<any>
}

// ======================================
//                User
// ======================================
export interface IGetUserLogin extends IApi {
  request: IRequest<
    {
      type: string
      ticket: string
    },
    undefined
  >
  response: IResponse<{
    authToken: string
    uid?: string
  }>
}

export interface IGetUserInfo extends IApi {
  request: IRequest<undefined, undefined>
  response: IResponse<{
    uuid: number
    name: string
    avatar: string
  }>
}

export interface IPostUserInfos extends IApi {
  request: IRequest<
    undefined,
    {
      uuids: string[]
    }
  >
  response: IResponse<
    {
      uuid: number
      name: string
      avatar: string
    }[]
  >
}

// ======================================
//                Wish
// ======================================
interface IWishMetaData {
  title: string
  paragraph: string
}
export interface IPostWishCreate extends IApi {
  request: IRequest<undefined, IWishMetaData>
  response: IResponse<
    IWishMetaData & {
      wishId: string
      createdAt: number
      modifiedAt: number
    }
  >
}

export interface IDeleteWish extends IApi {
  request: IRequest<
    {
      id: string
    },
    undefined
  >
  response: IResponse<{
    id: string
  }>
}

export interface IGetWishMy extends IApi {
  request: IRequest<undefined, undefined>
  response: IResponse<{
    // TODO
  }>
}

export interface IPostWishClaim extends IApi {
  request: IRequest<
    undefined,
    {
      id: string
    }
  >
  response: IResponse<{
    // TODO
  }>
}

export interface IPostWishRevert extends IApi {
  request: IRequest<
    undefined,
    {
      id: string
    }
  >
  response: IResponse<{
    // TODO
  }>
}

export interface IGetWishOf extends IApi {
  request: IRequest<
    {
      uuid: string
    },
    undefined
  >
  response: IResponse<{
    // TODO
  }>
}

export interface IGetWishMyClaimedCount extends IApi {
  request: IRequest<undefined, undefined>
  response: IResponse<{
    total: number
    claimed: number // TODO
  }>
}

export interface IGetWishPlaza extends IApi {
  request: IRequest<undefined, undefined>
  response: IResponse<{
    // TODO
  }>
}

export interface IGetWishMyClaims extends IApi {
  request: IRequest<undefined, undefined>
  response: IResponse<{
    // TODO
  }>
}
