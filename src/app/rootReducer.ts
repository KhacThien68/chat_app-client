import { combineReducers } from '@reduxjs/toolkit'
import { authReducer } from '../store/authStore/slice'
import { StoreReducer } from './slice'

const rootReducer = combineReducers({
  store: StoreReducer,
  auth: authReducer,
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer
