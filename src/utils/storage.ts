import { RefreshTokenResponse, User } from '../store/authStore/interface'

export const KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  USER: 'user',
}

export const setTokens = ({
  accessToken,
  refreshToken,
}: RefreshTokenResponse) => {
  localStorage.setItem(KEYS.ACCESS_TOKEN, accessToken)
  localStorage.setItem(KEYS.REFRESH_TOKEN, refreshToken)
}

type Tokens = Partial<RefreshTokenResponse>

export const getTokens = (): Tokens => {
  const accessToken = localStorage.getItem(KEYS.ACCESS_TOKEN) || undefined
  const refreshToken = localStorage.getItem(KEYS.REFRESH_TOKEN) || undefined
  return { accessToken, refreshToken }
}

export const clearTokens = (): void => {
  localStorage.removeItem(KEYS.ACCESS_TOKEN)
  localStorage.removeItem(KEYS.REFRESH_TOKEN)
}

export const setUser = (user: User) => {
  localStorage.setItem(KEYS.USER, JSON.stringify(user))
}

export const getUser = () => {
  return localStorage.getItem(KEYS.USER) || undefined
}
