import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// gets all account types for users
function* fetchSearchResource(action) {
    console.log('Fetch resourceSearch from DB action.payload', action.payload);
    try{
        const response = yield axios.get(`/api/resourceSearch?searchText=${action.payload}`)
        yield put({type: 'SET_RESOURCE_SEARCH', payload: response.data});
        console.log('response.data from db get resourceSearch:', response.data);
    } catch(error){
        console.log('error with resourceSearch fetch request', error);
    } 
}

function* resourceSearch() {
    yield takeLatest('FETCH_SEARCH_RESOURCE', fetchSearchResource);
}

export default resourceSearch;