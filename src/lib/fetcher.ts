import { HttpMethod } from './intefaces'

/**
 * Range given as "0-2" (to get first three elements)
 * In useSWR, this can't receive an object.
 * Because of this, for now, if a filter is needed, send data as null.
 **/
export const getFetcher =
  (apiKey: string) =>
  (
    url: string,
    select: string,
    token: string,
    method: HttpMethod,
    data: any = null,
    filter: string = '',
  ) => {
    let headers = {
      apikey: apiKey,
      Authorization: `Bearer ${token}`,
    }
    const postHeaders = {
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
    }
    if (method === 'POST' || method === 'PATCH') {
      Object.assign(headers, postHeaders)
    }

    let fetchOptions = {
      method,
      headers: new Headers(headers),
    }
    const postOptions = {
      body: JSON.stringify(data),
    }
    if (method === 'POST' || method === 'PATCH') {
      Object.assign(fetchOptions, postOptions)
    }

    return fetch(
      `${url}?${filter && `${filter}${select && '&'}`}${select && `${select}`}`,
      fetchOptions,
    ).then((res) => res.json())
  }
