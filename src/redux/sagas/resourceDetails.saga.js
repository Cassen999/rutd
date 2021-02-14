import axios from 'axios';
import {
    put,
    takeLatest
} from 'redux-saga/effects';

function* getOneResource(action) {
    try {
        // sending id of dream selected
        console.log('You\'ve chosen a resource with ID #:', action.payload);
        const response = yield axios.get(`/api/resource/${action.payload}`); 
        yield put({
            type: 'SET_ONE_RESOURCE',
            payload: response.data
        })
    } catch (error) {
        console.log('GET ROUTE error from DB when attempting to get one ORG ID', error);
    }
}

function* vetGetResource(action) {
    try {
        // sending id of dream selected
        console.log('You\'ve chosen a resource with ID #:', action.payload);
        const response = yield axios.get(`/api/resource/${action.payload}`); 
        yield put({
            type: 'SET_VET_RESOURCE',
            payload: response.data
        })
    } catch (error) {
        console.log('GET ROUTE error from DB when attempting to get one ORG ID', error);
    }
}

function* resourceDetails() {
    yield takeLatest('GET_ONE_RESOURCE', getOneResource);
    yield takeLatest('VET_GET_RESOURCE', vetGetResource);
}

export default resourceDetails;