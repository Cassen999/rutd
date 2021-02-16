import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// gets all account types for users
function* fetchVet() {
    console.log('Fetch vets from DB');
    try{
        const response = yield axios.get('/api/vet')
        yield put({type: 'SET_VET', payload: response.data});
        console.log('response.data from db get vet:', response.data);
    } catch(error){
        console.log('error with vet fetch request', error);
    }        
}

function* fetchVetInfo(action) {
    console.log('In fetchVetInfo saga');
    try{
        const response = yield axios.get(`/api/vet/${action.payload}`);
        yield put({type: 'SET_VET', payload: response.data});
        console.log('response.data from vet GET request:', response.data);
    } catch(error) {
        console.log('error with vet GET request', error);
    }
}

function* fetchVetId(action) {
    try{
        const vetId = action.payload
        console.log('fetch vet id vetId', vetId)
        const response = yield axios.get(`/api/vet/vetid/${vetId}`)
        yield put({type: 'SET_VET', payload: response.data});
    } catch(error){
        console.log('error with vet fetch request', error);
    }        
}

function* postNewVet(action) {
    try{
        yield axios.post(`/api/vet/newVet/${action.payload}`)
    } catch(error){
        console.log('error with postNewVet request', error);
    }        
}

function* fetchExist(action) {
    console.log('fetchExist action.payload', action.payload)
    try{
        // const userId = action.payload
        const response = yield axios.get(`/api/vet/exist/${action.payload}`)
        yield put({type: 'SET_VET_EXIST', payload: response.data});
        console.log('fetchExist', response.data)
    } catch(error){
        console.log('error with set vet exist request', error);
    }        
}

function* vet() {
    yield takeLatest('FETCH_VET', fetchVet);
    yield takeLatest('FETCH_VET_ID', fetchVetId);
    yield takeLatest('POST_NEW_VET', postNewVet);
    yield takeLatest('FETCH_VET_EXIST', fetchExist);
    yield takeLatest('FETCH_VET_INFO', fetchVetInfo);
}


export default vet;