import { getBaseUrl, getFinalUrl } from './helpers'

export const getFetcher =
  (apiKey: string) =>
  (
    token: string,
    url: string,
    table: string,
    select: string,
    filter: string = '',
    range: string | boolean = false,
  ) => {
    let headers = {
      apikey: apiKey,
      Authorization: `Bearer ${token}`,
    }
    if (range) {
      Object.assign(headers, {
        Range: range,
      })
    }
    const fetchOptions = {
      method: 'GET',
      headers: new Headers(headers),
    }
    const baseUrl = getBaseUrl(url, table)
    return fetch(getFinalUrl(baseUrl, filter, select), fetchOptions).then(
      (res) => res.json(),
    )
  }
