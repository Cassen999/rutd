import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updatePhoneSaga(action) {
  console.log("In updatePhoneSaga...");
  console.log("payload:", action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.put("api/question/phone", action.payload, config);
  } catch (error) {
    console.log('Error in updatePhoneSaga', error);
  }
}
  

function* phoneSaga() {
    yield takeLatest('UPDATE_PHONE', updatePhoneSaga);
}

export default phoneSaga;