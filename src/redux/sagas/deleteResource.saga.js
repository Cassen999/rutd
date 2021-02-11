import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteResource(action) {

    console.log('action.payload', action.payload)
    try {
        yield axios.delete(`/api/deleteResource/${action.payload}`)
        console.log('delete saga id', action.payload)
        console.log('action.payload from delete resource saga', action.payload)
        yield put({type: 'FETCH_RESOURCE'})
    }catch(error){
        console.log('error in delete resource saga', error); 
    }
}

function* deleteResourceSaga() {
    yield takeLatest('DELETE_RESOURCE', deleteResource);
}

export default deleteResourceSaga;