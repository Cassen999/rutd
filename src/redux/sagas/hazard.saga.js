import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateHazardSaga(action) {
  console.log("In updateHazardSaga...");
  console.log("payload:", action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.put("api/question/hazard", action.payload, config);
  } catch (error) {
    console.log('Error in updateHazardSaga', error);
  }
}
  

function* hazardSaga() {
    yield takeLatest('UPDATE_HAZARD', updateHazardSaga);
}

export default hazardSaga;