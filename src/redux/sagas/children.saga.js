import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateChildrenSaga(action) {
  console.log("In updateChildrenSaga...");
  console.log("payload:", action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.put("api/question/children", action.payload, config);
  } catch (error) {
    console.log('Error in updateChildrenSaga', error);
  }
}
  

function* childrenSaga() {
    yield takeLatest('UPDATE_CHILDREN', updateChildrenSaga);
}

export default childrenSaga;