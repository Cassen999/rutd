import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateStatusSaga(action) {
  console.log("In updateStatusSaga...");
  console.log("payload:", action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.put("api/question/status", action.payload, config);
  } catch (error) {
    console.log('Error in updateStatusSaga', error);
  }
}
  

function* statusSaga() {
    yield takeLatest('UPDATE_STATUS', updateStatusSaga);
}

export default statusSaga;