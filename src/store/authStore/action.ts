import { LoginParams } from './interface'
import { LOGIN } from './type'

export const login = (params: LoginParams) => ({
  type: LOGIN,
  params,
})
