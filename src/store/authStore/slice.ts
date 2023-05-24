import { createSlice } from '@reduxjs/toolkit'
import { register } from '../../utils/reducerRegistry'
import { LOGIN } from './type'

const authSlice = createSlice({
  name: LOGIN,
  initialState: {
    user: {
      username: '',
      role: 'user',
      name: '',
    },
    isLoading: false,
  },
  reducers: {
    loginPending: (state) => {
      state.isLoading = true
    },
    loginSuccess: (state, action) => {
      state.isLoading = false
      const data = action.payload
      state.user = data
    },
    loginFailure: (state) => {
      state.isLoading = false
    },
  },
})

export default authSlice.reducer
register(authSlice.name, authSlice.reducer)

export const { loginPending, loginSuccess, loginFailure } = authSlice.actions
