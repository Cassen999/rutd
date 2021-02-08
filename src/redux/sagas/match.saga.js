import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
//import { createStore, combineReducers, applyMiddleware } from 'redux';
//import registerServiceWorker from './registerServiceWorker';


// worker Saga: will be fired on "FETCH_SECRETS" actions

function* matchSaga() {
  yield takeLatest('FETCH_MATCH', fetchmatchSaga);
//   yield takeLatest('ADD_ART', addArtSaga);
//   yield takeLatest('UPDATE_ART', updateArtSaga);
//   yield takeLatest('DELETE_ART', deleteArtSaga);
//   yield takeLatest('FETCH_DETAILS', fetchDetailsSaga);


}

function* fetchmatchSaga() {
  console.log('In fetchmatchSaga...')
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('match', config);

    yield put({ type: 'SET_MATCH', payload: response.data });
  } catch (error) {
    console.log('Art get request failed', error);
  }
}


export default matchSaga;
