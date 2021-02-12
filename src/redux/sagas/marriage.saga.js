import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateMarriageSaga(action) {
  console.log("In updateMarriageSaga...");
  console.log("payload:", action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.put("api/question/marriage", action.payload, config);
  } catch (error) {
    console.log('Error in updateMarriageSaga', error);
  }
}
  

function* marriageSaga() {
    yield takeLatest('UPDATE_MARRIAGE', updateMarriageSaga);
}

export default marriageSaga;