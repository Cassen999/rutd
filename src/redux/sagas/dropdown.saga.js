import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* getGenderSaga(action) {
  try {
    const response = yield axios.get("api/dropdown/gender");
    console.log('get gender saga response.data',response.data)
    yield put({type: 'SET_GENDER_DROPDOWN', payload: response.data})
  } catch (error) {
    console.log("Error in updateCompensationSaga", error);
  }
}

function* getMarriageSaga(action) {
  try {
    const response = yield axios.get("api/dropdown/marriage");
    console.log('get marriage saga response.data',response.data)
    yield put({type: 'SET_MARRIAGE_DROPDOWN', payload: response.data})
  } catch (error) {
    console.log("Error in updateCompensationSaga", error);
  }
}

function* getBranchSaga(action) {
  try {
    const response = yield axios.get("api/dropdown/branch");
    console.log('get branch saga response.data',response.data)
    yield put({type: 'SET_BRANCH_DROPDOWN', payload: response.data})
  } catch (error) {
    console.log("Error in getBranchSaga", error);
  }
}

function* getRankSaga(action) {
  try {
    const response = yield axios.get("api/dropdown/rank");
    console.log('get rank saga response.data',response.data)
    yield put({type: 'SET_RANK_DROPDOWN', payload: response.data})
  } catch (error) {
    console.log("Error in getRankSaga", error);
  }
}

function* getStatusSaga(action) {
  try {
    const response = yield axios.get("api/dropdown/status");
    console.log('get status saga response.data',response.data)
    yield put({type: 'SET_STATUS', payload: response.data})
  } catch (error) {
    console.log("Error in getStatusSaga", error);
  }
}


function* getDischargeSaga(action) {
  try {
    const response = yield axios.get("api/dropdown/discharge");
    console.log('get service saga response.data',response.data)
    yield put({type: 'SET_DISCHARGE', payload: response.data})
  } catch (error) {
    console.log("Error in getServiceSaga", error);
  }
}

function* dropdownSaga() {
    yield takeLatest("FETCH_GENDER", getGenderSaga);
    yield takeLatest("FETCH_MARRIAGE", getMarriageSaga);
    yield takeLatest("FETCH_STATUS", getStatusSaga);
    yield takeLatest("FETCH_RANK", getRankSaga);
    yield takeLatest("FETCH_DISCHARGE", getDischargeSaga);
    yield takeLatest("FETCH_BRANCH", getBranchSaga);
  }

export default dropdownSaga;