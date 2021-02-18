import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// These sagas FETCH values from the database to populate corresponding dropdown selects

function* getGenderSaga(action) {
  try {
    const response = yield axios.get("api/dropdown/gender");
    yield put({type: 'SET_GENDER_DROPDOWN', payload: response.data})
  } catch (error) {
    console.log("Error in updateCompensationSaga", error);
  }
}

function* getMarriageSaga(action) {
  try {
    const response = yield axios.get("api/dropdown/married");
    yield put({type: 'SET_MARRIAGE_DROPDOWN', payload: response.data})
  } catch (error) {
    console.log("Error in updateCompensationSaga", error);
  }
}

function* fetchPercentageSaga(action) {
  try {
    const response = yield axios.get(`/api/dropdown/percentage`);
    yield put({ type: "SET_PERCENTAGE", payload: response.data });
  } catch (error) {
    console.log("Error in fetchPercentage", error);
  }
}

function* getBranchSaga(action) {
  try {
    const response = yield axios.get("api/dropdown/branch");
    yield put({type: 'SET_BRANCH_DROPDOWN', payload: response.data})
  } catch (error) {
    console.log("Error in getBranchSaga", error);
  }
}

function* getRankSaga(action) {
  try {
    const response = yield axios.get("api/dropdown/rank");
    yield put({type: 'SET_RANK_DROPDOWN', payload: response.data})
  } catch (error) {
    console.log("Error in getRankSaga", error);
  }
}

function* getStatusSaga(action) {
  try {
    const response = yield axios.get("api/dropdown/status");
    yield put({type: 'SET_STATUS', payload: response.data})
  } catch (error) {
    console.log("Error in getStatusSaga", error);
  }
}

function* getDischargeSaga(action) {
  try {
    const response = yield axios.get("api/dropdown/discharge");
    yield put({type: 'SET_DISCHARGE', payload: response.data})
  } catch (error) {
    console.log("Error in getServiceSaga", error);
  }
}

function* fetchMaladySaga(action) {
  try {
    const response = yield axios.get(`/api/dropdown/injury`);
    yield put({ type: "SET_MALADY", payload: response.data });
  } catch (error) {
    console.log("Error in fetchMaladySaga", error);
  }
}

function* dropdownSaga() {
  yield takeLatest("FETCH_GENDER", getGenderSaga);
  yield takeLatest("FETCH_MARRIAGE", getMarriageSaga);
  yield takeLatest("FETCH_STATUS", getStatusSaga);
  yield takeLatest("FETCH_RANK", getRankSaga);
  yield takeLatest("FETCH_DISCHARGE", getDischargeSaga);
  yield takeLatest("FETCH_BRANCH", getBranchSaga);
  yield takeLatest("FETCH_PERCENTAGE", fetchPercentageSaga);
  yield takeLatest("FETCH_MALADY", fetchMaladySaga);
}

export default dropdownSaga;