import { call, put, takeEvery } from "redux-saga/effects";

import { REGISTER_USER_REQUEST } from "./userActionsType";

import { registerUserFailure, registerUserSuccess } from "./userActions";

import { userRegisterApi } from "./userRegisterApi";

//worker saga
function* registerUserWorkerSaga(action) {
  try {
    const data = yield call(userRegisterApi, action.payload);
    yield put(registerUserSuccess(data));
  } catch (error) {
    yield put(registerUserFailure("Api data register failed!"));
  }
}

//watcher saga effects
export function* registerUserWatcherSaga() {
  yield takeEvery(REGISTER_USER_REQUEST, registerUserWorkerSaga);
}
