import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateRankSaga(action) {
  console.log("In updateRankSaga...");
  console.log("payload:", action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.put("api/question/rank", action.payload, config);
  } catch (error) {
    console.log('Error in updateRankSaga', error);
  }
}
  

function* rankSaga() {
    yield takeLatest('UPDATE_RANK', updateRankSaga);
}

export default rankSaga;