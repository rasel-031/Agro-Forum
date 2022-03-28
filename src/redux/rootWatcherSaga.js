import { UserWatcherSaga } from "./user/userSaga";
import { all, fork } from "redux-saga/effects";

export function* rootWatcherSaga() {
  yield all([fork(UserWatcherSaga)]);
}
