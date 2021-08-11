# Supabase fetcher helpers

Includes a fetcher function and helpers.

```ts
const apiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY // Or however you store you're key.
const fetcher = getFetcher(apiKey)

const token = session.access_token // User's access token.
const apiUrl = process.env.NEXT_PUBLIC_SUPABASE_URL // https://something.supabase.co
const table = 'consumers'
const { select, filterString, rangeString } = getOptions(fields, filters, range)

const data = await fetcher(
  token,
  apiUrl,
  table,
  select,
  filterString,
  rangeString,
)
```
