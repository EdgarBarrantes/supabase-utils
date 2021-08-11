import useSWR from 'swr'
import {
  getFetcher,
  getOptions,
  IFilter,
} from '@edgarbarrantes/supabase-fetcher-helpers'

export const getSupabaseSWR = (apiUrl: string, apiKey: string) => {
  const fetcher = getFetcher(apiKey)
  const getEntries = <T>(
    token: string,
    table: string,
    fields: string[],
    filters: IFilter[] = [],
    range: number[] = [],
  ) => {
    const { select, filterString, rangeString } = getOptions(
      fields,
      filters,
      range,
    )
    const { data, error, isValidating, mutate, revalidate } = useSWR(
      [token, apiUrl, table, select, filterString, rangeString],
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
