import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  user: '',
  userToken: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState: defaultState,
  reducers: {
    addUser(state, action) {
      state.user = action.payload
    },
    addUserToken(state, action) {
      state.userToken = action.payload
    },
  },
})
export default userSlice.reducer
export const { addUser, addUserToken } = userSlice.actions
