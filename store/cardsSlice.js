import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  card: [],
}

const cardsSlice = createSlice({
  name: 'cards',
  initialState: defaultState,
  reducers: {
    addCard(state, action) {
      state.card = [action.payload]
    },
    deleteCard(state, action) {
      state.card = []
    },
  },
})
export default cardsSlice.reducer
export const { addCard, deleteCard } = cardsSlice.actions
