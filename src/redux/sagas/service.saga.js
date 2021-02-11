import axios from "axios";
import { takeLatest } from "redux-saga/effects";
//  put

function* serviceSaga() {
  yield takeLatest("UPDATE_SERVICE", updateServiceSaga);
}

function* updateServiceSaga(action) {
  console.log("In updateServiceHistorySaga...");
  console.log("payload:", action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.put("api/service", action.payload, config);
    // yield put({ type: "FETCH_ART", payload: response.data });
  } catch (error) {
    console.log("Update service failed", error);
  }
}

export default serviceSaga;
