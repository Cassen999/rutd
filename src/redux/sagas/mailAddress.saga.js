import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateMailAddressSaga(action) {
  console.log("In updateMailAddressSaga...");
  console.log("payload:", action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.put("api/question/mailaddress", action.payload, config);
  } catch (error) {
    console.log('Error in updateMailAddressSaga', error);
  }
}
  

function* mailAddressSaga() {
    yield takeLatest('UPDATE_MAIL_ADDRESS', updateMailAddressSaga);
}

export default mailAddressSaga;