import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* demographicSaga() {
  yield takeLatest('ADD_DEMOGRAPHIC', addDemographicSaga);
}

function* addDemographicSaga(action) {
  console.log('In addDemographicSaga...')
  console.log('payload:', action.payload)
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.post('api/demographic', action.payload, config);

  } catch (error) {
    console.log('Art get request failed', error);
  }
}

export default demographicSaga;