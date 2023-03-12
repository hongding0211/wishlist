const BASE_URL_PROD = 'https://hong97.ltd/wishlist/api'
const BASE_URL_DEV = 'https://hong97.ltd/wishlist/api'

const env = process.env['NODE_ENV']

const BASE_URL = env === 'development' ? BASE_URL_DEV : BASE_URL_PROD

export const GET_USER_LOGIN = BASE_URL + '/user/login'
export const GET_USER_INFO = BASE_URL + '/user/info'
