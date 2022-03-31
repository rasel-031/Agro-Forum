import { call, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { LOGIN_USER_REQUEST, REGISTER_USER_REQUEST } from "./userActionsType";
import {
  loginUserFailure,
  loginUserSuccess,
  registerUserFailure,
  registerUserSuccess,
} from "./userActions";

import { userRegisterApi } from "./userRegisterApi";
import { userLoginApi } from "./userLoginApi";

//worker saga
function* registerUserWorkerSaga(action) {
  try {
    const data = yield call(userRegisterApi, action.payload);
    yield put(registerUserSuccess(data));
    //toastify
    toast.success(data.message);
  } catch (error) {
    //toastify
    toast.error(error.response.data.message);
    yield put(registerUserFailure(error.response.data));
  } finally {
    toast.clearWaitingQueue();
  }
}

function* loginUserWorkerSaga(action) {
  try {
    const data = yield call(userLoginApi, action.payload);
    yield put(loginUserSuccess(data));
    //toastify
    toast.success(data.message);
  } catch (error) {
    //toastify
    toast.error(error.response.data.message);
    yield put(loginUserFailure(error.response.data));
  } finally {
    toast.clearWaitingQueue();
  }
}

//watcher saga effects
export function* UserWatcherSaga() {
  yield takeLatest(REGISTER_USER_REQUEST, registerUserWorkerSaga);
  yield takeLatest(LOGIN_USER_REQUEST, loginUserWorkerSaga);
}
