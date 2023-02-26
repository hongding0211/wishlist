// ======================================
//                 Types
// ======================================
type Method = 'GET' | 'POST' | 'DELETE'

// ======================================
//               Interface
// ======================================
interface IRequest<T extends Record<string, string> | undefined, P extends Record<string, any> | undefined> {
  params: { token?: string; page?: string; size?: string } & {
    [K in keyof T]: T[K]
  }
  body?: P
}

interface IResponse<T extends Record<string, any> | Record<string, any>[] | undefined> {
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
  request: IRequest<any, any> | undefined
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
    token: string
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
  response: IResponse<{
    id: string
    createdAt: number
    modifiedAt: number
    meta: IWishMetaData
  }>
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
  response: IResponse<
    {
      wishId: string
      createdAt: number
      modifiedAt: number
      meta: IWishMetaData
    }[]
  >
}

export interface IPostWishClaim extends IApi {
  request: IRequest<
    undefined,
    {
      id: string
    }
  >
  response: IResponse<{
    wishId: string
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
    revertedClaimId: string
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
    wishId: string
    createdAt: number
    modifiedAt: number
    claimedBy: {
      uuid?: string
      name?: string
      avatar?: string
    }
    isClaimed: boolean
  }>
}

export interface IGetWishMyClaimedCount extends IApi {
  request: IRequest<undefined, undefined>
  response: IResponse<{
    total: number
    claimed: number
  }>
}

export interface IGetWishPlaza extends IApi {
  request: IRequest<undefined, undefined>
  response: IResponse<
    {
      top: {
        wishId: string
        createdAt: number
        modifiedAt: number
        meta: IWishMetaData
        claimedAt?: number
        claimedBy?: {
          uuid: string
          name: string
          avatar: string
        }
      }
      lastModified: number
      creator: {
        uuid: string
        name: string
        avatar: string
      }
    }[]
  >
}

export interface IGetWishMyClaims extends IApi {
  request: IRequest<undefined, undefined>
  response: IResponse<{
    wishId: string
    createdAt: number
    modifiedAt: number
    creator: {
      uuid: string
      name: string
      avatar: string
    }
    meta: IWishMetaData
  }>
}
