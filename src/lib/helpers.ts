import { HttpMethod, IFilter } from './intefaces'

export function getOptions(
  apiUrl: string,
  table: string,
  fields: string[],
  token: string,
  method: HttpMethod = 'GET',
  filters: IFilter[] = [],
) {
  const filterString = getModifierString(filters)
  return {
    url: `${apiUrl}/${table}`,
    select: `select=${fields.join()}`,
    token,
    method,
    filterString,
  }
}

export function getModifierString(filter: IFilter[] = []) {
  return filter
    .map((filter) => `${filter.field}=${filter.relationship}.${filter.value}`)
    .join('&')
}
