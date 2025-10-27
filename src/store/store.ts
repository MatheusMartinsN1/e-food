import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import modalReducer from './modalSlice'
import orderReducer from './orderSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    order: orderReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
