import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateHomeAddressSaga(action) {
  console.log("In updateHomeAddressSaga...");
  console.log("payload:", action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.put("api/question/homeaddress", action.payload, config);
  } catch (error) {
    console.log('Error in updateHomeAddressSaga', error);
  }
}
  

function* homeAddressSaga() {
    yield takeLatest('UPDATE_HOME_ADDRESS', updateHomeAddressSaga);
}

export default homeAddressSaga;