import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateEndDateSaga(action) {
  console.log("In updateEndDateSaga...");
  console.log("payload:", action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.put("api/question/enddate", action.payload, config);
  } catch (error) {
    console.log('Error in updateEndDateSaga', error);
  }
}
  

function* endDateSaga() {
    yield takeLatest('UPDATE_END_DATE', updateEndDateSaga);
}

export default endDateSaga;