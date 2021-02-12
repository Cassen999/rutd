import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* compensationSaga() {
  yield takeLatest("UPDATE_COMPENSATION", updateCompensationSaga);
  yield takeLatest("FETCH_PERCENTAGE", fetchPercentageSaga);
}

function* updateCompensationSaga(action) {
  console.log("In updateCompensationSaga...");
  console.log("payload:", action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const response = yield axios.put("api/question/compensation", action.payload, config);

  } catch (error) {
    console.log("Error in updateCompensationSaga", error);
  }
}

function* fetchPercentageSaga(action) {
  console.log("In fetchPercentageSaga...");
  
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const response = yield axios.get(`/api/compensation/percentage`, config);

    yield put({ type: "SET_PERCENTAGE", payload: response.data });
  } catch (error) {
    console.log("Error in fetchPercentage", error);
  }
}

export default compensationSaga;
