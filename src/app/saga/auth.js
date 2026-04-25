import { call, put, takeLatest } from 'redux-saga/effects';
import { authLogin, authRegister } from '../api/auth';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../action';

function* handleLogin(action) {
  try {
    const data = yield call(authLogin, action.payload);
    yield put({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, error: error.message });
  }
}

function* handleRegister(action) {
  try {
    const data = yield call(authRegister, action.payload);
    yield put({ type: REGISTER_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: REGISTER_FAILURE, error: error.message });
  }
}

export function* watchAuth() {
  yield takeLatest(LOGIN_REQUEST, handleLogin);
  yield takeLatest(REGISTER_REQUEST, handleRegister);
}