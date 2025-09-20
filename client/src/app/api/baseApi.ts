import { fetchBaseQuery } from '@reduxjs/toolkit/query'

const customBaseQuery = fetchBaseQuery({
  baseUrl: 'https://localhost:5001/api'
})

const sleep = () => new Promise(resolve => setTimeout(resolve, 1000))