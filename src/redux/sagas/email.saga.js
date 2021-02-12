import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postEmail(action) {
    console.log('In postEmail action.payload', action.payload);
    try{
        const response = yield axios.post(`/api/email`, action.payload);
        // yield put({type: 'SET_EMAIL', payload: response.data});
        console.log('response.data from POST email:', response.data);
    } catch(error){
        console.log('error with POST email', error);
    }        
}


function* updateEmailSaga(action) {
    console.log("In updateEmailSaga...");
    console.log("payload:", action.payload);
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      };
      const response = yield axios.put("api/question/email", action.payload, config);
    } catch (error) {
      console.log('Error in updateEmailSaga', error);
    }
  }


function* emailSaga() {
    yield takeLatest('POST_EMAIL', postEmail);
    yield takeLatest('UPDATE_EMAIL', updateEmailSaga);

}

export default emailSaga;