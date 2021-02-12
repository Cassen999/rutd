import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateBranchSaga(action) {
  console.log("In updateBranchSaga...");
  console.log("payload:", action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.put("api/question/branch", action.payload, config);
  } catch (error) {
    console.log('Error in updateBranchSaga', error);
  }
}
  

function* branchSaga() {
    yield takeLatest('UPDATE_BRANCH', updateBranchSaga);
}

export default branchSaga;