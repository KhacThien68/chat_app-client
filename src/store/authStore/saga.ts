import { call, put, takeLatest } from 'redux-saga/effects'
import { LoginAction, LoginCollection, ResponseStatusCode } from './interface'
import { LOGIN } from './type'
import { loginPending, loginFailure, loginSuccess } from './slice'
import { AUTH } from '../../constants/endpoint'
import { login } from '../../apis/enpoints/auth'
import { setTokens } from '../../utils/storage'

function* authLogin(action: LoginAction) {
  const { params } = action
  yield put(loginPending())

  try {
    const response: LoginCollection = yield call(login, AUTH.LOGIN, params)
    console.log(response)

    if (response.status === ResponseStatusCode.HTTP_OK) {
      if (response.user) {
        yield put(loginSuccess(response.user))
      } else {
        yield put(loginFailure())
      }
    }
    if (response.token) setTokens(response.token)
  } catch (e: any) {
    yield put(loginFailure())
  }
}

export default function* auth() {
  yield takeLatest(LOGIN, authLogin)
}
