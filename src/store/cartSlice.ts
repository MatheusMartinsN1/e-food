import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
  price: number
  id: number
  image: string
  title: string
}

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload)
    },
    clearCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

export const { addItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
