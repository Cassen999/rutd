import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addNameSaga(action) {
    console.log('In addNameSaga.')
    console.log('payload:', action.payload)
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
  
      const response = yield axios.post('api/question/name', action.payload, config);
  
    //   yield put({ type: ''});
    } catch (error) {
      console.log('Error in addNameSaga', error);
    }
  }
  

function* nameSaga() {
    yield takeLatest('ADD_NAME', addNameSaga);
}

export default nameSaga;