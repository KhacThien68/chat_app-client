import { LoginParams, SignupParams } from './interface'
import { LOGIN, LOGOUT, SIGNUP } from './type'

export const login = (params: LoginParams) => ({
  type: LOGIN,
  params,
})

export const signup = (params: SignupParams) => ({
  type: SIGNUP,
  params,
})

export const logout = () => ({
  type: LOGOUT
})

