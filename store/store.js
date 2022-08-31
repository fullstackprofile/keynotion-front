import { configureStore, combineReducers } from '@reduxjs/toolkit'

import cardsSlice from './cardsSlice'
import userSlice from './userSlice'
import ordersSlice from './ordersSlice'
import ordersDetails from './ordersDetails'

const reducerCard = combineReducers({
  cards: cardsSlice,
  user: userSlice,
  orders: ordersSlice,
  ordersDetails: ordersDetails,
})

const store = configureStore({
  reducer: reducerCard,
})

export default store
