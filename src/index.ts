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
    const { url, select, filterString } = getOptions(
      apiUrl,
      table,
      fields,
      filters,
    )
    const { data, error } = useSWR(
      [token, url, select, filterString, range],
      fetcher,
    )
    return {
      entries: data as T[],
      isLoading: !error && !data,
      isError: error,
    }
  }
  return {
    useGetEntries: getEntries,
  }
}
