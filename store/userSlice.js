import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  user: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState: defaultState,
  reducers: {
    addUser(state, action) {
      console.log(action.payload, 'useraction')
      state.user = action.payload
    },
  },
})
export default userSlice.reducer
export const { addUser } = userSlice.actions
