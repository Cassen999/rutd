import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* getGenderSaga(action) {
  try {
    const response = yield axios.get("api/dropdown/gender");
    console.log('get gender saga response.data',response.data)
    yield put({type: 'SET_DROPDOWN', payload: response.data})
  } catch (error) {
    console.log("Error in updateCompensationSaga", error);
  }
}

function* getMarriageSaga(action) {
  try {
    const response = yield axios.get("api/dropdown/marriage");
    console.log('get marriage saga response.data',response.data)
    yield put({type: 'SET_DROPDOWN', payload: response.data})
  } catch (error) {
    console.log("Error in updateCompensationSaga", error);
  }
}

function* dropdownSaga() {
    yield takeLatest("FETCH_GENDER", getGenderSaga);
    yield takeLatest("FETCH_MARRIAGE", getMarriageSaga);

  }

export default dropdownSaga;