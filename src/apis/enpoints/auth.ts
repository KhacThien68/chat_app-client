import request, { authRequest } from "../request"

export const login = (endpoint:string, data: any) => {
  return authRequest.post(endpoint, data)
}

export const signup = (endpoint:string, data: any) => {
  return authRequest.post(endpoint, data)
}

export const logout = (endpoint:string) => {
  return request.post(endpoint)
}