import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  card: [],
}

const cardsSlice = createSlice({
  name: 'cards',
  initialState: defaultState,
  reducers: {
    addCard(state, action) {
      console.log(action.payload, 'payload')
      state.card = [action.payload]
    },
  },
})
export default cardsSlice.reducer
export const { addCard } = cardsSlice.actions
