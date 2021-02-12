import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updatePurpleHeartSaga(action) {
  console.log("In updatePurpleHeartSaga...");
  console.log("payload:", action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.put("api/question/purpleHeart", action.payload, config);
  } catch (error) {
    console.log('Error in updatePurpleHeartSaga', error);
  }
}
  

function* purpleHeartSaga() {
    yield takeLatest('UPDATE_PURPLE_HEART', updatePurpleHeartSaga);
}

export default purpleHeartSaga;