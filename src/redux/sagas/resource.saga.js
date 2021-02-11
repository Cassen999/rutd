import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// gets all account types for users
function* fetchResource() {
    console.log('Fetch orgs from DB');
    try{
        const response = yield axios.get('/api/resource')
        yield put({type: 'SET_RESOURCE', payload: response.data});
        console.log('response.data from db get resource:', response.data);
    } catch(error){
        console.log('error with resource fetch request', error);
    }        
}

function* resource() {
    yield takeLatest('FETCH_RESOURCE', fetchResource);
}

export default resource;