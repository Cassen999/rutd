import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateDischargeSaga(action) {
  console.log("In updateDischargeSaga...");
  console.log("payload:", action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.put("api/question/discharge", action.payload, config);
  } catch (error) {
    console.log('Error in updateDischargeSaga', error);
  }
}
  

function* dischargeSaga() {
    yield takeLatest('UPDATE_DISCHARGE', updateDischargeSaga);
}

export default dischargeSaga;