export enum UserRoles {
  ADMIN = 'admin',
  USER = 'user',
}

export enum ResponseStatusCode {
  HTTP_FORBIDDEN = 403,
  HTTP_UNAUTHORIZED = 401,
  HTTP_OK = 200,
  HTTP_CREATED = 201,
  HTTP_TOO_MANY_REQUESTS = 429,
  HTTP_NOT_FOUND = 404,
  HTTP_BAD_REQUEST = 400,
  HTTP_INTERNAL_SERVER_ERROR = 500,
  HTTP_CONFLICT = 409,
  HTTP_UN_PROCESSABLE_ENTITY = 422,
}

export type LoginParams = {
  email: string
  password: string
}

export type LoginResponse = {
  token: {
    accessToken: string
    refreshToken: string
  }
  name: string
  login: string
}

export type RefreshTokenResponse = {
  accessToken: string
  refreshToken: string
}

export type AuthVariables = {
  login: { login: string; password: string; deviceId: string }
}

export type User = { username: string; role: UserRoles; name: string }

export type AuthStore = {
  user?: User
  loginResponse?: LoginResponse
  loading: boolean
  login: (data: LoginResponse & AuthVariables['login']) => void
  logout: () => void
}
