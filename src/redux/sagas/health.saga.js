import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
//import { createStore, combineReducers, applyMiddleware } from 'redux';
//import registerServiceWorker from './registerServiceWorker';


// worker Saga: will be fired on "FETCH_SECRETS" actions

function* healthSaga() {
  yield takeLatest('FETCH_HEALTH', fetchHealthSaga);

  yield takeLatest('UPDATE_HEALTH', updateHealthSaga);
//   yield takeLatest('ADD_ART', addArtSaga);
//   yield takeLatest('UPDATE_ART', updateArtSaga);
//   yield takeLatest('DELETE_ART', deleteArtSaga);
//   yield takeLatest('FETCH_DETAILS', fetchDetailsSaga);


}

function* updateHealthSaga(action) {
  console.log('In updateHealthSaga...')
  console.log('payload:', action.payload)
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.put('api/health', action.payload, config);

    yield put({ type: 'FETCH_ART'});
  } catch (error) {
    console.log('Art get request failed', error);
  }
}

// function* addArtSaga(action) {
//   console.log('In addArtSaga...')
//   console.log('payload:', action.payload)
//   try {
//     const config = {
//       headers: { 'Content-Type': 'application/json' },
//       withCredentials: true,
//     };

//     const response = yield axios.post('api/art', action.payload, config);

//     yield put({ type: 'FETCH_ART'});
//   } catch (error) {
//     console.log('Art get request failed', error);
//   }
// }

// function* updateArtSaga(action) {
//   console.log('In updateArtSaga...')
//   console.log('payload:', action.payload)
//   try {
//     const config = {
//       headers: { 'Content-Type': 'application/json' },
//       withCredentials: true,
//     };

//     const response = yield axios.put('api/art', action.payload, config);

//     yield put({ type: 'FETCH_ART'});
//   } catch (error) {
//     console.log('Art get request failed', error);
//   }
// }

// function* deleteArtSaga(action) {
//   console.log('In deleteArtSaga...')
//   console.log('payload:', action.payload)
//   try {
//     const config = {
//       headers: { 'Content-Type': 'application/json' },
//       withCredentials: true,
//     };

//     const response = yield axios.delete(`api/art/${action.payload}`, config);

//     yield put({ type: 'FETCH_ART'});
//   } catch (error) {
//     console.log('Art get request failed', error);
//   }
// }

function* fetchHealthSaga(action) {
  console.log('In fetchHealthSaga...')
  // console.log('payload:', action.payload)

  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get(`/api/health`, config);

    yield put({ type: 'SET_HEALTH', payload: response.data });
  } catch (error) {
    console.log('GET health request failed', error);
  }
}


export default healthSaga;
