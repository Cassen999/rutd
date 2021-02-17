import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// GETs all vets by name and their matches
function* fetchVet() {
    try{
        const response = yield axios.get('/api/vet')
        yield put({type: 'SET_VET', payload: response.data});
    } catch(error){
        console.log('error with vet fetch request', error);
    }        
}

// GET one specific veteran's info by ID
function* fetchVetInfo(action) {
    try{
        const response = yield axios.get(`/api/vet/${action.payload}`);
        yield put({type: 'SET_VET', payload: response.data});
    } catch(error) {
        console.log('error with vet GET request', error);
    }
}

// GET a vet's id from vet table
function* fetchVetId(action) {
    try{
        const vetId = action.payload
        const response = yield axios.get(`/api/vet/vetid/${vetId}`)
        yield put({type: 'SET_VET', payload: response.data});
    } catch(error){
        console.log('error with vet fetch request', error);
    }        
}

// POST new vet into vet table 
// Only vet_id so that they can use PUT route to update profile info
function* postNewVet(action) {
    try{
        yield axios.post(`/api/vet/newVet/${action.payload}`)
    } catch(error){
        console.log('error with postNewVet request', error);
    }        
}

// GET to see if a vet exists on the vet table
function* fetchExist(action) {
    try{
        const response = yield axios.get(`/api/vet/exist/${action.payload}`)
        yield put({type: 'SET_VET_EXIST', payload: response.data});
    } catch(error){
        console.log('error with set vet exist request', error);
    }        
}

// GET for vet search bar
function* fetchSearchVet(action) {
    try{
        const response = yield axios.get(`/api/vet/vetSearch?searchText=${action.payload}`)
        yield put({type: 'SET_VET_SEARCH', payload: response.data});
    } catch(error){
        console.log('error with vetSearch fetch request', error);
    } 
}

function* vet() {
    yield takeLatest('FETCH_VET', fetchVet);
    yield takeLatest('FETCH_VET_ID', fetchVetId);
    yield takeLatest('POST_NEW_VET', postNewVet);
    yield takeLatest('FETCH_VET_EXIST', fetchExist);
    yield takeLatest('FETCH_VET_INFO', fetchVetInfo);
    yield takeLatest('FETCH_SEARCH_VET', fetchSearchVet);
}


export default vet;