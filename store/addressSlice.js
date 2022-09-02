import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  address: '',
}

const addressSlice = createSlice({
  name: 'address',
  initialState: defaultState,
  reducers: {
    addAddress(state, action) {
      state.address = action.payload
    },
  },
})
export default addressSlice.reducer
export const { addAddress } = addressSlice.actions
