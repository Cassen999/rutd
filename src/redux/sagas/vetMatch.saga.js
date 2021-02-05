import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getCompleteMatch(action) {
    console.log('Fetch veteran matches is working');
    try{
        const response = yield axios.get(`/api/match/complete/${action.payload}`);
        yield put({type: 'SET_VET_MATCHES', payload: response.data});
        console.log('response.data from db get complete vet matches:', response.data);
    } catch(error){
        console.log('error with completed vet matches fetch request', error);
    }        
}

function* vetMatchSaga() {
    yield takeLatest('FETCH_COMPLETE_MATCH', getCompleteMatch);
}

export default vetMatchSaga;