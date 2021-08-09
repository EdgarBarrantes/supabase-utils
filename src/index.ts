import useSWR from 'swr'
import { getFetcher } from './lib/fetcher'
import { getOptions } from './lib/helpers'
import { IFilter } from './lib/intefaces'

export const getSupabaseSWR = (apiUrl: string, apiKey: string) => {
  const fetcher = getFetcher(apiKey)
  const getEntries = <T>(
    token: string,
    table: string,
    fields: string[],
    filters: IFilter[] = [],
    range: number[] = [],
  ) => {
    const { url, select, filterString, rangeString } = getOptions(
      apiUrl,
      table,
      fields,
      filters,
      range,
    )
    const { data, error, isValidating, mutate, revalidate } = useSWR(
      [token, url, select, filterString, rangeString],
      fetcher,
    )
    return {
      data: data as T[],
      // Just here for compatibility.
      entries: data as T[],
      error,
      isError: error,
      isValidating,
      mutate,
      revalidate,
      isLoading: !error && !data,
    }
  }
  return {
    useGetEntries: getEntries,
  }
}
