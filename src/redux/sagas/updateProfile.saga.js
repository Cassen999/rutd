import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Updates vet's service history
function* updateServiceHistorySaga(action) {
    console.log("service history payload:", action.payload);
    try {
      console.log("In updateServiceHistorySaga...");
    } catch (error) {
      console.log("Update Service History Failed", error);
    }
}

  // Changes vet's name in profile
function* addDemographicSaga(action) {
try {
    yield axios.put(
        "api/demographic",
        action.payload,
    );
    } catch (error) {
        console.log("Art get request failed", error);
    }
}

// Updates injuries in vet's profile
function* updateMaladySaga(action) {
    console.log("In updateMaladySaga...");
    console.log("payload:", action.payload);
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      };
      const id = action.payload.userId;
      yield axios.put(`api/question/malady/${id}`, action.payload, config);
      yield put({ type: 'FETCH_VET_INFO', payload: id });
    } catch (error) {
      console.log('Error in updateMaladySaga', error);
    }
}

function* updateMiscQuestions(action) {
    console.log("In updateMiscQuestionSaga...");
    console.log("payload:", action.payload);
    try {
      const id = action.payload.userId;
      yield axios.put(`/api/question/misc/${id}`, action.payload);
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