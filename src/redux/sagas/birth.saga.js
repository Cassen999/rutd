import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateBirthSaga(action) {
  console.log("In updateBirthSaga...");
  console.log("payload:", action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.put("api/question/birth", action.payload, config);
  } catch (error) {
    console.log('Error in updateBirthSaga', error);
  }
}
  

function* birthSaga() {
    yield takeLatest('UPDATE_BIRTH', updateBirthSaga);
}

export default birthSaga;