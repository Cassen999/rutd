import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
//import { createStore, combineReducers, applyMiddleware } from 'redux';
//import registerServiceWorker from './registerServiceWorker';

// worker Saga: will be fired on "FETCH_SECRETS" actions

function* demographicSaga() {
  yield takeLatest("ADD_DEMOGRAPHIC", addDemographicSaga);
}

function* addDemographicSaga(action) {
  console.log("In addDemographicSaga...");
  console.log("payload:", action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const response = yield axios.post(
      "api/demographic",
      action.payload,
      config
    );

    // yield put({ type: 'FETCH_ART'});
  } catch (error) {
    console.log("Art get request failed", error);
  }
}

export default demographicSaga;
