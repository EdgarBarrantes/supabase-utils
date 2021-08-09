# Supabase SWR

Allows using [SWR](https://swr.vercel.app/) with simple supabase queries.

## Examples:

```ts
export const { useGetEntries } = getSupabaseSWR(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
)

const {
  entries: users,
  isLoading,
  isError,
} = useGetEntries<Users>(
  session.access_token,
  // Name of the table.
  'projects',
  // Fields to get the query from.
  ['name', 'uuid'],
  // Collection of filters
  [
    { field: 'order', relationship: 'name', value: 'asc' },
    { field: 'age', relationship: 'lt', value: '18' },
  ],
  // Range
  [0, 2],
)
```
