import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
//import { createStore, combineReducers, applyMiddleware } from 'redux';
//import registerServiceWorker from './registerServiceWorker';

// worker Saga: will be fired on "FETCH_SECRETS" actions

function* maladySaga() {
  yield takeLatest("FETCH_MALADY", fetchMaladySaga);

  yield takeLatest("UPDATE_MALADY", updateMaladySaga);
}

function* updateMaladySaga(action) {
  console.log("In updateHealthSaga...");
  console.log("payload:", action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const response = yield axios.put('api/malady', action.payload, config);

    yield put({ type: "FETCH_ART", payload: response.data });
  } catch (error) {
    console.log("Art get request failed", error);
  }
}

function* fetchMaladySaga(action) {
  console.log("In fetchHealthSaga...");
  // console.log('payload:', action.payload)

  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const response = yield axios.get(`/api/malady`, config);

    yield put({ type: "SET_MALADY", payload: response.data });
  } catch (error) {
    console.log("GET health request failed", error);
  }
}

export default maladySaga;
