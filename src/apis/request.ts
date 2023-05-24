/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import { message } from 'antd'
import axios from 'axios'
import { clearTokens, getTokens, setTokens } from '../utils/storage'
import { RefreshTokenResponse } from '../store/authStore/interface'

const BASE_URL = 'http://localhost:3333/'

let refreshing = false

// -----------------------------
// Utils
const refreshAccessToken = async (): Promise<string | undefined> => {
  const { refreshToken } = getTokens()
  try {
    refreshing = true
    if (!refreshToken) return

    const { data } = await axios
      .create({ baseURL: BASE_URL })
      .post<RefreshTokenResponse>('/refresh-token', { refreshToken })
    // @ts-ignore
    if (!data || !data.accessToken) return

    setTokens(data)
    return data.accessToken
  } catch (err) {
    return undefined
  } finally {
    refreshing = false
  }
}

// -----------------------------
// Common request
const request = axios.create({
  baseURL: BASE_URL,
})

request.interceptors.request.use(
  async (config: any) => {
    const { accessToken } = getTokens()
    if (accessToken) {
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
      }
      config.params = {
        ...config.params,
      }
    }
    return config
  },
  (error) => Promise.reject(error),
)

request.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config
    if (
      !refreshing &&
      [401, 403].includes(error?.response?.status) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true
      const accessToken = await refreshAccessToken()
      if (!accessToken) {
        clearTokens()
        // localStorage.removeItem('authStore')
        message.info({
          content: 'Token expired',
        })
        // logout()

        // navigate('/auth/login')
        throw error
      }
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`

      //   navigate(0)
    }

    return Promise.reject(error)
  },
)

request.interceptors.response.use(
  (response) => {
    if (response.data.success) return response.data.data
    return Promise.reject(response.data)
  },
  (error) => {
    return Promise.reject(new Error(error.response.data.message))
  },
)

export default request

// -----------------------------
// Auth request
const authRequest = axios.create({
  baseURL: BASE_URL+'/auth',
})

authRequest.interceptors.request.use(
  async (config: any) => {
    const { accessToken } = getTokens()
    if (accessToken) {
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
      }
    }
    return config
  },
  (error) => Promise.reject(error),
)

authRequest.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
)

export { authRequest }
