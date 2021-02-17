import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* maladySaga() {
  yield takeLatest("FETCH_MALADY", fetchMaladySaga);
  yield takeLatest("UPDATE_MALADY", updateMaladySaga);
}

function* updateMaladySaga(action) {
  console.log("In updateMaladySaga...");
  console.log("payload:", action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const id = action.payload.userId;
    yield axios.put(`api/question/malady/${id}`, action.payload, config);
    yield put({ type: 'FETCH_VET_INFO', payload: id });
  } catch (error) {
    console.log('Error in updateMaladySaga', error);
  }
}

function* fetchMaladySaga(action) {
  console.log("In fetchHealthSaga...");
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.get(`/api/malady`, config);
    yield put({ type: "SET_MALADY", payload: response.data });
  } catch (error) {
    console.log("Error in fetchMaladySaga", error);
  }
}

export default maladySaga;