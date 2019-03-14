import { all } from "redux-saga/effects";
import { weather } from './weatherSaga';

export default function* rootSaga() {
  yield all([
    ...weather
  ]);
}
