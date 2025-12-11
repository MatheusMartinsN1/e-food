import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiRestaurants = createApi({
  reducerPath: 'apiRestaurants',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => '/restaurantes'
    }),
    getRestaurantById: builder.query<Restaurant, number>({
      query: (id) => `/restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantByIdQuery, useGetRestaurantsQuery } =
  apiRestaurants
