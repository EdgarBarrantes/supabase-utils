# Supabase utilities for consuming data

Monorepo that includes several packages related to interactions (mainly fetching data for now) with supabase.

### Supabase SWR

Allows using [SWR](https://swr.vercel.app/) with simple supabase queries.

[Examples](https://github.com/EdgarBarrantes/supabase-utils/blob/master/packages/supabase-swr/README.md)

#### Instalation

```bash
npm i @edgarbarrantes/supabase-swr
```

### Supabase fetcher

Allows fetching supabase data from the serverside getting the token from the api call. Useful for NextJS getServerSideProps.

[Examples](https://github.com/EdgarBarrantes/supabase-utils/blob/master/packages/supabase-fetcher/README.md)

#### Installation

```bash
npm i @edgarbarrantes/supabase-fetcher
```

### Supabase fetcher helpers

Includes a fetcher function and helpers. Used by the other packages, might be useful if you want to build something with it, not recomended to be used inside a project.

[Examples](https://github.com/EdgarBarrantes/supabase-utils/blob/master/packages/supabase-fetcher-helpers/README.md)

#### Instalation

```bash
npm i @edgarbarrantes/supabase-fetcher-helpers
```

## Notes

The `select` parameter can receive either the column's name, or the table there is a relationship with, for example: `chains(namespace,reference,name)`, where chains in the table the current table has a relationship with.
