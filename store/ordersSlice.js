import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  orders: [],
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState: defaultState,
  reducers: {
    addOrders(state, action) {
      console.log(action, 'actionOrders')

      state.orders = [action.payload]
    },
  },
})
export default ordersSlice.reducer
export const { addOrders } = ordersSlice.actions
