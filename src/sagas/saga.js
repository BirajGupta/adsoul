import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  REQUEST_API_DATA,
  receiveApiData,
  REQUEST_ONE_APP_SAGA,
  receiveOneAppData,
} from "../global/actions";
import { fetchData, fetchAppData } from "../api/api";

function* getApiData() {
  try {
    const data = yield call(fetchData);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

function* allApps() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}

function* getOneAppData(action) {
  try {
    const data = yield call(fetchAppData, action.data);
    yield put(receiveOneAppData(data));
  } catch (e) {
    console.log(e);
  }
}

function* oneAppSaga() {
  yield takeLatest(REQUEST_ONE_APP_SAGA, getOneAppData);
}

export default function* rootSaga() {
  yield all([allApps(), oneAppSaga()]);
}
