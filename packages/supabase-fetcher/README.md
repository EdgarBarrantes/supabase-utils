# Supabase fetcher

Simple fetcher for use when for some reason, supabase api it's hard to use, for example: in NextJS getServerSideProps.

## Example

```ts
// Getting variables inside getServerSideProps.
const { uuid } = context.query
const [submissionId] = uuid
  ? typeof uuid === 'object'
    ? uuid
    : [uuid, undefined]
  : []
const authCookie = context.req?.headers.cookie
const authData = cookie.parse(authCookie || '') // cookie parsing package
const token = authData['sb:token']

const { getEntries } = getSupabaseFetcher(apiUrl, apiKey)
// Filtering by uuid column, this is the default. It will return an array of one.
const data = await getEntries(
  'consumers', // table
  ['uuid', 'name'], // fields
  token,
  uuid, // can be the uuid string, by default it will look in the uuid column
  'id', // but you can specify a column using this parameter
)

// Filtering by specific filters.
const data = await getEntries(
  'consumers', // table
  ['uuid', 'name'], // fields
  token,
  [{ field: 'age', relationship: 'lt', value: '21' }],
)
```
