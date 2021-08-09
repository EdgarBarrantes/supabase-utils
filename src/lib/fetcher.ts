import { getRangeString } from './helpers'

/**
 * Range given as "0-2" (to get first three elements)
 * In useSWR, this can't receive an object.
 * Because of this, for now, if a filter is needed, send data as null.
 **/
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
        range,
      })
    }
    console.log('Fetch options', fetchOptions)
    return fetch(
      // TODO: Find a cleaner way to do this.
      `${url}?${filter && `${filter}${select && '&'}`}${select && `${select}`}`,
      fetchOptions,
    ).then((res) => res.json())
  }
