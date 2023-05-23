import { call, put, takeLatest } from 'redux-saga/effects'
import { LoginParams, ResponseStatusCode, User } from './interface'
import { LOGIN } from './type'
import { loginFailure, loginSuccess } from './slice'
import { AUTH } from '../../constants/endpoint'
import { login } from '../../apis/enpoints/auth'

type LoginAction = {
  type: string
  params: LoginParams
}

type LoginCollection = {
  status: ResponseStatusCode
  data: {
    user: User
    accessToken: string
    refreshToken: string
    success: boolean
  }
}

function* authLogin(action: LoginAction) {
  const { params } = action
  console.log(11111111);
  
  try {
    const response: LoginCollection = yield call(login, AUTH.LOGIN, params)
    console.log(response);
    
    if (response.status === ResponseStatusCode.HTTP_OK) {
      if (response.data.success) {
        yield put(loginSuccess(response))
      } else {
        yield put(loginFailure())
      }
    }
  } catch (e: any) {
    yield put(loginFailure())
  }
}

export default function* auth() {
  yield takeLatest(LOGIN, authLogin)
}
