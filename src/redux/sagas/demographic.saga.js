import axios from "axios";
import { takeLatest } from "redux-saga/effects";
// put

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
  } catch (error) {
    console.log("Art get request failed", error);
  }
}

function* updateServiceHistorySaga(action) {
  console.log("service history payload:", action.payload);
  try {
    console.log("In updateServiceHistorySaga...");
    const response = yield axios.put(
      "/api/service",
      action.payload
    );
  } catch (error) {
    console.log("Update Service History Failed", error);
  }
}

function* demographicSaga() {
  yield takeLatest("ADD_DEMOGRAPHIC", addDemographicSaga);
  yield takeLatest('UPDATE_SERVICE_HISTORY',updateServiceHistorySaga)
}

export default demographicSaga;
