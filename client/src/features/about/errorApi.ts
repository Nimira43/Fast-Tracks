import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithErrorHandling } from '../../app/api/baseApi'

export const errorApi = createApi({
  reducerPath: 'errorApi',
  baseQuery: baseQueryWithErrorHandling,
  endpoints: (builder) => ({
    get400Error: builder.query<void, void>({
      query: () => ({url: 'buggy/bad-request'})
    })
  })
})