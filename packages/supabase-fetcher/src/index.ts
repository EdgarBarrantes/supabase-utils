import {
  getFetcher,
  getOptions,
  IFilter,
} from '@edgarbarrantes/supabase-fetcher-helpers'

export const getSupabaseFetcher = (apiUrl: string, apiKey: string) => {
  const fetcher = getFetcher(apiKey)
  const getEntries = async (
    table: string,
    fields: string[],
    token: string,
    uuid: string = '',
    filter: IFilter[] = [{ field: 'uuid', relationship: 'eq', value: uuid }],
  ) => {
    const { select, filterString } = getOptions(fields, filter)
    return await fetcher(token, apiUrl, table, select, filterString)
  }
  return {
    getEntries,
  }
}
