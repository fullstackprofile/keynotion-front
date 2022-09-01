import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  ordersDetails: [],
}

const ordersDetailsSlice = createSlice({
  name: 'ordersDetails',
  initialState: defaultState,
  reducers: {
    addOrdersDetails(state, action) {
      state.ordersDetails = [action.payload]
    },
  },
})
export default ordersDetailsSlice.reducer
export const { addOrdersDetails } = ordersDetailsSlice.actions
