import { createSlice } from '@reduxjs/toolkit'
import { AuthState } from './interface'
import { RootState } from '../../app/store'

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: undefined,
    isLoading: false,
  } as AuthState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
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

    logoutPending: (state) => {
      state.isLoading = true
    },
    logoutSuccess: (state) => {
      state.isLoading = false
      state.user = undefined
    },
    logoutFailure: (state) => {
      state.isLoading = false
    },
  },
})

export const authReducer = slice.reducer
export const getUser = (state: RootState) => state[slice.name].user

export const {
  setUser,
  loginPending,
  loginSuccess,
  loginFailure,
  signupPending,
  signupSuccess,
  signupFailure,
  logoutPending,
  logoutSuccess,
  logoutFailure,
} = slice.actions
