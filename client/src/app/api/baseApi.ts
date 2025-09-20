import { BaseQueryApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query'

const customBaseQuery = fetchBaseQuery({
  baseUrl: 'https://localhost:5001/api'
})

const sleep = () => new Promise(resolve => setTimeout(resolve, 1000))

export const baseQueryWithErrorHandling = async (
  args: string | FetchArgs, 
  api: BaseQueryApi,
  extraOptions: object
)