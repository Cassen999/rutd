import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// gets all account types for users
function* fetchSearchVet(action) {
    // const preSearchText = action.payload
    // const searchText = Object.values(preSearchText)
    // console.log('presearchText', preSearchText)
    console.log('Fetch vetSearch from DB action.payload', action.payload);
    try{
        const response = yield axios.get(`/api/vetSearch?searchText=${action.payload}`)
        yield put({type: 'SET_VET_SEARCH', payload: response.data});
        console.log('response.data from db get vetSearch:', response.data);
    } catch(error){
        console.log('error with vetSearch fetch request', error);
    } 
}

function* vetSearch() {
    yield takeLatest('FETCH_SEARCH_VET', fetchSearchVet);
}

export default vetSearch;