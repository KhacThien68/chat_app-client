import { all } from 'redux-saga/effects'
import auth from '../store/authStore/saga'

export default function* rootSaga() {
  yield all([auth()])
}
