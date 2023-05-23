import { RefreshTokenResponse } from "../store/authStore/interface"

export const KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  ORG_ID: 'org_id',
  CLIENT_ID_KEY: 'client_id',
  COLUMNS_STATE: 'columns_state',
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
