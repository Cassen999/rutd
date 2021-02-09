import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
//import { createStore, combineReducers, applyMiddleware } from 'redux';
//import registerServiceWorker from './registerServiceWorker';

// worker Saga: will be fired on "FETCH_SECRETS" actions

function* serviceSaga() {
  yield takeLatest("UPDATE_SERVICE_HISTORY", updateServiceSaga);
}

function* updateServiceSaga(action) {
  console.log('In updateServiceSaga...')
  console.log('payload:', action.payload)
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const response = yield axios.put('api/service', action.payload, config);

    // yield put({ type: ''});
  } catch (error) {
    console.log("Art get request failed", error);
  }
}

export default serviceSaga;
