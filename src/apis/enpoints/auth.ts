import { authRequest } from "../request"

export const login = (endpoint:string, data: any) => {
  return authRequest.post(endpoint, data)
}