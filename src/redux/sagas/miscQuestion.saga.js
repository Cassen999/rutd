import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* updateMiscQuestions(action) {
  console.log("In updateMiscQuestionSaga...");
  console.log("payload:", action.payload);
  try {
    const id = action.payload.userId;
    yield axios.put(`/api/question/misc/${id}`, action.payload);
    yield put({ type: 'FETCH_VET_ID', payload: id }); 
  } catch (error) {
    console.log('Update Failed for miscQuestionSaga', error);
  }
}

function* miscQuestionSaga() {
  yield takeLatest('UPDATE_MISC_QUESTIONS', updateMiscQuestions);
}

export default miscQuestionSaga;