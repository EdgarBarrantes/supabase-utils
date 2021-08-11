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
    filter: IFilter[] | string,
    column: string = 'uuid',
  ) => {
    let processedFilter: IFilter[]
    switch (typeof filter) {
      case 'object': {
        processedFilter = filter
        break
      }
      case 'string': {
        if (filter === '') {
          processedFilter = []
        } else {
          processedFilter = [
            { field: column, relationship: 'eq', value: filter },
          ]
        }
        break
      }
      default:
        processedFilter = []
    }
    const { select, filterString } = getOptions(fields, processedFilter)
    return fetcher(token, apiUrl, table, select, filterString)
  }
  return {
    getEntries,
  }
}
