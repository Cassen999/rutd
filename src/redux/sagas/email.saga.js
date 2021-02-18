import axios from "axios";
import { takeLatest } from "redux-saga/effects";

function* postEmail(action) {
  console.log("In postEmail action.payload", action.payload);
  try {
    const response = yield axios.post(`/api/email`, action.payload);
    // yield put({type: 'SET_EMAIL', payload: response.data});
    console.log("response.data from POST email:", response.data);
  } catch (error) {
    console.log("error with POST email", error);
  }
}

function* emailSaga() {
  yield takeLatest("POST_EMAIL", postEmail);
}

export default emailSaga;
