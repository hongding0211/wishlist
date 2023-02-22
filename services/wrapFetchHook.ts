import useSWR from 'swr'

import { IApi, Method } from './types/interface'

function fetcherFactory<T extends IApi>(
  method: Method,
  url,
  params: T['request']
) {
  const query = Object.entries(params.params).reduce((pre, cur) => {
    const [k, v] = cur
    return [...pre, `${k}=${v}`]
  }, [])
  const queryStr = query.join('&')
  return fetch(`${url}?${queryStr}`).then((v) => v.json())
  switch (method) {
    case 'GET':
      const query = Object.entries(params.params).reduce((pre, cur) => {
        const [k, v] = cur
        return [...pre, `${k}=${v}`]
      }, [])
      const queryStr = query.join('&')
      return fetch(`${url}?${queryStr}`).then((v) => v.json())
    case 'POST':
      break
    case 'DELETE':
      break
    default:
      break
  }
}

function wrapFetchHook<T extends IApi>(
  method: Method,
  url: string,
  params: T['request']
) {
  const fetcher = fetcherFactory(method, url, params)
  return function () {
    return useSWR(url, fetcher)
  }
}
