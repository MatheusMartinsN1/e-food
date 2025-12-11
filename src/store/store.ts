import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import modalReducer from './modalSlice'
import orderReducer from './orderSlice'
import { apiRestaurants } from '../services/apiRestaurants'
import { orderApi } from '../services/apiOrders'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    order: orderReducer,

    [orderApi.reducerPath]: orderApi.reducer,
    [apiRestaurants.reducerPath]: apiRestaurants.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiRestaurants.middleware,
      orderApi.middleware
    )
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
