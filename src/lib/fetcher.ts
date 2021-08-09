import { getFinalUrl } from './helpers'

export const getFetcher =
  (apiKey: string) =>
  (
    token: string,
    url: string,
    select: string,
    filter: string = '',
    range: string | boolean = false,
  ) => {
    let headers = {
      apikey: apiKey,
      Authorization: `Bearer ${token}`,
      'Access-Control-Allow-Origin': '*',
    }
    let fetchOptions = {
      method: 'GET',
      headers: new Headers(headers),
    }
    if (range) {
      Object.assign(fetchOptions, {
        Range: range,
      })
    }
    return fetch(getFinalUrl(url, filter, select), fetchOptions).then((res) =>
      res.json(),
    )
  }
