import { configureStore, combineReducers } from '@reduxjs/toolkit'

import cardsSlice from './cardsSlice'
import userSlice from './userSlice'

const reducerCard = combineReducers({
  cards: cardsSlice,
  user: userSlice,
})

const store = configureStore({
  reducer: reducerCard,
})

export default store
