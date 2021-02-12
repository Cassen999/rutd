import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateHomelessSaga(action) {
  console.log("In updateHomelessSaga...");
  console.log("payload:", action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.put("api/question/homeless", action.payload, config);
  } catch (error) {
    console.log('Error in updateHomelessSaga', error);
  }
}
  

function* homelessSaga() {
    yield takeLatest('UPDATE_HOMELESS', updateHomelessSaga);
}

export default homelessSaga;