import { fork, put, takeEvery } from "redux-saga/effects";
import * as constants from "./constants";
import * as api from "./api";


function* functionSagaName({payload}) {
  try {
    const response = yield api.apiFunctionName(payload);

    if (response) {
      yield put({ type: constants.ACTION_TYPE, payload: response });
    }
  } catch (e) {
    console.log(e);
  }
}

export default function* MainSagaName() {
  yield [fork(takeEvery, constants.ACTION_TYPE, functionSagaName)];
}
