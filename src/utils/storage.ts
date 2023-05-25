import { RefreshTokenResponse } from '../store/authStore/interface'

export const KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  USER_ID: 'user_id',
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

export const setUserId = (userId: number) => {
  localStorage.setItem(KEYS.USER_ID, userId.toString())
}

export const getUserId = () => {
  return localStorage.getItem(KEYS.USER_ID) || undefined
}
