import { createSlice } from '@reduxjs/toolkit'
import { register } from '../../utils/reducerRegistry'

const authSlice = createSlice({
  name: 'AUTH',
  initialState: {
    user: {
      username: '',
      role: 'user',
      name: '',
    },
    isLoading: false,
  },
  reducers: {
    signupPending: (state) => {
      state.isLoading = true
    },
    signupSuccess: (state, action) => {
      state.isLoading = false
      const data = action.payload
      state.user = data
    },
    signupFailure: (state) => {
      state.isLoading = false
    },

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

export const { loginPending, loginSuccess, loginFailure, signupPending, signupSuccess, signupFailure } = authSlice.actions
