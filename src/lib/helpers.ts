import { IFilter } from './intefaces'

export function getOptions(
  apiUrl: string,
  table: string,
  fields: string[],
  filters: IFilter[] = [],
  range: number[] = [],
) {
  return {
    url: `${apiUrl}/rest/v1/${table}`,
    select: `select=${fields.join()}`,
    filterString: getModifierString(filters),
  }
}

export function getRangeString(range: number[]) {
  return range.join('-')
}

export function getModifierString(filter: IFilter[] = []) {
  return filter
    .map((filter) => `${filter.field}=${filter.relationship}.${filter.value}`)
    .join('&')
}
