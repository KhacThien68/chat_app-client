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

export type SignupParams = {
  firstName: String
  lastName: String
  email: String
  password: String
}

export type SignupAction = {
  type: string
  params: SignupParams
}

export type LoginParams = {
  email: string
  password: string
}

export type AuthResponse = {
  token: {
    accessToken: string
    refreshToken: string
  }
  name: string
  login: string
}

export type LoginAction = {
  type: string
  params: LoginParams
}

export type AuthCollection = {
  status: ResponseStatusCode
  user: User
  token: {
    accessToken: string
    refreshToken: string
  }
}

export type RefreshTokenResponse = {
  accessToken: string
  refreshToken: string
}

export type AuthVariables = {
  login: { login: string; password: string }
}

export type User = { username: string; role: UserRoles; name: string, id: number }

export type AuthStore = {
  user?: User
  loginResponse?: AuthResponse
  loading: boolean
  login: (data: AuthResponse & AuthVariables['login']) => void
  logout: () => void
}
