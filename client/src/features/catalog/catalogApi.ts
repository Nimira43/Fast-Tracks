import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const catalogApi = createApi({
  reducerPath: 'catalogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://localhost:5001/api'
  }),
  endpoints: (builder) => ({})
})