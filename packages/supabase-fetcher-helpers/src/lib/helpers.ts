import { IFilter } from './intefaces'

export function getOptions(
  fields: string[],
  filters: IFilter[] = [],
  range: number[] = [],
) {
  return {
    select: `select=${fields.join()}`,
    filterString: getModifierString(filters),
    rangeString: getRangeString(range),
  }
}

export function getRangeString(range: number[]) {
  if (range.length === 2 && range[0] >= 0 && range[1] > range[0]) {
    return range.join('-')
  } else {
    return false
  }
}

export function getModifierString(filter: IFilter[] = []) {
  return filter
    .map((filter) => `${filter.field}=${filter.relationship}.${filter.value}`)
    .join('&')
}

export function getBaseUrl(url: string, table: string) {
  return `${url}/rest/v1/${table}`
}

export function getFinalUrl(url: string, filter: string, select: string) {
  return `${url}?${filter && `${filter}${select && '&'}`}${
    select && `${select}`
  }`
}
