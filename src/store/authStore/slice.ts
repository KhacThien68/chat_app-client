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
    login: (state, action) => {
      console.log(action.payload)
      state.isLoading = true
    },
    loginSuccess: (state, action) => {
        state.isLoading = false
        state.user = action.payload
    },
    loginFailure: (state) => {
        state.isLoading = false
    }
  },
  extraReducers: (builder) => {},
})

export default authSlice.reducer
register(authSlice.name, authSlice.reducer)

export const { login, loginSuccess, loginFailure } = authSlice.actions;