import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null,
  role: null,
  isAuth: false,
  error: null,
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userDataRecieved: (state, action) => {
      const { email, role } = action.payload
      state.email = email
      state.role = role
      state.isAuth = true
    },
    userCleared: state => {
      state.email = null
      state.role = null
      state.isAuth = false
      state.error = null
    },
  },
})

const { reducer: userReducer, actions } = userSlice
const { userDataRecieved, userCleared } = actions

export const getUserAuthState = () => state => state.user.isAuth
export const getUserRole = () => state => state.user.role

export const getUserData = () => state => {
  const { email, role } = state.user
  return { email, role }
}
export const setUserData = payload => dispatch => {
  dispatch(userDataRecieved(payload))
}
export const clearUser = () => dispatch => {
  dispatch(userCleared())
}
export default userReducer
