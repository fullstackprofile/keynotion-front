import { configureStore, combineReducers } from '@reduxjs/toolkit'

import cardsSlice from './cardsSlice'
import userSlice from './userSlice'
import ordersSlice from './ordersSlice'

const reducerCard = combineReducers({
  cards: cardsSlice,
  user: userSlice,
  orders: ordersSlice,
})

const store = configureStore({
  reducer: reducerCard,
})

export default store
