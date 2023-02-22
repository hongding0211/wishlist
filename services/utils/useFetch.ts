import useSWR from 'swr'

import { IApi, Method } from '../types/interface'

function fetcherFactory(method: Method, body: IApi['request']['body']) {
  const fetchConfig: Record<string, any> = {
    method,
    headers: {
      'Content-Type': 'application/json; charset=utf-8;',
    },
  }
  if (body && method === 'POST') {
    fetchConfig.body = JSON.stringify(body)
  }

  return (url: string) => fetch(url, fetchConfig).then((res) => res.json())
}

export default function useFetch<T extends IApi>(
  method: Method,
  url: string,
  params: T['request']
) {
  const query: string[] = []

  Object.entries(params.params).forEach(([k, v]) => {
    query.push(`${k}=${v}`)
  })

  const queryStr = query.join('&')
  const requestUrl = `${url}?${queryStr}`

  const fetcher = fetcherFactory(method, params)

  return useSWR(requestUrl, fetcher)
}
