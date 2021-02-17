import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Updates vet's service history
function* updateServiceHistorySaga(action) {
    try {
      yield axios.put("/api/update/service", action.payload)
    } catch (error) {
      console.log("Update Service History Failed", error);
    }
}

// Changes vet's name in profile
function* addDemographicSaga(action) {
  try {
    yield axios.put("api/update/demographic",action.payload);
  } catch (error) {
    console.log("Art get request failed", error);
  }
}

// Updates injuries in vet's profile
function* updateMaladySaga(action) {
  try {
    const id = action.payload.userId;
    yield axios.put(`api/update/malady/${id}`, action.payload);
    yield put({ type: 'FETCH_VET_INFO', payload: id });
  } catch (error) {
    console.log('Error in updateMaladySaga', error);
  }
}

// Updates compensation, hazard, and purple heart values in vet's profile
function* updateMiscQuestions(action) {
  try {
    const id = action.payload.userId;
    yield axios.put(`/api/update/misc/${id}`, action.payload);
    yield put({ type: 'FETCH_VET_INFO', payload: id }); 
  } catch (error) {
    console.log('Update Failed for miscQuestionSaga', error);
  }
}

function* updateProfileSaga() {
  yield takeLatest('UPDATE_SERVICE_HISTORY',updateServiceHistorySaga);
  yield takeLatest("ADD_DEMOGRAPHIC", addDemographicSaga);
  yield takeLatest("UPDATE_MALADY", updateMaladySaga);
  yield takeLatest('UPDATE_MISC_QUESTIONS', updateMiscQuestions);
}

export default updateProfileSaga;