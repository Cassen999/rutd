import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateGenderSaga(action) {
  console.log("In updateGenderSaga...");
  console.log("payload:", action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.put("api/question/gender", action.payload, config);
  } catch (error) {
    console.log('Error in updateGenderSaga', error);
  }
}
  

function* genderSaga() {
    yield takeLatest('UPDATE_GENDER', updateGenderSaga);
}

export default genderSaga;