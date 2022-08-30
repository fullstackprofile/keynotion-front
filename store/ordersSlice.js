import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  orders: [],
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState: defaultState,
  reducers: {
    addOrders(state, action) {
      state.orders = [action.payload]
      console.log(state.orders)
    },
  },
})
export default ordersSlice.reducer
export const { addOrders } = ordersSlice.actions
