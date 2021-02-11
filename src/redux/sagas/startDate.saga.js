import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateStartDateSaga(action) {
  console.log("In updateStartDateSaga...");
  console.log("payload:", action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.put("api/question/startdate", action.payload, config);
  } catch (error) {
    console.log('Error in updateStartDateSaga', error);
  }
}
  

function* startDateSaga() {
    yield takeLatest('UPDATE_START_DATE', updateStartDateSaga);
}

export default startDateSaga;