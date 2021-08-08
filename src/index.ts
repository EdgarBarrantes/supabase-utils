import useSWR from 'swr'
import { getFetcher } from './lib/fetcher'
import { getOptions } from './lib/helpers'
import { IFilter } from './lib/intefaces'

export const getSupabaseSWR = (apiUrl: string, apiKey: string) => {
  const fetcher = getFetcher(apiKey)
  // TODO receive order and filter.
  const getEntries = <T>(
    accessToken: string,
    table: string,
    fields: string[],
    filters: IFilter[] = [],
  ) => {
    const { url, select, token, method, filterString } = getOptions(
      apiUrl,
      table,
      fields,
      accessToken,
      'GET',
      filters,
    )
    const { data, error } = useSWR(
      [url, select, token, method, null, filterString],
      fetcher,
    )
    return {
      entries: data as T[],
      isLoading: !error && !data,
      isError: error,
    }
  }

  return {
    useGetEntry: () => {},
    useGetEntries: getEntries,
    useSetEntries: () => {},
  }
}
