export type HttpMethod = 'GET' | 'POST' | 'PATCH'

export interface IFilter {
  field: string
  relationship: string
  value: string
}
