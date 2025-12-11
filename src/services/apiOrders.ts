import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    createOrder: builder.mutation<OrderResponse, OrderPayload>({
      query: (body) => ({
        url: 'confirmation',
        method: 'POST',
        body
      })
    })
  })
})

export const { useCreateOrderMutation } = orderApi
