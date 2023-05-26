import { call, put, takeLatest } from 'redux-saga/effects'
import {
  LoginAction,
  AuthCollection,
  ResponseStatusCode,
  SignupAction,
} from './interface'
import { LOGIN, LOGOUT, SIGNUP } from './type'
import {
  loginPending,
  loginFailure,
  loginSuccess,
  signupPending,
  signupSuccess,
  signupFailure,
  logoutPending,
  logoutFailure,
  logoutSuccess,
} from './slice'
import { AUTH } from '../../constants/endpoint'
import { login, logout, signup } from '../../apis/enpoints/auth'
import { clearTokens, clearUser, setTokens, setUser } from '../../utils/storage'

function* authLogin(action: LoginAction) {
  const { params } = action
  yield put(loginPending())

  try {
    const response: AuthCollection = yield call(login, AUTH.LOGIN, params)

    if (response.status === ResponseStatusCode.HTTP_OK) {
      if (response.user) {
        setUser(response.user)
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

function* authSignup(action: SignupAction) {
  const { params } = action
  yield put(signupPending())

  try {
    const response: AuthCollection = yield call(signup, AUTH.SIGNUP, params)

    if (response.status === ResponseStatusCode.HTTP_CREATED) {
      if (response.user) {
        setUser(response.user)
        yield put(signupSuccess(response.user))
      } else {
        yield put(signupFailure())
      }
    }
    if (response.token) setTokens(response.token)
  } catch (e: any) {
    yield put(loginFailure())
  }
}

function* authLogout() {
  yield put(logoutPending())

  try {
    const response: { status: number } = yield call(logout, AUTH.LOGOUT)
    if (response.status === ResponseStatusCode.HTTP_OK) {
      yield put(logoutSuccess())
      clearUser()
      clearTokens()
    } else {
      yield put(logoutFailure())
    }
  } catch (e: any) {
    yield put(logoutFailure())
  }
}

export default function* auth() {
  yield takeLatest(SIGNUP, authSignup)
  yield takeLatest(LOGIN, authLogin)
  yield takeLatest(LOGOUT, authLogout)
}
