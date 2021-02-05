import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// gets all account types for users
function* fetchSearchVet() {
    const searchText = action.payload.searchText
    console.log('Fetch vets from DB');
    try{
        const response = yield axios.get(`/api/vetSearch?searchText=${searchText}`)
        yield put({type: 'SET_VET', payload: response.data});
        console.log('response.data from db get vetSearch:', response.data);
    } catch(error){
        console.log('error with vetSearch fetch request', error);
    }        
}

function* vetSearch() {
    yield takeLatest('FETCH_SEARCH_VET', fetchSearchVet);
}

export default vetSearch;