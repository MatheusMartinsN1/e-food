import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type DeliveryState = {
  receiver: string
  address: {
    description: string
    city: string
    zipCode: string
    number: number
    complement?: string
  }
}

const initialState: DeliveryState = {
  receiver: '',
  address: {
    description: '',
    city: '',
    zipCode: '',
    number: 0,
    complement: ''
  }
}

const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    setDelivery: (state, action: PayloadAction<DeliveryState>) => {
      return action.payload
    },
    clearDelivery: () => initialState
  }
})

export const { setDelivery, clearDelivery } = deliverySlice.actions
export default deliverySlice.reducer
